import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import AdminDashboard from './Dashboard/AdminDashboard';
import './style.scss';

domReady(() => {
  const rootElement = document.getElementById('guten-builder-admin-root');
  if (rootElement) {
    render(<AdminDashboard />, rootElement);
  }
});
