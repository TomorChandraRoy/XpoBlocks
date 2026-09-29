import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, TextareaControl, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { MediaControl } from 'tr-tools';
import { errorCorrectionOptions } from '../../../../utils/options';

const textDomain = 'xpo-block';

const General = ({ attributes, setAttributes }) => {
  const { qrText, titleText, descriptionText, errorCorrectionLevel, logoUrl, logoWidth, showLogoBg, showDownloadBtn, downloadBtnText } = attributes || {};

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('QR Content', textDomain)} initialOpen={true}>
        <TextareaControl label={__('QR Content / URL', textDomain)} value={qrText} onChange={val => setAttributes({ qrText: val })} help={__('Enter URL, plain text, email, or phone number to encode.', textDomain)} />
        <SelectControl
          label={__('Error Correction Level', textDomain)} 
          value={errorCorrectionLevel}
          options={errorCorrectionOptions}
          onChange={val => setAttributes({ errorCorrectionLevel: val })}
          help={__('Higher levels (Q/H) allow scanning even if a center logo covers parts of the QR code.', textDomain)}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Center Logo', textDomain)} initialOpen={false}>
        <MediaControl label={__('Logo Image / Source', textDomain)} value={logoUrl} onChange={val => setAttributes({ logoUrl: val })} allowedTypes={['image']} buttonLabel={__('Upload / Select Logo', textDomain)} />

        {logoUrl && (
          <>
            <RangeControl label={__('Logo Size (px)', textDomain)} value={logoWidth} onChange={val => setAttributes({ logoWidth: val, logoHeight: val })} min={20} max={100} />
            <ToggleControl label={__('White Background Circle', textDomain)} checked={showLogoBg} onChange={val => setAttributes({ showLogoBg: val })} help={__('Adds a white circular background behind the logo for contrast.', textDomain)} />
          </>
        )}
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Header Text', textDomain)} initialOpen={false}>
        <TextControl label={__('Title', textDomain)} value={titleText} onChange={val => setAttributes({ titleText: val })} />
        <TextareaControl label={__('Description', textDomain)} value={descriptionText} onChange={val => setAttributes({ descriptionText: val })} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Download Button', textDomain)} initialOpen={false}>
        <ToggleControl label={__('Show Download Button', textDomain)} checked={showDownloadBtn} onChange={val => setAttributes({ showDownloadBtn: val })} />
        {showDownloadBtn && <TextControl label={__('Button Label', textDomain)} value={downloadBtnText} onChange={val => setAttributes({ downloadBtnText: val })} />}
      </PanelBody>
    </>
  );
};

export default General;
