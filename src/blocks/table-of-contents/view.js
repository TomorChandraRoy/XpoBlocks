import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyles from './Components/Common/DynamicStyles';
import TableOfContents from './Components/Common/Templates/TableOfContents';


document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-table-of-contents');
	containers.forEach(container => {
		if (container.dataset.initialized) return;
		container.dataset.initialized = 'true';

		const attributes = JSON.parse(container.dataset.attributes);
		console.log(container.id,"container.id");
		createRoot(container).render(
			<>
				<DynamicStyles attributes={attributes} id={container.id} />
				<TableOfContents {...{ attributes, id: container.id }} />
			</>
		);

		container?.removeAttribute('data-attributes');
	});
});

