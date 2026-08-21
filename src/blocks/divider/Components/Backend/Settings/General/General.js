import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, __experimentalSpacer as Spacer } from '@wordpress/components';
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
    <PanelBody className="bPlPanelBody" title={__('Divider Settings', 'guten-builder-blocks')} initialOpen={true}>
      <UnitControl label={__('Width :', 'guten-builder-blocks')} value={dividerWidth} onChange={val => setAttributes({ dividerWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} responsive={true} defaultVal={{ desktop: '100%', tablet: '', mobile: '' }} />
      <Spacer />
      <UnitControl label={__('Thickness :', 'guten-builder-blocks')} value={dividerHeight} onChange={val => setAttributes({ dividerHeight: val })} units={[pxUnit(), remUnit(), emUnit()]} responsive={true} defaultVal={{ desktop: '1px', tablet: '', mobile: '' }} />
      
      {selectedTemplate === 'template-1' && (
        <>
          <Spacer />
          <SelectControl
            label={__('Divider Type', 'guten-builder-blocks')}
            value={dividerType}
            options={[
              { label: __('Text', 'guten-builder-blocks'), value: 'text' },
              { label: __('Icon', 'guten-builder-blocks'), value: 'icon' },
            ]}
            onChange={value => setAttributes({ dividerType: value })}
          />
          {dividerType === 'text' && <TextControl label={__('Text', 'guten-builder-blocks')} value={text} onChange={value => setAttributes({ text: value })} />}

          {dividerType === 'icon' && (
            <>
              <SelectControl
                label={__('Select Icon', 'guten-builder-blocks')}
                value={attributes.iconName || 'tabler--crown'}
                options={[
                  { label: __('Crown', 'guten-builder-blocks'), value: 'tabler--crown' },
                  { label: __('Star', 'guten-builder-blocks'), value: 'tabler--star' },
                  { label: __('Heart', 'guten-builder-blocks'), value: 'tabler--heart' },
                  { label: __('Circle', 'guten-builder-blocks'), value: 'tabler--circle' },
                  { label: __('Square', 'guten-builder-blocks'), value: 'tabler--square' },
                ]}
                onChange={value => setAttributes({ iconName: value })}
              />
              <Spacer />
              <UnitControl label={__('Icon Size :', 'guten-builder-blocks')} value={attributes.iconSize} onChange={val => setAttributes({ iconSize: val })} units={[pxUnit(), remUnit(), emUnit()]} responsive={true} defaultVal={{ desktop: '20px', tablet: '', mobile: '' }} />
            </>
          )}
        </>
      )}
    </PanelBody>
  );
};

export default General;
