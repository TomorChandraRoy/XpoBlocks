import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const Accordion = ({ attributes, setAttributes }) => {
  const {
    blockId,
    items = [],
    theme,
    allowMultiple,
    headerBgColor,
    headerTextColor,
    activeHeaderBgColor,
    activeHeaderTextColor,
    contentBgColor,
    contentTextColor,
    borderColor,
    activeBorderColor,
    iconColor,
    activeIconColor,
    borderRadius,
    borderWidth,
    gap,
    titleFontSize,
    contentFontSize,
  } = attributes;

  // Keep editor-only active state to toggle opening/closing items
  const [activeIndexes, setActiveIndexes] = useState([0]); // Default open first in editor

  const toggleItem = index => {
    if (allowMultiple) {
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter(i => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    } else {
      if (activeIndexes.includes(index)) {
        setActiveIndexes([]);
      } else {
        setActiveIndexes([index]);
      }
    }
  };

  const updateItemTitle = (index, newTitle) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], title: newTitle };
    setAttributes({ items: newItems });
  };

  const updateItemContent = (index, newContent) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], content: newContent };
    setAttributes({ items: newItems });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
    width: '100%',
  };

  return (
    <div className={`gbb-accordion-container gbb-theme-${theme} ${blockId}`} style={containerStyle}>
      {items.map((item, index) => {
        const isOpen = activeIndexes.includes(index);

        const itemStyle = {
          borderWidth: `${borderWidth}px`,
          borderStyle: 'solid',
          borderColor: isOpen ? activeBorderColor : borderColor,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: isOpen ? activeHeaderBgColor : headerBgColor,
        };

        const headerStyle = {
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          background: isOpen ? activeHeaderBgColor : headerBgColor,
          color: isOpen ? activeHeaderTextColor : headerTextColor,
          fontSize: `${titleFontSize}px`,
          fontWeight: '600',
        };

        const contentStyle = {
          padding: isOpen ? '16px 20px' : '0 20px',
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: contentBgColor,
          color: contentTextColor,
          fontSize: `${contentFontSize}px`,
          lineHeight: '1.6',
          borderTop: isOpen && borderWidth > 0 ? `${borderWidth}px solid ${isOpen ? activeBorderColor : borderColor}` : 'none',
        };

        const currentIconColor = isOpen ? activeIconColor : iconColor;

        return (
          <div key={index} className={`gbb-accordion-item ${isOpen ? 'is-open' : ''}`} style={itemStyle}>
            <div className="gbb-accordion-header" style={headerStyle} onClick={() => toggleItem(index)}>
              <RichText
                tagName="span"
                className="gbb-accordion-title"
                value={item.title}
                onChange={val => updateItemTitle(index, val)}
                placeholder={__('Enter Question...', 'guten-builder-blocks')}
                onClick={e => e.stopPropagation()}
              />
              <span className="gbb-accordion-icon" style={{ color: currentIconColor, display: 'flex', transition: 'transform 0.3s' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
            <div className="gbb-accordion-content" style={contentStyle}>
              <RichText
                tagName="div"
                className="gbb-accordion-answer"
                value={item.content}
                onChange={val => updateItemContent(index, val)}
                placeholder={__('Enter Answer...', 'guten-builder-blocks')}
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
