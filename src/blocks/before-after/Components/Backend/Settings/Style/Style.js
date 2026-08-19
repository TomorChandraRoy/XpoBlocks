import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { ColorControl, Typography, SpacingControl, BackgroundControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultLabelTypo } from '../../../../utils/options';

const Style = ({ attributes, setAttributes }) => {
	const {
		labelColor,
		labelBg,
		labelTypography,
		labelBorderRadius,
		wrapperBorderRadius,
	} = attributes;

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Labels', 'guten-builder-blocks')} initialOpen={false}>
        <ColorControl label={__('Text Color :', 'guten-builder-blocks')} value={labelColor} onChange={color => setAttributes({ labelColor: color })} defaultColor="#ffffff" />

        <BackgroundControl label={__('Background :', 'guten-builder-blocks')} value={labelBg} onChange={val => setAttributes({ labelBg: val })} defaultBackground={{ type: 'solid', color: 'rgba(0, 0, 0, 0.6)' }} />

        <Typography label={__('Typography :', 'guten-builder-blocks')} value={labelTypography} onChange={val => setAttributes({ labelTypography: val })} defaultTypography={defaultLabelTypo} />

        <SpacingControl label={__('Border Radius :', 'guten-builder-blocks')} value={labelBorderRadius} onChange={val => setAttributes({ labelBorderRadius: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '5px', right: '5px', bottom: '5px', left: '5px' }} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout & Container', 'guten-builder-blocks')} initialOpen={false}>
        <SpacingControl
          label={__('Border Radius :', 'guten-builder-blocks')}
          value={wrapperBorderRadius}
          onChange={val => setAttributes({ wrapperBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '5px', right: '5px', bottom: '5px', left: '5px' }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
