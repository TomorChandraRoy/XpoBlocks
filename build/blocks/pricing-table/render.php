<?php
/**
 * Pricing Table Grid Block - Server Render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$block_id       = ! empty( $attributes['blockId'] ) ? sanitize_html_class( $attributes['blockId'] ) : wp_unique_id( 'gbb-price-' );
$pricing_tables = ! empty( $attributes['pricingTables'] ) && is_array( $attributes['pricingTables'] ) ? $attributes['pricingTables'] : array();
$columns        = max( 1, min( 4, (int) ( $attributes['columns'] ?? 3 ) ) );
$column_gap     = max( 0, (int) ( $attributes['columnGap'] ?? 24 ) );
$border_radius  = max( 0, (int) ( $attributes['borderRadius'] ?? 12 ) );

// Theme colors
$card_bg      = sanitize_text_field( $attributes['cardBgColor'] ?? '#ffffff' );
$card_color   = sanitize_text_field( $attributes['cardTextColor'] ?? '#1e293b' );
$btn_bg       = sanitize_text_field( $attributes['buttonBgColor'] ?? '#3b82f6' );
$btn_color    = sanitize_text_field( $attributes['buttonTextColor'] ?? '#ffffff' );
$feat_btn_bg  = sanitize_text_field( $attributes['featuredButtonBgColor'] ?? '#10b981' );
$feat_btn_col = sanitize_text_field( $attributes['featuredButtonTextColor'] ?? '#ffffff' );

$wrapper_style = sprintf(
	'--gbb-price-columns: %s; --gbb-price-gap: %spx; --gbb-price-card-radius: %spx; --gbb-price-card-bg: %s; --gbb-price-card-color: %s; --gbb-price-btn-bg: %s; --gbb-price-btn-color: %s; --gbb-price-feat-btn-bg: %s; --gbb-price-feat-btn-color: %s;',
	$columns,
	$column_gap,
	$border_radius,
	$card_bg,
	$card_color,
	$btn_bg,
	$btn_color,
	$feat_btn_bg,
	$feat_btn_col
);

$wrapper_classes = array_filter(
	array(
		'gbb-pricing-grid-container',
		$block_id,
	)
);

$wrapper_attrs = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $wrapper_classes ),
		'style' => $wrapper_style,
	)
);

if ( empty( $pricing_tables ) ) {
	return;
}
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php foreach ( $pricing_tables as $index => $table ) :
		$is_featured = ! empty( $table['isFeatured'] );
		$plan_color  = sanitize_text_field( $table['color'] ?? '#3b82f6' );
		$badge_text  = ! empty( $table['badgeText'] ) ? sanitize_text_field( $table['badgeText'] ) : '';
		$features    = ! empty( $table['features'] ) && is_array( $table['features'] ) ? $table['features'] : array();

		$card_inline_style = sprintf(
			'border: %s; border-radius: var(--gbb-price-card-radius); background: var(--gbb-price-card-bg); color: var(--gbb-price-card-color);',
			$is_featured ? '2px solid ' . $plan_color : '1px solid #e2e8f0'
		);

		$btn_inline_style = sprintf(
			'background: %s; color: %s; border: 1px solid %s;',
			$is_featured ? ( $feat_btn_bg ? $feat_btn_bg : $plan_color ) : $btn_bg,
			$is_featured ? $feat_btn_col : $btn_color,
			$is_featured ? ( $feat_btn_bg ? $feat_btn_bg : $plan_color ) : $btn_bg
		);
	?>
		<div class="gbb-pricing-card <?php echo $is_featured ? 'is-featured' : ''; ?>" style="<?php echo esc_attr( $card_inline_style ); ?>">
			
			<?php if ( $is_featured && ! empty( $badge_text ) ) : ?>
				<div class="gbb-pricing-badge" style="background: <?php echo esc_attr( $plan_color ); ?>; color: #ffffff;">
					<?php echo esc_html( $badge_text ); ?>
				</div>
			<?php endif; ?>

			<div class="gbb-pricing-header">
				<h3 class="gbb-pricing-name" style="color: <?php echo esc_attr( $is_featured ? $plan_color : 'inherit' ); ?>;">
					<?php echo wp_kses_post( $table['name'] ?? '' ); ?>
				</h3>
				<div class="gbb-pricing-rate">
					<span class="gbb-pricing-currency"><?php echo wp_kses_post( $table['priceCurrency'] ?? '$' ); ?></span>
					<span class="gbb-pricing-price"><?php echo wp_kses_post( $table['price'] ?? '0' ); ?></span>
					<span class="gbb-pricing-period-separator">/</span>
					<span class="gbb-pricing-period"><?php echo wp_kses_post( $table['period'] ?? 'mo' ); ?></span>
				</div>
			</div>

			<ul class="gbb-pricing-features">
				<?php foreach ( $features as $feature ) : 
					$is_enable = ! empty( $feature['isEnable'] );
				?>
					<li class="gbb-pricing-feature-item <?php echo $is_enable ? 'is-enabled' : 'is-disabled'; ?>" style="color: <?php echo $is_enable ? 'inherit' : 'rgba(0,0,0,0.38)'; ?>;">
						<span class="gbb-feature-icon" style="color: <?php echo $is_enable ? esc_attr( $plan_color ) : 'inherit'; ?>;">
							<?php if ( $is_enable ) : ?>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							<?php else : ?>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5;">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							<?php endif; ?>
						</span>
						<span class="gbb-feature-label"><?php echo wp_kses_post( $feature['label'] ?? '' ); ?></span>
					</li>
				<?php endforeach; ?>
			</ul>

			<a 
				href="<?php echo esc_url( $table['link'] ?? '#' ); ?>" 
				class="gbb-pricing-button"
				style="<?php echo esc_attr( $btn_inline_style ); ?>"
			>
				<?php echo wp_kses_post( $table['linkLabel'] ?? __( 'Buy Now', 'guten-builder-blocks' ) ); ?>
			</a>

		</div>
	<?php endforeach; ?>
</div>
