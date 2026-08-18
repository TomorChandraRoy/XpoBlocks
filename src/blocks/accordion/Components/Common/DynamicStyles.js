import { getTypographyCss, getBackgroundCss, getBorderCss, getBorderRadiusCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { subtitleColor, titleColor, descriptionColor, subtitleTypography, titleTypography, descriptionTypography, questionBg, questionBorder, questionBorderRadius = '6px', questionColor, answerColor, questionTypography, answerTypography, iconColor } = attributes || {};

  const mainSl = `#${id}`;

  const wrapper = mainSl;

  const subtitle = `${wrapper} .gbb-faq-subtitle`;
  const title = `${wrapper} .gbb-faq-title`;
  const description = `${wrapper} .gbb-faq-description`;
  const header = `${wrapper} .gbb-faq-header`;
  const question = `${wrapper} .gbb-faq-question, ${wrapper} .gbb-faq-question-text`;
  const answer = `${wrapper} .gbb-faq-answer`;
  const icon = `${wrapper} .gbb-faq-arrow`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${subtitle} {
          ${subtitleColor ? `color: ${subtitleColor};` : ''}
          ${getTypographyCss(subtitleTypography)}
        }

        ${title} {
          ${titleColor ? `color: ${titleColor};` : ''}
          ${getTypographyCss(titleTypography)}
        }

        ${description} {
          ${descriptionColor ? `color: ${descriptionColor};` : ''}
          ${getTypographyCss(descriptionTypography)}
        }

        ${header} {

        }
        ${mainSl}.gbb-template-one-wapper .gbb-faq-header,
        ${mainSl}.gbb-template-three-wapper .gbb-faq-item {
          ${getBackgroundCss(questionBg) ? `background: ${getBackgroundCss(questionBg)};` : ''}
          ${getBorderCss(questionBorder)}
          ${getBorderRadiusCss(questionBorderRadius)}
        }

        ${mainSl}.gbb-template-two-wapper .gbb-faq-item {
          ${getBorderCss(questionBorder)}
        }

        ${question} {
          ${questionColor ? `color: ${questionColor};` : ''}
          ${getTypographyCss(questionTypography)}
        }

        ${answer} {
          ${answerColor ? `color: ${answerColor};` : ''}
          ${getTypographyCss(answerTypography)}
        }

        ${icon} {
          ${iconColor ? `color: ${iconColor};` : ''}
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
