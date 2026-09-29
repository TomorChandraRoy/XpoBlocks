import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { ItemsPanel, IconControl } from 'tr-tools';
const textDomain = 'xpo-block';


const FeatureItemSettings = ({ item: featureItem, updateField: updateFeatureField }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <TextControl label={__('Feature Label', textDomain)} value={featureItem.label} onChange={val => updateFeatureField('label', val)} />
    <IconControl
      label={__('Feature Icon', textDomain)}
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
      <ToggleControl label={__('Make Popular (Highlight)', textDomain)} checked={item.isFeatured} onChange={val => updateField('isFeatured', val)} />

      {item.isFeatured && <TextControl label={__('Badge Text', textDomain)} value={item.badgeText} onChange={val => updateField('badgeText', val)} placeholder="e.g. POPULAR" />}

      <TextControl label={__('Plan Name', textDomain)} value={item.name} onChange={val => updateField('name', val)} placeholder="e.g. Basic Plan" />
      <TextareaControl label={__('Description', textDomain)} value={item.desc} onChange={val => updateField('desc', val)} rows={2} placeholder="Brief description here" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <TextControl label={__('Currency', textDomain)} value={item.priceCurrency} onChange={val => updateField('priceCurrency', val)} placeholder="e.g. $" />
        <TextControl label={__('Price', textDomain)} value={item.price} onChange={val => updateField('price', val)} placeholder="e.g. 29" />
      </div>

      <TextControl label={__('Period', textDomain)} value={item.period} onChange={val => updateField('period', val)} placeholder="e.g. /month" />

      <TextControl label={__('Button Link', textDomain)} value={item.link} onChange={val => updateField('link', val)} placeholder="https://" />
      <ToggleControl label={__('Open link in new tab', textDomain)} checked={item.isLinkNewTab} onChange={val => updateField('isLinkNewTab', val)} />
      <TextControl label={__('Button Label', textDomain)} value={item.linkLabel} onChange={val => updateField('linkLabel', val)} placeholder="e.g. Get Started" />

      <TextControl label={__('Features Title', textDomain)} value={item.featuresTitle} onChange={val => updateField('featuresTitle', val)} placeholder="e.g. What's included:" />

      <ItemsPanel
        title={__('Features List', textDomain)}
        initialOpen={false}
        items={item.features || []}
        addButtonLabel={__(' Add Feature', textDomain)}
        itemTitleKey="label"
        defaultItem={{ label: 'New Feature', icon: 'fas-check' }}
        onChange={newFeatures => updateField('features', newFeatures)}
        ItemSettings={FeatureItemSettings}
      />
    </div>
  );
};

export default PanelItems;
