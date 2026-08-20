import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { ButtonIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon:ButtonIcon,
	edit: Edit,
	save: () => null // Dynamic block
} );
