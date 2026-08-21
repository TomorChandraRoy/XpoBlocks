import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null // Dynamic block
} );
