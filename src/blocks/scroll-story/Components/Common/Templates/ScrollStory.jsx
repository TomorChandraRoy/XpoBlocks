import TemplateOne from './TemplateOne';

const TEMPLATES = {
	'template-1': TemplateOne,
};

const ScrollStory = (props) => {
	const { attributes } = props || {};
	const { selectedTemplate = 'template-1' } = attributes || {};

	const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
	return <TemplateComponent {...props} />;
};

export default ScrollStory;
