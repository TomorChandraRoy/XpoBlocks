import { getBorderRadiusCss, getBackgroundCss, getTypographyCss } from 'tr-tools';

const DynamicStyle = ({ attributes, id }) => {
  const { buttonAlign, textColor, buttonBg, hoverTextColor, hoverButtonBg, buttonBorderRadius } = attributes || {};

  const mainSl = `#${id}`;
  const button = `${mainSl} .guten-builder-blocks-button`;
  const front = `${button} .guten-builder-blocks-button-front`;
  const shadow = `${button} .guten-builder-blocks-button-shadow`;
  const edge = `${button} .guten-builder-blocks-button-edge`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} {
          text-align: ${buttonAlign || 'center'};
        }
        ${front} {
          ${textColor ? `color: ${textColor};` : ''}
          ${getBackgroundCss(buttonBg) ? `background: ${getBackgroundCss(buttonBg)};` : ''}
          ${getBorderRadiusCss(buttonBorderRadius)}
        }
        ${shadow}, ${edge} {
          ${getBorderRadiusCss(buttonBorderRadius)}
        }
        ${button}:hover ${front} {
          ${hoverTextColor ? `color: ${hoverTextColor};` : ''}
          ${getBackgroundCss(hoverButtonBg) ? `background: ${getBackgroundCss(hoverButtonBg)};` : ''}
        }
        `,
      }}
    />
  );
};

export default DynamicStyle;
