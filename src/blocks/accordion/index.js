import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { faqIcon } from './utils/icons';

registerBlockType(metadata.name, {
  icon: faqIcon,
  edit: Edit,
  save: () => null,
});

