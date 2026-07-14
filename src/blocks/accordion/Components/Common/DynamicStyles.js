const DynamicStyles = ({ attributes, id }) => {
  const {
    headerBgColor = '#ffffff',
    headerTextColor = '#1e293b',
    activeHeaderBgColor = '#f8fafc',
    activeHeaderTextColor = '#0f172a',
    contentBgColor = '#ffffff',
    contentTextColor = '#475569',
    borderColor = '#e2e8f0',
    activeBorderColor = '#cbd5e1',
    iconColor = '#64748b',
    activeIconColor = '#0f172a',
    borderRadius = 8,
    borderWidth = 1,
    gap = 12,
    titleFontSize = 16,
    contentFontSize = 14,
    blockId,
  } = attributes;

  const mainSl = `#${id || blockId || 'gbb-faq-react'}`;
  const item = `${mainSl} .gbb-accordion-item`;
  const itemOpen = `${mainSl} .gbb-accordion-item.is-open`;
  const header = `${mainSl} .gbb-accordion-header`;
  const headerOpen = `${itemOpen} .gbb-accordion-header`;
  const icon = `${mainSl} .gbb-accordion-icon`;
  const iconOpen = `${itemOpen} .gbb-accordion-icon`;
  const content = `${mainSl} .gbb-accordion-content`;
  const contentOpen = `${itemOpen} .gbb-accordion-content`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} {
            gap: ${Math.max(0, parseInt(gap, 10))}px;
        }

        ${item} {
            border-width: ${Math.max(0, parseInt(borderWidth, 10))}px;
            border-style: solid;
            border-color: ${borderColor};
            border-radius: ${Math.max(0, parseInt(borderRadius, 10))}px;
            background: ${headerBgColor};
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        ${itemOpen} {
            border-color: ${activeBorderColor};
            background: ${activeHeaderBgColor};
        }

        ${header} {
            background: ${headerBgColor};
            color: ${headerTextColor};
            font-size: ${Math.max(10, parseInt(titleFontSize, 10))}px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-weight: 600;
            padding: 16px 20px;
        }

        ${headerOpen} {
            background: ${activeHeaderBgColor};
            color: ${activeHeaderTextColor};
        }

        ${icon} {
            color: ${iconColor};
            transition: transform 0.3s;
        }

        ${iconOpen} {
            color: ${activeIconColor};
            transform: rotate(180deg);
        }

        ${content} {
            background: ${contentBgColor};
            color: ${contentTextColor};
            font-size: ${Math.max(10, parseInt(contentFontSize, 10))}px;
            padding: 0 20px;
            max-height: 0px;
            opacity: 0;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            line-height: 1.6;
            border-top: none;
        }

        ${contentOpen} {
            border-top: ${Math.max(0, parseInt(borderWidth, 10))}px solid ${activeBorderColor};
            padding: 16px 20px;
            max-height: 1000px;
            opacity: 1;
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
