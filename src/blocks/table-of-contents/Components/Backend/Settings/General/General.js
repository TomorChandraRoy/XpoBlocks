import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TextControl, TextareaControl, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ItemsPanel, UnitControl, pxUnit, perUnit, vhUnit } from 'tr-tools';
import { updateData } from '../../../../utils/functions';
import PanelItems from './PanelItems';

const General = ({ attributes, setAttributes }) => {
	const { items = [], titleText = '', contentTitle = '', contentSubtitle = '', containerWidth = '1140px', sidebarWidth = '320px', contentHeight = '85vh', itemsGap } = attributes;

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined Table of Contents template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes(updateData(attributes, '', 'selectedTemplate'))} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Dimensions & Layout', 'xpo-blocks')} initialOpen={false}>
        <UnitControl label={__('Container Max Width', 'xpo-blocks')} value={containerWidth} defaultVal="1140px" onChange={val => setAttributes(updateData(attributes, val, 'containerWidth'))} units={[pxUnit(1140), perUnit(100)]} />
        <Spacer />
        <UnitControl label={__('Spacing Between Items', 'xpo-blocks')} value={itemsGap} onChange={val => setAttributes(updateData(attributes, val, 'itemsGap'))} units={[pxUnit(12)]} defaultVal="12px" />
        <Spacer />
        <UnitControl label={__('Sidebar Width', 'xpo-blocks')} value={sidebarWidth} defaultVal="320px" onChange={val => setAttributes(updateData(attributes, val, 'sidebarWidth'))} units={[pxUnit(320), perUnit(30)]} />
        <Spacer />
        <UnitControl label={__('Content Area Height', 'xpo-blocks')} value={contentHeight} defaultVal="85vh" onChange={val => setAttributes(updateData(attributes, val, 'contentHeight'))} units={[vhUnit(85), pxUnit(600)]} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Header & Content Text', 'xpo-blocks')} initialOpen={false}>
        <TextControl label={__('TOC Title :', 'xpo-blocks')} value={titleText} onChange={val => setAttributes(updateData(attributes, val, 'titleText'))} placeholder={__('Table of Contents', 'xpo-blocks')} />
        <Spacer />
        <TextControl label={__('Content Main Title :', 'xpo-blocks')} value={contentTitle} onChange={val => setAttributes(updateData(attributes, val, 'contentTitle'))} placeholder={__('Main Content Title', 'xpo-blocks')} />
        <Spacer />
        <TextareaControl label={__('Content Subtitle :', 'xpo-blocks')} value={contentSubtitle} onChange={val => setAttributes(updateData(attributes, val, 'contentSubtitle'))} placeholder={__('Subtitle description', 'xpo-blocks')} rows={2} />
      </PanelBody>

      <ItemsPanel
        title={__('TOC Items Manager', 'xpo-blocks')}
        initialOpen={true}
        items={items}
        onChange={newItems => setAttributes(updateData(attributes, newItems, 'items'))}
        defaultItem={{
          id: 'new-section',
          title: __('New Section Title', 'xpo-blocks'),
          level: 2,
          paragraph: '',
        }}
        addButtonLabel={__('Add TOC Item', 'xpo-blocks')}
        itemTitleKey="title"
        ItemSettings={PanelItems}
      />
    </>
  );
};

export default General;


