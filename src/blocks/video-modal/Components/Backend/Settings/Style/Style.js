import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, ColorPalette } from '@wordpress/components';

const Style = ( { attributes, setAttributes } ) => {
	const {
		buttonStyle,
		buttonSize,
		buttonColor,
		iconColor,
		backdropStyle,
		closeOnBackdrop,
		showCloseButtonOutside,
		playbackMode
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '▶️ Play Button Design', 'guten-builder-blocks' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Button Style', 'guten-builder-blocks' ) }
					value={ buttonStyle }
					options={ [
						{ label: __( 'Solid Color', 'guten-builder-blocks' ), value: 'solid' },
						{ label: __( 'Frosted Glass', 'guten-builder-blocks' ), value: 'glass' },
						{ label: __( 'Minimal Outline', 'guten-builder-blocks' ), value: 'outline' }
					] }
					onChange={ ( val ) => setAttributes( { buttonStyle: val } ) }
				/>
				<RangeControl
					label={ __( 'Button Size (px)', 'guten-builder-blocks' ) }
					value={ buttonSize }
					onChange={ ( val ) => setAttributes( { buttonSize: val } ) }
					min={ 40 }
					max={ 150 }
				/>
				<p style={ { fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' } }>{ __( 'Button Background Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ buttonColor }
					onChange={ ( val ) => setAttributes( { buttonColor: val || '#10b981' } ) }
				/>
				<p style={ { fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' } }>{ __( 'Play Icon Color', 'guten-builder-blocks' ) }</p>
				<ColorPalette
					value={ iconColor }
					onChange={ ( val ) => setAttributes( { iconColor: val || '#ffffff' } ) }
				/>
			</PanelBody>

			{ playbackMode === 'modal' && (
				<PanelBody title={ __( '🪟 Modal Settings', 'guten-builder-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Backdrop Style', 'guten-builder-blocks' ) }
						value={ backdropStyle }
						options={ [
							{ label: __( 'Dark Glassmorphism', 'guten-builder-blocks' ), value: 'glass-dark' },
							{ label: __( 'Light Glassmorphism', 'guten-builder-blocks' ), value: 'glass-light' },
							{ label: __( 'Solid Dark', 'guten-builder-blocks' ), value: 'solid-dark' },
							{ label: __( 'Solid Light', 'guten-builder-blocks' ), value: 'solid-light' }
						] }
						onChange={ ( val ) => setAttributes( { backdropStyle: val } ) }
					/>
					<ToggleControl
						label={ __( 'Close on Backdrop Click', 'guten-builder-blocks' ) }
						checked={ !!closeOnBackdrop }
						onChange={ ( val ) => setAttributes( { closeOnBackdrop: val } ) }
					/>
					<ToggleControl
						label={ __( 'Show Close Button Outside', 'guten-builder-blocks' ) }
						checked={ !!showCloseButtonOutside }
						onChange={ ( val ) => setAttributes( { showCloseButtonOutside: val } ) }
					/>
				</PanelBody>
			) }
		</>
	);
};

export default Style;
