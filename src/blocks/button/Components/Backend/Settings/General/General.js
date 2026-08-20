import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';


const General = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes;

  return (
    <>
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
