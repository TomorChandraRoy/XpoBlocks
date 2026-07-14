<?php
/**
 * Kinetic Before/After - Server-Side Render Logic
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'guten_builder_ba_validate_color_strict' ) ) {
	function guten_builder_ba_validate_color_strict( $color, $default = 'transparent' ) {
		$color = is_string( $color ) ? trim( $color ) : '';
		if ( '' === $color ) {
			return $default;
		}
		if ( preg_match( '/^#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?$/', $color ) ) {
			return $color;
		}
		if ( preg_match( '/^rgba?\(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*(?:,\s*(0|0?\.\d+|1(\.0+)?)\s*)?\)$/', $color ) ) {
			return $color;
		}
		if ( preg_match( '/^hsla?\(\s*(\d+)[\s,]+(\d+%)[\s,]+(\d+%)\s*(?:[,\/]\s*(0|0?\.\d+|1(\.0+)?)\s*)?\)$/', $color ) ) {
			return $color;
		}
		if ( preg_match( '/^var\(--[a-zA-Z0-9_-]+\)$/', $color ) ) {
			return $color;
		}
		return $default;
	}
}

$kh_ba_before_image = ! empty( $attributes['beforeImage'] ) ? (array) $attributes['beforeImage'] : array();
$kh_ba_after_image  = ! empty( $attributes['afterImage'] ) ? (array) $attributes['afterImage'] : array();

if ( empty( $kh_ba_before_image['url'] ) || empty( $kh_ba_after_image['url'] ) ) {
	if ( is_admin() ) {
		?>
		<div class="kh-ba-fallback-editor" style="padding:20px;border:1px solid #ccc;text-align:center;background:#f9f9f9;border-radius:4px;">
			<?php echo esc_html__( 'Kinetic Before/After: Please select both images in the block settings.', 'guten-builder-blocks' ); ?>
		</div>
		<?php
	}
	return;
}

/*
 * Runtime-safe defaults.
 */
$kh_ba_orientation       = 'horizontal';
$kh_ba_mobile_aspect     = 'inherit';
$kh_ba_transition_style  = 'slide';
$kh_ba_handle_style      = 'classic';
$kh_ba_pulse_effect      = 'none';
$kh_ba_before_filter     = 'none';
$kh_ba_reverse_reveal    = false;
$kh_ba_hover_slide       = false;
$kh_ba_magnetic_snap     = false;
$kh_ba_enable_inertia    = false;
$kh_ba_hide_labels_mob   = false;
$kh_ba_cursor_badge      = false;
$kh_ba_cursor_badge_text = __( 'Compare', 'guten-builder-blocks' );
$kh_ba_inner_parallax    = false;
$kh_ba_hold_to_peek      = false;

$kh_ba_orientation_list   = array( 'horizontal' );
$kh_ba_aspect_ratio_list  = array( 'auto', '16/9', '1/1', '4/3', '3/4' );
$kh_ba_mob_aspect_list    = array( 'inherit' );
$kh_ba_trans_list         = array( 'slide' );
$kh_ba_handle_list        = array( 'classic' );
$kh_ba_divider_list       = array( 'solid', 'neon', 'gradient' );
$kh_ba_pulse_list         = array( 'none' );
$kh_ba_shadow_list        = array( 'soft', 'crisp', 'float', 'glow', 'elegant' );
$kh_ba_before_filter_list = array( 'none' );
$kh_ba_after_filter_list  = array( 'none', 'grayscale', 'sepia', 'blur', 'invert', 'contrast', 'color' );
$kh_ba_intro_list         = array( 'slide' );

