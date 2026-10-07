import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, TextareaControl, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { MediaControl } from 'tr-tools';
import { errorCorrectionOptions } from '../../../../utils/options';

const General = ({ attributes, setAttributes }) => {
  const { qrText, titleText, descriptionText, errorCorrectionLevel, logoUrl, logoWidth, showLogoBg, showDownloadBtn, downloadBtnText } = attributes || {};

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('QR Content', 'xpo-blocks')} initialOpen={true}>
        <TextareaControl label={__('QR Content / URL', 'xpo-blocks')} value={qrText} onChange={val => setAttributes({ qrText: val })} help={__('Enter URL, plain text, email, or phone number to encode.', 'xpo-blocks')} />
        <SelectControl
          label={__('Error Correction Level', 'xpo-blocks')} 
          value={errorCorrectionLevel}
          options={errorCorrectionOptions}
          onChange={val => setAttributes({ errorCorrectionLevel: val })}
          help={__('Higher levels (Q/H) allow scanning even if a center logo covers parts of the QR code.', 'xpo-blocks')}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Center Logo', 'xpo-blocks')} initialOpen={false}>
        <MediaControl label={__('Logo Image / Source', 'xpo-blocks')} value={logoUrl} onChange={val => setAttributes({ logoUrl: val })} allowedTypes={['image']} buttonLabel={__('Upload / Select Logo', 'xpo-blocks')} />

        {logoUrl && (
          <>
            <RangeControl label={__('Logo Size (px)', 'xpo-blocks')} value={logoWidth} onChange={val => setAttributes({ logoWidth: val, logoHeight: val })} min={20} max={100} />
            <ToggleControl label={__('White Background Circle', 'xpo-blocks')} checked={showLogoBg} onChange={val => setAttributes({ showLogoBg: val })} help={__('Adds a white circular background behind the logo for contrast.', 'xpo-blocks')} />
          </>
        )}
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Header Text', 'xpo-blocks')} initialOpen={false}>
        <TextControl label={__('Title', 'xpo-blocks')} value={titleText} onChange={val => setAttributes({ titleText: val })} />
        <TextareaControl label={__('Description', 'xpo-blocks')} value={descriptionText} onChange={val => setAttributes({ descriptionText: val })} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Download Button', 'xpo-blocks')} initialOpen={false}>
        <ToggleControl label={__('Show Download Button', 'xpo-blocks')} checked={showDownloadBtn} onChange={val => setAttributes({ showDownloadBtn: val })} />
        {showDownloadBtn && <TextControl label={__('Button Label', 'xpo-blocks')} value={downloadBtnText} onChange={val => setAttributes({ downloadBtnText: val })} />}
      </PanelBody>
    </>
  );
};

export default General;
