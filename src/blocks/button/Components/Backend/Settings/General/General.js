import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl, Button } from '@wordpress/components';
const textDomain = 'xpo-blocks';

const General = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined button template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Button Content', textDomain)} initialOpen={true}>
        <TextControl
          label={__('Button Text', textDomain)}
          value={buttonText}
          onChange={v => setAttributes({ buttonText: v })}
        />
        <TextControl
          label={__('Button URL', textDomain)}
          value={buttonUrl}
          onChange={v => setAttributes({ buttonUrl: v })}
        />
        <ToggleControl
          label={__('Open in New Tab', textDomain)}
          checked={openInNewTab}
          onChange={v => setAttributes({ openInNewTab: v })}
        />
      </PanelBody>
    </>
  );
};

export default General;
