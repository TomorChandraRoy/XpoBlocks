import { useRef } from 'react';
import { generateQRMatrix } from '../../../utils/qr-generator';
import { DownloadIcon } from '../../../utils/icons';
import { handleDownload } from '../../../utils/funtions';

const TemplateOne = ({ attributes, isEditor = false }) => {
  const {qrText ,qrSize ,qrMargin ,fgColor,bgColor,transparentBg ,errorCorrectionLevel,logoUrl,logoWidth,logoHeight,showLogoBg,titleText,descriptionText,showDownloadBtn,downloadBtnText} = attributes || {};

  const svgRef = useRef(null);

  const matrix = generateQRMatrix(qrText, errorCorrectionLevel);
  const numModules = matrix.length;
  const cellSize = qrSize / (numModules + qrMargin * 2);
  const svgTotalSize = qrSize;

  const onDownload = () => {
    handleDownload({ attributes, matrix, isEditor });
  };

  return (
    <div className="gbb-qr-wrapper">
      <div className="gbb-qr-container">
        {(titleText || descriptionText) && (
          <div className="gbb-qr-header">
            {titleText && <h3 className="gbb-qr-title">{titleText}</h3>}
            {descriptionText && <p className="gbb-qr-description">{descriptionText}</p>}
          </div>
        )}

        <div className="gbb-qr-code-wrapper" >
          <svg
            ref={svgRef}
            className="gbb-qr-svg"
            width={svgTotalSize}
            height={svgTotalSize}
            viewBox={`0 0 ${svgTotalSize} ${svgTotalSize}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {!transparentBg && <rect width={svgTotalSize} height={svgTotalSize} fill={bgColor} />}
            {matrix.map((row, r) =>
              row.map((cell, c) => {
                if (!cell) return null;
                const x = (c + qrMargin) * cellSize;
                const y = (r + qrMargin) * cellSize;
                return <rect key={`${r}-${c}`} x={x} y={y} width={cellSize + 0.3} height={cellSize + 0.3} fill={fgColor} />;
              })
            )}
          </svg>

          {logoUrl && (
            <div
              className={`gbb-qr-logo-overlay ${showLogoBg ? 'with-bg' : ''}`}
              style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}
            >
              <img src={logoUrl} alt="QR Logo" width={logoWidth} height={logoHeight} />
            </div>
          )}
        </div>

        {showDownloadBtn && (
          <div className="gbb-qr-footer">
            <button type="button" className="gbb-qr-download-btn" onClick={onDownload} title={isEditor ? 'Preview on live site to download' : downloadBtnText}>
              <DownloadIcon />
              <span>{downloadBtnText}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateOne;
