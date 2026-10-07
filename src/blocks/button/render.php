<?php

if (!defined('ABSPATH')) {
	exit;
}

$xpo_blocks_id = wp_unique_id( 'xpo-button-' );

$xpo_blocks_wrapper_classes = array( 'xpo-block-button-wrapper', $xpo_blocks_id );

$xpo_blocks_wrapper_attrs = get_block_wrapper_attributes( array( 'class' => implode( ' ', $xpo_blocks_wrapper_classes ) ) );
?>


<div
	<?php echo $xpo_blocks_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $xpo_blocks_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>

