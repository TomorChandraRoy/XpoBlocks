import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import Edit from './Components/Backend/Edit';
import metadata from './block.json';
import { imageSVGIcon } from './utils/icons';

registerBlockType(metadata.name, {
  icon: {
    src: imageSVGIcon,
    background: '#FCE7F3',
    foreground: '#F62477'
  },
  edit: Edit,
  save: () => null,
});
