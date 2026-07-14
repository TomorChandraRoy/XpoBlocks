<?php
$id = wp_unique_id( 'guten-builder-blocks-button-' );
$planClass = 'free';
$buttonAlign = isset( $attributes['buttonAlign'] ) ? $attributes['buttonAlign'] : 'center';
$wrapper_classes = [ 'guten-builder-blocks-btn-wrapper', 'plan-' . $planClass, 'button-align-' . $buttonAlign ];
?>
<div
	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes() is properly escaped ?>
	<?php echo get_block_wrapper_attributes( [ 'class' => implode( ' ', $wrapper_classes ) ] ); ?>
	id='<?php echo esc_attr( $id ); ?>'
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
>
	<?php echo $content; ?>
</div>
