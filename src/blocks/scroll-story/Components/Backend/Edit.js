import { useBlockProps, RichText } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import ScrollStory from '../Common/Templates/ScrollStory';
import DynamicStyle from '../Common/DynamicStyles';
import { TemplateSelector } from 'tr-tools';
import { templateData } from '../../utils/data';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);
  const id = `block-${clientId}`;
  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps({ id })}>
          <TemplateSelector {...{ attributes, setAttributes }} title={templateData.title} subtitle={templateData.subtitle} templates={templateData.templates} isPro={true} proTemplates={['template-1']} />
        </div>
      ) : (
        <div {...useBlockProps({ id })}>
          <DynamicStyle attributes={attributes} clientId={id} />
          <ScrollStory attributes={attributes} setAttributes={setAttributes} RichTextEl={RichText} isBackend={true} />
        </div>
      )}
    </>
  );
};

export default Edit;
