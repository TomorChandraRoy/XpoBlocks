import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { pricingIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: pricingIcon,
	edit: Edit,
	save: () => null // Rendered dynamically on server side
} );
