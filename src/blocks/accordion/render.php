<?php

if (!defined('ABSPATH')) {
	exit;
}

// Generate a unique block ID for this instance.
$xpo_block_id = wp_unique_id( 'xpo-block-faq-' );

// Collect custom wrapper container classes and the unique block ID.
$xpo_block_wrapper_classes = array( 'xpo-accordion-container', $xpo_block_id );

// Merge default Gutenberg block wrapper attributes with custom classes.
$xpo_block_wrapper_attrs = get_block_wrapper_attributes( array( 'class' => implode( ' ', $xpo_block_wrapper_classes ) ) );
?>

<?php
// Empty placeholder div for client-side JavaScript (view.js) rendering.
// Passes block attributes to the frontend as JSON in the data-attributes property.
?>

<div
	<?php echo $xpo_block_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $xpo_block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>
