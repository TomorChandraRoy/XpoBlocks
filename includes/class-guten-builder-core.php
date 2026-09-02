<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Guten_Builder_Core' ) ) {
	/**
	 * ==============================================================================
	 * Guten_Builder_Core (প্লাগইনের মূল কোর লজিক ক্লাস)
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
	class Guten_Builder_Core {
		public static function init() {
		add_action( 'init', [ __CLASS__, 'load_textdomain' ] );
		add_filter( 'block_categories_all', [ __CLASS__, 'register_block_category' ], 10, 2 );
		add_filter( 'upload_mimes', [ __CLASS__, 'allow_svg_uploads' ] );
		add_filter( 'wp_check_filetype_and_ext', [ __CLASS__, 'check_svg_filetype' ], 10, 4 );
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
	}

	public static function allow_svg_uploads( $mimes ) {
		$mimes['svg'] = 'image/svg+xml';
		$mimes['svgz'] = 'image/svg+xml';
		return $mimes;
	}

	public static function check_svg_filetype( $data, $file, $filename, $mimes ) {
		$filetype = wp_check_filetype( $filename, $mimes );
		$ext = $filetype['ext'];
		$type = $filetype['type'];

		if ( 'svg' === $ext || 'svgz' === $ext ) {
			$data['ext'] = $ext;
			$data['type'] = $type;
		}
		return $data;
	}

	public static function load_textdomain() {
		load_plugin_textdomain( 'guten-builder-blocks', false, dirname( GUTEN_BUILDER_BASENAME ) . '/languages' );
	}


	// Register custom block category
	public static function register_block_category( $categories, $post ) {
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


	public static function get_settings() {
		$defaults = [
			'activeBlocks' => [
				'button' => true,
				'cards' => true,
				'newsletter-card' => true,
			],
			'performanceMode' => 'balanced',
			'globalLerp' => 0.08,
			'glassIntensity' => 20,
			'accentColor' => '#10b981'
		];
		$settings = get_option( 'guten_builder_settings', $defaults );
		return wp_parse_args( $settings, $defaults );
	}

	public static function get_available_blocks() {
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
							'desc'        => isset( $metadata['description'] ) ? $metadata['description'] : '',
							'description' => isset( $metadata['description'] ) ? $metadata['description'] : '',
							'demoUrl'     => isset( $metadata['demoUrl'] ) ? $metadata['demoUrl'] : 'https://gutenbuilder.com/demos/' . $slug,
							'docsUrl'     => isset( $metadata['docsUrl'] ) ? $metadata['docsUrl'] : 'https://gutenbuilder.com/docs/' . $slug,
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

