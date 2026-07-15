<?php
/**
 * FAQ table-of-contents Block - Server Render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Generate a unique block ID if not provided
$block_id = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'gbb-toc-' );

// Prepare necessary custom classes for the wrapper as an array
$wrapper_classes = array('gbb-toc-container', $block_id);

// get_block_wrapper_attributes automatically applies Gutenberg sidebar styles (margin, padding, border etc.)
// implode(' ', $wrapper_classes) converts the array of classes into a single space-separated string, 
// which is required by the 'class' attribute.
$wrapper_attrs = get_block_wrapper_attributes(array('class' => implode( ' ', $wrapper_classes ),));
?>

<!-- 
  This empty div acts as a placeholder wrapper for Client-Side React Rendering (view.js). 
  It passes all necessary block attributes as a JSON string to the frontend via data-attributes. 
-->
<div 
	<?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>

