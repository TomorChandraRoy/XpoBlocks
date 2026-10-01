import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, Button, TextControl, TextareaControl } from '@wordpress/components';
import { ItemsPanel, ColorControl } from 'tr-tools';
import PanelItems from './PanelItems';
const textDomain = 'xpo-blocks';

const General = ({ attributes, setAttributes }) => {
  const { faqsData = [], allowMultiple, showHeader, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '', subtitle, title, description} = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined FAQ accordion template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout', textDomain)} initialOpen={false}>
        <ToggleControl label={__('Show Header', textDomain)} checked={showHeader} onChange={val => setAttributes({ showHeader: val })} help={__('Toggle to show or hide the subtitle, title, and description section.', textDomain)} />

        <ToggleControl label={__('Allow Multiple Open', textDomain)} checked={allowMultiple} onChange={val => setAttributes({ allowMultiple: val })} help={__('If disabled, expanding one item collapses the others.', textDomain)} />
      </PanelBody>

      {showHeader && (
        <PanelBody className="bPlPanelBody" title={__('Header Content', textDomain)} initialOpen={false}>
          <TextControl label={__('Subtitle', textDomain)} value={subtitle} onChange={val => setAttributes({ subtitle: val })} placeholder={__('Add your subtitle here', textDomain)} />
          <TextControl label={__('Title', textDomain)} value={title} onChange={val => setAttributes({ title: val })} placeholder={__('Add your title here', textDomain)} />
          <TextareaControl label={__('Description', textDomain)} value={description} onChange={val => setAttributes({ description: val })} placeholder={__('Add your description here', textDomain)} rows={3} />
        </PanelBody>
      )}

      <ItemsPanel
        title={__('FAQ Items Manager', textDomain)} //panel name
        initialOpen={true} //panel open by default on na off
        items={faqsData} //your data array
        onChange={newFaqs => setAttributes({ faqsData: newFaqs })} //your data array
        defaultItem={{
          question: '',
          answer: '',
        }}
        addButtonLabel={__('Add FAQ Item', textDomain)} //add item button text
        itemTitleKey="question" //which item title will show in the list header
        ItemSettings={PanelItems} //item settings component which render your item fields
      />

      <PanelBody className="bPlPanelBody" title={__('Icon Settings', textDomain)} initialOpen={false}>
        <SelectControl
          label={__('Icon Position :', textDomain)}
          value={iconPosition}
          options={[
            { label: __('Left', textDomain), value: 'left' },
            { label: __('Right', textDomain), value: 'right' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconPosition: val })}
        />
        <SelectControl
          label={__('Icon Type :', textDomain)}
          value={iconType}
          options={[
            { label: __('Chevron', textDomain), value: 'chevron' },
            { label: __('Plus / Minus', textDomain), value: 'plus-minus' },
            { label: __('Caret', textDomain), value: 'caret' },
            { label: __('None (Hide Icon)', textDomain), value: 'none' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconType: val })}
        />
        <RangeControl label={__('Icon Size (px)', textDomain)} value={iconSize} onChange={val => setAttributes({ iconSize: val })} min={12} max={48} __next40pxDefaultSize />
        <ColorControl
          label={__('Icon Color', textDomain)}
          value={iconColor}
          onChange={color => {
            setAttributes({ iconColor: color });
          }}
          defaultColor=""
        />
      </PanelBody>
    </>
  );
};

export default General;
