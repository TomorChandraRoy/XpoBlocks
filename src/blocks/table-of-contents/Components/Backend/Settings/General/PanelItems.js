import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl, SelectControl } from '@wordpress/components';

const textDomain = 'xpo-block';

const defaultParagraph = __('This area contains the contextual contents mapped perfectly from the reference URL. Custom logic structure applies standard WordPress ecosystem optimization procedures natively.', textDomain);

const PanelItems = ({ item, updateField }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
      <TextControl
        label={__('Title :', textDomain)}
        value={item.title !== undefined ? item.title : ''}
        onChange={(val) => updateField('title', val)}
      />
      <TextControl
        label={__('Anchor ID (Optional) :', textDomain)}
        value={item.id !== undefined ? item.id : ''}
        onChange={(val) => updateField('id', val)}
        help={__('Enter a custom section ID. If left empty, an automatic ID will be generated from the title.', textDomain)}
      />
      <SelectControl
        label={__('Heading Level :', textDomain)}
        value={item.level !== undefined ? item.level : 2}
        options={[
          { label: __('H2', textDomain), value: 2 },
          { label: __('H3', textDomain), value: 3 },
          { label: __('H4', textDomain), value: 4 },
        ]}
        onChange={(val) => updateField('level', Number(val))}
        __next40pxDefaultSize
      />
      <TextareaControl
        label={__('Section Content :', textDomain)}
        value={item.paragraph !== undefined ? item.paragraph : defaultParagraph}
        onChange={(val) => updateField('paragraph', val)}
        rows={3}
      />
    </div>
  );
};

export default PanelItems;

