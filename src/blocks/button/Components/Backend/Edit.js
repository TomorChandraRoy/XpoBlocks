import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import DynamicStyle from '../Common/DynamicStyle';
import Button from '../Common/Templates/Button';
import { TemplateSelector } from 'tr-tools';
import { templateData } from '../../utils/data';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  const id = `block-${clientId}`;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps()}>
          <TemplateSelector
            {...{ attributes, setAttributes }}
            title={templateData.title}
            subtitle={templateData.subtitle}
            templates={templateData.templates}
            isPro={true}
            proTemplates={['template-1']}
          />
        </div>
      ) : (
        <div {...useBlockProps({ style: { padding: '3px' } })}>
          <DynamicStyle attributes={attributes} id={id} />
          <Button attributes={attributes} setAttributes={setAttributes} id={id} />
        </div>
      )}
    </>
  );
};
export default Edit;
