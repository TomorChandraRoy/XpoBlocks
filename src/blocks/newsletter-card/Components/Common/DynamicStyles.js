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
    inputColor,
    inputBg,
    inputBorder,
    inputTypography,
    buttonColor,
    buttonBg,
    buttonBorder,
    buttonTypography,
  } = attributes || {};

  const mainSl = `#${id}`;

  const container = `${mainSl} .gbb-newsletter-container`;
  const title = `${mainSl} .gbb-newsletter-title`;
  const description = `${mainSl} .gbb-newsletter-description`;
  const input = `${mainSl} .gbb-newsletter-input`;
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

          ${input} {
            ${inputColor ? `color:${inputColor};` : ''}
            ${getBackgroundCss(inputBg) ? `background:${getBackgroundCss(inputBg)};` : ''}
            ${getBorderCss(inputBorder)}
            ${getTypographyCss(inputTypography)}
          }

          ${input}:-webkit-autofill,
          ${input}:-webkit-autofill:hover,
          ${input}:-webkit-autofill:focus,
          ${input}:-webkit-autofill:active {
            transition: background-color 50000s ease-in-out 0s;
            ${inputColor ? `-webkit-text-fill-color: ${inputColor} !important;` : ''}
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
