import React from 'react';
import TemplateOne from './TemplateOne';
const TEMPLATES = {
  'template-1': TemplateOne,

};

const QRCodeBlock = ({ attributes, setAttributes, isEditor = false }) => {
  const { selectedTemplate = 'template-1' } = attributes || {};

  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
  return <TemplateComponent attributes={attributes} setAttributes={setAttributes} isEditor={isEditor} />;
};

export default QRCodeBlock;
