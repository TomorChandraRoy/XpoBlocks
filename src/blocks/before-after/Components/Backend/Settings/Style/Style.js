import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, Typography, SpacingControl, BackgroundControl, UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
const Style = ({ attributes, setAttributes }) => {
	const {
		labelColor,
    showLabels,
		labelBg,
		labelTypography,
		labelBorderRadius,
		wrapperBorderRadius,
		containerWidth = { desktop: '900px', tablet: '', mobile: '' },
		containerHeight = { desktop: '', tablet: '', mobile: '' },
	} = attributes;

	return (
    <>
      {showLabels && (
        <PanelBody className="bPlPanelBody" title={__('Labels', 'xpo-blocks')} initialOpen={false}>
          <ColorControl label={__('Text Color :', 'xpo-blocks')} value={labelColor} onChange={color => setAttributes({ labelColor: color })} defaultColor="#ffffff" />

          <BackgroundControl label={__('Background :', 'xpo-blocks')} value={labelBg} onChange={val => setAttributes({ labelBg: val })} defaultBackground={{ type: 'solid', color: 'rgba(0, 0, 0, 0.6)' }} />

          <Typography
            label={__('Typography :', 'xpo-blocks')}
            value={labelTypography}
            onChange={val => setAttributes({ labelTypography: val })}
            defaultTypography={{
              fontSize: { desktop: '14px', tablet: '14px', mobile: '14px' },
              fontFamily: '',
              fontWeight: '600',
              lineHeight: '',
              letterSpacing: '',
              textTransform: 'none',
              textDecoration: 'none',
              fontStyle: 'normal',
            }}
          />

          <SpacingControl label={__('Border Radius :', 'xpo-blocks')} value={labelBorderRadius} onChange={val => setAttributes({ labelBorderRadius: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '5px', right: '5px', bottom: '5px', left: '5px' }} />
        </PanelBody>
      )}

      <PanelBody className="bPlPanelBody" title={__('Layout & Container', 'xpo-blocks')} initialOpen={false}>
        <UnitControl label={__('Max Width :', 'xpo-blocks')} value={containerWidth} onChange={val => setAttributes({ containerWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} responsive={true} defaultVal={{ desktop: '900px', tablet: '', mobile: '' }} />

        <Spacer />

        <UnitControl label={__('Height (Empty for Auto) :', 'xpo-blocks')} value={containerHeight} onChange={val => setAttributes({ containerHeight: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit()]} responsive={true} defaultVal={{ desktop: '', tablet: '', mobile: '' }} />

        <Spacer />

        <SpacingControl label={__('Border Radius :', 'xpo-blocks')} value={wrapperBorderRadius} onChange={val => setAttributes({ wrapperBorderRadius: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '5px', right: '5px', bottom: '5px', left: '5px' }} />
      </PanelBody>
    </>
  );
};

export default Style;
