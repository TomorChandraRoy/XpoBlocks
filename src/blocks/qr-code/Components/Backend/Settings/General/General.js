import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, TextareaControl, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { MediaControl } from 'tr-tools';
import { errorCorrectionOptions } from '../../../../utils/options';

const General = ({ attributes, setAttributes }) => {
  const { qrText, titleText, descriptionText, errorCorrectionLevel, logoUrl, logoWidth, showLogoBg, showDownloadBtn, downloadBtnText } = attributes || {};

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('QR Content', 'guten-builder-blocks')} initialOpen={true}>
        <TextareaControl label={__('QR Content / URL', 'guten-builder-blocks')} value={qrText} onChange={val => setAttributes({ qrText: val })} help={__('Enter URL, plain text, email, or phone number to encode.', 'guten-builder-blocks')} />
        <SelectControl
          label={__('Error Correction Level', 'guten-builder-blocks')}
          value={errorCorrectionLevel}
          options={errorCorrectionOptions}
          onChange={val => setAttributes({ errorCorrectionLevel: val })}
          help={__('Higher levels (Q/H) allow scanning even if a center logo covers parts of the QR code.', 'guten-builder-blocks')}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Center Logo', 'guten-builder-blocks')} initialOpen={false}>
        <MediaControl label={__('Logo Image / Source', 'guten-builder-blocks')} value={logoUrl} onChange={val => setAttributes({ logoUrl: val })} allowedTypes={['image']} buttonLabel={__('Upload / Select Logo', 'guten-builder-blocks')} />

        {logoUrl && (
          <>
            <RangeControl label={__('Logo Size (px)', 'guten-builder-blocks')} value={logoWidth} onChange={val => setAttributes({ logoWidth: val, logoHeight: val })} min={20} max={100} />
            <ToggleControl label={__('White Background Circle', 'guten-builder-blocks')} checked={showLogoBg} onChange={val => setAttributes({ showLogoBg: val })} help={__('Adds a white circular background behind the logo for contrast.', 'guten-builder-blocks')} />
          </>
        )}
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Header Text', 'guten-builder-blocks')} initialOpen={false}>
        <TextControl label={__('Title', 'guten-builder-blocks')} value={titleText} onChange={val => setAttributes({ titleText: val })} />
        <TextareaControl label={__('Description', 'guten-builder-blocks')} value={descriptionText} onChange={val => setAttributes({ descriptionText: val })} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Download Button', 'guten-builder-blocks')} initialOpen={false}>
        <ToggleControl label={__('Show Download Button', 'guten-builder-blocks')} checked={showDownloadBtn} onChange={val => setAttributes({ showDownloadBtn: val })} />
        {showDownloadBtn && <TextControl label={__('Button Label', 'guten-builder-blocks')} value={downloadBtnText} onChange={val => setAttributes({ downloadBtnText: val })} />}
      </PanelBody>
    </>
  );
};

export default General;
