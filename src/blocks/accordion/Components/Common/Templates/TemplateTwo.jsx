// import { RichText } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';
// import { renderFaqIcon } from '../../../utils/functions';
import { useState } from 'react';

const TemplateTwo = ({ attributes, setAttributes, openIndices = [], toggleItem, updateFaqQuestion, updateFaqAnswer, isEditor, id }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "How to use this component?",
            answer: "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
        },
        {
            question: "Are there any other components available?",
            answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
        },
        {
            question: "Are components responsive?",
            answer: "Yes, all components are responsive and can be used on different screen sizes.",
        },
        {
            question: "Can I customize the components?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
    ];

  return (
    <div className="gbb-faq-wrapper-theme gbb-template-two" id={id}>

            <div className="gbb-faq-container">
                <p className="gbb-faq-subtitle">FAQ's</p>
                <h1 className="gbb-faq-title">Looking for answer?</h1>
                <p className="gbb-faq-description">
                    Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
                </p>
                {faqs.map((faq, index) => (
                    <div className="gbb-faq-item" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="gbb-faq-header">
                            <h3 className="gbb-faq-question">
                                {faq.question}
                            </h3>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`gbb-faq-arrow ${openIndex === index ? "is-open" : ""}`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={`gbb-faq-answer ${openIndex === index ? "is-open" : "is-closed"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
  </div>

  );
};

export default TemplateTwo;
