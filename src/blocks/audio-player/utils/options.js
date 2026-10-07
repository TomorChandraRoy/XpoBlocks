import { __ } from '@wordpress/i18n';
import { GeneralIcon, StyleIcon } from './icon';
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

export const defaultLabelTypo = {
  fontSize: { desktop: "13px", tablet: "13px", mobile: "13px" },
  fontFamily: '',
  fontWeight: '600',
  lineHeight: '',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultTitleTypo = {
  fontSize: { desktop: "22px", tablet: "22px", mobile: "22px" },
  fontFamily: '',
  fontWeight: '700',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};

export const defaultArtistTypo = {
  fontSize: { desktop: "15px", tablet: "15px", mobile: "15px" },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal',
};
