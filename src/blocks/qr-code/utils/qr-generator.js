import QRCode from 'qrcode';

/**
 * Generates a standard-compliant QR Code module matrix.
 * Returns a 2D boolean array where true represents a black module and false represents a white module.
 *
 * @param {string} text - The text or URL to encode
 * @param {string} eccLevel - Error correction level ('L', 'M', 'Q', 'H')
 * @returns {boolean[][]} 2D array matrix
 */
export function generateQRMatrix(text = 'https://wordpress.org', eccLevel = 'M') {
  if (!text) text = 'https://wordpress.org';
  try {
    const qrObj = QRCode.create(text, { errorCorrectionLevel: eccLevel || 'M' });
    const size = qrObj.modules.size;
    const matrix = [];
    for (let r = 0; r < size; r++) {
      const row = [];
      for (let c = 0; c < size; c++) {
        row.push(Boolean(qrObj.modules.get(r, c)));
      }
      matrix.push(row);
    }
    return matrix;
  } catch (err) {
    console.error('Error generating QR Code matrix:', err);
    return [];
  }
}

