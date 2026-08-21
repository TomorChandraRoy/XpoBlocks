import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

const TEMPLATES = {
    'template-1': TemplateOne,
    'template-2': TemplateTwo,
};

const Divider = ({ attributes, setAttributes }) => {
  const { selectedTemplate = 'template-1' } = attributes || {};

  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
  return <TemplateComponent attributes={attributes} setAttributes={setAttributes} />;
};

export default Divider;
