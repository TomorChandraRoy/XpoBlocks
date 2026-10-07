import { __ } from '@wordpress/i18n';

import { GeneralIcon, StyleIcon } from './icons';

export const generalStyleTabs = [
  {
    name: 'general',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <GeneralIcon />
        {__('General', 'xpo-blocks')}
      </span>
    ),
  },
  {
    name: 'style',
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <StyleIcon/>
        {__('Style', 'xpo-blocks')}
      </span>
    ),
  },
];



export const errorCorrectionOptions = [
  { label: __('L - Low (7%)', 'xpo-blocks'), value: 'L' },
  { label: __('M - Medium (15%)', 'xpo-blocks'), value: 'M' },
  { label: __('Q - Quality (25%)', 'xpo-blocks'), value: 'Q' },
  { label: __('H - High (30% Best for Logos)', 'xpo-blocks'), value: 'H' },
];
