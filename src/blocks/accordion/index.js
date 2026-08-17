import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { faqIcon } from './utils/icons';



registerBlockType(metadata, {
  icon: faqIcon,
  edit: Edit,
  save: () => null,
});

