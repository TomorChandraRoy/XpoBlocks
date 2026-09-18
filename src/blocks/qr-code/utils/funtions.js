export const handleDownload = ({ attributes, matrix, isEditor = false }) => {
  if (isEditor) return;

  const {qrSize,qrMargin,fgColor,bgColor,transparentBg,logoUrl,logoWidth,logoHeight,showLogoBg} = attributes || {};

  const numModules = matrix?.length || 0;
  if (!numModules) return;

  const cellSize = qrSize / (numModules + qrMargin * 2);

  const canvas = document.createElement('canvas');
  canvas.width = qrSize * 2; // High DPI 2x resolution
  canvas.height = qrSize * 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.scale(2, 2);

  // Draw background
  if (!transparentBg) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, qrSize, qrSize);
  } else {
    ctx.clearRect(0, 0, qrSize, qrSize);
  }

  // Draw QR Modules
  ctx.fillStyle = fgColor;
  for (let r = 0; r < numModules; r++) {
    for (let c = 0; c < numModules; c++) {
      if (matrix[r][c]) {
        const x = (c + qrMargin) * cellSize;
        const y = (r + qrMargin) * cellSize;
        ctx.fillRect(x, y, cellSize + 0.3, cellSize + 0.3);
      }
    }
  }

  // Draw Center Logo if provided
  if (logoUrl) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const lx = (qrSize - logoWidth) / 2;
      const ly = (qrSize - logoHeight) / 2;

      if (showLogoBg) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(qrSize / 2, qrSize / 2, Math.max(logoWidth, logoHeight) / 2 + 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.drawImage(img, lx, ly, logoWidth, logoHeight);

      const a = document.createElement('a');
      a.download = 'qr-code.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    img.onerror = () => {
      const a = document.createElement('a');
      a.download = 'qr-code.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    img.src = logoUrl;
  } else {
    const a = document.createElement('a');
    a.download = 'qr-code.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  }
};
