<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Xpo_Block_Core' ) ) {
	/**
	 * ==============================================================================
	 * Xpo_Block_Core (প্লাগইনের মূল কোর লজিক ক্লাস)
	 * ==============================================================================
	 *
	 * এই ফাইলে প্লাগইনের গ্লোবাল কোর এবং ব্যাকএন্ড লজিক থাকবে।
	 */
	class Xpo_Block_Core {
		public static function init() {
			add_action( 'init', [ __CLASS__, 'load_textdomain' ] );
			add_filter( 'block_categories_all', [ __CLASS__, 'register_block_category' ], 10, 2 );
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

