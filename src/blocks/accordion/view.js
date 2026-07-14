import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyles from './Components/Common/DynamicStyles';
import Accordion from './Components/Frontend/Accordion';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-accordion');
	containers.forEach(container => {
		if (container.dataset.initialized) return;
		container.dataset.initialized = 'true';

		const attributes = JSON.parse(container.dataset.attributes);
		
		createRoot(container).render(
			<>
				<DynamicStyles attributes={attributes} id={container.id} />
				<Accordion {...{ attributes, id: container.id }} />
			</>
		);

		container?.removeAttribute('data-attributes');
	});
});
