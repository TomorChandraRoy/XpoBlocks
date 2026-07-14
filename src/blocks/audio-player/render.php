<?php
/**
 * Kinetic Audio Player - Server Render
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'guten_builder_ap_validate_color_strict' ) ) {
	/**
	 * Validate a strict subset of CSS color values.
	 *
	 * @param string $color   Raw color value.
	 * @param string $default Default fallback color.
	 * @return string
	 */
	function guten_builder_ap_validate_color_strict( $color, $default = 'transparent' ) {
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

$kh_ap_audio_url = ! empty( $attributes['audioUrl'] ) ? esc_url_raw( $attributes['audioUrl'] ) : '';

if ( empty( $kh_ap_audio_url ) && ! is_admin() ) {
	return;
}

if ( wp_script_is( 'kinetichub-core-engine', 'registered' ) ) {
	wp_enqueue_script( 'kinetichub-core-engine' );
}

$kh_ap_block_id  = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'kh-ap-' );
$kh_ap_text      = ! empty( $attributes['text'] ) ? wp_kses_post( $attributes['text'] ) : '';
$kh_ap_subtitle  = ! empty( $attributes['subtitle'] ) ? wp_kses_post( $attributes['subtitle'] ) : '';
$kh_ap_cover_url = ! empty( $attributes['coverUrl'] ) ? esc_url_raw( $attributes['coverUrl'] ) : '';

$kh_ap_layout_list    = array( 'extended', 'compact' );
$kh_ap_player_layout  = in_array( $attributes['playerLayout'] ?? '', $kh_ap_layout_list, true ) ? $attributes['playerLayout'] : 'extended';

$kh_ap_preload_list      = array( 'none', 'metadata', 'auto' );
$kh_ap_preload_strategy  = in_array( $attributes['preloadStrategy'] ?? '', $kh_ap_preload_list, true ) ? $attributes['preloadStrategy'] : 'metadata';



$kh_ap_wave_list = array( 'default' );

$kh_ap_waveform_style  = in_array( $attributes['waveformStyle'] ?? '', $kh_ap_wave_list, true ) ? $attributes['waveformStyle'] : 'default';

$kh_ap_time_list         = array( 'none', 'elapsed', 'remaining', 'total' );
$kh_ap_time_display_mode = in_array( $attributes['timeDisplayMode'] ?? '', $kh_ap_time_list, true ) ? $attributes['timeDisplayMode'] : 'elapsed';

$kh_ap_shadow_list   = array( 'soft', 'crisp', 'float', 'glow', 'elegant' );
$kh_ap_shadow_style  = in_array( $attributes['shadowStyle'] ?? '', $kh_ap_shadow_list, true ) ? $attributes['shadowStyle'] : 'soft';

$kh_ap_align_list  = array( 'flex-start', 'center', 'flex-end' );
$kh_ap_align       = in_array( $attributes['align'] ?? '', $kh_ap_align_list, true ) ? $attributes['align'] : 'center';

$kh_ap_entrance_list  = array( 'none', 'fade', 'slide', 'zoom' );
$kh_ap_entrance_anim  = in_array( $attributes['entranceAnimation'] ?? '', $kh_ap_entrance_list, true ) ? $attributes['entranceAnimation'] : 'none';

$kh_ap_compact_size    = max( 60, min( 300, (int) ( $attributes['compactSize'] ?? 160 ) ) );
$kh_ap_border_radius   = max( 0, min( 50, (int) ( $attributes['borderRadius'] ?? 50 ) ) );
$kh_ap_padding_v       = max( 5, min( 40, (int) ( $attributes['paddingV'] ?? 16 ) ) );
$kh_ap_padding_h       = max( 10, min( 60, (int) ( $attributes['paddingH'] ?? 32 ) ) );
$kh_ap_entrance_delay  = max( 0.0, min( 10.0, (float) ( $attributes['entranceDelay'] ?? 0 ) ) );