$kh_ba_aspect_ratio  = in_array( $attributes['aspectRatio'] ?? '', $kh_ba_aspect_ratio_list, true ) ? $attributes['aspectRatio'] : 'auto';
$kh_ba_divider_style = in_array( $attributes['dividerStyle'] ?? '', $kh_ba_divider_list, true ) ? $attributes['dividerStyle'] : 'solid';
$kh_ba_shadow_style  = in_array( $attributes['shadowStyle'] ?? '', $kh_ba_shadow_list, true ) ? $attributes['shadowStyle'] : 'soft';
$kh_ba_after_filter  = in_array( $attributes['afterFilter'] ?? '', $kh_ba_after_filter_list, true ) ? $attributes['afterFilter'] : 'none';
$kh_ba_intro_style   = in_array( $attributes['introStyle'] ?? '', $kh_ba_intro_list, true ) ? $attributes['introStyle'] : 'slide';

$kh_ba_initial_offset   = max( 0, min( 100, (float) ( $attributes['initialOffset'] ?? 50 ) ) );
$kh_ba_diagonal_slant   = max( 5, min( 40, (float) ( $attributes['diagonalSlant'] ?? 15 ) ) );
$kh_ba_blur_intensity   = max( 1, min( 20, (int) ( $attributes['blurIntensity'] ?? 4 ) ) );
$kh_ba_after_blur       = max( 1, min( 20, (int) ( $attributes['afterBlurIntensity'] ?? 4 ) ) );
$kh_ba_overlay_opacity  = max( 0.0, min( 1.0, (float) ( $attributes['overlayOpacity'] ?? 0.4 ) ) );
$kh_ba_after_overlay_op = max( 0.0, min( 1.0, (float) ( $attributes['afterOverlayOpacity'] ?? 0.4 ) ) );

$kh_ba_handle_color      = guten_builder_ba_validate_color_strict( $attributes['handleColor'] ?? '', '#ffffff' );
$kh_ba_handle_icon_color = guten_builder_ba_validate_color_strict( $attributes['handleIconColor'] ?? '', '#333333' );
$kh_ba_overlay_color     = guten_builder_ba_validate_color_strict( $attributes['overlayColor'] ?? '', '#000000' );
$kh_ba_after_overlay_color = guten_builder_ba_validate_color_strict( $attributes['afterOverlayColor'] ?? '', '#000000' );

$kh_ba_label_color = '#ffffff';
$kh_ba_label_bg    = 'rgba(0,0,0,0.5)';

$kh_ba_hover_zoom        = ! empty( $attributes['hoverZoom'] );
$kh_ba_show_labels       = ! empty( $attributes['showLabels'] );
$kh_ba_before_label      = ! empty( $attributes['beforeLabel'] ) ? sanitize_text_field( $attributes['beforeLabel'] ) : __( 'Before', 'guten-builder-blocks' );
$kh_ba_after_label       = ! empty( $attributes['afterLabel'] ) ? sanitize_text_field( $attributes['afterLabel'] ) : __( 'After', 'guten-builder-blocks' );
$kh_ba_container_shadow  = ! empty( $attributes['containerShadow'] );
$kh_ba_force_full_width  = ! empty( $attributes['forceFullWidth'] );

$kh_ba_click_to_move    = isset( $attributes['clickToMove'] ) ? (bool) $attributes['clickToMove'] : true;
$kh_ba_auto_play_intro  = isset( $attributes['autoPlayIntro'] ) ? (bool) $attributes['autoPlayIntro'] : true;
$kh_ba_hide_labels_move = isset( $attributes['hideLabelsOnMove'] ) ? (bool) $attributes['hideLabelsOnMove'] : true;
$kh_ba_hide_mobile      = ! empty( $attributes['hideOnMobile'] );
$kh_ba_hide_desktop     = ! empty( $attributes['hideOnDesktop'] );

$kh_ba_is_horiz               = 'horizontal' === $kh_ba_orientation;
$kh_ba_active_overlay_op      = ( 'color' === $kh_ba_before_filter ) ? $kh_ba_overlay_opacity : 0;
$kh_ba_active_after_overlay_op = ( 'color' === $kh_ba_after_filter ) ? $kh_ba_after_overlay_op : 0;

