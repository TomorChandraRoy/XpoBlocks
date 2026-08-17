import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, Button, TextControl, TextareaControl } from '@wordpress/components';
import { ItemsPanel, ColorControl } from 'tr-tools';

const General = ({ attributes, setAttributes }) => {
  const { faqsData = [], allowMultiple, showHeader, iconPosition = 'left', iconType = 'chevron', iconSize, iconColor, subtitle, title, description} = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined FAQ accordion template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout', 'guten-builder-blocks')} initialOpen={false}>

        <ToggleControl label={__('Show Header', 'guten-builder-blocks')} checked={showHeader} onChange={val => setAttributes({ showHeader: val })} help={__('Toggle to show or hide the subtitle, title, and description section.', 'guten-builder-blocks')} />

        <ToggleControl label={__('Allow Multiple Open', 'guten-builder-blocks')} checked={allowMultiple} onChange={val => setAttributes({ allowMultiple: val })} help={__('If disabled, expanding one item collapses the others.', 'guten-builder-blocks')} />
      </PanelBody>

      {showHeader && (
        <PanelBody className="bPlPanelBody" title={__('Header Content', 'guten-builder-blocks')} initialOpen={false}>
          <TextControl
            label={__('Subtitle', 'guten-builder-blocks')}
            value={subtitle}
            onChange={val => setAttributes({ subtitle: val })}
            placeholder={__('Add your subtitle here', 'guten-builder-blocks')}
          />
          <TextControl
            label={__('Title', 'guten-builder-blocks')}
            value={title}
            onChange={val => setAttributes({ title: val })}
            placeholder={__('Add your title here', 'guten-builder-blocks')}
          />
          <TextareaControl
            label={__('Description', 'guten-builder-blocks')}
            value={description}
            onChange={val => setAttributes({ description: val })}
            placeholder={__('Add your description here', 'guten-builder-blocks')}
            rows={3}
          />
        </PanelBody>
      )}

      <ItemsPanel
        title={__('FAQ Items Manager', 'guten-builder-blocks')}
        items={faqsData}
        onChange={newFaqs => setAttributes({ faqsData: newFaqs })}
        defaultItem={{
          question: __('', 'guten-builder-blocks'),
          answer: __('', 'guten-builder-blocks'),
        }}
        addButtonLabel={__('Add FAQ Item', 'guten-builder-blocks')}
        itemTitleKey="question"
        fields={[
          { key: 'question', label: __('Question', 'guten-builder-blocks'), type: 'text' },
          { key: 'answer', label: __('Answer', 'guten-builder-blocks'), type: 'textarea', rows: 3 },
        ]}
      />

      <PanelBody className="bPlPanelBody"  title={__('Icon Settings', 'guten-builder-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Icon Position :', 'guten-builder-blocks')}
          value={iconPosition}
          options={[
            { label: __('Left', 'guten-builder-blocks'), value: 'left' },
            { label: __('Right', 'guten-builder-blocks'), value: 'right' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconPosition: val })}
        />
        <SelectControl
          label={__('Icon Type :', 'guten-builder-blocks')}
          value={iconType}
          options={[
            { label: __('Chevron', 'guten-builder-blocks'), value: 'chevron' },
            { label: __('Plus / Minus', 'guten-builder-blocks'), value: 'plus-minus' },
            { label: __('Caret', 'guten-builder-blocks'), value: 'caret' },
            { label: __('None (Hide Icon)', ' guten-builder-blocks'), value: 'none' },
          ]}
          __next40pxDefaultSize
          onChange={val => setAttributes({ iconType: val })}
        />
        <RangeControl label={__('Icon Size (px)', 'guten-builder-blocks')} value={iconSize} onChange={val => setAttributes({ iconSize: val })} min={12} max={48} __next40pxDefaultSize />
        <ColorControl
          label={__('Icon Color', 'guten-builder-blocks')}
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
