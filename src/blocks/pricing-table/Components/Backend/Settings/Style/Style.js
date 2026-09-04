// import { __ } from '@wordpress/i18n';
// import { PanelBody, RangeControl, ColorPalette } from '@wordpress/components';

const Style = ( { attributes, setAttributes } ) => {
	const {
		// borderRadius,
		// cardBgColor,
		// cardTextColor,
		// buttonBgColor,
		// buttonTextColor,
		// featuredButtonBgColor,
		// featuredButtonTextColor
	} = attributes;

	return (
		<>
			{/* <PanelBody title={ __( '🎨 Card Styling', 'guten-builder-blocks' ) } initialOpen={ true }>
				<p style={ { fontWeight: 'bold', margin: '0 0 5px 0' } }>{ __( 'Card Background Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ cardBgColor }
					onChange={ ( val ) => setAttributes( { cardBgColor: val || '#ffffff' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Card Text Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ cardTextColor }
					onChange={ ( val ) => setAttributes( { cardTextColor: val || '#1e293b' } ) }
				/>

				<hr />

				<RangeControl
					label={ __( 'Card Border Radius (px)', 'guten-builder-blocks' ) }
					value={ borderRadius }
					onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
					min={ 0 }
					max={ 40 }
				/>
			</PanelBody>

			<PanelBody title={ __( '🛍️ Button Styling', 'guten-builder-blocks' ) } initialOpen={ false }>
				<p style={ { fontWeight: 'bold', margin: '0 0 5px 0' } }>{ __( 'Default Button Background', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ buttonBgColor }
					onChange={ ( val ) => setAttributes( { buttonBgColor: val || '#3b82f6' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Default Button Text Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ buttonTextColor }
					onChange={ ( val ) => setAttributes( { buttonTextColor: val || '#ffffff' } ) }
				/>

				<hr />

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Featured Button Background', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ featuredButtonBgColor }
					onChange={ ( val ) => setAttributes( { featuredButtonBgColor: val || '#10b981' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Featured Button Text Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ featuredButtonTextColor }
					onChange={ ( val ) => setAttributes( { featuredButtonTextColor: val || '#ffffff' } ) }
				/>

				<hr />
				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Hover Highlight Color (Style 2)', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ attributes.hoverHighlightColor }
					onChange={ ( val ) => setAttributes( { hoverHighlightColor: val || '#ffd700' } ) }
				/>
			</PanelBody> */}
		</>
	);
};

export default Style;