$kh_ap_container_shadow    = ! empty( $attributes['containerShadow'] );
$kh_ap_hide_mobile         = ! empty( $attributes['hideOnMobile'] );
$kh_ap_hide_desktop        = ! empty( $attributes['hideOnDesktop'] );
$kh_ap_show_waveform       = ! empty( $attributes['showWaveform'] );
$kh_ap_enable_seekbar      = ! empty( $attributes['enableSeekbar'] );
$kh_ap_enable_volume       = ! empty( $attributes['enableVolume'] );

$kh_ap_bg_color       = guten_builder_ap_validate_color_strict( $attributes['bgColor'] ?? '', '#111111' );
$kh_ap_text_color     = guten_builder_ap_validate_color_strict( $attributes['textColor'] ?? '', '#ffffff' );
$kh_ap_accent_color   = guten_builder_ap_validate_color_strict( $attributes['accentColor'] ?? '', '#10b981' );
$kh_ap_progress_color = guten_builder_ap_validate_color_strict( $attributes['progressColor'] ?? '', 'rgba(255,255,255,0.15)' );

$kh_ap_is_compact = 'compact' === $kh_ap_player_layout;

$kh_ap_css_vars = sprintf(
	'--kh-ap-bg: %s; --kh-ap-text: %s; --kh-ap-accent: %s; --kh-ap-progress: %s; --kh-ap-br: %s; --kh-ap-pad-v: %s; --kh-ap-pad-h: %s; --kh-ap-width: %s; --kh-ap-height: %s; --kh-ap-jc: %s;',
	$kh_ap_bg_color,
	$kh_ap_text_color,
	$kh_ap_accent_color,
	$kh_ap_enable_seekbar ? $kh_ap_progress_color : 'transparent',
	$kh_ap_is_compact ? '50%' : $kh_ap_border_radius . 'px',
	$kh_ap_is_compact ? '0px' : $kh_ap_padding_v . 'px',
	$kh_ap_is_compact ? '0px' : $kh_ap_padding_h . 'px',
	$kh_ap_is_compact ? $kh_ap_compact_size . 'px' : 'auto',
	$kh_ap_is_compact ? $kh_ap_compact_size . 'px' : 'auto',
	$kh_ap_is_compact ? 'center' : $kh_ap_align
);

if ( $kh_ap_entrance_delay > 0 ) {
	$kh_ap_css_vars .= sprintf( ' animation-delay: %ss;', $kh_ap_entrance_delay );
}

$kh_ap_wrapper_classes = array_filter(
	array(
		'kh-ap-wrapper',
		$kh_ap_block_id,
		'none' !== $kh_ap_entrance_anim ? 'kh-entrance anim-' . $kh_ap_entrance_anim : '',
		$kh_ap_hide_mobile ? 'kh-hide-mobile' : '',
		$kh_ap_hide_desktop ? 'kh-hide-desktop' : '',
	)
);

$kh_ap_wrapper_attrs = get_block_wrapper_attributes(
	array(
		'class'        => implode( ' ', $kh_ap_wrapper_classes ),
		'style'        => sprintf(
			'display: flex; justify-content: %s; align-items: center; width: 100%%; position: relative; z-index: 20;',
			$kh_ap_align
		),
		'data-block-id'  => $kh_ap_block_id,
		'data-entrance'  => 'none' !== $kh_ap_entrance_anim ? $kh_ap_entrance_anim : null,
		'role'           => 'group',
		'aria-label'     => __( 'Audio Player Widget', 'guten-builder-blocks' ),
	)
);

$kh_ap_btn_classes = array_filter(
	array(
		'kh-ap-button',
		$kh_ap_is_compact ? 'is-compact' : 'is-extended',
		$kh_ap_enable_seekbar ? 'has-seekbar' : '',
		$kh_ap_container_shadow ? 'has-shadow shadow-' . $kh_ap_shadow_style : '',
	)
);



$kh_ap_show_tools = ! $kh_ap_is_compact && $kh_ap_enable_volume;

?>