$kh_ba_css_vars = sprintf(
	'--kh-ba-handle: %1$s; --kh-ba-icon-c: %2$s; --kh-ba-label-c: %3$s; --kh-ba-label-bg: %4$s; --kh-ba-overlay-c: %5$s; --kh-ba-overlay-o: %6$s; --kh-ba-a-overlay-c: %7$s; --kh-ba-a-overlay-o: %8$s;',
	$kh_ba_handle_color,
	$kh_ba_handle_icon_color,
	$kh_ba_label_color,
	$kh_ba_label_bg,
	$kh_ba_overlay_color,
	$kh_ba_active_overlay_op,
	$kh_ba_after_overlay_color,
	$kh_ba_active_after_overlay_op
);

if ( 'auto' !== $kh_ba_aspect_ratio ) {
	$kh_ba_css_vars .= sprintf( ' --kh-ba-aspect: %s;', $kh_ba_aspect_ratio );
}

$kh_ba_outer_classes = array_filter(
	array(
		'kh-ba-container',
		'kh-ba-' . $kh_ba_orientation,
		'kh-ba-trans-' . $kh_ba_transition_style,
		'kh-ba-handle-' . $kh_ba_handle_style,
		'kh-ba-divider-' . $kh_ba_divider_style,
		$kh_ba_hover_zoom ? 'has-hover-zoom' : '',
		$kh_ba_container_shadow ? 'has-shadow shadow-' . $kh_ba_shadow_style : '',
		$kh_ba_force_full_width ? 'is-forced-fullwidth' : '',
		$kh_ba_hide_labels_move ? 'hide-labels-move' : '',
		$kh_ba_hide_mobile ? 'kh-ba-hide-mobile' : '',
		$kh_ba_hide_desktop ? 'kh-ba-hide-desktop' : '',
	)
);

$kh_ba_active_before_filter = 'none';
if ( 'grayscale' === $kh_ba_before_filter ) {
	$kh_ba_active_before_filter = 'grayscale(100%)';
} elseif ( 'sepia' === $kh_ba_before_filter ) {
	$kh_ba_active_before_filter = 'sepia(100%)';
} elseif ( 'blur' === $kh_ba_before_filter ) {
	$kh_ba_active_before_filter = sprintf( 'blur(%dpx)', $kh_ba_blur_intensity );
} elseif ( 'invert' === $kh_ba_before_filter ) {
	$kh_ba_active_before_filter = 'invert(100%)';
} elseif ( 'contrast' === $kh_ba_before_filter ) {
	$kh_ba_active_before_filter = 'contrast(150%)';
}

$kh_ba_active_after_filter = 'none';
if ( 'grayscale' === $kh_ba_after_filter ) {
	$kh_ba_active_after_filter = 'grayscale(100%)';
} elseif ( 'sepia' === $kh_ba_after_filter ) {
	$kh_ba_active_after_filter = 'sepia(100%)';
} elseif ( 'blur' === $kh_ba_after_filter ) {
	$kh_ba_active_after_filter = sprintf( 'blur(%dpx)', $kh_ba_after_blur );
} elseif ( 'invert' === $kh_ba_after_filter ) {
	$kh_ba_active_after_filter = 'invert(100%)';
} elseif ( 'contrast' === $kh_ba_after_filter ) {
	$kh_ba_active_after_filter = 'contrast(150%)';
}

$kh_ba_layer_style = '';
$kh_ba_clip_val = 100 - $kh_ba_initial_offset;
$kh_ba_layer_style = $kh_ba_reverse_reveal
	? sprintf( 'clip-path: inset(0 0 0 %s%%);', $kh_ba_initial_offset )
	: sprintf( 'clip-path: inset(0 %s%% 0 0);', $kh_ba_clip_val );

$kh_ba_attrs = array(
	'class'            => implode( ' ', $kh_ba_outer_classes ),
	'style'            => $kh_ba_css_vars,
	'data-offset'      => (string) $kh_ba_initial_offset,
	'data-orientation' => esc_attr( $kh_ba_orientation ),
	'data-transition'  => esc_attr( $kh_ba_transition_style ),
	'data-click'       => $kh_ba_click_to_move ? 'true' : 'false',
	'data-intro'       => $kh_ba_auto_play_intro ? 'true' : 'false',
	'data-intro-style' => esc_attr( $kh_ba_intro_style ),
);

