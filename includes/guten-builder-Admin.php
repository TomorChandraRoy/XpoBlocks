<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Guten_Builder_Admin' ) ) {
	class Guten_Builder_Admin {
    /**
		 * ১. ইনিশিয়ালাইজার মেথড (Initialize Hooks)
		 * ওয়ার্ডপ্রেস এডমিন মেনু এবং সিএসএস/জেএস ফাইল লোডের অ্যাকশন হুকগুলো রেজিস্টার করে।
		 * PHP-তে __CLASS__ হলো একটি Magic Constant (ম্যাজিক কনস্ট্যান্ট)।
     * এটি যে ক্লাসের (Class) ভেতরে লেখা হয়, সেই ক্লাসের নামটি নির্দেশ করে।
     * ফাইলে ক্লাসটি হচ্ছে Guten_Builder_Admin।এর মানে হলো:add_action( 'admin_menu', [ 'Guten_Builder_Admin', 'register_admin_menu' ] );

		 */
		public static function init() {
			add_action( 'admin_menu', [ __CLASS__, 'register_admin_menu' ] );
			add_action( 'admin_enqueue_scripts', [ __CLASS__, 'enqueue_admin_assets' ] );
		}

    public static function register_admin_menu() {

      $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#a7aaad"><path d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v2A1.5 1.5 0 0 1 16.5 8h-13A1.5 1.5 0 0 1 2 6.5v-2zm0 6A1.5 1.5 0 0 1 3.5 9h5.5A1.5 1.5 0 0 1 10.5 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-5.5A1.5 1.5 0 0 1 2 15.5v-5zm10 0A1.5 1.5 0 0 1 13.5 9h3A1.5 1.5 0 0 1 18 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-5z"/></svg>';

      add_menu_page(
        __( 'Guten Builder', 'guten-builder-blocks' ), // পেজের টাইটেল (Page Title)
        __( 'Guten Builder', 'guten-builder-blocks' ), // সাইডবার মেনুর নাম (Menu Title)
        'manage_options',                            // ইউজার পারমিশন/ক্যাপাবিলিটি (Capability)
        'guten-builder',                             // মেনু পেজ স্ল্যাগ (Menu Slug)
        [ __CLASS__, 'render_admin_page' ],          // কলব্যাক ফাংশন (Callback function to render page HTML)
        'data:image/svg+xml;base64,' . base64_encode( $svg ), // ওয়ার্ডপ্রেস স্ট্যান্ডার্ড Dashicon আইকন
        30                                           // মেনুর পজিশন (Menu Position)
      );
    }

    /**
     * ৩. এডমিন পেজ মার্কআপ (Render Admin Page Markup)
     * React Admin Dashboard অ্যাপ রেন্ডার করার জন্য মূল HTML কন্টেইনার (<div id="guten-builder-admin-root">) তৈরি করে।
     */
    public static function render_admin_page() {
      ?>
      <div id="guten-builder-admin-root"
				data-info='<?php echo esc_attr( wp_json_encode( [
					'version' => GUTEN_BUILDER_VERSION,
					'adminUrl' => admin_url(),
					'isPro' => true,
					'wpVersion'       => get_bloginfo( 'version' ),
    			'phpVersion'      => phpversion(),
					'activeBlocks'        => Guten_Builder_Core::get_settings(),
					'availableBlocks' => Guten_Builder_Core::get_available_blocks(),
				] ) ); ?>'
			>
		</div>
      <?php
		}

    //  ১. যেকোনো মূল টপ-লেভেল মেনুর জন্য ওয়ার্ডপ্রেস প্রিফিক্স হিসেবে দেয়: toplevel_page_ ২. তার সাথে যুক্ত করে আপনার দেওয়া admin_menu-page array-এর menu_slug (guten-builder): guten-builder
		public static function enqueue_admin_assets( $hook ) {
			// শুধুমাত্র Guten Builder এবং Subscribers পেজে ফাইল লোড করা (Guard Clause)
			if ( 'toplevel_page_guten-builder' !== $hook && 'guten-builder_page_guten-builder-subscribers' !== $hook ) {
				return;
			}

			$asset_file = GUTEN_BUILDER_DIR_PATH . 'build/admin.asset.php';

			if ( file_exists( $asset_file ) ) {
				$assets = include $asset_file;

				// Admin Dashboard Enqueue CSS
				if ( file_exists( GUTEN_BUILDER_DIR_PATH . 'build/admin.css' ) ) {
					wp_enqueue_style(
						'guten-builder-admin-css',
						GUTEN_BUILDER_DIR_URL . 'build/admin.css',
						[ 'wp-components' ],
						$assets['version']
					);
				} elseif ( file_exists( GUTEN_BUILDER_DIR_PATH . 'build/style-admin.css' ) ) {
					wp_enqueue_style(
						'guten-builder-admin-css',
						GUTEN_BUILDER_DIR_URL . 'build/style-admin.css',
						[ 'wp-components' ],
						$assets['version']
					);
				}

				// Admin Dashboard Enqueue Script
				wp_enqueue_script(
					'guten-builder-admin-js',
					GUTEN_BUILDER_DIR_URL . 'build/admin.js',
					$assets['dependencies'],
					$assets['version'],
					true
				);
			}
		}
  }
}

