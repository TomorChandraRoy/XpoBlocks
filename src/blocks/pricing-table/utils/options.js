import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];


export const defaultPopularTypo = {
  fontSize: { desktop: '', tablet: '', mobile: '' },
  fontFamily: '',
  fontWeight: '',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};