$kh_ba_wrapper_attrs = get_block_wrapper_attributes( $kh_ba_attrs );

$kh_ba_inner_classes = 'kh-ba-inner';
if ( 'auto' !== $kh_ba_aspect_ratio ) {
	$kh_ba_inner_classes .= ' has-aspect-ratio';
}

$kh_ba_handle_pos    = $kh_ba_is_horiz ? sprintf( 'left: %s%%; top: 0;', $kh_ba_initial_offset ) : sprintf( 'left: 0; top: %s%%;', $kh_ba_initial_offset );
$kh_ba_svg_transform = $kh_ba_is_horiz ? 'none' : 'rotate(90deg)';

$kh_ba_before_alt = ! empty( $kh_ba_before_image['alt'] ) ? sanitize_text_field( $kh_ba_before_image['alt'] ) : __( 'Before', 'guten-builder-blocks' );
$kh_ba_after_alt  = ! empty( $kh_ba_after_image['alt'] ) ? sanitize_text_field( $kh_ba_after_image['alt'] ) : __( 'After', 'guten-builder-blocks' );
?>

<div <?php echo $kh_ba_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped by get_block_wrapper_attributes(). ?>>
	<div class="<?php echo esc_attr( $kh_ba_inner_classes ); ?>">
		<div class="kh-ba-layer kh-ba-after">
			<div class="kh-ba-img-wrap" style="filter: <?php echo esc_attr( $kh_ba_active_after_filter ); ?>;">
				<img src="<?php echo esc_url( $kh_ba_after_image['url'] ); ?>" class="kh-ba-img" alt="<?php echo esc_attr( $kh_ba_after_alt ); ?>" />
			</div>
			<div class="kh-ba-overlay kh-ba-overlay-after" aria-hidden="true"></div>
			<?php if ( $kh_ba_show_labels ) : ?>
				<span class="kh-ba-label kh-ba-label-after"><?php echo esc_html( $kh_ba_after_label ); ?></span>
			<?php endif; ?>
		</div>

		<div class="kh-ba-layer kh-ba-before" style="<?php echo esc_attr( $kh_ba_layer_style ); ?>">
			<div class="kh-ba-img-wrap" style="filter: <?php echo esc_attr( $kh_ba_active_before_filter ); ?>;">
				<img src="<?php echo esc_url( $kh_ba_before_image['url'] ); ?>" class="kh-ba-img" alt="<?php echo esc_attr( $kh_ba_before_alt ); ?>" />
			</div>
			<div class="kh-ba-overlay kh-ba-overlay-before" aria-hidden="true"></div>
			<?php if ( $kh_ba_show_labels ) : ?>
				<span class="kh-ba-label kh-ba-label-before"><?php echo esc_html( $kh_ba_before_label ); ?></span>
			<?php endif; ?>
		</div>

		<div class="kh-ba-handle" style="<?php echo esc_attr( $kh_ba_handle_pos ); ?>">
			<button
				class="kh-ba-circle pulse-<?php echo esc_attr( $kh_ba_pulse_effect ); ?>"
				aria-label="<?php echo esc_attr__( 'Image Comparison Slider', 'guten-builder-blocks' ); ?>"
				aria-valuenow="<?php echo esc_attr( $kh_ba_initial_offset ); ?>"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-orientation="<?php echo esc_attr( $kh_ba_orientation ); ?>"
				role="slider"
				tabindex="0"
			>
				<?php if ( 'classic' === $kh_ba_handle_style ) : ?>
					<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="transform: <?php echo esc_attr( $kh_ba_svg_transform ); ?>;">
						<polyline points="9 18 3 12 9 6"></polyline>
						<polyline points="15 18 21 12 15 6"></polyline>
					</svg>
				<?php endif; ?>
			</button>
		</div>
	</div>
</div>