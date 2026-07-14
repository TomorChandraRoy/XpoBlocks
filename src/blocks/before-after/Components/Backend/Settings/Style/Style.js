import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

const Style = ({ attributes, setAttributes }) => {
	const {
		dividerStyle,
		handleColor,
		handleIconColor,
		containerShadow,
		shadowStyle,
		forceFullWidth,
		afterFilter,
		afterBlurIntensity,
		afterOverlayColor,
		afterOverlayOpacity
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '🎨 Image Filters', 'guten-builder-blocks' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'After Image Filter', 'guten-builder-blocks' ) }
					value={ afterFilter }
					options={ [
						{ label: __( 'None', 'guten-builder-blocks' ), value: 'none' },
						{ label: __( 'Color Overlay', 'guten-builder-blocks' ), value: 'color' },
						{ label: __( 'Grayscale', 'guten-builder-blocks' ), value: 'grayscale' },
						{ label: __( 'Sepia', 'guten-builder-blocks' ), value: 'sepia' },
						{ label: __( 'Blur', 'guten-builder-blocks' ), value: 'blur' },
						{ label: __( 'Invert Colors', 'guten-builder-blocks' ), value: 'invert' },
						{ label: __( 'High Contrast', 'guten-builder-blocks' ), value: 'contrast' }
					] }
					onChange={ ( val ) => setAttributes( { afterFilter: val } ) }
					help={ __( 'Apply different effects to after image.', 'guten-builder-blocks' ) }
				/>

				{ afterFilter === 'blur' && (
					<div style={ { background: '#f0f0f0', padding: '10px', borderRadius: '4px', marginTop: '10px' } }>
						<RangeControl
							label={ __( 'Blur Intensity (px)', 'guten-builder-blocks' ) }
							value={ afterBlurIntensity }
							onChange={ ( val ) => setAttributes( { afterBlurIntensity: val } ) }
							min={ 1 }
							max={ 20 }
						/>
					</div>
				) }

				{ afterFilter === 'color' && (
					<div style={ { background: '#f0f0f0', padding: '10px', borderRadius: '4px', marginTop: '10px' } }>
						<PanelColorSettings
							title={ __( 'Overlay Color', 'guten-builder-blocks' ) }
							colorSettings={ [
								{
									value: afterOverlayColor,
									onChange: ( val ) => setAttributes( { afterOverlayColor: val } ),
									label: __( 'Overlay Color', 'guten-builder-blocks' )
								}
							] }
						/>
						<RangeControl
							label={ __( 'Opacity', 'guten-builder-blocks' ) }
							value={ afterOverlayOpacity }
							onChange={ ( val ) => setAttributes( { afterOverlayOpacity: val } ) }
							min={ 0 }
							max={ 1 }
							step={ 0.1 }
						/>
					</div>
				) }
			</PanelBody>

			<PanelBody title={ __( '🎛️ Handle & Divider', 'guten-builder-blocks' ) } initialOpen={ false }>
				<SelectControl
					label={ __( 'Divider Line Style', 'guten-builder-blocks' ) }
					value={ dividerStyle }
					options={ [
						{ label: __( 'Solid Line', 'guten-builder-blocks' ), value: 'solid' },
						{ label: __( 'Neon Glow', 'guten-builder-blocks' ), value: 'neon' },
						{ label: __( 'Faded Gradient', 'guten-builder-blocks' ), value: 'gradient' }
					] }
					onChange={ ( val ) => setAttributes( { dividerStyle: val } ) }
				/>
				<PanelColorSettings
					title={ __( 'Handle Colors', 'guten-builder-blocks' ) }
					colorSettings={ [
						{
							value: handleColor,
							onChange: ( val ) => setAttributes( { handleColor: val } ),
							label: __( 'Handle Background Color', 'guten-builder-blocks' )
						},
						{
							value: handleIconColor,
							onChange: ( val ) => setAttributes( { handleIconColor: val } ),
							label: __( 'Icon / Text Color', 'guten-builder-blocks' )
						}
					] }
				/>
			</PanelBody>

			<PanelBody title={ __( '📦 Global Shadows', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Container Shadow', 'guten-builder-blocks' ) }
					checked={ containerShadow }
					onChange={ ( val ) => setAttributes( { containerShadow: val } ) }
				/>
				{ containerShadow && (
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
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( '📏 Layout Width', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Force True Full Width', 'guten-builder-blocks' ) }
					checked={ forceFullWidth }
					onChange={ ( val ) => setAttributes( { forceFullWidth: val } ) }
				/>
			</PanelBody>
		</>
	);
};

export default Style;
