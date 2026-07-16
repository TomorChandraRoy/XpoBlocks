import { __ } from '@wordpress/i18n';

const checkIcon = (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
		<polyline points="20 6 9 17 4 12" />
	</svg>
);

const crossIcon = (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', opacity: 0.5 }}>
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="6" y1="6" x2="18" y2="18" />
	</svg>
);

const PricingTable = ( { attributes, setAttributes, RichTextEl, isBackend = false } ) => {
	const {
		blockId,
		pricingTables = [],
		themeStyle = 'style-1'
	} = attributes;

	const updateTableAttr = ( index, key, value ) => {
		const newTables = [ ...pricingTables ];
		newTables[ index ] = { ...newTables[ index ], [ key ]: value };
		setAttributes( { pricingTables: newTables } );
	};

	const updateFeatureLabel = ( tableIndex, featureIndex, value ) => {
		const newTables = pricingTables.map( t => {
			const features = [ ...(t.features || []) ];
			if ( features[ featureIndex ] ) {
				features[ featureIndex ] = { ...features[ featureIndex ], label: value };
			}
			return { ...t, features };
		});
		setAttributes( { pricingTables: newTables } );
	};

	return (
		<div className={ `gbb-pricing-grid-container ${ blockId } ${ themeStyle }` }>
			{ pricingTables.map( ( table, tableIndex ) => {
				const isFeatured = table.isFeatured;

				return (
					<div key={ tableIndex } className={ `gbb-pricing-card ${ isFeatured ? 'is-featured' : '' }` }>
						{ isFeatured && table.badgeText && (
							<div className="gbb-pricing-badge">
								{ table.badgeText }
							</div>
						) }

						<div className="gbb-pricing-header">
							<RichTextEl
								tagName="h3"
								className="gbb-pricing-name"
								value={ table.name }
								onChange={ ( val ) => updateTableAttr( tableIndex, 'name', val ) }
								placeholder={ __( 'Plan Name', 'guten-builder-blocks' ) }
							/>
							<div className="gbb-pricing-rate">
								<RichTextEl
									tagName="span"
									className="gbb-pricing-currency"
									value={ table.priceCurrency }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'priceCurrency', val ) }
									placeholder="$"
								/>
								<RichTextEl
									tagName="span"
									className="gbb-pricing-price"
									value={ table.price }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'price', val ) }
									placeholder="0"
								/>
								<span className="gbb-pricing-period-separator">/</span>
								<RichTextEl
									tagName="span"
									className="gbb-pricing-period"
									value={ table.period }
									onChange={ ( val ) => updateTableAttr( tableIndex, 'period', val ) }
									placeholder="mo"
								/>
							</div>
						</div>

						<ul className="gbb-pricing-features">
							{ ( table.features || [] ).map( ( feature, featureIndex ) => (
								<li
									key={ featureIndex }
									className={ `gbb-pricing-feature-item ${feature.isEnable ? 'is-enabled' : 'is-disabled'}` }
								>
									<span className="gbb-feature-icon">
										{ feature.isEnable ? checkIcon : crossIcon }
									</span>
									<RichTextEl
										tagName="span"
										value={ feature.label }
										onChange={ ( val ) => updateFeatureLabel( tableIndex, featureIndex, val ) }
										placeholder={ __( 'Feature description', 'guten-builder-blocks' ) }
									/>
								</li>
							) ) }
						</ul>

						<RichTextEl
							tagName="a"
							href="#"
							className="gbb-pricing-button"
							value={ table.linkLabel }
							onChange={ ( val ) => updateTableAttr( tableIndex, 'linkLabel', val ) }
							placeholder={ __( 'Buy Now', 'guten-builder-blocks' ) }
							onClick={ isBackend ? ( e ) => e.preventDefault() : undefined }
						/>
					</div>
				);
			} ) }
		</div>
	);
};

export default PricingTable;
