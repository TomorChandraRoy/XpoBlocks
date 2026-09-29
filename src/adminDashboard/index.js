import { createRoot } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import App from "./App";
import { dashboardInfo } from "./data/data";

domReady(() => {
  const rootElement = document.getElementById('xpo-block-admin-root'); //includes admin.php file thake
  const info = rootElement && rootElement.dataset && rootElement.dataset.info
    ? JSON.parse(rootElement.dataset.info)
    : {};

  if (rootElement) {
    createRoot(rootElement).render(<App {...dashboardInfo(info)} />);
  }
});
