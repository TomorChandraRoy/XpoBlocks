<?php

if (!defined('ABSPATH')) {
	exit;
}

// প্রতিটি ব্লকের জন্য একটি ইউনিক আইডি (Unique Block ID) তৈরি করা
$block_id = wp_unique_id( 'guten-builder-faq-' );

// কাস্টম কন্টেইনার ক্লাস এবং ইউনিক আইডি একসাথে অ্যারে হিসেবে রাখা
$wrapper_classes = array( 'gbb-accordion-container', $block_id );

// WordPress Gutenberg-এর ডিফল্ট অ্যাট্রিবিউট (margin, padding, class) এবং আমাদের কাস্টম ক্লাসগুলোকে একসাথে মার্জ করা
$wrapper_attrs = get_block_wrapper_attributes( array( 'class' => implode( ' ', $wrapper_classes ) ) );
?>

<?php
// এই ফাঁকা div-টি Client-Side JavaScript (view.js)-এর জন্য প্লেসহোল্ডার হিসেবে কাজ করে।
// এটি data-attributes-এর মাধ্যমে ব্লকের সমস্ত ডাটা JSON আকারে ফ্রন্টএন্ডে পাস করে।
?>

<div
	<?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	id="<?php echo esc_attr( $block_id ); ?>"
	data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
></div>

