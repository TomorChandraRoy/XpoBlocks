import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { BeforeAfterIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: BeforeAfterIcon,
	edit: Edit,
	save: () => null
} );
