import { getTypographyCss, getBorderCss, getBorderRadiusCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {

  const { itemsGap = 12, containerWidth, sidebarWidth, contentHeight, sidebarBorder, sidebarBorderRadius, headerBgColor, headerTextColor, iconColor, sideHeaderTypography, headerIconSize, headerBorderWidth, sidebarBgColor, sidebarItemTypography, sidebarItemColor, activeHeaderBgColor, activeTextColor, activeBorderLine, activeIconColor, activeBorderRadius, sideTextIconSize, contentBgColor, contentBorderRadius,contentBorder,contentHeaderTextColor,contentHeaderTypography, contentHeaderBorderLine,contentDescriptionColor,contentDescriptionTypography,contentTitleColor,contentTitleTypography,    contentParagraphColor,contentParagraphTypography,} = attributes || {};

  const mainSl = `#${id}`;

  // --- SIDEBAR SELECTORS ---
  const wrapper = `${mainSl} .xpo-toc-wrapper`;
  const sidebar = `${wrapper} .xpo-toc-sidebar`;
  const stickyBox = `${sidebar} .xpo-toc-sticky-box`;
  const header = `${stickyBox} .xpo-toc-header`;
  const headerText = `${header} .xpo-toc-header-title`;
  const headerContentText = `${headerText} .xpo-toc-header-text`;
  const icon = `${headerText} .xpo-toc-header-icon, ${header} .xpo-toc-arrow-icon`;

  const body = `${stickyBox} .xpo-toc-body`;
  const linkContainer = `${body} .xpo-toc-list-container`;
  const list = `${linkContainer} .xpo-toc-list`;
  const item = `${list} .xpo-toc-item`;
  const link = `${item} .xpo-toc-link`;
  const itemActive = `${item}.is-active`;

  // --- CONTENT AREA SELECTORS ---
  const contentArea = `${wrapper} .xpo-toc-content-area`;
  const contentTitle = `${contentArea} .xpo-toc-content-title`;
  const contentSubtitle = `${contentArea} .xpo-toc-content-subtitle`;
  const sectionWrapper = `${contentArea} .xpo-toc-section-wrapper`;
  const sectionHeading = `${sectionWrapper} .xpo-toc-section-heading-2, ${sectionWrapper} .xpo-toc-section-heading-3`;
  const sectionParagraph = `${sectionWrapper} .xpo-toc-section-paragraph`;



  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        /* Layout */
        ${wrapper} {
            max-width: ${containerWidth};
            gap: ${itemsGap};
        }

        ${sidebar} {
            width: ${sidebarWidth};
        }

        /* SIDEBAR STYLES (Strictly Sidebar ONLY) */
        ${stickyBox} {
            ${getBorderCss(sidebarBorder)}
            ${getBorderRadiusCss(sidebarBorderRadius)}
            transition: border-color 0.3s ease;
        }

        ${header} {
            background-color: ${headerBgColor};
            ${getBorderCss(headerBorderWidth)}
        }

        ${headerContentText} {
            color: ${headerTextColor};
            ${getTypographyCss(sideHeaderTypography)}
        }

        ${icon} {
            color: ${iconColor};
            width:${headerIconSize};
            height:${headerIconSize};
            transition: color 0.3s ease, transform 0.3s ease;
        }

        ${header}:hover .gbb-toc-header-icon,
        ${header}:hover .gbb-toc-arrow-icon {
        }


        ${body} {
          background-color: ${sidebarBgColor};
        }

        ${link} {
          ${getTypographyCss(sidebarItemTypography)}
          color:${sidebarItemColor};
        }

        ${link} svg {
          width: ${sideTextIconSize};
          height: ${sideTextIconSize};
        }

        ${itemActive} {
          background-color: ${activeHeaderBgColor} !important;
          ${getBorderCss(activeBorderLine)}
          ${getBorderRadiusCss(activeBorderRadius)}
        }

        ${itemActive} .gbb-toc-link {
          color:${activeTextColor} !important;
        }

        ${itemActive} .gbb-toc-link svg {
          color:${activeIconColor} !important;
        }

        /*CONTENT AREA STYLES (Strictly Content Area ONLY) */
        ${contentArea} {
            height: ${contentHeight};
            transition: border-color 0.3s ease;
            background-color: ${contentBgColor};
            ${getBorderRadiusCss(contentBorderRadius)}
            ${getBorderCss(contentBorder)}
        }

        ${contentArea}:hover {

        }

        ${contentTitle} {
          color:${contentHeaderTextColor};
          ${getTypographyCss(contentHeaderTypography)}
          ${getBorderCss(contentHeaderBorderLine)}
        }

        ${contentSubtitle} {
          color:${contentDescriptionColor};
          ${getTypographyCss(contentDescriptionTypography)}

        }

        ${sectionHeading} {
          color:${contentTitleColor};
          ${getTypographyCss(contentTitleTypography)}
        }

        ${sectionParagraph} {
          color:${contentParagraphColor};
          ${getTypographyCss(contentParagraphTypography)}

        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
