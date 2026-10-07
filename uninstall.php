<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package XpoBlocks
 */

// If uninstall not called from WordPress, exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Delete options saved in wp_options table.
delete_option( 'xpo_blocks_settings' );
delete_option( 'xpo_blocks_newsletter_subscribers' );
