import { getTypographyCss, getBorderCss, getBorderRadiusCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {

  const { itemsGap = 12, containerWidth, sidebarWidth, contentHeight, sidebarBorder, sidebarBorderRadius, headerBgColor, headerTextColor, iconColor, sideHeaderTypography, headerIconSize, headerBorderWidth, sidebarBgColor, sidebarItemTypography, sidebarItemColor, activeHeaderBgColor, activeTextColor, activeBorderLine, activeIconColor, activeBorderRadius, sideTextIconSize, contentBgColor, contentBorderRadius,contentBorder,contentHeaderTextColor,contentHeaderTypography, contentHeaderBorderLine,contentDescriptionColor,contentDescriptionTypography,contentTitleColor,contentTitleTypography,    contentParagraphColor,contentParagraphTypography,} = attributes || {};

  const mainSl = `#${id}`;

  // --- SIDEBAR SELECTORS ---
  const wrapper = `${mainSl} .gbb-toc-wrapper`;
  const sidebar = `${wrapper} .gbb-toc-sidebar`;
  const stickyBox = `${sidebar} .gbb-toc-sticky-box`;
  const header = `${stickyBox} .gbb-toc-header`;
  const headerText = `${header} .gbb-toc-header-title`;
  const headerContentText = `${headerText} .gbb-toc-header-text`;
  const icon = `${headerText} .gbb-toc-header-icon, ${header} .gbb-toc-arrow-icon`;

  const body = `${stickyBox} .gbb-toc-body`;
  const linkContainer = `${body} .gbb-toc-list-container`;
  const list = `${linkContainer} .gbb-toc-list`;
  const item = `${list} .gbb-toc-item`;
  const link = `${item} .gbb-toc-link`;
  const itemActive = `${item}.is-active`;

  // --- CONTENT AREA SELECTORS ---
  const contentArea = `${wrapper} .gbb-toc-content-area`;
  const contentTitle = `${contentArea} .gbb-toc-content-title`;
  const contentSubtitle = `${contentArea} .gbb-toc-content-subtitle`;
  const sectionWrapper = `${contentArea} .gbb-toc-section-wrapper`;
  const sectionHeading = `${sectionWrapper} .gbb-toc-section-heading-2, ${sectionWrapper} .gbb-toc-section-heading-3`;
  const sectionParagraph = `${sectionWrapper} .gbb-toc-section-paragraph`;



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
