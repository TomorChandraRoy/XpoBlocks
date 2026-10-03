import { __ } from '@wordpress/i18n';

import { GeneralIcon, StyleIcon } from './icons';

const textDomain="xpo-block";

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
        <StyleIcon/>
        {__('Style', textDomain)}
      </span>
    ),
  },
];



export const errorCorrectionOptions = [
  { label: __('L - Low (7%)', textDomain), value: 'L' },
  { label: __('M - Medium (15%)', textDomain), value: 'M' },
  { label: __('Q - Quality (25%)', textDomain), value: 'Q' },
  { label: __('H - High (30% Best for Logos)', textDomain), value: 'H' },
];
