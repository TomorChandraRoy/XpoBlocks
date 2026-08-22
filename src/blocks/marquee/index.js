import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { MarqueeIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon:MarqueeIcon,
	edit: Edit,
	save: () => null // Dynamic block
} );
