import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { ItemsPanel, IconControl } from 'tr-tools';

const FeatureItemSettings = ({ item: featureItem, updateField: updateFeatureField }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <TextControl label={__('Feature Label', 'guten-builder-blocks')} value={featureItem.label} onChange={val => updateFeatureField('label', val)} />
    <IconControl
      label={__('Feature Icon', 'guten-builder-blocks')}
      value={featureItem.icon}
      defaultValue="fas-check"
      onChange={val => updateFeatureField('icon', val)}
      enableColor={true}
      colorValue={featureItem.iconColor}
      defaultColorValue="#475569"
      onColorChange={val => updateFeatureField('iconColor', val)}
    />
  </div>
);

const PanelItems = ({ item, updateField }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
      <ToggleControl label={__('Make Popular (Highlight)', 'guten-builder-blocks')} checked={item.isFeatured} onChange={val => updateField('isFeatured', val)} />

      {item.isFeatured && <TextControl label={__('Badge Text', 'guten-builder-blocks')} value={item.badgeText} onChange={val => updateField('badgeText', val)} placeholder="e.g. POPULAR" />}

      <TextControl label={__('Plan Name', 'guten-builder-blocks')} value={item.name} onChange={val => updateField('name', val)} placeholder="e.g. Basic Plan" />
      <TextareaControl label={__('Description', 'guten-builder-blocks')} value={item.desc} onChange={val => updateField('desc', val)} rows={2} placeholder="Brief description here" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <TextControl label={__('Currency', 'guten-builder-blocks')} value={item.priceCurrency} onChange={val => updateField('priceCurrency', val)} placeholder="e.g. $" />
        <TextControl label={__('Price', 'guten-builder-blocks')} value={item.price} onChange={val => updateField('price', val)} placeholder="e.g. 29" />
      </div>

      <TextControl label={__('Period', 'guten-builder-blocks')} value={item.period} onChange={val => updateField('period', val)} placeholder="e.g. /month" />

      <TextControl label={__('Button Link', 'guten-builder-blocks')} value={item.link} onChange={val => updateField('link', val)} placeholder="https://" />
      <ToggleControl label={__('Open link in new tab', 'guten-builder-blocks')} checked={item.isLinkNewTab} onChange={val => updateField('isLinkNewTab', val)} />
      <TextControl label={__('Button Label', 'guten-builder-blocks')} value={item.linkLabel} onChange={val => updateField('linkLabel', val)} placeholder="e.g. Get Started" />

      <TextControl label={__('Features Title', 'guten-builder-blocks')} value={item.featuresTitle} onChange={val => updateField('featuresTitle', val)} placeholder="e.g. What's included:" />

      <ItemsPanel
        title={__('Features List', 'guten-builder-blocks')}
        items={item.features || []}
        addButtonLabel={__(' Add Feature', 'guten-builder-blocks')}
        itemTitleKey="label"
        defaultItem={{ label: 'New Feature', icon: 'fas-check' }}
        onChange={newFeatures => updateField('features', newFeatures)}
        ItemSettings={FeatureItemSettings}
      />
    </div>
  );
};

export default PanelItems;
