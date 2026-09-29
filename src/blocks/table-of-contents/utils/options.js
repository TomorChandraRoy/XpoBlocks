import { __ } from '@wordpress/i18n';
import { GeneralIcon, StyleIcon } from './icons';

const textDomain = 'xpo-block';

export const generalStyleTabs = [
  {
    name: 'general',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <GeneralIcon />
        {__('General', textDomain)}
      </span>
    ),
  },
  {
    name: 'style',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <StyleIcon />
        {__('Style', textDomain)}
      </span>
    ),
  },
];
