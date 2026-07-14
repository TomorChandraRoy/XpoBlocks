<?php
namespace GutenBuilder\Includes;

if ( !defined( 'ABSPATH' ) ) { exit; }

class Admin {
	public static function init() {
		add_action( 'admin_menu', [ __CLASS__, 'register_admin_menu' ] );
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'enqueue_admin_assets' ] );
	}

	public static function register_admin_menu() {
		add_menu_page(
			__( 'Guten Builder', 'guten-builder-blocks' ),
			__( 'Guten Builder', 'guten-builder-blocks' ),
			'manage_options',
			'guten-builder',
			[ __CLASS__, 'render_admin_page' ],
			'dashicons-block-default',
			30
		);
	}

	public static function render_admin_page() {
		echo '<div id="guten-builder-admin-root"></div>';
	}

	public static function enqueue_admin_assets( $hook ) {
		if ( 'toplevel_page_guten-builder' !== $hook ) {
			return;
		}

		$asset_file = GUTEN_BUILDER_DIR_PATH . 'build/admin.asset.php';
		if ( file_exists( $asset_file ) ) {
			$assets = include $asset_file;
			wp_enqueue_script(
				'guten-builder-admin-js',
				GUTEN_BUILDER_DIR_URL . 'build/admin.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			if ( file_exists( GUTEN_BUILDER_DIR_PATH . 'build/style-admin.css' ) ) {
				wp_enqueue_style(
					'guten-builder-admin-css',
					GUTEN_BUILDER_DIR_URL . 'build/style-admin.css',
					[ 'wp-components' ],
					$assets['version']
				);
			}
		}
	}
}
