<?php
/**
 * Plugin Name: Guten Builder Blocks
 * Description: Build beautiful WordPress websites with Pricing Table, Slider, Testimonial, Review, Team, Gallery, FAQ, Accordion, Tabs, Cards, and 30+ Gutenberg Blocks.
 * Version: 1.0.0
 * Author: Tomor Roy
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: guten-builder-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Plugin Constants
define( 'GUTEN_BUILDER_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' ); //
define( 'GUTEN_BUILDER_DIR_URL', plugin_dir_url( __FILE__ ) );   //https://www.tomor.com/wp-content/plugins/plugin-basic-file folder aer name
define( 'GUTEN_BUILDER_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'GUTEN_BUILDER_BASENAME', plugin_basename( __FILE__ ) );
define( 'GUTEN_BUILDER_FILE', __FILE__ );

if( !class_exists( 'Guten_Builder' ) ){
	class Guten_Builder{
		function __construct(){
			add_action( 'init', [ $this, 'load_textdomain' ] );
			add_action( 'init', [ $this, 'register_blocks' ] );
			add_action( 'admin_menu', [ $this, 'register_admin_menu' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_assets' ] );
			add_action( 'rest_api_init', [ $this, 'register_rest_routes' ] );

			// Register custom block category
			add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );

			// Enable SVG uploads
			add_filter( 'upload_mimes', [ $this, 'allow_svg_uploads' ] );
			add_filter( 'wp_check_filetype_and_ext', [ $this, 'check_svg_filetype' ], 10, 4 );
		}

		function allow_svg_uploads( $mimes ) {
			$mimes['svg'] = 'image/svg+xml';
			$mimes['svgz'] = 'image/svg+xml';
			return $mimes;
		}

		function check_svg_filetype( $data, $file, $filename, $mimes ) {
			$filetype = wp_check_filetype( $filename, $mimes );
			$ext = $filetype['ext'];
			$type = $filetype['type'];
			
			if ( 'svg' === $ext || 'svgz' === $ext ) {
				$data['ext'] = $ext;
				$data['type'] = $type;
			}
			return $data;
		}

		function load_textdomain() {
			load_plugin_textdomain( 'guten-builder-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
		}

		function register_block_category( $categories, $post ) {
			return array_merge(
				[
					[
						'slug'  => 'guten-builder',
						'title' => __( 'Guten Builder', 'guten-builder-blocks' ),
					],
				],
				$categories
			);
		}

		function get_settings() {
			$defaults = [
				'activeBlocks' => [
					'button' => true,
					'cards' => true,
				],
				'performanceMode' => 'balanced',
				'globalLerp' => 0.08,
				'glassIntensity' => 20,
				'accentColor' => '#10b981'
			];
			$settings = get_option( 'guten_builder_settings', $defaults );
			return wp_parse_args( $settings, $defaults );
		}

		function register_blocks(){
			$settings = $this->get_settings();
			$active_blocks = isset( $settings['activeBlocks'] ) ? $settings['activeBlocks'] : [];

			$blocks = glob( __DIR__ . '/build/blocks/*', GLOB_ONLYDIR );
			if ( $blocks ) {
				foreach ( $blocks as $block ) {
					$block_name = basename( $block );
					$is_active = !isset( $active_blocks[$block_name] ) || rest_sanitize_boolean( $active_blocks[$block_name] );
					
					if ( $is_active ) {
						register_block_type( $block );
					}
				}
			}
		}

		function register_admin_menu() {
			add_menu_page(
				__( 'Guten Builder', 'guten-builder-blocks' ),
				__( 'Guten Builder', 'guten-builder-blocks' ),
				'manage_options',
				'guten-builder',
				[ $this, 'render_admin_page' ],
				'dashicons-block-default',
				30
			);
		}

		function render_admin_page() {
			echo '<div id="guten-builder-admin-root"></div>';
		}

		function enqueue_admin_assets( $hook ) {
			if ( 'toplevel_page_guten-builder' !== $hook ) {
				return;
			}

			$asset_file = __DIR__ . '/build/admin.asset.php';
			if ( file_exists( $asset_file ) ) {
				$assets = include $asset_file;
				wp_enqueue_script(
					'guten-builder-admin-js',
					GUTEN_BUILDER_DIR_URL . 'build/admin.js',
					$assets['dependencies'],
					$assets['version'],
					true
				);
				if ( file_exists( __DIR__ . '/build/style-admin.css' ) ) {
					wp_enqueue_style(
						'guten-builder-admin-css',
						GUTEN_BUILDER_DIR_URL . 'build/style-admin.css',
						[ 'wp-components' ],
						$assets['version']
					);
				}
			}
		}

		function get_available_blocks() {
			$available_blocks = [];
			$blocks_dirs = glob( GUTEN_BUILDER_DIR_PATH . 'build/blocks/*', GLOB_ONLYDIR );
			if ( $blocks_dirs ) {
				foreach ( $blocks_dirs as $dir ) {
					$block_json_file = $dir . '/block.json';
					if ( file_exists( $block_json_file ) ) {
						$metadata = json_decode( file_get_contents( $block_json_file ), true );
						if ( $metadata ) {
							$slug = basename( $dir );
							$available_blocks[] = [
								'id'          => $slug,
								'title'       => isset( $metadata['title'] ) ? $metadata['title'] : ucwords( str_replace( '-', ' ', $slug ) ),
								'description' => isset( $metadata['description'] ) ? $metadata['description'] : '',
								'badge'       => 'Included',
							];
						}
					}
				}
			}
			return $available_blocks;
		}

		function register_rest_routes() {
			register_rest_route( 'guten-builder/v1', '/settings', [
				[
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [ $this, 'get_rest_settings' ],
					'permission_callback' => [ $this, 'check_rest_permissions' ]
				],
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ $this, 'save_rest_settings' ],
					'permission_callback' => [ $this, 'check_rest_permissions' ]
				]
			]);
		}

		function check_rest_permissions() {
			return current_user_can( 'manage_options' );
		}

		function get_rest_settings() {
			$settings = $this->get_settings();
			$settings['availableBlocks'] = $this->get_available_blocks();
			return rest_ensure_response( $settings );
		}

		function save_rest_settings( \WP_REST_Request $request ) {
			$params = $request->get_json_params();
			$settings = is_array( $params ) ? $params : [];
			
			if ( isset( $settings['availableBlocks'] ) ) {
				unset( $settings['availableBlocks'] );
			}
			
			update_option( 'guten_builder_settings', $settings );
			
			$response_data = $this->get_settings();
			$response_data['availableBlocks'] = $this->get_available_blocks();
			
			return rest_ensure_response([
				'success' => true,
				'settings' => $response_data
			]);
		}
	}
	new Guten_Builder();
}

