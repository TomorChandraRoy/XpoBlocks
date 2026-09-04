import ThemeOne from './ThemeOne';

const TEMPLATES = {
  'template-1': ThemeOne,
};

const PricingTable = (props) => {
  const { attributes = {} } = props;
  const { selectedTemplate = 'template-1' } = attributes;

  const TemplateComponent = TEMPLATES[selectedTemplate] || ThemeOne;
  return <TemplateComponent {...props} />;
};

export default PricingTable;
