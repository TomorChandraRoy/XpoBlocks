import { createRoot } from 'react-dom/client';
import './style.scss';
import DynamicStyles from './Components/Common/DynamicStyles';
import QRCodeBlock from './Components/Common/Templates/QRCodeBlock';

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-qr-code');
  containers.forEach(container => {
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    try {
      const attributes = JSON.parse(container.dataset.attributes || '{}');
      createRoot(container).render(
        <>
          <DynamicStyles attributes={attributes} id={container.id} />
          <QRCodeBlock {...{ attributes, id: container.id, isEditor: false }} />
        </>
      );
      container?.removeAttribute('data-attributes');
    } catch (e) {
      console.error('Failed to initialize QR Code block:', e);
    }
  });
});
