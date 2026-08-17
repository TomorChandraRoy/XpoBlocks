import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { renderFaqIcon } from '../../../utils/functions';

const TemplateTwo = ({ attributes, setAttributes, openIndices = [], toggleItem, updateFaqQuestion, updateFaqAnswer, isEditor, id }) => {
    const { subtitle, title, description, faqsData = [], showHeader, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '' } = attributes || {};

  return (
    <div className="gbb-template-two-wapper" id={id}>
      <div className="gbb-faq-container">
        {showHeader &&
          (isEditor ? (
            <>
              <RichText tagName="p" className="gbb-faq-subtitle" value={subtitle} onChange={val => setAttributes({ subtitle: val })} placeholder={__('Add your subtitle here', 'guten-builder-blocks')} />
              <RichText tagName="h1" className="gbb-faq-title" value={title} onChange={val => setAttributes({ title: val })} placeholder={__('Add your title here', 'guten-builder-blocks')} />
              <RichText tagName="p" className="gbb-faq-description" value={description} onChange={val => setAttributes({ description: val })} placeholder={__('Add your description here', 'guten-builder-blocks')} />
            </>
          ) : (
            <>
              {subtitle && <RichText.Content tagName="p" className="gbb-faq-subtitle" value={subtitle} />}
              {title && <RichText.Content tagName="h1" className="gbb-faq-title" value={title} />}
              {description && <RichText.Content tagName="p" className="gbb-faq-description" value={description} />}
            </>
          ))}
        {faqsData.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div className="gbb-faq-item" key={index}>
              <div className={`gbb-faq-header gbb-icon-${iconPosition}`} onClick={() => toggleItem(index)}>
                {iconPosition === 'left' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
                {isEditor ? (
                  <RichText tagName="h3" className="gbb-faq-question" value={faq.question} onChange={val => updateFaqQuestion(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your question here', 'guten-builder-blocks')} />
                ) : (
                  <RichText.Content tagName="h3" className="gbb-faq-question" value={faq.question} />
                )}
                {iconPosition === 'right' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
              </div>
              {isEditor ? (
                <RichText tagName="p" className={`gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`} value={faq.answer} onChange={val => updateFaqAnswer(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your answer here', 'guten-builder-blocks')} />
              ) : (
                <RichText.Content tagName="p" className={`gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`} value={faq.answer} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateTwo;
