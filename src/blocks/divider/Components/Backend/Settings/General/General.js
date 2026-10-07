import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, Button, __experimentalSpacer as Spacer } from '@wordpress/components';
import { UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
const General = ({ attributes, setAttributes }) => {
  const {
    selectedTemplate = 'template-1',
    dividerType = 'text',
    text = 'Text',
    dividerWidth = { desktop: '100%', tablet: '', mobile: '' },
    dividerHeight = { desktop: '1px', tablet: '', mobile: '' }
  } = attributes || {};

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined divider template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>
    <PanelBody className="bPlPanelBody" title={__('Divider Settings', 'xpo-blocks')} initialOpen={true}>
      <UnitControl label={__('Width :', 'xpo-blocks')} value={dividerWidth} onChange={val => setAttributes({ dividerWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} responsive={true} defaultVal={{ desktop: '100%', tablet: '', mobile: '' }} />
      <Spacer />
      <UnitControl label={__('Thickness :', 'xpo-blocks')} value={dividerHeight} onChange={val => setAttributes({ dividerHeight: val })} units={[pxUnit(), remUnit(), emUnit()]} responsive={true} defaultVal={{ desktop: '1px', tablet: '', mobile: '' }} />

      {selectedTemplate === 'template-1' && (
        <>
          <Spacer />
          <SelectControl
            label={__('Divider Type', 'xpo-blocks')}
            value={dividerType}
            options={[
              { label: __('Text', 'xpo-blocks'), value: 'text' },
              { label: __('Icon', 'xpo-blocks'), value: 'icon' },
            ]}
            onChange={value => setAttributes({ dividerType: value })}
          />
          {dividerType === 'text' && <TextControl label={__('Text', 'xpo-blocks')} value={text} onChange={value => setAttributes({ text: value })} />}

          {dividerType === 'icon' && (
            <>
              <SelectControl
                label={__('Select Icon', 'xpo-blocks')}
                value={attributes.iconName || 'tabler--crown'}
                options={[
                  { label: __('Crown', 'xpo-blocks'), value: 'tabler--crown' },
                  { label: __('Star', 'xpo-blocks'), value: 'tabler--star' },
                  { label: __('Heart', 'xpo-blocks'), value: 'tabler--heart' },
                  { label: __('Circle', 'xpo-blocks'), value: 'tabler--circle' },
                  { label: __('Square', 'xpo-blocks'), value: 'tabler--square' },
                ]}
                onChange={value => setAttributes({ iconName: value })}
              />
              <Spacer />
              <UnitControl label={__('Icon Size :', 'xpo-blocks')} value={attributes.iconSize} onChange={val => setAttributes({ iconSize: val })} units={[pxUnit(), remUnit(), emUnit()]} responsive={true} defaultVal={{ desktop: '20px', tablet: '', mobile: '' }} />
            </>
          )}
        </>
      )}
    </PanelBody>
    </>
  );
};

export default General;
