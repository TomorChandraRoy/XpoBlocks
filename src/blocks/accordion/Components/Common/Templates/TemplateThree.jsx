import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { renderFaqIcon } from '../../../utils/functions';

const TemplateThree = ({ attributes, setAttributes, openIndices = [], toggleItem, updateFaqQuestion, updateFaqAnswer, isEditor, id }) => {
  const { subtitle, title, description, faqsData = [], showHeader = true, iconPosition = 'left', iconType = 'chevron', iconSize = 22, iconColor = '' } = attributes || {};

  return (
    <div className="gbb-faq-wrapper gbb-template-three" id={id}>
      {showHeader &&
        (isEditor ? (
          <>
            <RichText tagName="p" className="gbb-faq-subtitle" value={subtitle} onChange={val => setAttributes({ subtitle: val })} placeholder={__('Enter Subtitle...', 'guten-builder-blocks')} />
            <RichText tagName="h1" className="gbb-faq-title" value={title} onChange={val => setAttributes({ title: val })} placeholder={__('Enter Title...', 'guten-builder-blocks')} />
            <RichText
              tagName="p"
              className="gbb-faq-description"
              value={description}
              onChange={val => setAttributes({ description: val })}
              placeholder={__('Enter Description...', 'guten-builder-blocks')}
            />
          </>
        ) : (
          <>
            {subtitle && <RichText.Content tagName="p" className="gbb-faq-subtitle" value={subtitle} />}
            {title && <RichText.Content tagName="h1" className="gbb-faq-title" value={title} />}
            {description && <RichText.Content tagName="p" className="gbb-faq-description" value={description} />}
          </>
        ))}

      <div className="gbb-faq-list">
        {faqsData.map((faq, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <div key={index} className="gbb-faq-item">
              <div className={`gbb-faq-header gbb-icon-${iconPosition}`} onClick={() => toggleItem(index)}>
                <div className="gbb-faq-question-wrap">
                  <span className="gbb-faq-badge q-badge">{__('Q', 'guten-builder-blocks')}</span>
                  {isEditor ? (
                    <RichText
                      tagName="h2"
                      className="gbb-faq-question"
                      value={faq.question}
                      onChange={val => updateFaqQuestion(index, val)}
                      onClick={e => e.stopPropagation()}
                      placeholder={__('Enter Question...', 'guten-builder-blocks')}
                    />
                  ) : (
                    <RichText.Content tagName="h2" className="gbb-faq-question" value={faq.question} />
                  )}
                </div>
                {renderFaqIcon(isOpen, iconType, iconSize, iconColor)}
              </div>
              <div className={`gbb-faq-answer-container ${isOpen ? 'is-open' : 'is-closed'}`}>
                <div className="gbb-faq-answer-wrap">
                  <span className="gbb-faq-badge a-badge">{__('A', 'guten-builder-blocks')}</span>
                  {isEditor ? (
                    <RichText
                      tagName="p"
                      className="gbb-faq-answer"
                      value={faq.answer}
                      onChange={val => updateFaqAnswer(index, val)}
                      onClick={e => e.stopPropagation()}
                      placeholder={__('Enter Answer...', 'guten-builder-blocks')}
                    />
                  ) : (
                    <RichText.Content tagName="p" className="gbb-faq-answer" value={faq.answer} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateThree;
