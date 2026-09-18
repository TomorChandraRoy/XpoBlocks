import React from 'react';
import { getBorderRadiusCss, getBorderCss, getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const {
    containerBg = '#ffffff',
    containerBorder,
    containerRadius,
    downloadBtnColor = '#10b981',
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
  } = attributes || {};

  const css = `
    #${id} .gbb-qr-container {
      background-color: ${containerBg};
      ${getBorderCss(containerBorder)}
      ${getBorderRadiusCss(containerRadius)}
    }
    #${id} .gbb-qr-title {
      ${titleColor ? `color: ${titleColor};` : ''}
      ${getTypographyCss(titleTypography)}
    }
    #${id} .gbb-qr-description {
      ${descriptionColor ? `color: ${descriptionColor};` : ''}
      ${getTypographyCss(descriptionTypography)}
    }
    #${id} .gbb-qr-download-btn {
      background-color: ${downloadBtnColor};
      box-shadow: 0 4px 12px ${downloadBtnColor}40;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default DynamicStyles;
