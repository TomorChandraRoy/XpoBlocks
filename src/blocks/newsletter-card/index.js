import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { AnnouncementIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: AnnouncementIcon,
	edit: Edit,
	save: () => null // Dynamic block
} );
