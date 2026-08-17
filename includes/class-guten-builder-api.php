<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Guten_Builder_API' ) ) {
	class Guten_Builder_API {
	public static function init() {
		add_action( 'rest_api_init', [ __CLASS__, 'register_rest_routes' ] );
	}

	public static function register_rest_routes() {
		register_rest_route( 'guten-builder/v1', '/settings', [
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ __CLASS__, 'get_rest_settings' ],
				'permission_callback' => [ __CLASS__, 'check_rest_permissions' ]
			],
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ __CLASS__, 'save_rest_settings' ],
				'permission_callback' => [ __CLASS__, 'check_rest_permissions' ]
			]
		]);
	}

	public static function check_rest_permissions() {
		return current_user_can( 'manage_options' );
	}

	public static function get_rest_settings() {
		global $wp_version;
		$user = wp_get_current_user();
		$settings = Guten_Builder_Core::get_settings();
		$settings['availableBlocks'] = Guten_Builder_Core::get_available_blocks();
		$settings['currentUser'] = [
			'name' => $user->display_name ? $user->display_name : $user->user_login,
		];
		$settings['pluginDetails'] = [
			'name'        => 'Guten Builder Blocks',
			'subtitle'    => 'ANIMATED BLOCKS FOR WORDPRESS',
			'description' => 'Build beautiful, high-performance WordPress websites with interactive Gutenberg blocks, customizable motion profiles, and real-time block controls.',
		];
		$settings['systemInfo'] = [
			'pluginVersion'    => '1.0.0',
			'wpVersion'        => isset( $wp_version ) ? $wp_version : get_bloginfo( 'version' ),
			'phpVersion'       => phpversion(),
			'serverSoftware'   => isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( $_SERVER['SERVER_SOFTWARE'] ) : 'Web Server',
			'maxUploadSize'    => size_format( wp_max_upload_size() ),
			'memoryLimit'      => defined( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : '256M',
		];
		return rest_ensure_response( $settings );
	}

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
		if ( isset( $settings['pluginDetails'] ) ) {
			unset( $settings['pluginDetails'] );
		}
		
		update_option( 'guten_builder_settings', $settings );
		
		$response_data = Guten_Builder_Core::get_settings();
		$response_data['availableBlocks'] = Guten_Builder_Core::get_available_blocks();
		$response_data['currentUser'] = [
			'name' => $user->display_name ? $user->display_name : $user->user_login,
		];
		$response_data['pluginDetails'] = [
			'name'        => 'Guten Builder Blocks',
			'subtitle'    => 'ANIMATED BLOCKS FOR WORDPRESS',
			'description' => 'Build beautiful, high-performance WordPress websites with interactive Gutenberg blocks, customizable motion profiles, and real-time block controls.',
		];
		$response_data['systemInfo'] = [
			'pluginVersion'    => '1.0.0',
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
}

