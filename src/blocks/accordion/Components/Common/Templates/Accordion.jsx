import { useState } from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';
import { updateData } from '../../../utils/functions';

const TEMPLATES = {
  'template-1': TemplateOne,
  'template-2': TemplateTwo,
  'template-3': TemplateThree,
};

const Accordion = ({ attributes, setAttributes, id }) => {
  const { selectedTemplate = 'template-1', allowMultiple = false } = attributes || {};

  const [openIndices, setOpenIndices] = useState([]);
  
  const isEditor = typeof setAttributes === 'function';

  const toggleItem = index => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      if (openIndices.includes(index)) {
        setOpenIndices([]);
      } else {
        setOpenIndices([index]);
      }
    }
  };

  const updateFaqQuestion = (index, value) => {
    if (!isEditor) return;
    setAttributes(updateData(attributes, value, 'faqsData', index, 'question'));
  };

  const updateFaqAnswer = (index, value) => {
    if (!isEditor) return;
    setAttributes(updateData(attributes, value, 'faqsData', index, 'answer'));
  };

  const TemplateComponent = TEMPLATES[selectedTemplate] || TemplateOne;

  return (
    <TemplateComponent
      attributes={attributes}
      setAttributes={setAttributes}
      openIndices={openIndices}
      toggleItem={toggleItem}
      updateFaqQuestion={updateFaqQuestion}
      updateFaqAnswer={updateFaqAnswer}
      isEditor={isEditor}
      id={id}
    />
  );
};

export default Accordion;
