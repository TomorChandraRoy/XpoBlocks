<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

/**
 * Guten Builder Loader Class
 * Responsible for loading all core dependencies, admin classes, and initializing hooks.
 */
if ( !class_exists( 'Guten_Builder_Loader' ) ) {
	class Guten_Builder_Loader {

		/**
		 * PHP OOP (Object-Oriented Programming)-এ static কিওয়ার্ডটি ব্যবহার করার প্রধান কারণ হলো— মেথডটি ব্যবহার করার জন্য ক্লাসের কোনো Instance বা Object (new Helper()) তৈরি করতে হয় না।
		 * :: (Scope Resolution Operator): সরাসরি ক্লাসের নাম ধরে মেথডটিকে কল করা যায়! static না লিখলে আগে new দিয়ে অবজেক্ট তৈরি করতে হতো:$helper = new Helper(); // অবজেক্ট তৈরি করা হলো $helper->init(); // তারপর মেথড কল করা হলো
		 */
		public static function init() {
			require_once GUTEN_BUILDER_DIR_PATH . 'includes/class-guten-builder-core.php';
			require_once GUTEN_BUILDER_DIR_PATH . 'includes/class-guten-builder-admin.php';

			if ( class_exists( 'Guten_Builder_Core' ) ) {
				// static লেখার কারণে সরাসরি ক্লাসের নাম দিয়ে সংক্ষেপে কল করা যায়: Core::init()
				// static না থাকলে হতো: $core = new Core();
				Guten_Builder_Core::init();
			}

			// শুধুমাত্র Admin Panel-এ থাকলে Admin ফিচার চালু করা (Performance Friendly)
			if ( is_admin() && class_exists( 'Guten_Builder_Admin' ) ) {
				Guten_Builder_Admin::init();
			}
		}

	}
}
