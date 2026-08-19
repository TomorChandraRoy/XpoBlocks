import TemplateOne from './Templates/TemplateOne';

const TEMPLATES = {
  'template-1': TemplateOne,
};

const BeforeAfter = ({ attributes, setAttributes }) => {
  const { selectedTemplate = 'template-1' } = attributes || {};

  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];

  return <TemplateComponent attributes={attributes} setAttributes={setAttributes} />;
};

export default BeforeAfter;
