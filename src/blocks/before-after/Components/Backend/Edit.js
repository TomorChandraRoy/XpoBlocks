import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import BeforeAfter from '../Common/Templates/BeforeAfter.jsx';
import DynamicStyles from '../Common/DynamicStyles';
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
        <div {...useBlockProps()}>
          <DynamicStyles attributes={attributes} id={id} />
          <BeforeAfter attributes={attributes} setAttributes={setAttributes} id={id} />
        </div>
      )}
    </>
  );
};

export default Edit;
