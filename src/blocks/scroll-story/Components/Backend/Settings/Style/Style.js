import { PanelBody, SelectControl, __experimentalSpacer as Spacer } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ColorControl, UnitControl, SpacingControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';

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
		<PanelBody className="bPlPanelBody" title={__('Style Settings', 'guten-builder-blocks')} initialOpen={true}>
			<SelectControl
				label={__('Image Fit', 'guten-builder-blocks')}
				value={imageFit}
				options={[
					{ label: __('Cover (Fill Container)', 'guten-builder-blocks'), value: 'cover' },
					{ label: __('Contain (Whole Image)', 'guten-builder-blocks'), value: 'contain' },
					{ label: __('Fill (Stretch)', 'guten-builder-blocks'), value: 'fill' }
				]}
				onChange={val => setAttributes({ imageFit: val })}
			/>

			<Spacer />

			<UnitControl
				label={__('Step Gap / Spacer :', 'guten-builder-blocks')}
				value={stepGap}
				onChange={val => setAttributes({ stepGap: val })}
				units={units}
				defaultVal="60px"
			/>

			<Spacer />

			<UnitControl
				label={__('Media Container Height :', 'guten-builder-blocks')}
				value={mediaHeight}
				onChange={val => setAttributes({ mediaHeight: val })}
				units={units}
				defaultVal="400px"
			/>

			<Spacer />

			<SpacingControl
				label={__('Media Border Radius :', 'guten-builder-blocks')}
				value={mediaRadius}
				onChange={val => setAttributes({ mediaRadius: val })}
				units={units}
				defaultVal={{ top: '20px', right: '20px', bottom: '20px', left: '20px' }}
			/>

			<Spacer />

			<ColorControl
				label={__('Media Box Background :', 'guten-builder-blocks')}
				value={mediaBgColor}
				onChange={val => setAttributes({ mediaBgColor: val })}
				defaultColor="#f1f5f9"
			/>

			<Spacer />

			<ColorControl
				label={__('Progress Bar Color :', 'guten-builder-blocks')}
				value={progressColor}
				onChange={val => setAttributes({ progressColor: val })}
				defaultColor="#3b82f6"
			/>

			<Spacer />

			<ColorControl
				label={__('Active Title Color :', 'guten-builder-blocks')}
				value={activeTitleColor}
				onChange={val => setAttributes({ activeTitleColor: val })}
				defaultColor="#1e293b"
			/>

			<Spacer />

			<ColorControl
				label={__('Inactive Title Color :', 'guten-builder-blocks')}
				value={inactiveTitleColor}
				onChange={val => setAttributes({ inactiveTitleColor: val })}
				defaultColor="#94a3b8"
			/>

			<Spacer />

			<ColorControl
				label={__('Description Color :', 'guten-builder-blocks')}
				value={descColor}
				onChange={val => setAttributes({ descColor: val })}
				defaultColor="#475569"
			/>
		</PanelBody>
	);
};

export default Style;
