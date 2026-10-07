import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { ColorControl, SpacingControl, BorderControl, Typography } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';

const Style = ({ attributes, setAttributes }) => {
  const { qrSize, fgColor, bgColor, transparentBg, downloadBtnColor, containerBg, containerBorder, containerBorderColor, containerRadius, showDownloadBtn, titleText, titleColor, titleTypography, descriptionText, descriptionColor, descriptionTypography, } = attributes || {}

  const units = [pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()];

  return (
    <>
      <PanelBody title={__('QR Code Colors & Dimensions', 'xpo-blocks')} initialOpen={true}>
        <RangeControl label={__('QR Code Size (px)', 'xpo-blocks')} value={qrSize} onChange={val => setAttributes({ qrSize: val })} min={140} max={450} />

        <ColorControl label={__('Foreground Color', 'xpo-blocks')} value={fgColor} onChange={val => setAttributes({ fgColor: val })} defaultColor="#0f172a" />

        <ToggleControl label={__('Transparent Background', 'xpo-blocks')} checked={transparentBg} onChange={val => setAttributes({ transparentBg: val })} />

        {!transparentBg && <ColorControl label={__('Background Color', 'xpo-blocks')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} defaultColor="#ffffff" />}
      </PanelBody>

      {(titleText || descriptionText) && (
        <PanelBody title={__('Header Text Style', 'xpo-blocks')} initialOpen={false}>
          {titleText && (
            <>
              <ColorControl label={__('Title Color', 'xpo-blocks')} value={titleColor} onChange={val => setAttributes({ titleColor: val })} defaultColor="#0f172a" />
              <Typography label={__('Title Typography', 'xpo-blocks')} value={titleTypography} onChange={val => setAttributes({ titleTypography: val })} />
            </>
          )}
          {descriptionText && (
            <>
              <ColorControl label={__('Description Color', 'xpo-blocks')} value={descriptionColor} onChange={val => setAttributes({ descriptionColor: val })} defaultColor="#64748b" />
              <Typography label={__('Description Typography', 'xpo-blocks')} value={descriptionTypography} onChange={val => setAttributes({ descriptionTypography: val })} />
            </>
          )}
        </PanelBody>
      )}

      <PanelBody title={__('Button & Container Style', 'xpo-blocks')} initialOpen={false}>
        {showDownloadBtn && <ColorControl label={__('Download Button Color', 'xpo-blocks')} value={downloadBtnColor} onChange={val => setAttributes({ downloadBtnColor: val })} defaultColor="#10b981" />}

        <ColorControl label={__('Container Background', 'xpo-blocks')} value={containerBg} onChange={val => setAttributes({ containerBg: val })} defaultColor="#ffffff" />

        <BorderControl label={__('Container Border', 'xpo-blocks')} value={containerBorder} onChange={val => setAttributes({ containerBorder: val })} defaultBorder={{ color: containerBorderColor || '#e2e8f0', width: '', style: 'solid' }} />

        <SpacingControl label={__('Container Border Radius', 'xpo-blocks')} value={containerRadius} onChange={val => setAttributes({ containerRadius: val })} units={units} defaultVal={{ top: '16px', right: '16px', bottom: '16px', left: '16px' }} />
      </PanelBody>
    </>
  );
};

export default Style;

