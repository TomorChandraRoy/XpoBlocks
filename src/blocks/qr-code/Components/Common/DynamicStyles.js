import React from 'react';

const DynamicStyles = ({ attributes, id }) => {
  const {containerBg = '#ffffff',containerBorderColor = '#e2e8f0',containerRadius = 16,downloadBtnColor = '#10b981'} = attributes || {};

  const css = `
    #${id}.gbb-qr-container {
      background-color: ${containerBg};
      border-color: ${containerBorderColor};
      border-radius: ${containerRadius}px;
    }
    #${id} .gbb-qr-download-btn {
      background-color: ${downloadBtnColor};
      box-shadow: 0 4px 12px ${downloadBtnColor}40;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default DynamicStyles;
