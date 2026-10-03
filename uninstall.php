<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package XpoBlock
 */

// If uninstall not called from WordPress, exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Delete options saved in wp_options table.
delete_option( 'xpo_block_settings' );
delete_option( 'xpo_block_newsletter_subscribers' );
