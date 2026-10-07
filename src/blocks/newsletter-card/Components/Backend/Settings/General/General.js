import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';
import { UnitControl, pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools';

const General = ({ attributes, setAttributes }) => {
  const { title, description, buttonText, successMessage, errorMessage, containerMaxWidth } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined newsletter template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Content Settings', 'xpo-blocks')} initialOpen={false}>
        <TextControl
          label={__('Title :', 'xpo-blocks')}
          value={title}
          onChange={val => setAttributes({ title: val })}
        />
        <TextareaControl
          label={__('Description :', 'xpo-blocks')}
          value={description}
          onChange={val => setAttributes({ description: val })}
        />
        <TextControl
          label={__('Button Text :', 'xpo-blocks')}
          value={buttonText}
          onChange={val => setAttributes({ buttonText: val })}
        />
        <TextControl
          label={__('Success Message :', 'xpo-blocks')}
          value={successMessage}
          onChange={val => setAttributes({ successMessage: val })}
        />
        <TextControl
          label={__('Error Message :', 'xpo-blocks')}
          value={errorMessage}
          onChange={val => setAttributes({ errorMessage: val })}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('General Settings', 'xpo-blocks')} initialOpen={false}>
        <UnitControl
          label={__('Container Max Width', 'xpo-blocks')}
          value={containerMaxWidth}
          onChange={val => setAttributes({ containerMaxWidth: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal="1000px"
        />
      </PanelBody>
    </>
  );
};

export default General;
