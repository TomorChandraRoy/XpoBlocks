import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { ItemsPanel } from 'tr-tools';

const PanelItems = ({ item, index, updateField }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
      <TextControl label={__('Plan Name', 'guten-builder-blocks')} value={item.name} onChange={val => updateField('name', val)} />
      <TextareaControl label={__('Description', 'guten-builder-blocks')} value={item.desc} onChange={val => updateField('desc', val)} rows={2} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '8px' }}>
        <TextControl label={__('Currency', 'guten-builder-blocks')} value={item.priceCurrency} onChange={val => updateField('priceCurrency', val)} />
        <TextControl label={__('Price', 'guten-builder-blocks')} value={item.price} onChange={val => updateField('price', val)} />
        <TextControl label={__('Period', 'guten-builder-blocks')} value={item.period} onChange={val => updateField('period', val)} />
      </div>

      <TextControl label={__('Button Link', 'guten-builder-blocks')} value={item.link} onChange={val => updateField('link', val)} />
      <TextControl label={__('Button Label', 'guten-builder-blocks')} value={item.linkLabel} onChange={val => updateField('linkLabel', val)} />

      <ToggleControl label={__('Featured / Popular (Highlight)', 'guten-builder-blocks')} checked={item.isFeatured} onChange={val => updateField('isFeatured', val)} />

      {item.isFeatured && <TextControl label={__('Badge Text', 'guten-builder-blocks')} value={item.badgeText} onChange={val => updateField('badgeText', val)} placeholder="e.g. POPULAR" />}

      <div style={{ marginTop: '8px' }}>
        <ItemsPanel
          title={__('Features List', 'guten-builder-blocks')}
          items={item.features || []}
          addButtonLabel={__('＋ Add Feature', 'guten-builder-blocks')}
          itemTitleKey="label"
          defaultItem={{ label: 'New Feature', isEnable: true }}
          fields={[
            { key: 'label', label: 'Feature Label', type: 'text' },
            { key: 'isEnable', label: 'Show Checkmark? (Toggle off for Cross)', type: 'toggle' },
          ]}
          onChange={newFeatures => updateField('features', newFeatures)}
        />
      </div>
    </div>
  );
};

export default PanelItems;
