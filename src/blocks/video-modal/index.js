import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { blockIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: blockIcon,
	edit: Edit,
	save: () => null // Dynamic block
} );
