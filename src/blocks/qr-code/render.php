<?php
/**
 * QR Code Generator Block - Server Render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Generate a unique block ID if not provided
$xpo_blocks_id = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'xpo-qr-' );

// Prepare necessary custom classes for the wrapper as an array
$xpo_blocks_wrapper_classes = array( 'xpo-qr-container', $xpo_blocks_id );

$xpo_blocks_wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => implode( ' ', $xpo_blocks_wrapper_classes ),
) );
?>

<div
	<?php echo $xpo_blocks_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $xpo_blocks_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>
