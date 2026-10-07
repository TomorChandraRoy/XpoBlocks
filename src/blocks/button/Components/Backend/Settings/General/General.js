import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl, Button } from '@wordpress/components';
const General = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined button template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Button Content', 'xpo-blocks')} initialOpen={true}>
        <TextControl
          label={__('Button Text', 'xpo-blocks')}
          value={buttonText}
          onChange={v => setAttributes({ buttonText: v })}
        />
        <TextControl
          label={__('Button URL', 'xpo-blocks')}
          value={buttonUrl}
          onChange={v => setAttributes({ buttonUrl: v })}
        />
        <ToggleControl
          label={__('Open in New Tab', 'xpo-blocks')}
          checked={openInNewTab}
          onChange={v => setAttributes({ openInNewTab: v })}
        />
      </PanelBody>
    </>
  );
};

export default General;
