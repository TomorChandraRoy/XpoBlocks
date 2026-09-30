import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';
import { UnitControl, pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools';

const textDomain = 'xpo-blocks';
const General = ({ attributes, setAttributes }) => {
  const { title, description, buttonText, successMessage, errorMessage, containerMaxWidth } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined newsletter template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Content Settings', textDomain)} initialOpen={false}>
        <TextControl
          label={__('Title :', textDomain)}
          value={title}
          onChange={val => setAttributes({ title: val })}
        />
        <TextareaControl
          label={__('Description :', textDomain)}
          value={description}
          onChange={val => setAttributes({ description: val })}
        />
        <TextControl
          label={__('Button Text :', textDomain)}
          value={buttonText}
          onChange={val => setAttributes({ buttonText: val })}
        />
        <TextControl
          label={__('Success Message :', textDomain)}
          value={successMessage}
          onChange={val => setAttributes({ successMessage: val })}
        />
        <TextControl
          label={__('Error Message :', textDomain)}
          value={errorMessage}
          onChange={val => setAttributes({ errorMessage: val })}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('General Settings', textDomain)} initialOpen={false}>
        <UnitControl
          label={__('Container Max Width', textDomain)}
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
