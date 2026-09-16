import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { tocIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: tocIcon,
	edit: Edit,
	save: () => null // Rendered dynamically on server side
} );

