import { getTypographyCss, getBackgroundCss, getBorderCss, getBorderRadiusCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { subtitleColor, titleColor, descriptionColor, subtitleTypography, titleTypography, descriptionTypography, questionBg, questionBorder, questionBorderRadius = '6px', questionColor, answerColor, questionTypography, answerTypography, iconColor } = attributes || {};

  const mainSl = `#${id}`;

  const wrapper = mainSl;

  const subtitle = `${wrapper} .xpo-faq-subtitle`;
  const title = `${wrapper} .xpo-faq-title`;
  const description = `${wrapper} .xpo-faq-description`;
  const header = `${wrapper} .xpo-faq-header`;
  const question = `${wrapper} .xpo-faq-question, ${wrapper} .xpo-faq-question-text`;
  const answer = `${wrapper} .xpo-faq-answer`;
  const icon = `${wrapper} .xpo-faq-arrow`;


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
        ${mainSl}.xpo-template-one-wapper .xpo-faq-header,
        ${mainSl}.xpo-template-three-wapper .xpo-faq-item {
          ${getBackgroundCss(questionBg) ? `background: ${getBackgroundCss(questionBg)};` : ''}
          ${getBorderCss(questionBorder)}
          ${getBorderRadiusCss(questionBorderRadius)}
        }

        ${mainSl}.xpo-template-two-wapper .xpo-faq-item {
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
