import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyles from './Components/Common/DynamicStyles';
import AudioPlayer from './Components/Common/Templates/AudioPlayer';


// পেজের সমস্ত HTML লোড সম্পন্ন হওয়ার পর স্ক্রিপ্টটি চালু হবে
document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-audio-player');

  containers.forEach(container => {

    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const attributes = JSON.parse(container.dataset.attributes);

    createRoot(container).render(
      <>
        <DynamicStyles attributes={attributes} id={container.id} />
        <AudioPlayer {...{ attributes }} id={container.id} />
      </>
    );

    // React UI রেন্ডারিং সম্পন্ন হওয়ার পর HTML DOM থেকে অপ্রয়োজনীয় data-attributes মুছে দিয়ে HTML ক্লিন করা
    container?.removeAttribute('data-attributes');
  });
});

