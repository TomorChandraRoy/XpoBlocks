import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToggleControl, ColorPalette } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
  const {
    qrSize = 220,
    fgColor = '#0f172a',
    bgColor = '#ffffff',
    transparentBg = false,
    downloadBtnColor = '#10b981',
    containerBg = '#ffffff',
    containerBorderColor = '#e2e8f0',
    containerRadius = 16,
  } = attributes || {};

  return (
    <>
      <PanelBody title={__('🎨 QR Code Colors & Dimensions', 'guten-builder-blocks')} initialOpen={true}>
        <RangeControl
          label={__('QR Code Size (px)', 'guten-builder-blocks')}
          value={qrSize}
          onChange={(val) => setAttributes({ qrSize: val })}
          min={140}
          max={450}
        />

        <p className="components-base-control__label">{__('Foreground Color', 'guten-builder-blocks')}</p>
        <ColorPalette
          value={fgColor}
          onChange={(val) => setAttributes({ fgColor: val || '#0f172a' })}
        />

        <ToggleControl
          label={__('Transparent Background', 'guten-builder-blocks')}
          checked={transparentBg}
          onChange={(val) => setAttributes({ transparentBg: val })}
        />

        {!transparentBg && (
          <>
            <p className="components-base-control__label">{__('Background Color', 'guten-builder-blocks')}</p>
            <ColorPalette
              value={bgColor}
              onChange={(val) => setAttributes({ bgColor: val || '#ffffff' })}
            />
          </>
        )}
      </PanelBody>

      <PanelBody title={__('🎨 Button & Container Style', 'guten-builder-blocks')} initialOpen={false}>
        <p className="components-base-control__label">{__('Download Button Color', 'guten-builder-blocks')}</p>
        <ColorPalette
          value={downloadBtnColor}
          onChange={(val) => setAttributes({ downloadBtnColor: val || '#10b981' })}
        />

        <p className="components-base-control__label">{__('Container Background', 'guten-builder-blocks')}</p>
        <ColorPalette
          value={containerBg}
          onChange={(val) => setAttributes({ containerBg: val || '#ffffff' })}
        />

        <p className="components-base-control__label">{__('Container Border Color', 'guten-builder-blocks')}</p>
        <ColorPalette
          value={containerBorderColor}
          onChange={(val) => setAttributes({ containerBorderColor: val || '#e2e8f0' })}
        />

        <RangeControl
          label={__('Container Corner Radius (px)', 'guten-builder-blocks')}
          value={containerRadius}
          onChange={(val) => setAttributes({ containerRadius: val })}
          min={0}
          max={40}
        />
      </PanelBody>
    </>
  );
};

export default Style;
