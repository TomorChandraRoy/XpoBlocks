<?php
/**
 * QR Code Generator Block - Server Render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Generate a unique block ID if not provided
$block_id = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'gbb-qr-' );

// Prepare necessary custom classes for the wrapper as an array
$wrapper_classes = array( 'gbb-qr-container', $block_id );

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => implode( ' ', $wrapper_classes ),
) );
?>

<div
	<?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>
