<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

/**
 * XpoBlocks Loader Class
 * Responsible for loading all core dependencies, admin classes, and initializing hooks.
 */
if ( !class_exists( 'Xpo_Blocks_Loader' ) ) {
	class Xpo_Blocks_Loader {

		/**
		 * Initializes core, API, and admin components.
		 */
		public static function init() {
			require_once XPO_BLOCKS_DIR_PATH . 'includes/class-xpo-blocks-core.php';
			require_once XPO_BLOCKS_DIR_PATH . 'includes/class-xpo-blocks-admin.php';
			require_once XPO_BLOCKS_DIR_PATH . 'includes/class-xpo-blocks-api.php';

			if ( class_exists( 'Xpo_Blocks_Core' ) ) {
				Xpo_Blocks_Core::init();
			}

			if ( class_exists( 'Xpo_Blocks_API' ) ) {
				Xpo_Blocks_API::init();
			}

			// Initialize admin functionality only in the WordPress admin area.
			if ( is_admin() && class_exists( 'Xpo_Blocks_Admin' ) ) {
				Xpo_Blocks_Admin::init();
			}
		}

	}
}
