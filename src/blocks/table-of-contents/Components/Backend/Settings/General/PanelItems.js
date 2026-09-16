import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl, SelectControl } from '@wordpress/components';

const defaultParagraph = __('This area contains the contextual contents mapped perfectly from the reference URL. Custom logic structure applies standard WordPress ecosystem optimization procedures natively.', 'guten-builder-blocks');

const PanelItems = ({ item, updateField }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
      <TextControl
        label={__('Title :', 'guten-builder-blocks')}
        value={item.title !== undefined ? item.title : ''}
        onChange={(val) => updateField('title', val)}
      />
      <TextControl
        label={__('Anchor ID (Optional) :', 'guten-builder-blocks')}
        value={item.id !== undefined ? item.id : ''}
        onChange={(val) => updateField('id', val)}
        help={__('Enter a custom section ID. If left empty, an automatic ID will be generated from the title.', 'guten-builder-blocks')}
      />
      <SelectControl
        label={__('Heading Level :', 'guten-builder-blocks')}
        value={item.level !== undefined ? item.level : 2}
        options={[
          { label: __('H2', 'guten-builder-blocks'), value: 2 },
          { label: __('H3', 'guten-builder-blocks'), value: 3 },
          { label: __('H4', 'guten-builder-blocks'), value: 4 },
        ]}
        onChange={(val) => updateField('level', Number(val))}
        __next40pxDefaultSize
      />
      <TextareaControl
        label={__('Section Content :', 'guten-builder-blocks')}
        value={item.paragraph !== undefined ? item.paragraph : defaultParagraph}
        onChange={(val) => updateField('paragraph', val)}
        rows={3}
      />
    </div>
  );
};

export default PanelItems;

