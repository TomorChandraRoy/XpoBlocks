<?php
/**
 * Kinetic Marquee - Server-Side Render Logic
 * Version: 1.0.2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Helper function for strict color validation
if ( ! function_exists( 'guten_builder_mq_validate_color_strict' ) ) {
    function guten_builder_mq_validate_color_strict( $color, $default = 'transparent' ) {
        $color = is_string( $color ) ? trim( $color ) : '';
        if ( '' === $color ) return $default;
        if ( preg_match( '/^#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?$/', $color ) ) return $color;
        if ( preg_match( '/^rgba?\(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*(?:,\s*(0|0?\.\d+|1(\.0+)?)\s*)?\)$/', $color ) ) return $color;
        if ( preg_match( '/^hsl(a)?\(\s*(36[0]|3[0-5]\d|[12]?\d{1,2})\s*,\s*(100|[1-9]?\d)%\s*,\s*(100|[1-9]?\d)%\s*(?:,\s*(0|0?\.\d+|1(\.0+)?)\s*)?\)$/', $color ) ) return $color;
        if ( preg_match( '/^var\(--[a-zA-Z0-9_-]+\)$/', $color ) ) return $color;
        return $default;
    }
}

// Helper function to render individual marquee items
if ( ! function_exists( 'guten_builder_mq_render_item_markup' ) ) {
    function guten_builder_mq_render_item_markup( $item, $index, $is_first_group, $show_frame, $frame_shadow, $open_in_new_tab, $origin_index ) {
        $kh_mq_item      = is_array( $item ) ? $item : array();
        $kh_mq_url       = ! empty( $kh_mq_item['url'] ) ? esc_url( $kh_mq_item['url'] ) : '';
        $kh_mq_alt       = ! empty( $kh_mq_item['alt'] ) ? sanitize_text_field( $kh_mq_item['alt'] ) : __( 'Marquee brand logo', 'guten-builder-blocks' );
        $kh_mq_link      = ! empty( $kh_mq_item['link'] ) ? esc_url( $kh_mq_item['link'] ) : '';
        $kh_mq_loading   = ( $is_first_group && $index < 4 ) ? 'eager' : 'lazy';
        $kh_mq_frame_cls = $show_frame ? 'kh-mq-marquee-frame shadow-' . sanitize_html_class( $frame_shadow ) : '';

        $kh_mq_img_html = sprintf( '<img src="%1$s" alt="%2$s" loading="%3$s" decoding="async" />', $kh_mq_url, esc_attr( $kh_mq_alt ), esc_attr( $kh_mq_loading ) );
        $kh_mq_content_html = $kh_mq_img_html;

        if ( ! empty( $kh_mq_link ) ) {
            $kh_mq_target     = $open_in_new_tab ? '_blank' : '_self';
            $kh_mq_rel        = $open_in_new_tab ? 'noopener noreferrer' : '';
            /* translators: %s: brand or image alt text */
            $kh_mq_aria_label = sprintf( __( 'Visit %s website', 'guten-builder-blocks' ), $kh_mq_alt );
            $kh_mq_content_html = sprintf( '<a href="%1$s" target="%2$s"%3$s aria-label="%4$s">%5$s</a>', $kh_mq_link, esc_attr( $kh_mq_target ), $kh_mq_rel ? ' rel="' . esc_attr( $kh_mq_rel ) . '"' : '', esc_attr( $kh_mq_aria_label ), $kh_mq_img_html );
        }

        return sprintf( '<div class="kh-mq-marquee-item" data-kh-mq-origin-index="%1$d"><div class="kh-mq-marquee-item-inner"><div class="%2$s">%3$s</div></div></div>', (int) $origin_index, esc_attr( $kh_mq_frame_cls ), $kh_mq_content_html );
    }
}

// Main render logic
$kh_mq_images = ! empty( $attributes['images'] ) && is_array( $attributes['images'] ) ? $attributes['images'] : array();
if ( empty( $kh_mq_images ) ) return;

$kh_mq_align_list     = array( 'full', 'wide' );
$kh_mq_align          = in_array( $attributes['align'] ?? '', $kh_mq_align_list, true ) ? $attributes['align'] : 'full';

$kh_mq_rail_pos_list  = array( 'right', 'bottom' );
$kh_mq_rail_position  = in_array( $attributes['progressRailPosition'] ?? '', $kh_mq_rail_pos_list, true ) ? $attributes['progressRailPosition'] : 'right';

$kh_mq_shadow_list    = array( 'soft', 'crisp', 'float', 'glow', 'elegant' );
$kh_mq_frame_shadow_list = array( 'soft', 'medium', 'hard', 'float' );
$kh_mq_entrance_list  = array( 'none', 'fade', 'slide', 'zoom' );

