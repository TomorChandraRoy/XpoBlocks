<?php

if (!defined('ABSPATH')) {
	exit;
}

$block_id = wp_unique_id( 'xpo-block-before-after-' );

$wrapper_classes = array( 'xpo-before-after-container', $block_id );

$wrapper_attrs = get_block_wrapper_attributes( array( 'class' => implode( ' ', $wrapper_classes ) ) );
?>


<div
	<?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>

