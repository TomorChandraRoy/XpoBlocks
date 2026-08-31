import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, ColorPalette } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
	const {showFrame,frameBg,frameRadius} = attributes;

	return (
		<>

			<PanelBody title={ __( '🖼️ Card Frames', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Card Frame', 'guten-builder-blocks' ) }
					checked={ showFrame }
					onChange={ ( val ) => setAttributes( { showFrame: val } ) }
				/>
				{ showFrame && (
					<div className="gbb-mq-frame-settings-container">
						<p>{ __( 'Frame Background', 'guten-builder-blocks' ) }</p>
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
