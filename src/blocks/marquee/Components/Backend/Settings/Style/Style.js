import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
import { GradientControl, ColorControl } from 'tr-tools';
import { DEFAULT_TEXT_GRADIENT } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes }) => {
	const { showFrame, frameBg, frameRadius, enableSweepAnimation, textGradient, containerBg, containerBorderColor, containerRadius } = attributes;

	return (
		<>
			<PanelBody className='bPlPanelBody' title={ __( 'Typography & Gradient', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Text Gradient Sweep', 'guten-builder-blocks' ) }
					checked={ enableSweepAnimation }
					onChange={ ( val ) => setAttributes( { enableSweepAnimation: val } ) }
				/>
				<GradientControl
					label={ __( 'Text Gradient', 'guten-builder-blocks' ) }
					value={ textGradient }
					onChange={ ( val ) => setAttributes( { textGradient: val } ) }
					defaultGradient={ DEFAULT_TEXT_GRADIENT }
				/>
			</PanelBody>

			<PanelBody className='bPlPanelBody' title={ __( 'Card Frames', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Card Frame', 'guten-builder-blocks' ) }
					checked={ showFrame }
					onChange={ ( val ) => setAttributes( { showFrame: val } ) }
				/>
				{ showFrame && (
					<div className="gbb-mq-frame-settings-container">
						<ColorControl
							label={ __( 'Frame Background', 'guten-builder-blocks' ) }
							value={ frameBg }
							onChange={ ( val ) => setAttributes( { frameBg: val } ) }
							defaultColor="#ffffff"
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

			<PanelBody className='bPlPanelBody' title={ __( 'Container Style', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={ __( 'Container Background Color', 'guten-builder-blocks' ) }
					value={ containerBg }
					onChange={ ( val ) => setAttributes( { containerBg: val } ) }
					defaultColor="#ffffff"
				/>
				<ColorControl
					label={ __( 'Container Border Color', 'guten-builder-blocks' ) }
					value={ containerBorderColor }
					onChange={ ( val ) => setAttributes( { containerBorderColor: val } ) }
					defaultColor="#e2e8f0"
				/>
				<RangeControl
					label={ __( 'Container Corner Radius', 'guten-builder-blocks' ) }
					value={ containerRadius }
					onChange={ ( val ) => setAttributes( { containerRadius: val } ) }
					min={ 0 }
					max={ 100 }
				/>
			</PanelBody>
		</>
	);
};

export default Style;
