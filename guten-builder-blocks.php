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

namespace GutenBuilder;

use GutenBuilder\Includes\Core;
use GutenBuilder\Includes\Admin;
use GutenBuilder\Includes\API;

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Plugin Constants
define( 'GUTEN_BUILDER_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'GUTEN_BUILDER_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'GUTEN_BUILDER_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'GUTEN_BUILDER_BASENAME', plugin_basename( __FILE__ ) );
define( 'GUTEN_BUILDER_FILE', __FILE__ );

// Include Core Classes
require_once GUTEN_BUILDER_DIR_PATH . 'includes/class-guten-builder-core.php';
require_once GUTEN_BUILDER_DIR_PATH . 'includes/class-guten-builder-admin.php';
require_once GUTEN_BUILDER_DIR_PATH . 'includes/class-guten-builder-api.php';

if ( !class_exists( __NAMESPACE__ . '\Plugin' ) ) {
	class Plugin {
		function __construct() {
			// Initialize sub-components
			Core::init();
			Admin::init();
			API::init();

			// Register blocks
			add_action( 'init', [ $this, 'register_blocks' ] );
		}

		function register_blocks() {
			$settings = Core::get_settings();
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
	}
	new Plugin();
}
