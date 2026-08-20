import { createRoot } from 'react-dom/client';
import './style.scss';
import Button from './Components/Common/Templates/Button';


import DynamicStyle from './Components/Common/DynamicStyle';

document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-button');

  containers.forEach(container => {

    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const attributes = JSON.parse(container.dataset.attributes);

    createRoot(container).render(
      <>
        <DynamicStyle attributes={attributes} id={container.id} />

        <Button {...{ attributes }} id={container.id} />
      </>
    );

    // React UI রেন্ডারিং সম্পন্ন হওয়ার পর HTML DOM থেকে অপ্রয়োজনীয় data-attributes মুছে দিয়ে HTML ক্লিন করা
    container?.removeAttribute('data-attributes');
  });
});

