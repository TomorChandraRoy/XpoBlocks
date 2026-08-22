import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import { TemplateSelector } from 'tr-tools';
import DynamicStyle from '../Common/DynamicStyle';
import Marquee from '../Common/Templates/Marquee';
import { templateData } from '../../utils/data';

const Edit = props => {
  const { attributes, setAttributes,clientId } = props;

  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);
  const id = `block-${clientId}`;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps()}>
          <TemplateSelector {...{ attributes, setAttributes }} title={templateData.title} subtitle={templateData.subtitle} templates={templateData.templates} isPro={true} proTemplates={['template-1']} />
        </div>
      ) : (
        <div {...useBlockProps()}>
          <DynamicStyle attributes={attributes} id={id} />
          <Marquee attributes={attributes} setAttributes={setAttributes} id={id} />
        </div>
      )}
    </>
  );
};

export default Edit;
