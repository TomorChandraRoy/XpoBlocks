<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Xpo_Block_API' ) ) {
	class Xpo_Block_API {

		/**
		 * 1. Initialize REST API
		 *
		 * Registers custom routes on `rest_api_init` hook.
		 */
		public static function init() {
			add_action( 'rest_api_init', [ __CLASS__, 'register_rest_routes' ] );
		}

		/**
		 * 2. Register Custom REST API Routes
		 *
		 * Registers `/xpo-block/v1/settings` and `/xpo-block/v1/subscribe` endpoints.
		 */
		public static function register_rest_routes() {
			register_rest_route( 'xpo-block/v1', '/settings', [
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ __CLASS__, 'save_rest_settings' ],
					'permission_callback' => [ __CLASS__, 'check_rest_permissions' ]
				]
			]);

			register_rest_route( 'xpo-block/v1', '/subscribe', [
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ __CLASS__, 'subscribe_newsletter' ],
					'permission_callback' => '__return_true',
				]
			]);
		}

		/**
		 * 3. Check REST API Permissions
		 *
		 * Ensures only users with `manage_options` capability can read and modify admin settings.
		 */
		public static function check_rest_permissions() {
			return current_user_can( 'manage_options' );
		}

		/**
		 * 4. Save REST API Settings
		 *
		 * Handles saving plugin settings from the admin dashboard:
		 * - Sanitizes active block states and general options.
		 * - Persists updated settings to the database via `update_option()`.
		 * - Returns updated settings, available blocks, and system diagnostic info.
		 *
		 * @param \WP_REST_Request $request Full details about the request.
		 * @return \WP_REST_Response
		 */
		public static function save_rest_settings( \WP_REST_Request $request ) {
			global $wp_version;
			$user = wp_get_current_user();
			$params = $request->get_json_params();
			$settings = is_array( $params ) ? $params : [];

			if ( isset( $settings['availableBlocks'] ) ) {
				unset( $settings['availableBlocks'] );
			}
			if ( isset( $settings['systemInfo'] ) ) {
				unset( $settings['systemInfo'] );
			}
			if ( isset( $settings['currentUser'] ) ) {
				unset( $settings['currentUser'] );
			}

			$sanitized_settings = [];
			if ( isset( $settings['activeBlocks'] ) && is_array( $settings['activeBlocks'] ) ) {
				$sanitized_active = [];
				foreach ( $settings['activeBlocks'] as $block_id => $is_active ) {
					$clean_id = sanitize_text_field( $block_id );
					if ( 'false' === $is_active || '0' === $is_active || false === $is_active || 0 === $is_active || '' === $is_active ) {
						$sanitized_active[ $clean_id ] = false;
					} else {
						$sanitized_active[ $clean_id ] = true;
					}
				}
				$sanitized_settings['activeBlocks'] = $sanitized_active;
			} else {
				$sanitized_settings = map_deep( $settings, 'sanitize_text_field' );
			}

			update_option( 'xpo_block_settings', $sanitized_settings );

			$response_data = Xpo_Block_Core::get_settings();

			$response_data['availableBlocks'] = Xpo_Block_Core::get_available_blocks();

			$response_data['currentUser'] = [
				'name' => $user->display_name ? $user->display_name : $user->user_login,
			];
			$response_data['systemInfo'] = [
				'pluginVersion'    => defined( 'XPO_BLOCK_VERSION' ) ? XPO_BLOCK_VERSION : '1.0.0',
				'wpVersion'        => isset( $wp_version ) ? $wp_version : get_bloginfo( 'version' ),
				'phpVersion'       => phpversion(),
				'serverSoftware'   => isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( wp_unslash( $_SERVER['SERVER_SOFTWARE'] ) ) : 'Web Server',
				'maxUploadSize'    => size_format( wp_max_upload_size() ),
				'memoryLimit'      => defined( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : '256M',
			];

			return rest_ensure_response([
				'success' => true,
				'settings' => $response_data
			]);
		}

		/**
		 * 5. Subscribe Newsletter
		 *
		 * Validates and saves visitor email address and sends an admin notification.
		 *
		 * @param \WP_REST_Request $request Full details about the request.
		 * @return \WP_REST_Response|\WP_Error
		 */
		public static function subscribe_newsletter( \WP_REST_Request $request ) {
			$params = $request->get_json_params();
			$email  = isset( $params['email'] ) ? sanitize_email( $params['email'] ) : '';

			if ( empty( $email ) || ! is_email( $email ) ) {
				return new \WP_Error(
					'invalid_email',
					__( 'Please provide a valid email address.', 'xpo-block' ),
					[ 'status' => 400 ]
				);
			}

			$subscribers = get_option( 'xpo_block_newsletter_subscribers', [] );
			if ( ! is_array( $subscribers ) ) {
				$subscribers = [];
			}

			$already_exists = false;
			foreach ( $subscribers as $sub ) {
				if ( is_array( $sub ) && isset( $sub['email'] ) && strtolower( $sub['email'] ) === strtolower( $email ) ) {
					$already_exists = true;
					break;
				}
			}

			if ( $already_exists ) {
				return rest_ensure_response([
					'success' => false,
					'message' => __( 'You are already subscribed to our newsletter!', 'xpo-block' ),
				]);
			}

			$subscribers[] = [
				'email' => $email,
				'date'  => current_time( 'mysql' ),
			];
			update_option( 'xpo_block_newsletter_subscribers', $subscribers );

			$admin_email = get_option( 'admin_email' );
			if ( ! empty( $admin_email ) ) {
				$subject    = __( 'New Newsletter Subscriber', 'xpo-block' );
				/* translators: %s: Subscriber email address. */
				$message    = sprintf( __( 'New subscriber added: %s', 'xpo-block' ), $email );
				$from_email = is_email( $admin_email ) ? $admin_email : 'admin@example.com';
				$site_name  = get_bloginfo( 'name' );
				$headers    = [
					'Content-Type: text/plain; charset=UTF-8',
					'From: ' . $site_name . ' <' . $from_email . '>',
				];
				wp_mail( $admin_email, $subject, $message, $headers );
			}

			return rest_ensure_response([
				'success' => true,
				'message' => __( 'Thank you for subscribing!', 'xpo-block' ),
			]);
		}
	}
}
