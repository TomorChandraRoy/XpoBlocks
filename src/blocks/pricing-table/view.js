import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyle from './Components/Common/dynamicStyle';
import PricingTable from './Components/Common/Templates/PricingTable';

document.addEventListener('DOMContentLoaded', () => {
  const tableEls = document.querySelectorAll('.wp-block-xpo-blocks-pricing-table');
  tableEls.forEach(tableEl => {
    if (!tableEl.dataset.attributes) return;
    const attributes = JSON.parse(tableEl.dataset.attributes);

    createRoot(tableEl).render(
      <>
        <DynamicStyle attributes={attributes} clientId={tableEl.id} />
        <PricingTable attributes={attributes} RichTextEl={RichTextEl} isBackend={false} />
      </>
    );

    tableEl.removeAttribute('data-attributes');
  });
});

const RichTextEl = ({ tagName, className, value }) => {
  const Tag = tagName;
  // Very simple fallback for sanitizeHTML if it doesn't exist
  const cleanValue = typeof sanitizeHTML === 'function' ? sanitizeHTML(value) : value;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: cleanValue }} />;
};
