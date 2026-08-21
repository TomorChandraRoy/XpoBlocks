import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl, Button } from '@wordpress/components';


const General = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined button template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Button Content', 'guten-builder-blocks')} initialOpen={true}>
        <TextControl
          label={__('Button Text', 'guten-builder-blocks')}
          value={buttonText}
          onChange={v => setAttributes({ buttonText: v })}
        />
        <TextControl
          label={__('Button URL', 'guten-builder-blocks')}
          value={buttonUrl}
          onChange={v => setAttributes({ buttonUrl: v })}
        />
        <ToggleControl
          label={__('Open in New Tab', 'guten-builder-blocks')}
          checked={openInNewTab}
          onChange={v => setAttributes({ openInNewTab: v })}
        />
      </PanelBody>
    </>
  );
};

export default General;
