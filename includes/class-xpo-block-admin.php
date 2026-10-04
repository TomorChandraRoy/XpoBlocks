<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Xpo_Block_Admin' ) ) {
	class Xpo_Block_Admin {
		/**
		 * 1. Initialize Hooks
		 *
		 * Registers WordPress action hooks for admin menu, scripts/styles, and activation redirect.
		 */
		public static function init() {
			add_action( 'admin_menu', [ __CLASS__, 'register_admin_menu' ] );
			add_action( 'admin_enqueue_scripts', [ __CLASS__, 'enqueue_admin_assets' ] );
			add_action( 'admin_init', [ __CLASS__, 'handle_activation_redirect' ] );
		}

		public static function register_admin_menu() {

			$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#a7aaad"><path d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v2A1.5 1.5 0 0 1 16.5 8h-13A1.5 1.5 0 0 1 2 6.5v-2zm0 6A1.5 1.5 0 0 1 3.5 9h5.5A1.5 1.5 0 0 1 10.5 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-5.5A1.5 1.5 0 0 1 2 15.5v-5zm10 0A1.5 1.5 0 0 1 13.5 9h3A1.5 1.5 0 0 1 18 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-5z"/></svg>';

			add_menu_page(
				__( 'XpoBlock', 'xpo-block' ), // Page title.
				__( 'XpoBlock', 'xpo-block' ), // Menu title.
				'manage_options',              // Capability.
				'xpo-block',                   // Menu slug.
				[ __CLASS__, 'render_admin_page' ], // Callback function to render page HTML.
				'data:image/svg+xml;base64,' . base64_encode( $svg ), // Menu icon.
				30                             // Menu position.
			);

			$settings             = Xpo_Block_Core::get_settings();
			$active_blocks        = isset( $settings['activeBlocks'] ) ? $settings['activeBlocks'] : [];
			$is_newsletter_active = ! isset( $active_blocks['newsletter-card'] ) || ! empty( $active_blocks['newsletter-card'] );

			if ( $is_newsletter_active ) {
				add_submenu_page(
					'xpo-block',
					__( 'Subscribers', 'xpo-block' ),
					__( 'Subscribers', 'xpo-block' ),
					'manage_options',
					'xpo-block-subscribers',
					[ __CLASS__, 'render_subscribers_page' ]
				);
			}
		}

		/**
		 * 3. Render Admin Page Markup
		 *
		 * Creates the main HTML container (<div id="xpo-block-admin-root">) to mount the React Admin Dashboard application.
		 */
		public static function render_admin_page() {
			?>
				<div id="xpo-block-admin-root"
					data-info='<?php echo esc_attr( wp_json_encode( [
					'version'         => XPO_BLOCK_VERSION,
					'adminUrl'        => admin_url(),
					'isPro'           => false,
					'wpVersion'       => get_bloginfo( 'version' ),
					'phpVersion'      => phpversion(),
					'activeBlocks'    => Xpo_Block_Core::get_settings(),
					'availableBlocks' => Xpo_Block_Core::get_available_blocks(),
					] ) ); ?>'
				>
				</div>
			<?php
		}

		/**
		 * Render Subscribers Page
		 */
		public static function render_subscribers_page() {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', 'xpo-block' ) );
			}

			$deleted_notice = false;

			// Handle subscriber delete action
			if ( isset( $_GET['action'], $_GET['email'], $_GET['_wpnonce'] ) && 'delete' === sanitize_text_field( wp_unslash( $_GET['action'] ) ) ) {
				$nonce           = sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) );
				$email_to_delete = sanitize_email( wp_unslash( $_GET['email'] ) );

				if ( wp_verify_nonce( $nonce, 'xpo_block_delete_subscriber_' . $email_to_delete ) ) {
					$subscribers = get_option( 'xpo_block_newsletter_subscribers', [] );
					if ( is_array( $subscribers ) ) {
						$updated_subscribers = [];
						foreach ( $subscribers as $sub ) {
							$sub_email = is_array( $sub ) && isset( $sub['email'] ) ? $sub['email'] : $sub;
							if ( strtolower( $sub_email ) !== strtolower( $email_to_delete ) ) {
								$updated_subscribers[] = $sub;
							}
						}

						update_option( 'xpo_block_newsletter_subscribers', $updated_subscribers );
						$deleted_notice = true;
					}
				}
			}

			$xpo_block_subscribers = get_option( 'xpo_block_newsletter_subscribers', [] );
			if ( ! is_array( $xpo_block_subscribers ) ) {
				$xpo_block_subscribers = [];
			}
			$subscribers              = $xpo_block_subscribers;
			$xpo_block_deleted_notice = $deleted_notice;

			// Load HTML View Template
			$view_file = XPO_BLOCK_DIR_PATH . 'includes/views/admin-subscribers.php';
			if ( file_exists( $view_file ) ) {
				include $view_file;
			}
		}


		/**
		 * Plugin activation callback to set redirect transient.
		 */
		public static function activate() {
			set_transient( 'xpo_block_activation_redirect', true, 30 );
		}

		/**
		 * Handles single-plugin activation redirect to XpoBlock Dashboard.
		 * Strictly adheres to WordPress.org Plugin Review Guidelines.
		 */
		public static function handle_activation_redirect() {
			// 1. Check if transient exists
			if ( ! get_transient( 'xpo_block_activation_redirect' ) ) {
				return;
			}

			// 2. Delete transient immediately to prevent multiple redirects
			delete_transient( 'xpo_block_activation_redirect' );

			// 3. Do not redirect during Network Activation
			if ( is_network_admin() ) {
				return;
			}

			// 4. Do not redirect during Bulk Activation
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only check for core bulk activation query arg.
			if ( isset( $_GET['activate-multi'] ) ) {
				return;
			}

			// 5. Do not redirect during AJAX or WP-CLI
			if ( ( defined( 'DOING_AJAX' ) && DOING_AJAX ) || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
				return;
			}

			// 6. Check user capability
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			// 7. Safe redirect to plugin dashboard page
			wp_safe_redirect( admin_url( 'admin.php?page=xpo-block' ) );
			exit;
		}


		/**
		 * Enqueue admin scripts and styles.
		 *
		 * @param string $hook The current admin page hook.
		 */
		public static function enqueue_admin_assets( $hook ) {
			// Only load assets on XpoBlock and Subscribers admin pages (Guard Clause).
			if ( 'toplevel_page_xpo-block' !== $hook && 'xpo-block_page_xpo-block-subscribers' !== $hook ) {
				return;
			}

			$asset_file = XPO_BLOCK_DIR_PATH . 'build/admin.asset.php';

			if ( file_exists( $asset_file ) ) {
				$assets = include $asset_file;

				// Admin Dashboard Enqueue CSS
				if ( file_exists( XPO_BLOCK_DIR_PATH . 'build/admin.css' ) ) {
					wp_enqueue_style(
						'xpo-block-admin-css',
						XPO_BLOCK_DIR_URL . 'build/admin.css',
						[ 'wp-components' ],
						$assets['version']
					);
				} elseif ( file_exists( XPO_BLOCK_DIR_PATH . 'build/style-admin.css' ) ) {
					wp_enqueue_style(
						'xpo-block-admin-css',
						XPO_BLOCK_DIR_URL . 'build/style-admin.css',
						[ 'wp-components' ],
						$assets['version']
					);
				}

				// Admin Dashboard Enqueue Script
				wp_enqueue_script(
					'xpo-block-admin-js',
					XPO_BLOCK_DIR_URL . 'build/admin.js',
					$assets['dependencies'],
					$assets['version'],
					true
				);
			}
		}
	}
}
