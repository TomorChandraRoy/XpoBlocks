import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';
import { getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { dividerWidth, dividerHeight, dividerColor, textTypography, iconSize } = attributes || {};
  const mainSl = `#${id}`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${dividerWidth?.desktop ? `${mainSl} .xpo-divider { width: ${dividerWidth.desktop}; }` : ''}
          ${dividerWidth?.tablet ? `${tabBreakpoint} { ${mainSl} .xpo-divider { width: ${dividerWidth.tablet}; } }` : ''}
          ${dividerWidth?.mobile ? `${mobileBreakpoint} { ${mainSl} .xpo-divider { width: ${dividerWidth.mobile}; } }` : ''}

          ${dividerHeight?.desktop ? `${mainSl} .xpo-divider::before, ${mainSl} .xpo-divider::after { height: ${dividerHeight.desktop}; }` : ''}
          ${dividerHeight?.tablet ? `${tabBreakpoint} { ${mainSl} .xpo-divider::before, ${mainSl} .xpo-divider::after { height: ${dividerHeight.tablet}; } }` : ''}
          ${dividerHeight?.mobile ? `${mobileBreakpoint} { ${mainSl} .xpo-divider::before, ${mainSl} .xpo-divider::after { height: ${dividerHeight.mobile}; } }` : ''}

          ${
            dividerColor
              ? `
            ${mainSl} .xpo-divider { color: ${dividerColor}; }
            ${mainSl} .xpo-divider::before, ${mainSl} .xpo-divider::after { background-color: ${dividerColor}; }
          `
              : ''
          }

          ${iconSize?.desktop ? `${mainSl} .xpo-divider-icon-wrapper svg { width: ${iconSize.desktop}; height: ${iconSize.desktop}; }` : ''}
          ${iconSize?.tablet ? `${tabBreakpoint} { ${mainSl} .xpo-divider-icon-wrapper svg { width: ${iconSize.tablet}; height: ${iconSize.tablet}; } }` : ''}
          ${iconSize?.mobile ? `${mobileBreakpoint} { ${mainSl} .xpo-divider-icon-wrapper svg { width: ${iconSize.mobile}; height: ${iconSize.mobile}; } }` : ''}

          ${mainSl} .xpo-divider-text {
            ${getTypographyCss(textTypography)}
          }
        `,
      }}
    />
  );
};

export default DynamicStyles;
