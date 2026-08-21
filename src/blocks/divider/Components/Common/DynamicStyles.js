

import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';
import { getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { dividerWidth, dividerHeight, dividerColor, textTypography, iconSize } = attributes || {};
  const mainSl = `#${id}`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${dividerWidth?.desktop ? `${mainSl} .gbb-divider { width: ${dividerWidth.desktop}; }` : ''}
          ${dividerWidth?.tablet ? `${tabBreakpoint} { ${mainSl} .gbb-divider { width: ${dividerWidth.tablet}; } }` : ''}
          ${dividerWidth?.mobile ? `${mobileBreakpoint} { ${mainSl} .gbb-divider { width: ${dividerWidth.mobile}; } }` : ''}
          
          ${dividerHeight?.desktop ? `${mainSl} .gbb-divider::before, ${mainSl} .gbb-divider::after { height: ${dividerHeight.desktop}; }` : ''}
          ${dividerHeight?.tablet ? `${tabBreakpoint} { ${mainSl} .gbb-divider::before, ${mainSl} .gbb-divider::after { height: ${dividerHeight.tablet}; } }` : ''}
          ${dividerHeight?.mobile ? `${mobileBreakpoint} { ${mainSl} .gbb-divider::before, ${mainSl} .gbb-divider::after { height: ${dividerHeight.mobile}; } }` : ''}

          ${dividerColor ? `
            ${mainSl} .gbb-divider { color: ${dividerColor}; }
            ${mainSl} .gbb-divider::before, ${mainSl} .gbb-divider::after { background-color: ${dividerColor}; }
          ` : ''}

          ${iconSize?.desktop ? `${mainSl} .gbb-divider-icon-wrapper svg { width: ${iconSize.desktop}; height: ${iconSize.desktop}; }` : ''}
          ${iconSize?.tablet ? `${tabBreakpoint} { ${mainSl} .gbb-divider-icon-wrapper svg { width: ${iconSize.tablet}; height: ${iconSize.tablet}; } }` : ''}
          ${iconSize?.mobile ? `${mobileBreakpoint} { ${mainSl} .gbb-divider-icon-wrapper svg { width: ${iconSize.mobile}; height: ${iconSize.mobile}; } }` : ''}

          ${mainSl} .gbb-divider-text {
            ${getTypographyCss(textTypography)}
          }
        `,
      }}
    />
  );
};

export default DynamicStyles;
