import { getTypographyCss, getBackgroundCss, getBorderCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { subtitleColor, titleColor, descriptionColor, subtitleTypography, titleTypography, descriptionTypography, questionBg, questionBorder, questionBorderRadius = '6px', questionColor, answerColor, questionTypography, answerTypography, iconColor } = attributes || {};

  const mainSl = `#${id}`;

  const wrapper = `${mainSl} .gbb-faq-wrapper`;
  const subtitle = `${wrapper} .gbb-faq-subtitle`;
  const title = `${wrapper} .gbb-faq-title`;
  const description = `${wrapper} .gbb-faq-description`;
  const header = `${wrapper} .gbb-faq-header`;
  const question = `${wrapper} .gbb-faq-question`;
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
          ${getBackgroundCss(questionBg) ? `background: ${getBackgroundCss(questionBg)};` : ''}
          ${getBorderCss(questionBorder)}
          ${questionBorderRadius ? `border-radius: ${questionBorderRadius};` : ''}
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
