import { __ } from '@wordpress/i18n';
import { GeneralIcon, StyleIcon } from './icons';

export const subStyleTabs = [
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
        <StyleIcon />
        {__('Style', 'xpo-blocks')}
      </span>
    ),
  },
];

export const defaultSubtitleTypo = {
  fontSize: { desktop: "16px", tablet: "14px", mobile: "12px" },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultTitleTypo = {
  fontSize: { desktop: '24px', tablet: '23px', mobile: '22px' },
  fontFamily: '',
  fontWeight: '700',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultDescriptionTypo = {
  fontSize: { desktop: '14px', tablet: '14px', mobile: '13px' },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultQuestionTypo = {
  fontSize: { desktop: "16px", tablet: "16px", mobile: "14px" },
  fontFamily: '',
  fontWeight: '600',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultAnswerTypo = {
  fontSize: { desktop: "14px", tablet: "14px", mobile: "13px" },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};
