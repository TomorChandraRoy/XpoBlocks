import { getBorderRadiusCss, getBackgroundCss, getTypographyCss } from 'tr-tools';
import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';

const DynamicStyles = ({ attributes, id }) => {
  const {
    labelColor,
    labelBg,
    labelTypography,
    labelBorderRadius,
    wrapperBorderRadius,
    dividerStyle,
    dividerColor,
    handleColor,
    handleIconColor,
    containerWidth,
    containerHeight,
  } = attributes || {};

  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const oneContainer = `${wrapper} .xpo-before-after-one`;
  const oneWrapper = `${wrapper} .xpo-before-after-one__wrapper`;
  const label = `${oneWrapper} .xpo-before-after-one__label`;
  const divider = `${oneWrapper} .xpo-before-after-one__divider`;
  const handle = `${oneWrapper} .xpo-before-after-one__handle`;

  let dividerCss = '';
  const dColor = dividerColor || '#ffffff';
  if (dividerStyle === 'neon') {
    dividerCss = `box-shadow: 0 0 5px ${dColor}, 0 0 10px ${dColor}; background: ${dColor};`;
  } else if (dividerStyle === 'gradient') {
    dividerCss = `background: linear-gradient(to bottom, transparent, ${dColor}, transparent);`;
  } else {
    dividerCss = `background: ${dColor};`;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${containerWidth?.desktop ? `${oneContainer} { max-width: ${containerWidth.desktop}; }` : ''}

        ${
          containerHeight?.desktop
            ? `${oneWrapper} { height: ${containerHeight.desktop}; }
               ${oneWrapper} .xpo-before-after-one__image { height: 100%; position: absolute; inset: 0; }`
            : ''
        }

        ${oneWrapper} {
          ${getBorderRadiusCss(wrapperBorderRadius)}
        }
        ${divider} {
          ${dividerCss}
        }
        ${handle} {
          ${handleColor ? `background: ${handleColor};` : ''}
          ${handleIconColor ? `color: ${handleIconColor};` : ''}
          border-color: ${dColor};
        }
        ${label}  {
          ${labelColor ? `color: ${labelColor};` : ''}
          ${getBackgroundCss(labelBg) ? `background: ${getBackgroundCss(labelBg)};` : ''}
          ${getTypographyCss(labelTypography)}
          ${getBorderRadiusCss(labelBorderRadius)}
        }

        ${tabBreakpoint} {
          ${containerWidth?.tablet ? `${oneContainer} { max-width: ${containerWidth.tablet}; }` : ''}
          ${containerHeight?.tablet ? `${oneWrapper} { height: ${containerHeight.tablet}; }` : ''}
        }

        ${mobileBreakpoint} {
          ${containerWidth?.mobile ? `${oneContainer} { max-width: ${containerWidth.mobile}; }` : ''}
          ${containerHeight?.mobile ? `${oneWrapper} { height: ${containerHeight.mobile}; }` : ''}
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
