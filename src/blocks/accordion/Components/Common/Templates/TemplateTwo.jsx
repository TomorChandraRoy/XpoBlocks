import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { renderFaqIcon } from '../../../utils/functions';
const TemplateTwo = ({ attributes, setAttributes, openIndices = [], toggleItem, updateFaqQuestion, updateFaqAnswer, isEditor, id }) => {
  const { subtitle, title, description, faqsData = [], showHeader, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '' } = attributes || {};

  return (
    <div className="xpo-template-two-wapper" id={id}>
      <div className="xpo-faq-container">
        {showHeader &&
          (isEditor ? (
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
          ))}
        {faqsData.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div className="xpo-faq-item" key={index}>
              <div className={`xpo-faq-header xpo-icon-${iconPosition}`} onClick={() => toggleItem(index)}>
                {iconPosition === 'left' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
                {isEditor ? (
                  <RichText tagName="h3" className="xpo-faq-question" value={faq.question} onChange={val => updateFaqQuestion(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your question here', 'xpo-blocks')} />
                ) : (
                  <RichText.Content tagName="h3" className="xpo-faq-question" value={faq.question} />
                )}
                {iconPosition === 'right' && renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
              </div>
                {isEditor ? (
                <RichText tagName="p" className={`xpo-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`} value={faq.answer} onChange={val => updateFaqAnswer(index, val)} onClick={e => e.stopPropagation()} placeholder={__('Add your answer here', 'xpo-blocks')} />
                ) : (
                <RichText.Content tagName="p" className={`xpo-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`} value={faq.answer} />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateTwo;