$kh_mq_speed               = max( 1, min( 200, (int) ( $attributes['speed'] ?? 30 ) ) );
$kh_mq_item_height         = max( 20, min( 500, (int) ( $attributes['itemHeight'] ?? 120 ) ) );
$kh_mq_frame_radius        = max( 0, min( 100, (int) ( $attributes['frameRadius'] ?? 12 ) ) );
$kh_mq_sibling_blur_int    = max( 1, min( 50, (int) ( $attributes['siblingBlurIntensity'] ?? 3 ) ) );

$kh_mq_frame_bg = guten_builder_mq_validate_color_strict( $attributes['frameBg'] ?? '', '#ffffff' );

$kh_mq_edge_fade              = ! empty( $attributes['edgeFade'] );
$kh_mq_open_in_new_tab        = ! empty( $attributes['openInNewTab'] );
$kh_mq_reverse_direction      = ! empty( $attributes['reverseDirection'] );
$kh_mq_lift_effect            = ! empty( $attributes['liftEffect'] );
$kh_mq_show_frame             = ! empty( $attributes['showFrame'] );
$kh_mq_show_progress_rail     = ! empty( $attributes['showProgressRail'] );
$kh_mq_show_indicator         = ! empty( $attributes['showInteractionIndicator'] );
$kh_mq_highlight_active       = ! empty( $attributes['highlightActiveCenter'] );
$kh_mq_sibling_blur           = ! empty( $attributes['siblingBlur'] );
$kh_mq_pause_on_hover         = ! empty( $attributes['pauseOnHover'] );
$kh_mq_hover_slow_down        = ! empty( $attributes['hoverSlowDown'] );

// Enforce mutual exclusion: pause takes priority over slow
if ( $kh_mq_pause_on_hover ) {
    $kh_mq_hover_slow_down = false;
}

// Runtime defaults
$kh_mq_mobile_item_height  = $kh_mq_item_height;
$kh_mq_logo_max_width      = 200;
$kh_mq_gap                 = 50;
$kh_mq_use_max_width       = false;
$kh_mq_grayscale           = false;
$kh_mq_idle_opacity        = false;
$kh_mq_container_shadow    = false;
$kh_mq_shadow_style        = 'soft';
$kh_mq_shadow_color        = '';
$kh_mq_hover_shadow_color  = '';
$kh_mq_shadow_softness        = '';
$kh_mq_mobile_shadow_softness = '';
$kh_mq_shadow_opacity         = '';
$kh_mq_hover_shadow_opacity   = '';
$kh_mq_hide_mobile            = false;
$kh_mq_hide_desktop        = false;
$kh_mq_entrance_anim       = 'none';
$kh_mq_entrance_delay      = 0;
$kh_mq_frame_shadow        = 'soft';

// Map all images
$kh_mq_images = array_map( static function ( $img ) { return is_array( $img ) ? $img : (array) $img; }, $kh_mq_images );
if ( empty( $kh_mq_images ) ) return;

$kh_mq_cloned_images    = $kh_mq_images;
$kh_mq_clone_target     = max( 30, count( $kh_mq_images ) );
while ( count( $kh_mq_cloned_images ) < $kh_mq_clone_target ) {
    $kh_mq_cloned_images = array_merge( $kh_mq_cloned_images, $kh_mq_images );
}

$kh_mq_dynamic_duration = $kh_mq_speed * ( count( $kh_mq_cloned_images ) / 5 );

$kh_mq_css_vars = sprintf(
    '--kh-mq-duration: %1$.2Fs; --kh-mq-h: %2$dpx; --kh-mq-h-mob: %3$dpx; --kh-mq-gap: %4$dpx; --kh-mq-frame-bg: %5$s; --kh-mq-frame-rad: %6$dpx; --kh-mq-max-w: %7$s; --kh-mq-blur: %8$dpx;',
    $kh_mq_dynamic_duration,
    $kh_mq_item_height,
    $kh_mq_mobile_item_height,
    $kh_mq_gap,
    $kh_mq_frame_bg,
    $kh_mq_frame_radius,
    $kh_mq_use_max_width ? $kh_mq_logo_max_width . 'px' : 'none',
    $kh_mq_sibling_blur_int
);

