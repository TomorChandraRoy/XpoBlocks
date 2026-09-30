import { getBorderRadiusCss, getBackgroundCss, getShadowCss } from 'tr-tools';
import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';

const DynamicStyle = ({ attributes, id }) => {
  const { buttonAlign, textColor, buttonBg, hoverTextColor, hoverButtonBg, buttonBorderRadius, buttonOffsetY, buttonHoverOffsetY, buttonEdgeBg, buttonBoxShadow, enable3DEffect, buttonWidth, buttonPadding } = attributes || {};

  const mainSl = `#${id}`;
  const button = `${mainSl} .xpo-button`;
  const front = `${button} .xpo-button-front`;
  const shadow = `${button} .xpo-button-shadow`;
  const edge = `${button} .xpo-button-edge`;

  const getHoverOffset = () => (buttonHoverOffsetY !== undefined ? buttonHoverOffsetY : -6);
  const currentOffsetY = buttonOffsetY !== undefined ? buttonOffsetY : -4;

  const effectCss =
    enable3DEffect !== false
      ? `
          --button-offset-y: ${currentOffsetY}px;
          --button-hover-y: ${getHoverOffset()}px;
          --button-active-y: ${Math.round(currentOffsetY / 2)}px;
          --shadow-default-y: ${Math.abs(currentOffsetY) / 2}px;
          --shadow-hover-y: ${Math.abs(getHoverOffset()) - 2}px;
          --shadow-active-y: ${Math.round(Math.abs(currentOffsetY) / 4)}px;
  `
      : `
          --button-offset-y: 0px;
          --button-hover-y: 0px;
          --button-active-y: 0px;
  `;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} {
          text-align: ${buttonAlign || 'center'};
          ${effectCss}
        }
        ${button} {
          ${typeof buttonWidth === 'string' ? `width: ${buttonWidth};` : buttonWidth?.desktop ? `width: ${buttonWidth.desktop};` : ''}
        }
        ${front} {
          ${typeof buttonPadding === 'string' ? `padding: ${buttonPadding};` : buttonPadding?.desktop ? `padding: ${buttonPadding.desktop};` : ''}
          ${textColor ? `color: ${textColor};` : ''}
          ${getBackgroundCss(buttonBg) ? `background: ${getBackgroundCss(buttonBg)};` : ''}
          ${getBorderRadiusCss(buttonBorderRadius)}
        }

        ${shadow}, ${edge} {
          ${getBorderRadiusCss(buttonBorderRadius)}
        }
        ${shadow} {
          ${enable3DEffect === false ? `display: none;` : ''}
          ${getShadowCss(buttonBoxShadow) ? `box-shadow: ${getShadowCss(buttonBoxShadow)};` : ''}
        }
        ${edge} {
          ${enable3DEffect === false ? `display: none;` : ''}
          ${getBackgroundCss(buttonEdgeBg) ? `background: ${getBackgroundCss(buttonEdgeBg)};` : ''}
        }
        ${button}:hover .xpo-button-front {
          ${hoverTextColor ? `color: ${hoverTextColor};` : ''}
          ${getBackgroundCss(hoverButtonBg) ? `background: ${getBackgroundCss(hoverButtonBg)};` : ''}
        }

        ${tabBreakpoint} {
          ${buttonWidth?.tablet ? `${button} {width: ${buttonWidth.tablet};}` : ''}
          ${buttonPadding?.tablet ? `${front} {padding: ${buttonPadding.tablet};}` : ''}
        }

        ${mobileBreakpoint} {
          ${buttonWidth?.mobile ? `${button} {width: ${buttonWidth.mobile};}` : ''}
          ${buttonPadding?.mobile ? `${front} {padding: ${buttonPadding.mobile};}` : ''}
        }
        `,
      }}
    />
  );
};

export default DynamicStyle;
