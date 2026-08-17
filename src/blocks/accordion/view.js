import { createRoot } from 'react-dom/client';
import './style.scss';


import DynamicStyles from './Components/Common/DynamicStyles';
import Accordion from './Components/Frontend/Accordion';

// পেজের সমস্ত HTML লোড সম্পন্ন হওয়ার পর স্ক্রিপ্টটি চালু হবে
document.addEventListener('DOMContentLoaded', () => {
  // পেজে থাকা সমস্ত Accordion ব্লক কন্টেইনার খুঁজে বের করা
  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-accordion');

  containers.forEach(container => {


    // ডুপ্লিকেট রেন্ডারিং প্রতিরোধ: যদি এই ব্লকটি আগেই চালু হয়ে থাকে, তবে ফ্ল্যাগ দেখে থামিয়ে দেওয়া
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    // render.php থেকে HTML data-attributes এ পাঠানো JSON ডাটা পড়া ও পার্স করা
    const attributes = JSON.parse(container.dataset.attributes);

    // React 18 এর createRoot ব্যবহার করে ফাঁকা HTML div কন্টেইনারে React UI রেন্ডার করা
    createRoot(container).render(
      <>
        {/* ব্লকের ইউনিক আইডির জন্য ডায়নামিক সিএসএস রেন্ডার */}
        <DynamicStyles attributes={attributes} id={container.id} />
        {/* আসল ফ্রন্টএন্ড Accordion ইন্টারঅ্যাক্টিভ কম্পোনেন্ট */}
        <Accordion {...{ attributes }} id={container.id} />
      </>
    );

    // React UI রেন্ডারিং সম্পন্ন হওয়ার পর HTML DOM থেকে অপ্রয়োজনীয় data-attributes মুছে দিয়ে HTML ক্লিন করা
    container?.removeAttribute('data-attributes');
  });
});

