import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
import { GradientControl, ColorControl } from 'tr-tools';
import { DEFAULT_TEXT_GRADIENT } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes }) => {
	const { showFrame, frameBg, frameRadius, enableSweepAnimation, textGradient, containerBg, containerBorderColor, containerRadius, logoTextBg, logoTextRadius } = attributes;

	return (
		<>
			<PanelBody className='bPlPanelBody' title={ __( 'Typography & Gradient', 'xpo-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Text Gradient Sweep', 'xpo-blocks' ) }
					checked={ enableSweepAnimation }
					onChange={ ( val ) => setAttributes( { enableSweepAnimation: val } ) }
				/>
				<ColorControl
					label={ __( 'Badge Text Background', 'xpo-blocks' ) }
					value={ logoTextBg }
					onChange={ ( val ) => setAttributes( { logoTextBg: val } ) }
					defaultColor="#ffffff"
				/>
				<RangeControl
					label={ __( 'Badge Text Radius', 'xpo-blocks' ) }
					value={ logoTextRadius }
					onChange={ ( val ) => setAttributes( { logoTextRadius: val } ) }
					min={ 0 }
					max={ 50 }
				/>
				<GradientControl
					label={ __( 'Text Gradient', 'xpo-blocks' ) }
					value={ textGradient }
					onChange={ ( val ) => setAttributes( { textGradient: val } ) }
					defaultGradient={ DEFAULT_TEXT_GRADIENT }
				/>
			</PanelBody>

			<PanelBody className='bPlPanelBody' title={ __( 'Card Frames', 'xpo-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Card Frame', 'xpo-blocks' ) }
					checked={ showFrame }
					onChange={ ( val ) => setAttributes( { showFrame: val } ) }
				/>
				{ showFrame && (
					<div className="xpo-mq-frame-settings-container">
						<ColorControl
							label={ __( 'Frame Background', 'xpo-blocks' ) }
							value={ frameBg }
							onChange={ ( val ) => setAttributes( { frameBg: val } ) }
							defaultColor="#ffffff"
						/>
						<RangeControl
							label={ __( 'Corner Radius', 'xpo-blocks' ) }
							value={ frameRadius }
							onChange={ ( val ) => setAttributes( { frameRadius: val } ) }
							min={ 0 }
							max={ 50 }
						/>
					</div>
				) }
			</PanelBody>

			<PanelBody className='bPlPanelBody' title={ __( 'Container Style', 'xpo-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={ __( 'Container Background Color', 'xpo-blocks' ) }
					value={ containerBg }
					onChange={ ( val ) => setAttributes( { containerBg: val } ) }
					defaultColor="#ffffff"
				/>
				<ColorControl
					label={ __( 'Container Border Color', 'xpo-blocks' ) }
					value={ containerBorderColor }
					onChange={ ( val ) => setAttributes( { containerBorderColor: val } ) }
					defaultColor="#e2e8f0"
				/>
				<RangeControl
					label={ __( 'Container Corner Radius', 'xpo-blocks' ) }
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
