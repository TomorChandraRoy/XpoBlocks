import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, ColorPalette } from '@wordpress/components';

const Style = ( { attributes, setAttributes } ) => {
	const {
		bgColor,
		textColor,
		accentColor,
		progressColor,
		borderRadius,
		paddingV,
		paddingH,
		playerLayout,
		containerShadow,
		shadowStyle
	} = attributes;

	const isCompact = playerLayout === 'compact';

	return (
		<>
			<PanelBody title={ __( '🎨 Colors & Styling', 'guten-builder-blocks' ) } initialOpen={ true }>
				<p style={ { fontWeight: 'bold', margin: '0 0 5px 0' } }>{ __( 'Player Background Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ bgColor }
					onChange={ ( val ) => setAttributes( { bgColor: val || '#111111' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Text & Icon Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ textColor }
					onChange={ ( val ) => setAttributes( { textColor: val || '#ffffff' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Accent Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ accentColor }
					onChange={ ( val ) => setAttributes( { accentColor: val || '#10b981' } ) }
				/>

				<p style={ { fontWeight: 'bold', margin: '10px 0 5px 0' } }>{ __( 'Progress Background Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ progressColor }
					onChange={ ( val ) => setAttributes( { progressColor: val || 'rgba(255,255,255,0.15)' } ) }
				/>

				<hr />

				{ ! isCompact && (
					<>
						<RangeControl
							label={ __( 'Border Radius', 'guten-builder-blocks' ) }
							value={ borderRadius }
							onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
							min={ 0 }
							max={ 50 }
							help={ __( 'Rounds the player corners.', 'guten-builder-blocks' ) }
						/>

						<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' } }>
							<RangeControl
								label={ __( 'Inner V-Padding', 'guten-builder-blocks' ) }
								value={ paddingV }
								onChange={ ( val ) => setAttributes( { paddingV: val } ) }
								min={ 5 }
								max={ 40 }
							/>
							<RangeControl
								label={ __( 'Inner H-Padding', 'guten-builder-blocks' ) }
								value={ paddingH }
								onChange={ ( val ) => setAttributes( { paddingH: val } ) }
								min={ 10 }
								max={ 60 }
							/>
						</div>
					</>
				) }
			</PanelBody>

			<PanelBody title={ __( '📦 Shadow & Depth', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Container Shadow', 'guten-builder-blocks' ) }
					checked={ containerShadow }
					onChange={ ( val ) => setAttributes( { containerShadow: val } ) }
				/>

				{ containerShadow && (
					<div style={ { background: '#f8f9fa', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0', marginTop: '10px' } }>
						<SelectControl
							label={ __( 'Shadow Style', 'guten-builder-blocks' ) }
							value={ shadowStyle }
							options={ [
								{ label: __( 'Soft (Classic)', 'guten-builder-blocks' ), value: 'soft' },
								{ label: __( 'Crisp (Solid)', 'guten-builder-blocks' ), value: 'crisp' },
								{ label: __( 'Floating (Diffused)', 'guten-builder-blocks' ), value: 'float' },
								{ label: __( 'Dynamic Glow', 'guten-builder-blocks' ), value: 'glow' },
								{ label: __( 'Elegant Luxury', 'guten-builder-blocks' ), value: 'elegant' }
							] }
							onChange={ ( val ) => setAttributes( { shadowStyle: val } ) }
							help={ __( 'Dynamic Glow uses the accent color automatically!', 'guten-builder-blocks' ) }
						/>
					</div>
				) }
			</PanelBody>
		</>
	);
};

export default Style;
