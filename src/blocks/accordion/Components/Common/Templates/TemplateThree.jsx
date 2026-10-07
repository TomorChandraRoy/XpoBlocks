import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useRef } from 'react';
import { renderFaqIcon } from '../../../utils/functions';
const TemplateThree = ({ attributes, setAttributes, openIndices = [], toggleItem, updateFaqQuestion, updateFaqAnswer, isEditor, id }) => {
  const { subtitle, title, description, faqsData = [], showHeader = true, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '' } = attributes || {};

  const contentRefs = useRef([]);

  return (
    <div className="xpo-template-three-wapper" id={id}>
      <section className="xpo-faq-section">
        {showHeader && (
          <div className="xpo-faq-header-content">
            {isEditor ? (
              <>
                <RichText tagName="p" className="xpo-faq-subtitle" value={subtitle} onChange={val => setAttributes({ subtitle: val })} placeholder={__('Add your subtitle here', 'xpo-blocks')} />
                <RichText tagName="h1" className="xpo-faq-title" value={title} onChange={val => setAttributes({ title: val })} placeholder={__('Add your title here', 'xpo-blocks')} />
                <RichText tagName="p" className="xpo-faq-description" value={description} onChange={val => setAttributes({ description: val })} placeholder={__('Add your description here', 'xpo-blocks')} />
              </>
            ) : (
              <>
                {subtitle && <RichText.Content tagName="p" className="xpo-faq-subtitle" value={subtitle} />}
                {title && <RichText.Content tagName="h1" className="xpo-faq-title" value={title} />}
                {description && <RichText.Content tagName="p" className="xpo-faq-description" value={description} />}
              </>
            )}
          </div>
        )}

        <div className="xpo-faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div key={index} className={`xpo-faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3 id={`faq-heading-${index}`}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => toggleItem(index)} className={`xpo-faq-toggle xpo-icon-${iconPosition}`}>
                    {iconPosition === 'left' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
                    <span className="xpo-faq-question-text">
                      {isEditor ? <RichText tagName="span" value={faq.question} onChange={val => updateFaqQuestion(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your question here', 'xpo-blocks')} /> : <RichText.Content tagName="span" value={faq.question} />}
                    </span>
                    {iconPosition === 'right' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-heading-${index}`}
                  aria-hidden={!isOpen}
                  ref={el => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                  }}
                  className="xpo-faq-content-wrapper"
                >
                  <div className="xpo-faq-content-inner">
                    {isEditor ? (
                      <RichText tagName="p" className="xpo-faq-answer" value={faq.answer} onChange={val => updateFaqAnswer(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your answer here', 'xpo-blocks')} />
                    ) : (
                      <RichText.Content tagName="p" className="xpo-faq-answer" value={faq.answer} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TemplateThree;
