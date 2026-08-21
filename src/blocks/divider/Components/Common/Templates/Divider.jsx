import TemplateOne from './TemplateOne';

const TEMPLATES = {
    'template-1': TemplateOne,
};

const Divider = ({ attributes, setAttributes }) => {
  const { selectedTemplate = 'template-1' } = attributes || {};

  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
  return <TemplateComponent attributes={attributes} setAttributes={setAttributes} />;
};

export default Divider;
