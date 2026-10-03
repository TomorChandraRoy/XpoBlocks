<?php

if (!defined('ABSPATH')) {
	exit;
}

$xpo_block_id = wp_unique_id( 'xpo-block-divider-' );

$xpo_block_wrapper_classes = array( 'xpo-divider-container', $xpo_block_id );

$xpo_block_wrapper_attrs = get_block_wrapper_attributes( array( 'class' => implode( ' ', $xpo_block_wrapper_classes ) ) );
?>


<div
	<?php echo $xpo_block_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $xpo_block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>

