<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Guten_Builder_API' ) ) {
	class Guten_Builder_API {

		/**
		 * ১. ইনিশিয়ালাইজার মেথড (Initializer Method)
		 * ওয়ার্ডপ্রেস REST API সিস্টেম ইনিশিয়ালাইজ করার জন্য `rest_api_init` হুকে `register_rest_routes` রেজিস্টার করে।
		 */
		public static function init() {
			add_action( 'rest_api_init', [ __CLASS__, 'register_rest_routes' ] );
		}

		/**
		 * ২. কাস্টম REST API রুট রেজিস্টার মেথড (Register Custom REST Routes)
		 * প্লাগইনের প্রয়োজনীয় সকল কাস্টম এন্ডপয়েন্ট (`/guten-builder/v1/settings` এবং `/guten-builder/v1/subscribe`) রেজিস্টার করে।
		 */
		public static function register_rest_routes() {
			register_rest_route( 'guten-builder/v1', '/settings', [
				// [
				// 	'methods'             => \WP_REST_Server::READABLE,
				// 	'callback'            => [ __CLASS__, 'get_rest_settings' ],
				// 	'permission_callback' => [ __CLASS__, 'check_rest_permissions' ]
				// ],
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ __CLASS__, 'save_rest_settings' ],
					'permission_callback' => [ __CLASS__, 'check_rest_permissions' ]
				]
			]);

			register_rest_route( 'guten-builder/v1', '/subscribe', [
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ __CLASS__, 'subscribe_newsletter' ],
					'permission_callback' => '__return_true',
				]
			]);
		}

		/**
		 * ৩. পারমিশন চেক মেথড (Check REST API Permissions)
		 * এডমিন প্যানেলের সেটিংস পড়া ও সেভ করার জন্য শুধুমাত্র `manage_options` পারমিশনপ্রাপ্ত এডমিন ইউজারকে অনুমতি দেয়।
		 */
		public static function check_rest_permissions() {
			return current_user_can( 'manage_options' );
		}

		/**
		 * ৪. সেটিংস গেট করার মেথড (Get Plugin Settings Callback - GET Request)
		 * প্লাগইনের সমস্ত রিয়েল-টাইম সেটিংস, এভেলেবল ব্লক লিস্ট, কারেন্ট ইউজার ডাটা, প্লাগইন ডিটেইলস ও সিস্টেম ইনফো রিড করে React Dashboard-এ ফেরত পাঠায়। //!ata optional ami  class-guten-builder-admin.php file thake data pass kore diyeci
		 */
		// public static function get_rest_settings() {
		// 	global $wp_version;
		// 	$user = wp_get_current_user();
		// 	$settings = Guten_Builder_Core::get_settings();
		// 	$settings['availableBlocks'] = Guten_Builder_Core::get_available_blocks();
		// 	$settings['currentUser'] = [
		// 		'name' => $user->display_name ? $user->display_name : $user->user_login,
		// 	];
		// 	$settings['systemInfo'] = [
		// 		'pluginVersion'    => defined( 'GUTEN_BUILDER_VERSION' ) ? GUTEN_BUILDER_VERSION : '1.0.0',
		// 		'wpVersion'        => isset( $wp_version ) ? $wp_version : get_bloginfo( 'version' ),
		// 		'phpVersion'       => phpversion(),
		// 		'serverSoftware'   => isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( $_SERVER['SERVER_SOFTWARE'] ) : 'Web Server',
		// 		'maxUploadSize'    => size_format( wp_max_upload_size() ),
		// 		'memoryLimit'      => defined( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : '256M',
		// 	];
		// 	return rest_ensure_response( $settings );
		// }

		/**
		 * ৫. সেটিংস সেভ করার মেথড (Save Plugin Settings Callback - POST Request)
		 * React Admin Dashboard থেকে পাঠানো সেটিংস রিসিভ করে, রিড-ওনলি ডাটাগুলো বাদ দেয়, স্যানিটাইজ করে ডাটাবেজে আপডেট করে এবং আপডেটেড রেসপন্স পাঠায়।
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

			update_option( 'guten_builder_settings', $sanitized_settings );

			$response_data = Guten_Builder_Core::get_settings(); //class-guten-builder-core thake call kora hoyche setting get korar jonno

			$response_data['availableBlocks'] = Guten_Builder_Core::get_available_blocks(); //class-guten-builder-core thake call kora hoyche block list get korar jonno

			$response_data['currentUser'] = [
				'name' => $user->display_name ? $user->display_name : $user->user_login,
			];
			$response_data['systemInfo'] = [
				'pluginVersion'    => defined( 'GUTEN_BUILDER_VERSION' ) ? GUTEN_BUILDER_VERSION : '1.0.0',
				'wpVersion'        => isset( $wp_version ) ? $wp_version : get_bloginfo( 'version' ),
				'phpVersion'       => phpversion(),
				'serverSoftware'   => isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( $_SERVER['SERVER_SOFTWARE'] ) : 'Web Server',
				'maxUploadSize'    => size_format( wp_max_upload_size() ),
				'memoryLimit'      => defined( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : '256M',
			];

			return rest_ensure_response([
				'success' => true,
				'settings' => $response_data
			]);
		}

		/**
		 * ৬. নিউজলেটার সাবস্ক্রিপশন মেথড (Subscribe Newsletter Callback - POST Request)
		 * ভিজিটরদের প্রদানকৃত ইমেইল এড্রেস ফিল্টার ও স্যানিটাইজ করে ডাটাবেজে সেভ করে এবং ওয়ার্ডপ্রেস এডমিন ইমেইলে নোটিফিকেশন পাঠায়।
		 */
		// public static function subscribe_newsletter( \WP_REST_Request $request ) {
		// 	$params = $request->get_json_params();
		// 	$email  = isset( $params['email'] ) ? sanitize_email( $params['email'] ) : '';

		// 	if ( empty( $email ) || ! is_email( $email ) ) {
		// 		return new \WP_Error(
		// 			'invalid_email',
		// 			__( 'Please provide a valid email address.', 'guten-builder-blocks' ),
		// 			[ 'status' => 400 ]
		// 		);
		// 	}

		// 	$subscribers = get_option( 'gbb_newsletter_subscribers', [] );
		// 	if ( ! is_array( $subscribers ) ) {
		// 		$subscribers = [];
		// 	}

		// 	$already_exists = false;
		// 	foreach ( $subscribers as $sub ) {
		// 		if ( is_array( $sub ) && isset( $sub['email'] ) && strtolower( $sub['email'] ) === strtolower( $email ) ) {
		// 			$already_exists = true;
		// 			break;
		// 		}
		// 	}

		// 	if ( $already_exists ) {
		// 		return rest_ensure_response([
		// 			'success' => false,
		// 			'message' => __( 'You are already subscribed to our newsletter!', 'guten-builder-blocks' ),
		// 		]);
		// 	}

		// 	$subscribers[] = [
		// 		'email' => $email,
		// 		'date'  => current_time( 'mysql' ),
		// 	];
		// 	update_option( 'gbb_newsletter_subscribers', $subscribers );

		// 	$admin_email = get_option( 'admin_email' );
		// 	if ( ! empty( $admin_email ) ) {
		// 		$subject    = __( 'New Newsletter Subscriber', 'guten-builder-blocks' );
		// 		$message    = sprintf( __( 'New subscriber added: %s', 'guten-builder-blocks' ), $email );
		// 		$from_email = is_email( $admin_email ) ? $admin_email : 'admin@example.com';
		// 		$site_name  = get_bloginfo( 'name' );
		// 		$headers    = [
		// 			'Content-Type: text/plain; charset=UTF-8',
		// 			'From: ' . $site_name . ' <' . $from_email . '>',
		// 		];
		// 		@wp_mail( $admin_email, $subject, $message, $headers );
		// 	}

		// 	return rest_ensure_response([
		// 		'success' => true,
		// 		'message' => __( 'Thank you for subscribing!', 'guten-builder-blocks' ),
		// 	]);
		// }
	}
}

