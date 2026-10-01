<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Xpo_Block_Core' ) ) {
	/**
	 * ==============================================================================
	 * Xpo_Block_Core (প্লাগইনের মূল কোর লজিক ক্লাস)
	 * ==============================================================================
	 *
	 * এই ফাইলে প্লাগইনের গ্লোবাল কোর এবং ব্যাকএন্ড লজিক থাকবে। প্রধান কাজগুলো নিচে দেওয়া হলো:
	 *
	 * ১. ইনিশিয়ালাইজেশন (init):
	 *    - গ্লোবাল হুক এবং ফিল্টারসমূহ রেজিস্টার করা।
	 *
	 * ২. কাস্টম ব্লক ক্যাটাগরি (register_block_category):
	 *    - গুটেনবার্গ ব্লক এডিটর ইনসার্টারে 'Guten Builder' নামে কাস্টম ক্যাটাগরি তৈরি করে।
	 *
	 * ৩. কাস্টম ফাইল আপলোড সাপোর্ট (SVG Uploads):
	 *    - ওয়ার্ডপ্রেসে নিরাপদ SVG ফাইল আপলোডের পারমিশন এবং মাইম টাইপ চেক করা।
	 *
	 * ৪. বহুভাষিক অনুবাদ (Textdomain Loading):
	 *    - প্লাগইনের ট্রান্সলেশন ফাইল (.mo / .po) লোড করা।
	 *
	 * ৫. গ্লোবাল প্লাগইন সেটিংস ব্যবস্থাপনা (get_settings):
	 *    - ডাটাবেজ থেকে প্লাগইনের গ্লোবাল অপশন/সেটিংস রিড এবং ডিফল্ট কনফিগারেশন রিটার্ন করা।
	 *
	 * ৬. এভেইলেবল ব্লক স্ক্যানার (get_available_blocks):
	 *    - build/blocks ফোল্ডার স্ক্যান করে প্লাগইনের অন্তর্ভুক্ত সকল ব্লকের মেটাডাটা ও তালিকা তৈরি করা।
	 * ==============================================================================
	 */
	class Xpo_Block_Core {
		public static function init() {
			add_action( 'init', [ __CLASS__, 'load_textdomain' ] );
			add_filter( 'block_categories_all', [ __CLASS__, 'register_block_category' ], 10, 2 );
		// add_filter( 'upload_mimes', [ __CLASS__, 'allow_svg_uploads' ] );
		// add_filter( 'wp_check_filetype_and_ext', [ __CLASS__, 'check_svg_filetype' ], 10, 4 );

		// অন-ডিমান্ড ব্লক সিএসএস লোডিং চালু করতে (শুধুমাত্র পেজে ব্যবহৃত ব্লকের CSS পৃথকভাবে লোড হবে, যা পেজ স্পিড ও পারফরম্যান্স বাড়ায়)
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
	}

		/**
		 * ১. ওয়ার্ডপ্রেসের অনুমোদিত MIME টাইপের তালিকায় SVG ফাইল যুক্ত করার মেথড।
		 *
		 * কারণ/উদ্দেশ্য:
		 * প্লাগইনের বিভিন্ন ব্লকে (যেমন: QR Code, Marquee, Before-After, Audio Player ইত্যাদি) ইউজার যেন
		 * ওয়ার্ডপ্রেস মিডিয়া লাইব্রেরি থেকে নিরাপদে SVG লোগো, আইকন বা ভেক্টর ইমেজ আপলোড ও সিলেক্ট করতে পারেন।
		 *
		 * @param array $mimes অনুমোদিত ফাইলের MIME টাইপ অ্যারে।
		 * @return array আপডেটকৃত MIME টাইপ অ্যারে।
		 */
		// public static function allow_svg_uploads( $mimes ) {
		// 	$mimes['svg']  = 'image/svg+xml';
		// 	$mimes['svgz'] = 'image/svg+xml';
		// 	return $mimes;
		// }

		/**
		 * ২. ওয়ার্ডপ্রেসের স্ট্রিক্ট ফাইল টাইপ ভ্যালিডেশন বাইপাস করে SVG আপলোড সফল করার মেথড।
		 *
		 * কারণ/উদ্দেশ্য:
		 * ওয়ার্ডপ্রেসের `wp_check_filetype_and_ext` ফিল্টার ব্যবহার করে ফাইলের টাইপ ও এক্সটেনশন যাচাই করা হয়।
		 * SVG মূলত একটি XML টেক্সট ফাইল হওয়ায় বাই-ডিফল্ট ওয়ার্ডপ্রেস এটিকে ব্লক/রিজেক্ট করে দেয়।
		 * এই মেথডটি ফাইলের এক্সটেনশন `.svg` বা `.svgz` হলে সেটিকে বৈধ SVG টাইপ হিসেবে অনুমোদন দেয়।
		 *
		 * @param array  $data     ফাইল এক্সটেনশন ও টাইপ ডাটা।
		 * @param string $file     ফাইল পাথ।
		 * @param string $filename ফাইলের নাম।
		 * @param array  $mimes    অনুমোদিত MIME টাইপসমূহ।
		 * @return array আপডেটকৃত ভ্যালিডেশন ডাটা।
		 */
		// public static function check_svg_filetype( $data, $file, $filename, $mimes ) {
		// 	$filetype = wp_check_filetype( $filename, $mimes );
		// 	$ext      = $filetype['ext'];
		// 	$type     = $filetype['type'];

		// 	if ( 'svg' === $ext || 'svgz' === $ext ) {
		// 		$data['ext']  = $ext;
		// 		$data['type'] = $type;
		// 	}
		// 	return $data;
		// }

		/**
		 * ৩. প্লাগইনের বহুভাষিক অনুবাদ (Language Textdomain) লোড করার মেথড।
		 *
		 * কারণ/উদ্দেশ্য:
		 * প্লাগইনকে Internationalization (i18n) সমৃদ্ধ করা, যাতে 'xpo-block' ডোমেইনের
		 * আওতায় থাকা সকল টেক্সট ও লেবেল অন্যান্য ভাষায় অনুবাদ করা সম্ভব হয়।
		 */
		public static function load_textdomain() {
			// phpcs:ignore PluginCheck.CodeAnalysis.DiscouragedFunctions.load_plugin_textdomainFound
			load_plugin_textdomain( 'xpo-block', false, dirname( XPO_BLOCK_BASENAME ) . '/languages' );
		}
 

	// Register custom block category
	public static function register_block_category( $categories, $post_or_context = null ) {
		if ( ! is_array( $categories ) ) {
			$categories = [];
		}

		return array_merge(
			[
				[
					'slug'  => 'xpo-block',
					'title' => __( 'XpoBlock', 'xpo-block' ),
				],
			],
			$categories
		);
	}

	public static function get_settings() {
		$defaults = [
			'activeBlocks' => [
				'button' => true,
				'cards' => true,
				'newsletter-card' => true,
			],
		];
		$settings = get_option( 'xpo_block_settings', $defaults );
		return wp_parse_args( $settings, $defaults );
	}

	public static function get_available_blocks() {
		$available_blocks = [];
		$blocks_dirs = glob( XPO_BLOCK_DIR_PATH . 'build/blocks/*', GLOB_ONLYDIR );
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
							'desc'        => isset( $metadata['description'] ) ? $metadata['description'] : '',
							'description' => isset( $metadata['description'] ) ? $metadata['description'] : '',
							'demoUrl'     => isset( $metadata['demoUrl'] ) ? $metadata['demoUrl'] : 'https://xpoblock.com/demos/' . $slug,
							'docsUrl'     => isset( $metadata['docsUrl'] ) ? $metadata['docsUrl'] : 'https://xpoblock.com/docs/' . $slug,
							'badge'       => 'Included',
						];
					}
				}
			}
		}
		return $available_blocks;
	}
}
}

