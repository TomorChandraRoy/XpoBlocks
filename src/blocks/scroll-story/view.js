import { createRoot } from 'react-dom/client';
import './style.scss';

import DynamicStyle from './Components/Common/dynamicStyle';
import ScrollStory from './Components/ScrollStory';

document.addEventListener('DOMContentLoaded', () => {
	const storyEls = document.querySelectorAll('.wp-block-guten-builder-blocks-scroll-story');
	storyEls.forEach(el => {
		if (!el.dataset.attributes) return;
		const attributes = JSON.parse(el.dataset.attributes);

		createRoot(el).render(
			<>
				<DynamicStyle attributes={attributes} />
				<ScrollStory attributes={attributes} RichTextEl={RichTextEl} isBackend={false} />
			</>
		);

		el.removeAttribute('data-attributes');
	});
});

const RichTextEl = ({ tagName, className, value }) => {
	const Tag = tagName;
	return <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />;
};
