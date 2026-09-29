import { PanelBody, SelectControl, __experimentalSpacer as Spacer } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ColorControl, UnitControl, SpacingControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
const textDomain = 'xpo-block';

const Style = ({ attributes, setAttributes }) => {
	const {
		progressColor,
		activeTitleColor,
		inactiveTitleColor,
		descColor,
		imageFit = 'cover',
		mediaBgColor = '#f1f5f9',
		mediaHeight = '400px',
		mediaRadius = '20px',
		stepGap = '60px'
	} = attributes;

	const units = [pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()];

	return (
		<PanelBody className="bPlPanelBody" title={__('Style Settings', textDomain)} initialOpen={true}>
			<SelectControl
				label={__('Image Fit', textDomain)}
				value={imageFit}
				options={[
					{ label: __('Cover (Fill Container)', textDomain), value: 'cover' },
					{ label: __('Contain (Whole Image)', textDomain), value: 'contain' },
					{ label: __('Fill (Stretch)', textDomain), value: 'fill' }
				]}
				onChange={val => setAttributes({ imageFit: val })}
			/>

			<Spacer />

			<UnitControl
				label={__('Step Gap / Spacer :', textDomain)}
				value={stepGap}
				onChange={val => setAttributes({ stepGap: val })}
				units={units}
				defaultVal="60px"
			/>

			<Spacer />

			<UnitControl
				label={__('Media Container Height :', textDomain)}
				value={mediaHeight}
				onChange={val => setAttributes({ mediaHeight: val })}
				units={units}
				defaultVal="400px"
			/>

			<Spacer />

			<SpacingControl
				label={__('Media Border Radius :', textDomain)}
				value={mediaRadius}
				onChange={val => setAttributes({ mediaRadius: val })}
				units={units}
				defaultVal={{ top: '20px', right: '20px', bottom: '20px', left: '20px' }}
			/>

			<Spacer />

			<ColorControl
				label={__('Media Box Background :', textDomain)}
				value={mediaBgColor}
				onChange={val => setAttributes({ mediaBgColor: val })}
				defaultColor="#f1f5f9"
			/>

			<Spacer />

			<ColorControl
				label={__('Progress Bar Color :', textDomain)}
				value={progressColor}
				onChange={val => setAttributes({ progressColor: val })}
				defaultColor="#3b82f6"
			/>

			<Spacer />

			<ColorControl
				label={__('Active Title Color :', textDomain)}
				value={activeTitleColor}
				onChange={val => setAttributes({ activeTitleColor: val })}
				defaultColor="#1e293b"
			/>

			<Spacer />

			<ColorControl
				label={__('Inactive Title Color :', textDomain)}
				value={inactiveTitleColor}
				onChange={val => setAttributes({ inactiveTitleColor: val })}
				defaultColor="#94a3b8"
			/>

			<Spacer />

			<ColorControl
				label={__('Description Color :', textDomain)}
				value={descColor}
				onChange={val => setAttributes({ descColor: val })}
				defaultColor="#475569"
			/>
		</PanelBody>
	);
};

export default Style;
