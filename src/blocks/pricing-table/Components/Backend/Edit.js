import { useBlockProps, RichText } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import PricingTable from '../Common/Templates/PricingTable.jsx';
import DynamicStyle from '../Common/dynamicStyle';
import { TemplateSelector } from 'tr-tools';
import { templateData } from '../../utils/data';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);


  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps()}>
          <TemplateSelector {...{ attributes, setAttributes }} title={templateData.title} subtitle={templateData.subtitle} templates={templateData.templates} isPro={true} proTemplates={[]} />
        </div>
      ) : (
        <div {...useBlockProps()}>
          <DynamicStyle attributes={attributes} clientId={`block-${clientId}`} />
          <PricingTable attributes={attributes} setAttributes={setAttributes} RichTextEl={RichText} isBackend={true} clientId={clientId} />
        </div>
      )}
    </>
  );
};

export default Edit;
