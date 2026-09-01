import { createRoot } from 'react-dom/client';
import './style.scss';
import DynamicStyle from './Components/Common/DynamicStyles';
import NewsletterCard from './Components/Common/Templates/NewsletterCard';


document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-newsletter-card');

  containers.forEach(container => {


    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';
    const attributes = JSON.parse(container.dataset.attributes);


    createRoot(container).render(
      <>

        <DynamicStyle attributes={attributes} id={container.id} />
        <NewsletterCard attributes={attributes} id={container.id} />
      </>
    );

    container?.removeAttribute('data-attributes');
  });
});

