<?php
namespace GutenBuilder\Includes;

if ( !defined( 'ABSPATH' ) ) { exit; }

class API {
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
		$settings = Core::get_settings();
		$settings['availableBlocks'] = Core::get_available_blocks();
		return rest_ensure_response( $settings );
	}

	public static function save_rest_settings( \WP_REST_Request $request ) {
		$params = $request->get_json_params();
		$settings = is_array( $params ) ? $params : [];
		
		if ( isset( $settings['availableBlocks'] ) ) {
			unset( $settings['availableBlocks'] );
		}
		
		update_option( 'guten_builder_settings', $settings );
		
		$response_data = Core::get_settings();
		$response_data['availableBlocks'] = Core::get_available_blocks();
		
		return rest_ensure_response([
			'success' => true,
			'settings' => $response_data
		]);
	}
}
