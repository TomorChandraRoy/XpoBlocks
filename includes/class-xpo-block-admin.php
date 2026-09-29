<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if ( !class_exists( 'Xpo_Block_Admin' ) ) {
	class Xpo_Block_Admin {
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
        __( 'XpoBlock', 'xpo-block' ), // পেজের টাইটেল (Page Title)
        __( 'XpoBlock', 'xpo-block' ), // সাইডবার মেনুর নাম (Menu Title)
        'manage_options',                            // ইউজার পারমিশন/ক্যাপাবিলিটি (Capability)
        'xpo-block',                             // মেনু পেজ স্ল্যাগ (Menu Slug)
        [ __CLASS__, 'render_admin_page' ],          // কলব্যাক ফাংশন (Callback function to render page HTML)
        'data:image/svg+xml;base64,' . base64_encode( $svg ), // ওয়ার্ডপ্রেস স্ট্যান্ডার্ড Dashicon আইকন
        30                                           // মেনুর পজিশন (Menu Position)
      );

			$settings = Xpo_Block_Core::get_settings();
			$active_blocks = isset( $settings['activeBlocks'] ) ? $settings['activeBlocks'] : [];
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
     * ৩. এডমিন পেজ মার্কআপ (Render Admin Page Markup)
     * React Admin Dashboard অ্যাপ রেন্ডার করার জন্য মূল HTML কন্টেইনার (<div id="guten-builder-admin-root">) তৈরি করে।
     */
    public static function render_admin_page() {
      ?>
      <div id="xpo-block-admin-root"
				data-info='<?php echo esc_attr( wp_json_encode( [
					'version' => XPO_BLOCK_VERSION,
					'adminUrl' => admin_url(),
					'isPro' => false,
					'wpVersion'       => get_bloginfo( 'version' ),
    			'phpVersion'      => phpversion(),
					'activeBlocks'        => Xpo_Block_Core::get_settings(),
					'availableBlocks' => Xpo_Block_Core::get_available_blocks(),
				] ) ); ?>'
			>
		</div>
      <?php
		}

		public static function render_subscribers_page() {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( __( 'You do not have sufficient permissions to access this page.', 'xpo-block' ) );
			}

			$deleted_notice = false;

			// Handle subscriber delete action
			if ( isset( $_GET['action'] ) && 'delete' === $_GET['action'] && isset( $_GET['email'] ) ) {
				$email_to_delete = sanitize_email( wp_unslash( $_GET['email'] ) );
				$nonce           = isset( $_GET['_wpnonce'] ) ? $_GET['_wpnonce'] : '';

				if ( wp_verify_nonce( $nonce, 'xpo_block_delete_subscriber_' . $email_to_delete ) ) {
					$subscribers = get_option( 'xpo-block_newsletter_subscribers', [] );
					if ( is_array( $subscribers ) ) {
						$updated_subscribers = [];
						foreach ( $subscribers as $sub ) {
							$sub_email = is_array( $sub ) && isset( $sub['email'] ) ? $sub['email'] : $sub;
							if ( strtolower( $sub_email ) !== strtolower( $email_to_delete ) ) {
								$updated_subscribers[] = $sub;
							}
						}
						update_option( 'xpo-block_newsletter_subscribers', $updated_subscribers );
						$deleted_notice = true;
					}
				}
			}

			$subscribers = get_option( 'xpo-block_newsletter_subscribers', [] );
			if ( ! is_array( $subscribers ) ) {
				$subscribers = [];
			}
			?>
			<div class="wrap">
				<h1 class="wp-heading-inline"><?php esc_html_e( 'Newsletter Subscribers', 'xpo-block' ); ?></h1>
				<hr class="wp-header-end">

				<?php if ( $deleted_notice ) : ?>
					<div class="notice notice-success is-dismissible" style="margin-top: 15px;">
						<p><?php esc_html_e( 'Subscriber deleted successfully.', 'xpo-block' ); ?></p>
					</div>
				<?php endif; ?>

				<div style="margin-top: 15px; margin-bottom: 20px; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left: 4px solid #2563eb; border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
					<div style="background: #2563eb; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="12" y1="16" x2="12" y2="12"></line>
							<line x1="12" y1="8" x2="12.01" y2="8"></line>
						</svg>
					</div>
					<div style="font-size: 14px; color: #1e3a8a; line-height: 1.5;">
						<strong style="color: #1e40af;"><?php esc_html_e( 'Note:', 'xpo-block' ); ?></strong>
						<?php esc_html_e( 'Subscribers collected via the', 'xpo-block' ); ?>
						<span style="background: #bfdbfe; color: #1e3a8a; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 13px; margin: 0 2px;">
							<?php esc_html_e( 'Newsletter Card Block', 'xpo-block' ); ?>
						</span>
						<?php esc_html_e( 'on your website will automatically appear here.', 'xpo-block' ); ?>
					</div>
				</div>

				<div style="margin-top: 20px; max-width: 950px;">
					<div style="background: #fff; border: 1px solid #c3c4c7; border-radius: 4px; padding: 15px 20px; margin-bottom: 15px;">
						<strong style="font-size: 16px; color: #1d2327;">
							<?php printf( esc_html__( 'Total Subscribers: %d', 'xpo-block' ), count( $subscribers ) ); ?>
						</strong>
					</div>

					<table class="wp-list-table widefat fixed striped table-view-list">
						<thead>
							<tr>
								<th style="width: 60px;">#</th>
								<th><?php esc_html_e( 'Email Address', 'xpo-block' ); ?></th>
								<th style="width: 220px;"><?php esc_html_e( 'Subscribed Date', 'xpo-block' ); ?></th>
								<th style="width: 100px; text-align: right; padding-right: 15px;"><?php esc_html_e( 'Actions', 'xpo-block' ); ?></th>
							</tr>
						</thead>
						<tbody>
							<?php if ( ! empty( $subscribers ) ) : ?>
								<?php foreach ( array_reverse( $subscribers ) as $index => $sub ) :
									$email = is_array( $sub ) ? $sub['email'] : $sub;
									$date  = is_array( $sub ) && isset( $sub['date'] ) ? $sub['date'] : '-';
									$delete_url = wp_nonce_url(
										add_query_arg([
											'page'   => 'xpo-block-subscribers',
											'action' => 'delete',
											'email'  => urlencode( $email ),
										], admin_url( 'admin.php' )),
										'xpo_block_delete_subscriber_' . $email
									);
									?>
									<tr>
										<td><?php echo esc_html( count( $subscribers ) - $index ); ?></td>
										<td><strong><?php echo esc_html( $email ); ?></strong></td>
										<td><?php echo esc_html( $date ); ?></td>
										<td style="text-align: right; padding-right: 15px;">
											<a href="<?php echo esc_url( $delete_url ); ?>"
											   class="button button-small button-link-delete"
											   style="color: #b32d2e; text-decoration: none;"
											   onclick="return confirm('<?php esc_attr_e( 'Are you sure you want to delete this subscriber?', 'xpo-block' ); ?>');">
												<?php esc_html_e( 'Delete', 'xpo-block' ); ?>
											</a>
										</td>
									</tr>
								<?php endforeach; ?>
							<?php else : ?>
								<tr>
									<td colspan="4"><?php esc_html_e( 'No subscribers found yet.', 'xpo-block' ); ?></td>
								</tr>
							<?php endif; ?>
						</tbody>
					</table>
				</div>
			</div>
			<?php
		}


    //  ১. যেকোনো মূল টপ-লেভেল মেনুর জন্য ওয়ার্ডপ্রেস প্রিফিক্স হিসেবে দেয়: toplevel_page_ ২. তার সাথে যুক্ত করে আপনার দেওয়া admin_menu-page array-এর menu_slug (guten-builder): guten-builder
		public static function enqueue_admin_assets( $hook ) {
			// শুধুমাত্র Guten Builder এবং Subscribers পেজে ফাইল লোড করা (Guard Clause)
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


		public static function enqueue_editor_assets() {
			$asset_file = XPO_BLOCK_DIR_PATH . 'build/editor.asset.php';
			if ( file_exists( $asset_file ) ) {
				$assets = include $asset_file;
				if ( file_exists( XPO_BLOCK_DIR_PATH . 'build/editor.css' ) ) {
					wp_enqueue_style(
						'xpo-block-editor-css',
						XPO_BLOCK_DIR_URL . 'build/editor.css',
						[ 'wp-edit-blocks', 'wp-components' ],
						$assets['version']
					);
				}
			}
		}
  }
}

