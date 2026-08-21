import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';

import { DividerIcon } from './utils/icons';

registerBlockType( metadata.name, {
	icon: DividerIcon,
	edit: Edit,
	save: () => null // Dynamic block
} );
