import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyle from './Components/Common/DynamicStyles';
import BeforeAfter from './Components/Common/Templates/BeforeAfter.jsx';


document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.wp-block-xpo-block-before-after');

  containers.forEach(container => {

    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const attributes = JSON.parse(container.dataset.attributes);

    createRoot(container).render(
      <>

        <DynamicStyle attributes={attributes} id={container.id} />

        <BeforeAfter {...{ attributes }} id={container.id} />
      </>
    );

    // React UI রেন্ডারিং সম্পন্ন হওয়ার পর HTML DOM থেকে অপ্রয়োজনীয় data-attributes মুছে দিয়ে HTML ক্লিন করা
    container?.removeAttribute('data-attributes');
  });
});
