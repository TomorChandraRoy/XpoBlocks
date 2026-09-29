import React from 'react';
import { getBorderRadiusCss, getBorderCss, getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const {containerBg ,containerBorder,containerRadius,downloadBtnColor,titleColor,titleTypography,descriptionColor,descriptionTypography} = attributes || {};

  const css = `
    #${id} .xpo-qr-container {
      background-color: ${containerBg};
      ${getBorderCss(containerBorder)}
      ${getBorderRadiusCss(containerRadius)}
    }
    #${id} .xpo-qr-title {
      ${titleColor ? `color: ${titleColor};` : ''}
      ${getTypographyCss(titleTypography)}
    }
    #${id} .xpo-qr-description {
      ${descriptionColor ? `color: ${descriptionColor};` : ''}
      ${getTypographyCss(descriptionTypography)}
    }
    #${id} .xpo-qr-download-btn {
      background-color: ${downloadBtnColor};
      box-shadow: 0 4px 12px ${downloadBtnColor}40;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default DynamicStyles;
