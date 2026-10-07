<?php
/**
 * Plugin Name: Xpo Blocks
 * Description: Build beautiful WordPress websites with Pricing Table, Slider, Testimonial, Review, Team, Gallery, FAQ, Accordion, Tabs, Cards, and 11+ Gutenberg Blocks.
 * Version: 1.0.0
 * Author: Tomor Roy
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: xpo-blocks
 */


// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Plugin Constants
define( 'XPO_BLOCKS_VERSION', '1.0.0' );
define( 'XPO_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'XPO_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'XPO_BLOCKS_BASENAME', plugin_basename( __FILE__ ) );
define( 'XPO_BLOCKS_FILE', __FILE__ );

// Include Loader Class
require_once XPO_BLOCKS_DIR_PATH . 'includes/class-xpo-blocks-loader.php';

if ( !class_exists( 'Xpo_Blocks_Plugin' ) ) {
	class Xpo_Blocks_Plugin {
		function __construct() {
			add_action( 'init', [ $this, 'onInit' ] ); // Register blocks.
			Xpo_Blocks_Loader::init(); // Load and initialize core and admin components via Loader.
		}

		/**
		 * Register Dynamic Blocks on init hook.
		 *
		 * Scans all sub-directories in build/blocks using glob() and registers blocks automatically.
		 */
		function onInit() {
			// Scan all block folder paths inside build/blocks/ directory (using GLOB_ONLYDIR to include only directories).
			$blocks = glob( __DIR__ . '/build/blocks/*', GLOB_ONLYDIR );
			if ( $blocks ) {
				foreach ( $blocks as $block ) {
					// Read block.json of each block folder and dynamically register the block.
					register_block_type( $block );
				}
			}
		}
	}
	new Xpo_Blocks_Plugin();
}

/**
 * Register activation hook to set redirect transient.
 */
register_activation_hook( __FILE__, [ 'Xpo_Blocks_Admin', 'activate' ] );



