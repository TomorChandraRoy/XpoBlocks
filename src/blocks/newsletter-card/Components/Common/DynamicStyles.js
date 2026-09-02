import { getBackgroundCss, getBorderCss, getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const {
    containerMaxWidth,
    containerBg,
    containerBorder,
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
    buttonColor,
    buttonBg,
    buttonBorder,
    buttonTypography,
  } = attributes || {};

  const mainSl = `#${id}`;

  const container = `${mainSl} .gbb-newsletter-container`;
  const title = `${mainSl} .gbb-newsletter-title`;
  const description = `${mainSl} .gbb-newsletter-description`;
  const button = `${mainSl} .gbb-newsletter-button`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${container} {
            ${containerMaxWidth ? `max-width:${containerMaxWidth};` : ''}
            ${getBackgroundCss(containerBg) ? `background:${getBackgroundCss(containerBg)};` : ''}
            ${getBorderCss(containerBorder)}
          }

          ${title} {
            ${titleColor ? `color:${titleColor};` : ''}
            ${getTypographyCss(titleTypography)}
          }

          ${description} {
            ${descriptionColor ? `color:${descriptionColor};` : ''}
            ${getTypographyCss(descriptionTypography)}
          }

          ${button} {
            ${buttonColor ? `color:${buttonColor};` : ''}
            ${getBackgroundCss(buttonBg) ? `background:${getBackgroundCss(buttonBg)};` : ''}
            ${getBorderCss(buttonBorder)}
            ${getTypographyCss(buttonTypography)}
          }
        `,
      }}
    />
  );
};

export default DynamicStyles;
