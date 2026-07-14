<?php
/**
 * Kinetic Video Modal - Server-Side Render
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$attributes = is_array( $attributes ?? null ) ? $attributes : array();
$content    = $content ?? '';
$block      = $block ?? null;

if ( ! function_exists( 'guten_builder_vm_validate_color_strict' ) ) {
	/**
	 * Validate a strict safe subset of CSS colors.
	 *
	 * @param string $color   Raw color value.
	 * @param string $default Fallback color.
	 * @return string
	 */
	function guten_builder_vm_validate_color_strict( $color, $default = '#10b981' ) {
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

		if ( preg_match( '/^var\(--[a-zA-Z0-9_-]+\)$/', $color ) ) {
			return $color;
		}

		return $default;
	}
}

/**
 * Action hook before rendering.
 *
 * @param array $attributes Block attributes.
 * @param mixed $block      Block instance.
 */
do_action( 'guten_builder_before_video_modal_render', $attributes, $block );

/**
 * FREE-safe base values.
 */
$kh_vm_video_url        = ! empty( $attributes['videoUrl'] ) ? esc_url_raw( trim( (string) $attributes['videoUrl'] ) ) : '';
$kh_vm_auto_extract     = isset( $attributes['autoExtractCover'] ) ? (bool) $attributes['autoExtractCover'] : true;
$kh_vm_playback_mode    = in_array( $attributes['playbackMode'] ?? '', array( 'modal', 'inline' ), true ) ? $attributes['playbackMode'] : 'modal';
$kh_vm_overlay_opacity  = max( 0, min( 1, (float) ( $attributes['imageOverlayOpacity'] ?? 0.3 ) ) );
$kh_vm_aspect_ratio     = in_array( $attributes['aspectRatio'] ?? '', array( '16x9', '4x3', '21x9', '1x1' ), true ) ? $attributes['aspectRatio'] : '16x9';
$kh_vm_button_style     = in_array( $attributes['buttonStyle'] ?? '', array( 'solid', 'outline', 'glass' ), true ) ? $attributes['buttonStyle'] : 'solid';
$kh_vm_backdrop_style   = in_array( $attributes['backdropStyle'] ?? '', array( 'glass-dark', 'glass-light', 'solid-dark', 'solid-light' ), true ) ? $attributes['backdropStyle'] : 'glass-dark';
$kh_vm_button_size      = max( 40, min( 150, (int) ( $attributes['buttonSize'] ?? 80 ) ) );
$kh_vm_button_color     = guten_builder_vm_validate_color_strict( $attributes['buttonColor'] ?? '', '#10b981' );
$kh_vm_icon_color       = guten_builder_vm_validate_color_strict( $attributes['iconColor'] ?? '', '#ffffff' );
$kh_vm_preload_local    = in_array( $attributes['preloadLocalVideo'] ?? '', array( 'metadata', 'none', 'auto' ), true ) ? $attributes['preloadLocalVideo'] : 'metadata';
$kh_vm_close_backdrop   = isset( $attributes['closeOnBackdrop'] ) ? (bool) $attributes['closeOnBackdrop'] : true;
$kh_vm_close_outside    = ! empty( $attributes['showCloseButtonOutside'] );
$kh_vm_dialog_aria      = sanitize_text_field( $attributes['dialogAriaLabel'] ?? 'Video Player' );
$kh_vm_play_aria        = sanitize_text_field( $attributes['playButtonAriaLabel'] ?? 'Play Video' );
$kh_vm_close_aria       = sanitize_text_field( $attributes['closeButtonAriaLabel'] ?? 'Close Video' );

/**
 * FREE defaults for PRO-only attributes.
 */
$kh_vm_hover_zoom_level  = 'none';
$kh_vm_modal_entrance    = 'zoom';
$kh_vm_teaser_badge_text = '';
$kh_vm_magnetic_pull     = false;
$kh_vm_pulse_anim        = false;
$kh_vm_autoplay          = false;
$kh_vm_mute_local        = true;
$kh_vm_force_loop        = false;
$kh_vm_start_time        = 0;

if ( empty( $kh_vm_video_url ) ) {
	return '';
}

/**
 * Cover image extraction.
 */
$kh_vm_cover_url       = '';
$kh_vm_cover_alt       = '';
$kh_vm_yt_fallback_src = '';

