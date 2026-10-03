<?php
/**
 * Plugin Name: XpoBlock
 * Description: Build beautiful WordPress websites with Pricing Table, Slider, Testimonial, Review, Team, Gallery, FAQ, Accordion, Tabs, Cards, and 30+ Gutenberg Blocks.
 * Version: 1.0.0
 * Author: Tomor Roy
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: xpo-block
 */


// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Plugin Constants
define( 'XPO_BLOCK_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'XPO_BLOCK_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'XPO_BLOCK_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'XPO_BLOCK_BASENAME', plugin_basename( __FILE__ ) );
define( 'XPO_BLOCK_FILE', __FILE__ );

// Include Loader Class
require_once XPO_BLOCK_DIR_PATH . 'includes/class-xpo-block-loader.php';

if ( !class_exists( 'Xpo_Block_Plugin' ) ) {
	class Xpo_Block_Plugin {
		function __construct() {
			add_action( 'init', [ $this, 'onInit' ] ); // Register blocks
			Xpo_Block_Loader::init(); // Loader এর মাধ্যমে Core ও Admin ফাইল লোড ও Init করা
		}

		/**
		 * অন-ইনিট হুক (Register Dynamic Blocks)
		 * glob() এর মাধ্যমে build/blocks ফোল্ডারের সকল সাব-ডিরেক্টরি স্ক্যান করে অটোমেটিক্যালি ব্লকসমূহ রেজিস্টার করে।
		 */
		function onInit() {
			// build/blocks/ ডিরেক্টরির অন্তর্গত সকল ব্লকের ফোল্ডার পাথ স্ক্যান করা (GLOB_ONLYDIR ব্যবহার করে ফাইল বাদ দিয়ে শুধু ফোল্ডার নেওয়া হয়)
			$blocks = glob( __DIR__ . '/build/blocks/*', GLOB_ONLYDIR );
			if ( $blocks ) {
				foreach ( $blocks as $block ) {
					// প্রতিটি ব্লক ফোল্ডারের block.json রিড করে ডায়নামিকভাবে ব্লক রেজিস্টার করা
					register_block_type( $block );
				}
			}
		}
	}
	new Xpo_Block_Plugin();
}

/**
 * Register activation hook to set redirect transient.
 */
register_activation_hook( __FILE__, [ 'Xpo_Block_Admin', 'activate' ] );



