<?php
/**
 * Admin Subscribers View Template
 *
 * @package XpoBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$xpo_blocks_subscribers_list = isset( $xpo_blocks_subscribers ) && is_array( $xpo_blocks_subscribers ) ? $xpo_blocks_subscribers : ( isset( $subscribers ) && is_array( $subscribers ) ? $subscribers : [] );
$xpo_blocks_is_deleted       = ! empty( $xpo_blocks_deleted_notice ) || ! empty( $deleted_notice );
?>
<div class="wrap">
	<h1 class="wp-heading-inline"><?php esc_html_e( 'Newsletter Subscribers', 'xpo-blocks' ); ?></h1>
	<hr class="wp-header-end">

	<?php if ( $xpo_blocks_is_deleted ) : ?>
		<div class="notice notice-success is-dismissible" style="margin-top: 15px;">
			<p><?php esc_html_e( 'Subscriber deleted successfully.', 'xpo-blocks' ); ?></p>
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
			<strong style="color: #1e40af;"><?php esc_html_e( 'Note:', 'xpo-blocks' ); ?></strong>
			<?php esc_html_e( 'Subscribers collected via the', 'xpo-blocks' ); ?>
			<span style="background: #bfdbfe; color: #1e3a8a; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 13px; margin: 0 2px;">
				<?php esc_html_e( 'Newsletter Card Block', 'xpo-blocks' ); ?>
			</span>
			<?php esc_html_e( 'on your website will automatically appear here.', 'xpo-blocks' ); ?>
		</div>
	</div>

	<div style="margin-top: 20px; max-width: 950px;">
		<div style="background: #fff; border: 1px solid #c3c4c7; border-radius: 4px; padding: 15px 20px; margin-bottom: 15px;">
			<strong style="font-size: 16px; color: #1d2327;">
				<?php
				/* translators: %d: Total number of subscribers. */
				printf( esc_html__( 'Total Subscribers: %d', 'xpo-blocks' ), count( $xpo_blocks_subscribers_list ) );
				?>
			</strong>
		</div>

		<table class="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<th style="width: 60px;">#</th>
					<th><?php esc_html_e( 'Email Address', 'xpo-blocks' ); ?></th>
					<th style="width: 220px;"><?php esc_html_e( 'Subscribed Date', 'xpo-blocks' ); ?></th>
					<th style="width: 100px; text-align: right; padding-right: 15px;"><?php esc_html_e( 'Actions', 'xpo-blocks' ); ?></th>
				</tr>
			</thead>
			<tbody>
				<?php if ( ! empty( $xpo_blocks_subscribers_list ) ) : ?>
					<?php
					foreach ( array_reverse( $xpo_blocks_subscribers_list ) as $xpo_blocks_index => $xpo_blocks_sub ) :
						$xpo_blocks_email      = is_array( $xpo_blocks_sub ) ? $xpo_blocks_sub['email'] : $xpo_blocks_sub;
						$xpo_blocks_date       = is_array( $xpo_blocks_sub ) && isset( $xpo_blocks_sub['date'] ) ? $xpo_blocks_sub['date'] : '-';
						$xpo_blocks_delete_url = wp_nonce_url(
							add_query_arg(
								[
									'page'   => 'xpo-blocks-subscribers',
									'action' => 'delete',
									'email'  => rawurlencode( $xpo_blocks_email ),
								],
								admin_url( 'admin.php' )
							),
							'xpo_blocks_delete_subscriber_' . $xpo_blocks_email
						);
						?>
						<tr>
							<td><?php echo esc_html( count( $xpo_blocks_subscribers_list ) - $xpo_blocks_index ); ?></td>
							<td><strong><?php echo esc_html( $xpo_blocks_email ); ?></strong></td>
							<td><?php echo esc_html( $xpo_blocks_date ); ?></td>
							<td style="text-align: right; padding-right: 15px;">
								<a href="<?php echo esc_url( $xpo_blocks_delete_url ); ?>"
								   class="button button-small button-link-delete"
								   style="color: #b32d2e; text-decoration: none;"
								   onclick="return confirm('<?php esc_attr_e( 'Are you sure you want to delete this subscriber?', 'xpo-blocks' ); ?>');">
									<?php esc_html_e( 'Delete', 'xpo-blocks' ); ?>
								</a>
							</td>
						</tr>
					<?php endforeach; ?>
				<?php else : ?>
					<tr>
						<td colspan="4"><?php esc_html_e( 'No subscribers found yet.', 'xpo-blocks' ); ?></td>
					</tr>
				<?php endif; ?>
			</tbody>
		</table>
	</div>
</div>
