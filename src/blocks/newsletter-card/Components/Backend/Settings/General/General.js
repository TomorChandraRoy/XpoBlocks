import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';
import { UnitControl, pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools';

const General = ({ attributes, setAttributes }) => {
  const { title, description, buttonText, successMessage, errorMessage, containerMaxWidth } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined newsletter template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Content Settings', 'guten-builder-blocks')} initialOpen={false}>
        <TextControl
          label={__('Title :', 'guten-builder-blocks')}
          value={title}
          onChange={val => setAttributes({ title: val })}
        />
        <TextareaControl
          label={__('Description :', 'guten-builder-blocks')}
          value={description}
          onChange={val => setAttributes({ description: val })}
        />
        <TextControl
          label={__('Button Text :', 'guten-builder-blocks')}
          value={buttonText}
          onChange={val => setAttributes({ buttonText: val })}
        />
        <TextControl
          label={__('Success Message :', 'guten-builder-blocks')}
          value={successMessage}
          onChange={val => setAttributes({ successMessage: val })}
        />
        <TextControl
          label={__('Error Message :', 'guten-builder-blocks')}
          value={errorMessage}
          onChange={val => setAttributes({ errorMessage: val })}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('General Settings', 'guten-builder-blocks')} initialOpen={false}>
        <UnitControl 
          label={__('Container Max Width', 'guten-builder-blocks')} 
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
