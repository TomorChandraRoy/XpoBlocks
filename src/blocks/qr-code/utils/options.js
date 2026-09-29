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
  { label: __('L - Low (7%)', 'guten-builder-blocks'), value: 'L' },
  { label: __('M - Medium (15%)', 'guten-builder-blocks'), value: 'M' },
  { label: __('Q - Quality (25%)', 'guten-builder-blocks'), value: 'Q' },
  { label: __('H - High (30% Best for Logos)', 'guten-builder-blocks'), value: 'H' },
];
