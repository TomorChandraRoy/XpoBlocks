import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const checkIcon = (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={ { marginRight: '8px', color: 'inherit' } }>
		<polyline points="20 6 9 17 4 12" />
	</svg>
);

const crossIcon = (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={ { marginRight: '8px', color: 'inherit', opacity: 0.5 } }>
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="6" y1="6" x2="18" y2="18" />
	</svg>
);

const PricingTable = ( { attributes, setAttributes } ) => {
	const {
		blockId,
		pricingTables = [],
		columns,
		columnGap,
		borderRadius,
		cardBgColor,
		cardTextColor,
		buttonBgColor,
		buttonTextColor,
		featuredButtonBgColor,
		featuredButtonTextColor
	} = attributes;

	const updateTableAttr = ( index, key, value ) => {
		const newTables = [ ...pricingTables ];
		newTables[ index ] = { ...newTables[ index ], [ key ]: value };
		setAttributes( { pricingTables: newTables } );
	};

	const updateFeatureLabel = ( tableIndex, featureIndex, value ) => {
		const newTables = [ ...pricingTables ];
		const features = [ ...newTables[ tableIndex ].features ];
		features[ featureIndex ] = { ...features[ featureIndex ], label: value };
		newTables[ tableIndex ] = { ...newTables[ tableIndex ], features };
		setAttributes( { pricingTables: newTables } );
	};

	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${ columns }, 1fr)`,
		gap: `${ columnGap }px`,
		width: '100%'
	};

	return (
		<div className={ `gbb-pricing-grid-container ${ blockId }` } style={ gridStyle }>
			{ pricingTables.map( ( table, tableIndex ) => {
				const isFeatured = table.isFeatured;
				const planColor = table.color || '#3b82f6';

				const cardStyle = {
					background: cardBgColor,
					color: cardTextColor,
					borderRadius: `${ borderRadius }px`,
					border: isFeatured ? `2px solid ${ planColor }` : '1px solid #e2e8f0',
					boxShadow: isFeatured ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
					position: 'relative',
					padding: '32px 24px',
					display: 'flex',
					flexDirection: 'column',
					boxSizing: 'border-box'
				};

				const headerStyle = {
					borderBottom: '1px solid #e2e8f0',
					paddingBottom: '20px',
					marginBottom: '20px',
					textAlign: 'center'
				};

				const btnStyle = {
					display: 'inline-block',
					textAlign: 'center',
					padding: '12px 24px',
					borderRadius: '6px',
					fontWeight: '600',
					textDecoration: 'none',
					marginTop: 'auto',
					transition: 'all 0.2s',
					background: isFeatured ? ( featuredButtonBgColor || planColor ) : buttonBgColor,
					color: isFeatured ? featuredButtonTextColor : buttonTextColor,
					border: `1px solid ${ isFeatured ? ( featuredButtonBgColor || planColor ) : buttonBgColor }`
				};

				return (
					<div key={ tableIndex } className={ `gbb-pricing-card ${ isFeatured ? 'is-featured' : '' }` } style={ cardStyle }>
						{ isFeatured && table.badgeText && (
							<div
								className="gbb-pricing-badge"
								style={ {
									position: 'absolute',
									top: '12px',
									right: '12px',
									background: planColor,
									color: '#ffffff',
									padding: '4px 10px',
									borderRadius: '20px',
									fontSize: '10px',
									fontWeight: 'bold',
									letterSpacing: '1px'
								} }
							>
								{ table.badgeText }
							</div>
						) }

						<div className="gbb-pricing-header" style={ headerStyle }>
							<RichText
								tagName="h3"
								className="gbb-pricing-name"
								value={ table.name }
								onChange={ ( val ) => updateTableAttr( tableIndex, 'name', val ) }
								placeholder={ __( 'Plan Name', 'guten-builder-blocks' ) }
								style={ { fontSize: '20px', fontWeight: '700', margin: '0 0 10px 0', color: isFeatured ? planColor : 'inherit' } }
							/>
							<div className="gbb-pricing-rate" style={ { display: 'flex', justifyContent: 'center', alignItems: 'baseline', margin: '15px 0' } }>
								<RichText
									tagName="span"
									className="gbb-pricing-currency"
									value={ table.priceCurrency }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'priceCurrency', val ) }
									placeholder="$"
									style={ { fontSize: '20px', fontWeight: '600', marginRight: '2px' } }
								/>
								<RichText
									tagName="span"
									className="gbb-pricing-price"
									value={ table.price }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'price', val ) }
									placeholder="0"
									style={ { fontSize: '42px', fontWeight: '800', lineHeight: 1 } }
								/>
								<span style={ { fontSize: '14px', opacity: 0.7, marginLeft: '4px' } }>/</span>
								<RichText
									tagName="span"
									className="gbb-pricing-period"
									value={ table.period }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'period', val ) }
									placeholder="mo"
									style={ { fontSize: '14px', opacity: 0.7 } }
								/>
							</div>
						</div>

						<ul className="gbb-pricing-features" style={ { listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px' } }>
							{ ( table.features || [] ).map( ( feature, featureIndex ) => (
								<li
									key={ featureIndex }
									style={ {
										display: 'flex',
										alignItems: 'center',
										fontSize: '14px',
										color: feature.isEnable ? 'inherit' : 'rgba(0,0,0,0.38)'
									} }
								>
									<span style={ { display: 'flex', alignItems: 'center', color: feature.isEnable ? planColor : 'inherit' } }>
										{ feature.isEnable ? checkIcon : crossIcon }
									</span>
									<RichText
										tagName="span"
										value={ feature.label }
										onChange={ ( val ) => updateFeatureLabel( tableIndex, featureIndex, val ) }
										placeholder={ __( 'Feature description', 'guten-builder-blocks' ) }
									/>
								</li>
							) ) }
						</ul>

						<RichText
							tagName="a"
							href="#"
							className="gbb-pricing-button"
							value={ table.linkLabel }
							onChange={ ( val ) => updateTableAttr( tableIndex, 'linkLabel', val ) }
							placeholder={ __( 'Buy Now', 'guten-builder-blocks' ) }
							style={ btnStyle }
							onClick={ ( e ) => e.preventDefault() }
						/>
					</div>
				);
			} ) }
		</div>
	);
};

export default PricingTable;
