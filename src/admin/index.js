import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import App from './App';
import './style.scss';

domReady(() => {
	const rootElement = document.getElementById('guten-builder-admin-root');
	if (rootElement) {
		render(<App />, rootElement);
	}
});