$kh_mq_outer_classes = array_filter(
    array(
        'kh-mq-marquee-container',
        'full' === $kh_mq_align ? 'alignfull' : '',
        $kh_mq_pause_on_hover ? 'is-pause-hover' : '',
        $kh_mq_hover_slow_down ? 'is-slow-hover' : '',
        $kh_mq_lift_effect ? 'has-lift-effect' : '',
        $kh_mq_reverse_direction ? 'is-reversed' : '',
        $kh_mq_show_frame ? 'has-frames' : '',
        $kh_mq_show_progress_rail ? 'has-progress-rail' : '',
        $kh_mq_show_progress_rail ? 'rail-pos-' . $kh_mq_rail_position : '',
        $kh_mq_show_indicator ? 'has-interaction-indicator' : '',
        $kh_mq_highlight_active ? 'has-active-center-highlight' : '',
        $kh_mq_sibling_blur ? 'has-sibling-blur' : '',
    )
);

$kh_mq_inner_classes = array_filter( array( 'kh-mq-marquee-inner', $kh_mq_edge_fade ? 'has-edge-fade' : '' ) );

$kh_mq_wrapper_attrs = get_block_wrapper_attributes(
    array(
        'class'                         => implode( ' ', $kh_mq_outer_classes ),
        'style'                         => $kh_mq_css_vars,
        'data-progress-rail'            => $kh_mq_show_progress_rail ? 'true' : 'false',
        'data-interaction-indicator'    => $kh_mq_show_indicator ? 'true' : 'false',
        'data-active-center-highlight'  => $kh_mq_highlight_active ? 'true' : 'false',
        'data-original-count'           => (string) count( $kh_mq_images ),
        'data-progress-count'           => (string) count( $kh_mq_images ),
        'role'                          => 'group',
        'aria-label'                    => __( 'Auto-scrolling Gallery', 'guten-builder-blocks' ),
    )
);

$kh_mq_allowed_item_tags = array(
    'div'  => array( 'class' => true, 'data-kh-mq-origin-index' => true ),
    'a'    => array( 'href' => true, 'target' => true, 'rel' => true, 'aria-label' => true, 'class' => true ),
    'img'  => array( 'src' => true, 'alt' => true, 'loading' => true, 'decoding' => true, 'class' => true ),
    'span' => array( 'class' => true, 'data-state' => true ),
);
?>

<div <?php echo $kh_mq_wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <?php if ( $kh_mq_show_indicator ) : ?>
        <div class="kh-mq-interaction-indicator" data-state="running">
            <span class="kh-mq-indicator-label kh-mq-indicator-running"><?php echo esc_html__( 'RUNNING', 'guten-builder-blocks' ); ?></span>
            <span class="kh-mq-indicator-label kh-mq-indicator-paused"><?php echo esc_html__( 'PAUSED', 'guten-builder-blocks' ); ?></span>
            <span class="kh-mq-indicator-label kh-mq-indicator-slow"><?php echo esc_html__( 'SLOW', 'guten-builder-blocks' ); ?></span>
        </div>
    <?php endif; ?>

    <?php if ( $kh_mq_show_progress_rail ) : ?>
        <div class="kh-mq-progress-rail">
            <?php for ( $kh_mq_i = 0; $kh_mq_i < count( $kh_mq_images ); $kh_mq_i++ ) : ?>
                <span class="kh-mq-progress-segment <?php echo esc_attr( 0 === $kh_mq_i ? 'is-active' : '' ); ?>"></span>
            <?php endfor; ?>
        </div>
    <?php endif; ?>

    <div class="<?php echo esc_attr( implode( ' ', $kh_mq_inner_classes ) ); ?>">
        <div class="kh-mq-marquee-track">
            <div class="kh-mq-marquee-group">
                <?php foreach ( $kh_mq_cloned_images as $kh_mq_index => $kh_mq_img ) : ?>
                    <?php $kh_mq_origin_index = $kh_mq_index % count( $kh_mq_images ); ?>
                    <?php echo wp_kses( guten_builder_mq_render_item_markup( $kh_mq_img, $kh_mq_index, true, $kh_mq_show_frame, $kh_mq_frame_shadow, $kh_mq_open_in_new_tab, $kh_mq_origin_index ), $kh_mq_allowed_item_tags ); ?>
                <?php endforeach; ?>
            </div>

            <div class="kh-mq-marquee-group" aria-hidden="true">
                <?php foreach ( $kh_mq_cloned_images as $kh_mq_index => $kh_mq_img ) : ?>
                    <?php $kh_mq_origin_index = $kh_mq_index % count( $kh_mq_images ); ?>
                    <?php echo wp_kses( guten_builder_mq_render_item_markup( $kh_mq_img, $kh_mq_index, false, $kh_mq_show_frame, $kh_mq_frame_shadow, $kh_mq_open_in_new_tab, $kh_mq_origin_index ), $kh_mq_allowed_item_tags ); ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>