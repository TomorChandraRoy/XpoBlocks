import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { getItemId } from '../../../utils/functions';

const prefix = 'xpo';

const TemplateOne = ({ attributes, setAttributes }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState(null);

  const { titleText = '', items = [], contentTitle = '', contentSubtitle = '', sectionParagraph = '' } = attributes || {};

  const isEditor = typeof setAttributes === 'function';

  const handleSmoothScroll = (id, event) => {
    if (!id) return;
    const cleanId = String(id).trim().replace(/^#/, '');
    setActiveId(cleanId);

    const doc = event?.target?.ownerDocument || document;
    const targetElement = doc.getElementById(cleanId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const updateItemField = (index, key, val) => {
    if (!isEditor) return;
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [key]: val };
    setAttributes({ items: newItems });
  };

  return (
    <div className={`${prefix}-toc-wrapper`}>
      {/* --- SIDEBAR TABLE OF CONTENTS --- */}
      <div className={`${prefix}-toc-sidebar`}>
        <div className={`${prefix}-toc-sticky-box`}>
          {/* Header Panel Button with Accordion Handler */}
          <div className={`${prefix}-toc-header`} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${prefix}-toc-header-title`}>
              <svg className={`${prefix}-toc-header-icon`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              {isEditor ? (
                <RichText tagName="span" className={`${prefix}-toc-header-text`} value={titleText} onChange={val => setAttributes({ titleText: val })} placeholder={__('Enter Table of Contents Title here....', 'xpo-blocks')} onClick={e => e.stopPropagation()} />
              ) : (
                <RichText.Content tagName="span" className={`${prefix}-toc-header-text`} value={titleText} />
              )}
            </div>
            <svg className={`${prefix}-toc-arrow-icon ${isOpen ? 'open' : 'closed'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Navigation Body */}
          <div className={`${prefix}-toc-body ${isOpen ? 'open' : 'closed'}`}>
            <div className={`${prefix}-toc-list-container`}>
              <ul className={`${prefix}-toc-list`}>
                {items.map((item, index) => {
                  const itemId = getItemId(item, index);
                  return (
                    <li key={itemId || index} className={`${prefix}-toc-item level-${item.level} ${activeId === itemId ? 'is-active' : ''}`}>
                      <button onClick={e => handleSmoothScroll(itemId, e)} className={`${prefix}-toc-link level-${item.level}`} >
                        {item.level > 2 && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        )}
                        {isEditor ? <RichText tagName="span" value={item.title} onChange={val => updateItemField(index, 'title', val)} placeholder={__('Item title...', 'xpo-blocks')} /> : <RichText.Content tagName="span" value={item.title} />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN BLOG CONTENT PREVIEW LAYOUT --- */}
      <div className={`${prefix}-toc-content-area`}>
        {isEditor ? (
          <>
            <RichText tagName="h1" className={`${prefix}-toc-content-title`} value={contentTitle} onChange={val => setAttributes({ contentTitle: val })} placeholder={__('Enter content title...', 'xpo-blocks')} />
            <RichText tagName="p" className={`${prefix}-toc-content-subtitle`} value={contentSubtitle} onChange={val => setAttributes({ contentSubtitle: val })} placeholder={__('Enter subtitle...', 'xpo-blocks')} />
          </>
        ) : (
          <>
            {contentTitle && <RichText.Content tagName="h1" className={`${prefix}-toc-content-title`} value={contentTitle} />}
            {contentSubtitle && <RichText.Content tagName="p" className={`${prefix}-toc-content-subtitle`} value={contentSubtitle} />}
          </>
        )}

        <div className={`${prefix}-toc-section-wrapper`}>
          {items.map((section, index) => {
            const sectionId = getItemId(section, index);
            return (
              <div key={sectionId || index} id={sectionId} className={`${prefix}-toc-section-block`}>
                {isEditor ? (
                  <>
                    <RichText tagName={section.level === 2 ? 'h2' : 'h3'} className={section.level === 2 ? `${prefix}-toc-section-heading-2` : `${prefix}-toc-section-heading-3`} value={section.title} onChange={val => updateItemField(index, 'title', val)} placeholder={__('Section heading...', 'xpo-blocks')} />
                    <RichText tagName="p" className={`${prefix}-toc-section-paragraph`} value={section.paragraph || sectionParagraph} onChange={val => updateItemField(index, 'paragraph', val)} placeholder={__('Section paragraph...', 'xpo-blocks')} />
                  </>
                ) : (
                  <>
                    <RichText.Content tagName={section.level === 2 ? 'h2' : 'h3'} className={section.level === 2 ? `${prefix}-toc-section-heading-2` : `${prefix}-toc-section-heading-3`} value={section.title} />
                    <RichText.Content tagName="p" className={`${prefix}-toc-section-paragraph`} value={section.paragraph || sectionParagraph} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