if ( ! empty( $attributes['coverImage']['url'] ) ) {
	$kh_vm_cover_url = esc_url_raw( $attributes['coverImage']['url'] );
	$kh_vm_cover_alt = sanitize_text_field( $attributes['coverImage']['alt'] ?? '' );
} elseif ( $kh_vm_auto_extract ) {
	if ( preg_match( '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i', $kh_vm_video_url, $kh_vm_matches ) ) {
		$kh_vm_yt_id          = sanitize_text_field( $kh_vm_matches[1] );
		$kh_vm_cover_url      = "https://img.youtube.com/vi/{$kh_vm_yt_id}/maxresdefault.jpg";
		$kh_vm_yt_fallback_src = "https://img.youtube.com/vi/{$kh_vm_yt_id}/hqdefault.jpg";
	}
}

/**
 * Filter hook for thumbnail URL customization.
 *
 * @param string $kh_vm_cover_url The thumbnail URL.
 * @param string $kh_vm_video_url The video URL.
 * @param array  $attributes      Block attributes.
 */
$kh_vm_cover_url = esc_url_raw(
	(string) apply_filters(
		'guten_builder_video_modal_thumbnail_url',
		$kh_vm_cover_url,
		$kh_vm_video_url,
		$attributes
	)
);

/**
 * CSS vars.
 */
$kh_vm_css_vars = sprintf(
	'--kh-vm-btn-c: %1$s; --kh-vm-icon-c: %2$s; --kh-vm-btn-s: %3$dpx; --kh-vm-overlay: %4$F;',
	$kh_vm_button_color,
	$kh_vm_icon_color,
	$kh_vm_button_size,
	$kh_vm_overlay_opacity
);

/**
 * Classes.
 */
$kh_vm_classes = array_filter(
	array(
		'kh-video-modal-container',
		'ratio-' . $kh_vm_aspect_ratio,
		'btn-style-' . $kh_vm_button_style,
		'zoom-' . $kh_vm_hover_zoom_level,
	)
);

$kh_vm_wrapper_attrs = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $kh_vm_classes ),
		'style' => $kh_vm_css_vars,
	)
);

$kh_vm_data_attrs = array(
	'data-url'            => esc_url( $kh_vm_video_url ),
	'data-mode'           => $kh_vm_playback_mode,
	'data-entrance'       => $kh_vm_modal_entrance,
	'data-backdrop'       => $kh_vm_backdrop_style,
	'data-autoplay'       => $kh_vm_autoplay ? 'true' : 'false',
	'data-loop'           => $kh_vm_force_loop ? 'true' : 'false',
	'data-start'          => (string) $kh_vm_start_time,
	'data-mute'           => $kh_vm_mute_local ? 'true' : 'false',
	'data-close-backdrop' => $kh_vm_close_backdrop ? 'true' : 'false',
	'data-close-outside'  => $kh_vm_close_outside ? 'true' : 'false',
	'data-preload'        => $kh_vm_preload_local,
	'data-aria-dialog'    => $kh_vm_dialog_aria,
	'data-aria-close'     => $kh_vm_close_aria,
);
?>

<div <?php echo $kh_vm_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="kh-vm-preview-layer">
		<?php if ( $kh_vm_cover_url ) : ?>
			<img
				src="<?php echo esc_url( $kh_vm_cover_url ); ?>"
				alt="<?php echo esc_attr( $kh_vm_cover_alt ); ?>"
				class="kh-vm-cover-img"
				loading="lazy"
				decoding="async"
				<?php if ( $kh_vm_yt_fallback_src ) : ?>
					data-fallback-src="<?php echo esc_url( $kh_vm_yt_fallback_src ); ?>"
				<?php endif; ?>
			/>
		<?php else : ?>
			<div class="kh-vm-fallback-bg"></div>
		<?php endif; ?>

		<div class="kh-vm-overlay" aria-hidden="true"></div>

		<div
			class="kh-vm-play-trigger-zone"
			<?php
			foreach ( $kh_vm_data_attrs as $kh_vm_attr_key => $kh_vm_attr_value ) {
				echo ' ' . esc_attr( $kh_vm_attr_key ) . '="' . esc_attr( $kh_vm_attr_value ) . '"';
			}
			?>
		>
			<button
				type="button"
				class="kh-vm-play-button"
				<?php if ( 'modal' === $kh_vm_playback_mode ) : ?>
					aria-haspopup="dialog"
				<?php endif; ?>
				aria-label="<?php echo esc_attr( $kh_vm_play_aria ); ?>"
			>
				<span class="kh-vm-play-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-hidden="true" focusable="false">
						<path d="M8 5v14l11-7z" />
					</svg>
				</span>
			</button>
		</div>
	</div>
</div>
<?php

/**
 * Action hook after rendering.
 *
 * @param array $attributes Block attributes.
 * @param mixed $block      Block instance.
 */
do_action( 'guten_builder_after_video_modal_render', $attributes, $block );