<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Xpo_Blocks_Core' ) ) {
	/**
	 * ==============================================================================
	 * Xpo_Blocks_Core (Main Core Logic Class)
	 * ==============================================================================
	 *
	 * Handles plugin global core and backend logic.
	 */
	class Xpo_Blocks_Core {
		public static function init() {
			add_filter( 'block_categories_all', [ __CLASS__, 'register_block_category' ], 10, 2 );
			add_filter( 'should_load_separate_core_block_assets', '__return_true' );
		}



		// Register custom block category
		public static function register_block_category( $categories, $post_or_context = null ) {
			if ( ! is_array( $categories ) ) {
				$categories = [];
			}

			return array_merge(
				[
					[
						'slug'  => 'xpo-blocks',
						'title' => __( 'XpoBlocks', 'xpo-blocks' ), 
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
			$settings = get_option( 'xpo_blocks_settings', $defaults );
			return wp_parse_args( $settings, $defaults );
		}

		public static function get_available_blocks() {
			$available_blocks = [];
			$blocks_dirs = glob( XPO_BLOCKS_DIR_PATH . 'build/blocks/*', GLOB_ONLYDIR );
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
								'demoUrl'     => isset( $metadata['demoUrl'] ) ? $metadata['demoUrl'] : 'https://xpoblocks.com/demos/' . $slug,
								'docsUrl'     => isset( $metadata['docsUrl'] ) ? $metadata['docsUrl'] : 'https://xpoblocks.com/docs/' . $slug,
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
