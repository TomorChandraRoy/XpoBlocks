<?php
/**
 * QR Code Generator Block - Server Render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Generate a unique block ID if not provided
$xpo_block_id = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'xpo-block-qr-' );

// Prepare necessary custom classes for the wrapper as an array
$xpo_block_wrapper_classes = array( 'xpo-block-qr-container', $xpo_block_id );

$xpo_block_wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => implode( ' ', $xpo_block_wrapper_classes ),
) );
?>

<div
	<?php echo $xpo_block_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $xpo_block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>
