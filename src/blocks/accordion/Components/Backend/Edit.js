import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Accordion from '../Common/Templates/Accordion';
import DynamicStyles from '../Common/DynamicStyles';
import { TemplateSelector } from 'tr-tools';
import { templateData } from '../../utils/data';

const Edit = props => {

  const { attributes, setAttributes, clientId } = props;

  const { selectedTemplate = '' } = attributes;

  const isTemplateSelected = Boolean(selectedTemplate);

  const id = `block-${clientId}`; //akne block prefix ta defulte vabe asche ata cheange kora jabe na

  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps()}>
          <TemplateSelector
            {...{ attributes, setAttributes }}
            title={templateData.title}
            subtitle={templateData.subtitle}
            templates={templateData.templates}
            isPro={true} //akne freemius aer true/false jabe 
            proTemplates={['template-3']}
          />
        </div>
      ) : (
        <div {...useBlockProps({ id })}>
          <DynamicStyles attributes={attributes} id={id} />
          <Accordion attributes={attributes} setAttributes={setAttributes} id={id} />
        </div>
      )}
    </>
  );
};

export default Edit;
