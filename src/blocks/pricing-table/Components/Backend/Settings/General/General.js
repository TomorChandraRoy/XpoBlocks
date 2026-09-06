import { __ } from '@wordpress/i18n';
import { PanelBody, Button } from '@wordpress/components';
import { ItemsPanel } from 'tr-tools';
import PanelItems from './PanelItems';

const General = ({ attributes, setAttributes }) => {
	const { pricingTables = [] } = attributes;

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
          period: 'mo',
          link: '#',
          isLinkNewTab: false,
          linkLabel: 'Buy Now',
          isFeatured: false,
          badgeText: 'POPULAR',
          features: [
            { label: 'Feature 1', icon: 'fas-check', iconColor: '#4338ca' },
            { label: 'Feature 2', icon: 'fas-check', iconColor: '#4338ca' },
          ],
        }}
        onChange={newTables => setAttributes({ pricingTables: newTables })}
        ItemSettings={PanelItems}
      />
    </>
  );
};

export default General;
