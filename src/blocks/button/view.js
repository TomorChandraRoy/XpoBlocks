import { render } from '@wordpress/element';
import FrontendButton from './Components/Frontend/Button';

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.wp-block-guten-builder-blocks-button');
    
    blocks.forEach((block) => {
        const attributesStr = block.getAttribute('data-attributes');
        const blockId = block.getAttribute('id');
        if (attributesStr) {
            try {
                const attributes = JSON.parse(attributesStr);
                render(<FrontendButton attributes={attributes} id={blockId} />, block);
            } catch (e) {
                console.error('Failed to parse block attributes', e);
            }
        }
    });
});
