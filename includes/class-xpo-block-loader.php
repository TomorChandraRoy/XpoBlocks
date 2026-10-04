<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

/**
 * XpoBlock Loader Class
 * Responsible for loading all core dependencies, admin classes, and initializing hooks.
 */
if ( !class_exists( 'Xpo_Block_Loader' ) ) {
	class Xpo_Block_Loader {

		/**
		 * Initializes core, API, and admin components.
		 */
		public static function init() {
			require_once XPO_BLOCK_DIR_PATH . 'includes/class-xpo-block-core.php';
			require_once XPO_BLOCK_DIR_PATH . 'includes/class-xpo-block-admin.php'; 
			require_once XPO_BLOCK_DIR_PATH . 'includes/class-xpo-block-api.php';

			if ( class_exists( 'Xpo_Block_Core' ) ) {
				Xpo_Block_Core::init();
			}

			if ( class_exists( 'Xpo_Block_API' ) ) {
				Xpo_Block_API::init();
			}

			// Initialize admin functionality only in the WordPress admin area.
			if ( is_admin() && class_exists( 'Xpo_Block_Admin' ) ) {
				Xpo_Block_Admin::init();
			}
		}

	}
}
