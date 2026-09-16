import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import TableOfContents from '../Common/Templates/TableOfContents';
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
      <Settings {...{ attributes, setAttributes, clientId }} />
      {!isTemplateSelected ? (
        <div {...useBlockProps()}>
          <TemplateSelector {...{ attributes, setAttributes }} title={templateData.title} subtitle={templateData.subtitle} templates={templateData.templates} isPro={true} proTemplates={['template-1']} />
        </div>
      ) : (
        <div {...useBlockProps({ id, style: { padding: '3px' }, draggable: false })}>
          <DynamicStyles attributes={attributes} id={id} />
          <TableOfContents attributes={attributes} setAttributes={setAttributes} id={id} />
        </div>
      )}
    </>
  );
};

export default Edit;
