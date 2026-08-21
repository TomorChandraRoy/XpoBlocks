import { __ } from '@wordpress/i18n';
import { GeneralIcon, StyleIcon } from './icons';

export const generalStyleTabs = [
  {
    name: 'general',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <GeneralIcon />
        {__('General', 'guten-builder-blocks')}
      </span>
    ),
  },
  {
    name: 'style',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <StyleIcon/>
        {__('Style', 'guten-builder-blocks')}
      </span>
    ),
  },
];

