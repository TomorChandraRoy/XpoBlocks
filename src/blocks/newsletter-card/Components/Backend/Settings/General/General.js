import { __ } from '@wordpress/i18n';
import { PanelBody, Button } from '@wordpress/components';
import { UnitControl, pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools';

const General = ({attributes, setAttributes}) => {
  const { containerMaxWidth } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined divider template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
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
}

export default General