<div <?php echo $kh_ap_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div
		class="<?php echo esc_attr( implode( ' ', $kh_ap_btn_classes ) ); ?>"
		style="<?php echo esc_attr( $kh_ap_css_vars ); ?>"
		data-audio="<?php echo esc_url( $kh_ap_audio_url ); ?>"
		data-preload="<?php echo esc_attr( $kh_ap_preload_strategy ); ?>"
		data-timemode="<?php echo esc_attr( $kh_ap_time_display_mode ); ?>"
		data-compact="<?php echo esc_attr( $kh_ap_is_compact ? 'true' : 'false' ); ?>"
		
	>
		<?php if ( $kh_ap_enable_seekbar ) : ?>
			<div
				class="kh-ap-seek-layer"
				role="slider"
				aria-label="<?php echo esc_attr__( 'Seek audio track', 'guten-builder-blocks' ); ?>"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow="0"
				aria-valuetext="00:00"
				tabindex="0"
			></div>
		<?php endif; ?>

		<?php if ( ! $kh_ap_is_compact ) : ?>
			<div class="kh-ap-progress-container" aria-hidden="true">
				<div class="kh-ap-progress-fill"></div>
			</div>
		<?php elseif ( $kh_ap_enable_seekbar ) : ?>
			<svg class="kh-ap-progress-circle-svg" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
				<circle cx="50" cy="50" r="48" fill="none" stroke="var(--kh-ap-progress)" stroke-width="4" opacity="0.3"></circle>
				<circle class="kh-ap-progress-circle-fill" cx="50" cy="50" r="48" fill="none" stroke="var(--kh-ap-accent)" stroke-width="4"></circle>
			</svg>
		<?php endif; ?>

		

		<span class="kh-ap-play-pause-trigger">
			<button class="kh-ap-absolute-trigger" aria-label="<?php echo esc_attr__( 'Play or Pause Audio', 'guten-builder-blocks' ); ?>"></button>
			<?php if ( $kh_ap_cover_url ) : ?>
				<img src="<?php echo esc_url( $kh_ap_cover_url ); ?>" class="kh-ap-cover-img" alt="<?php echo esc_attr__( 'Audio Cover', 'guten-builder-blocks' ); ?>" loading="lazy" />
			<?php else : ?>
				<span class="kh-ap-icon-main" aria-hidden="true">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="kh-ap-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="kh-ap-pause" style="display: none;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
				</span>
			<?php endif; ?>
		</span>

		<?php if ( ! $kh_ap_is_compact ) : ?>
			<span class="kh-ap-text-wrapper">
				<span class="kh-ap-title"><?php echo wp_kses_post( $kh_ap_text ); ?></span>
				<?php if ( $kh_ap_subtitle ) : ?>
					<span class="kh-ap-subtitle"><?php echo wp_kses_post( $kh_ap_subtitle ); ?></span>
				<?php endif; ?>
			</span>
		<?php endif; ?>

		<?php if ( 'none' !== $kh_ap_time_display_mode && ! $kh_ap_is_compact ) : ?>
			<span class="kh-ap-time-display">00:00</span>
		<?php endif; ?>

		<?php if ( $kh_ap_show_waveform ) : ?>
			<div class="kh-ap-visualizer is-style-<?php echo esc_attr( $kh_ap_waveform_style ); ?>" aria-hidden="true">
				<div class="kh-ap-bar"></div><div class="kh-ap-bar"></div><div class="kh-ap-bar"></div><div class="kh-ap-bar"></div>
			</div>
		<?php endif; ?>

		<?php if ( $kh_ap_show_tools ) : ?>
			<div class="kh-ap-tools">
				<?php if ( $kh_ap_enable_volume ) : ?>
					<div class="kh-ap-vol-wrapper">
						<button class="kh-ap-tool-btn kh-ap-vol-btn" aria-label="<?php echo esc_attr__( 'Mute/Unmute', 'guten-builder-blocks' ); ?>">
							<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
								<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
							</svg>
						</button>
						<input type="range" class="kh-ap-vol-slider" min="0" max="100" value="100" aria-label="<?php echo esc_attr__( 'Volume Control', 'guten-builder-blocks' ); ?>" />
					</div>
				<?php endif; ?>

				
			</div>
		<?php endif; ?>
	</div>

	<noscript>
		<audio src="<?php echo esc_url( $kh_ap_audio_url ); ?>" controls style="margin-top: 15px; width: 100%; max-width: 300px;"></audio>
	</noscript>
</div>