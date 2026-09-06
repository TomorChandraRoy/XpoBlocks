import { __ } from '@wordpress/i18n';
import { PanelBody, Button, RangeControl } from '@wordpress/components';
import { ItemsPanel, UnitControl, pxUnit, perUnit } from 'tr-tools';
import PanelItems from './PanelItems';

const General = ({ attributes, setAttributes }) => {
	const { pricingTables = [], columns, gap, containerWidth } = attributes;

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined pricing template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <ItemsPanel
        items={pricingTables}
        title={__('Pricing Tables', 'guten-builder-blocks')} //Panelbody aer name
        addButtonLabel={__('＋ Add Pricing Card', 'guten-builder-blocks')}
        itemTitleKey="name" //kon property ke items title hishebe dekhabe
        defaultItem={{
          name: 'New Plan',
          desc: 'Brief description here',
          price: '49',
          priceCurrency: '$',
          period: '/month',
          link: '#',
          isLinkNewTab: false,
          linkLabel: 'Buy Now',
          isFeatured: false,
          badgeText: 'POPULAR',
          featuresTitle: __("What's included:", 'guten-builder-blocks'),
          features: [
            { label: 'Feature 1', icon: 'fas-check', iconColor: '#4338ca' },
            { label: 'Feature 2', icon: 'fas-check', iconColor: '#4338ca' },
          ],
        }}
        onChange={newTables => setAttributes({ pricingTables: newTables })}
        ItemSettings={PanelItems}
      />

      <PanelBody className="bPlPanelBody" title={__('Layout Settings', 'guten-builder-blocks')} initialOpen={false}>
        <RangeControl label={__('Columns', 'guten-builder-blocks')} value={columns} onChange={value => setAttributes({ columns: value })} min={1} max={4} />
        <RangeControl label={__('Gap (px)', 'guten-builder-blocks')} value={gap} onChange={value => setAttributes({ gap: value })} min={0} max={100} />
        <UnitControl label={__('Max Width', 'guten-builder-blocks')} value={containerWidth} defaultVal="1200px" onChange={value => setAttributes({ containerWidth: value })} units={[pxUnit(1200), perUnit(100)]} />
      </PanelBody>
      
    </>
  );
};

export default General;
