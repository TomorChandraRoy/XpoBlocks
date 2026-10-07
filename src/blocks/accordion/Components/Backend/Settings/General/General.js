import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, Button, TextControl, TextareaControl } from '@wordpress/components';
import { ItemsPanel, ColorControl } from 'tr-tools';
import PanelItems from './PanelItems';
const General = ({ attributes, setAttributes }) => {
  const { faqsData = [], allowMultiple, showHeader, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '', subtitle, title, description} = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined FAQ accordion template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout', 'xpo-blocks')} initialOpen={false}>
        <ToggleControl label={__('Show Header', 'xpo-blocks')} checked={showHeader} onChange={val => setAttributes({ showHeader: val })} help={__('Toggle to show or hide the subtitle, title, and description section.', 'xpo-blocks')} />

        <ToggleControl label={__('Allow Multiple Open', 'xpo-blocks')} checked={allowMultiple} onChange={val => setAttributes({ allowMultiple: val })} help={__('If disabled, expanding one item collapses the others.', 'xpo-blocks')} />
      </PanelBody>

      {showHeader && (
        <PanelBody className="bPlPanelBody" title={__('Header Content', 'xpo-blocks')} initialOpen={false}>
          <TextControl label={__('Subtitle', 'xpo-blocks')} value={subtitle} onChange={val => setAttributes({ subtitle: val })} placeholder={__('Add your subtitle here', 'xpo-blocks')} />
          <TextControl label={__('Title', 'xpo-blocks')} value={title} onChange={val => setAttributes({ title: val })} placeholder={__('Add your title here', 'xpo-blocks')} />
          <TextareaControl label={__('Description', 'xpo-blocks')} value={description} onChange={val => setAttributes({ description: val })} placeholder={__('Add your description here', 'xpo-blocks')} rows={3} />
        </PanelBody>
      )}

      <ItemsPanel
        title={__('FAQ Items Manager', 'xpo-blocks')} //panel name
        initialOpen={true} //panel open by default on na off
        items={faqsData} //your data array
        onChange={newFaqs => setAttributes({ faqsData: newFaqs })} //your data array
        defaultItem={{
          question: '',
          answer: '',
        }}
        addButtonLabel={__('Add FAQ Item', 'xpo-blocks')} //add item button text
        itemTitleKey="question" //which item title will show in the list header
        ItemSettings={PanelItems} //item settings component which render your item fields
      />

      <PanelBody className="bPlPanelBody" title={__('Icon Settings', 'xpo-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Icon Position :', 'xpo-blocks')}
          value={iconPosition}
          options={[
            { label: __('Left', 'xpo-blocks'), value: 'left' },
            { label: __('Right', 'xpo-blocks'), value: 'right' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconPosition: val })}
        />
        <SelectControl
          label={__('Icon Type :', 'xpo-blocks')}
          value={iconType}
          options={[
            { label: __('Chevron', 'xpo-blocks'), value: 'chevron' },
            { label: __('Plus / Minus', 'xpo-blocks'), value: 'plus-minus' },
            { label: __('Caret', 'xpo-blocks'), value: 'caret' },
            { label: __('None (Hide Icon)', 'xpo-blocks'), value: 'none' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconType: val })}
        />
        <RangeControl label={__('Icon Size (px)', 'xpo-blocks')} value={iconSize} onChange={val => setAttributes({ iconSize: val })} min={12} max={48} __next40pxDefaultSize />
        <ColorControl
          label={__('Icon Color', 'xpo-blocks')}
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
