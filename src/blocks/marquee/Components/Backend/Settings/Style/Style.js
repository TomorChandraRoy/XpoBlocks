import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, ColorPalette } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
	const {
		itemHeight,
		edgeFade,
		liftEffect,
		siblingBlur,
		siblingBlurIntensity,
		showProgressRail,
		progressRailPosition,
		showInteractionIndicator,
		highlightActiveCenter,
		showFrame,
		frameBg,
		frameRadius
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '🎨 Visual Styling', 'guten-builder-blocks' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Logo Height (Desktop)', 'guten-builder-blocks' ) }
					value={ itemHeight }
					onChange={ ( val ) => setAttributes( { itemHeight: val } ) }
					min={ 30 }
					max={ 300 }
				/>
				<ToggleControl
					label={ __( 'Edge Fade Effect', 'guten-builder-blocks' ) }
					checked={ edgeFade }
					onChange={ ( val ) => setAttributes( { edgeFade: val } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '✨ Smart Addons', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hover Lift Effect', 'guten-builder-blocks' ) }
					checked={ liftEffect }
					onChange={ ( val ) => setAttributes( { liftEffect: val } ) }
					help={ __( 'Elevates the hovered logo organically.', 'guten-builder-blocks' ) }
				/>
				<hr />
				<ToggleControl
					label={ __( 'Sibling Focus Blur', 'guten-builder-blocks' ) }
					checked={ siblingBlur }
					onChange={ ( val ) => setAttributes( { siblingBlur: val } ) }
					help={ __( 'Blurs all other logos when one is hovered.', 'guten-builder-blocks' ) }
				/>
				{ siblingBlur && (
					<RangeControl
						label={ __( 'Blur Intensity (px)', 'guten-builder-blocks' ) }
						value={ siblingBlurIntensity }
						onChange={ ( val ) => setAttributes( { siblingBlurIntensity: val } ) }
						min={ 1 }
						max={ 10 }
					/>
				) }
				<hr />
				<ToggleControl
					label={ __( 'Segmented Progress Rail', 'guten-builder-blocks' ) }
					checked={ showProgressRail }
					onChange={ ( val ) => setAttributes( { showProgressRail: val } ) }
					help={ __( 'Displays a tracker based on original items.', 'guten-builder-blocks' ) }
				/>
				{ showProgressRail && (
					<SelectControl
						label={ __( 'Rail Position', 'guten-builder-blocks' ) }
						value={ progressRailPosition }
						options={ [
							{ label: __( 'Right', 'guten-builder-blocks' ), value: 'right' },
							{ label: __( 'Bottom', 'guten-builder-blocks' ), value: 'bottom' }
						] }
						onChange={ ( val ) => setAttributes( { progressRailPosition: val } ) }
					/>
				) }
				<hr />
				<ToggleControl
					label={ __( 'Pause / Slow State Indicator', 'guten-builder-blocks' ) }
					checked={ showInteractionIndicator }
					onChange={ ( val ) => setAttributes( { showInteractionIndicator: val } ) }
					help={ __( 'Shows a state badge when marquee is paused or slowed.', 'guten-builder-blocks' ) }
				/>
				<ToggleControl
					label={ __( 'Active Center Highlight', 'guten-builder-blocks' ) }
					checked={ highlightActiveCenter }
					onChange={ ( val ) => setAttributes( { highlightActiveCenter: val } ) }
					help={ __( 'Scales and highlights the item closest to the center focus area.', 'guten-builder-blocks' ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '🖼️ Card Frames', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Card Frame', 'guten-builder-blocks' ) }
					checked={ showFrame }
					onChange={ ( val ) => setAttributes( { showFrame: val } ) }
				/>
				{ showFrame && (
					<div style={ { padding: '10px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '15px' } }>
						<p style={ { fontWeight: 'bold', marginTop: '0', marginBottom: '5px' } }>{ __( 'Frame Background', 'guten-builder-blocks' ) }</p>
						<ColorPalette
							value={ frameBg }
							onChange={ ( val ) => setAttributes( { frameBg: val } ) }
						/>
						<RangeControl
							label={ __( 'Corner Radius', 'guten-builder-blocks' ) }
							value={ frameRadius }
							onChange={ ( val ) => setAttributes( { frameRadius: val } ) }
							min={ 0 }
							max={ 50 }
						/>
					</div>
				) }
			</PanelBody>
		</>
	);
};

export default Style;
