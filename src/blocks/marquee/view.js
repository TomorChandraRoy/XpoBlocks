import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyle from './Components/Common/DynamicStyle';
import Marquee from './Components/Common/Templates/Marquee';

document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-marquee');

  containers.forEach(container => {

    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const attributes = JSON.parse(container.dataset.attributes);

    createRoot(container).render(
      <>
        <DynamicStyle attributes={attributes} id={container.id} />
        <Marquee {...{ attributes }} id={container.id} />
      </>
    );
    container?.removeAttribute('data-attributes');
  });
});

