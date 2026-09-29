<?php
/**
 * Scroll Story Block - Server Render (Thin Wrapper)
 */

if (!defined('ABSPATH')) {
	exit;
}
$block_id = !empty($attributes['blockId']) ? sanitize_html_class($attributes['blockId']) : wp_unique_id('xpo-scroll-story-');
$wrapper_attrs = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        ?> data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>



