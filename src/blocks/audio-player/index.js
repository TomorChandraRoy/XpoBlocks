import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { audioPlayerIcon } from './utils/icon';

registerBlockType(metadata.name, {
  icon: audioPlayerIcon,
  edit: Edit,
  save: () => null,
});
