import { __ } from '@wordpress/i18n';
import { TextControl, TextareaControl } from '@wordpress/components';

const PanelItems = ({ item, index, updateField }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
      <TextControl
        label={__('Question', 'guten-builder-blocks')}
        value={item.question !== undefined ? item.question : ''}
        onChange={(val) => updateField('question', val)}
      />
      <TextareaControl
        label={__('Answer', 'guten-builder-blocks')}
        value={item.answer !== undefined ? item.answer : ''}
        onChange={(val) => updateField('answer', val)}
        rows={3}
      />
    </div>
  );
};

export default PanelItems;
