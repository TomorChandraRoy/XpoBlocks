import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icon";
const textDomain = 'xpo-blocks';


export const templateData = {
  title: __('Select Audio Player Template', textDomain),
  subtitle: __('Choose a design template for your audio player block.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', textDomain),
      tag: __('Modern Audio Card', textDomain),
      icon: TemplateOneSvg,
      attributes: {
        audioUrl: '',
        coverUrl: '',
        labelText: '',
        text: '',
        subtitle: '',
        playerAlign: 'center',
        timeDisplayMode: 'total',

        playerBorder: {
          color: '#e5e7eb',
          width: '1px',
          style: 'solid',
          side: 'all',
        },
        playerBorderRadius: {
          top: '16px',
          right: '16px',
          bottom: '16px',
          left: '16px',
        },
        playerBg: {},
        labelColor: '#6b7280',
        titleColor: '#111827',
        artistColor: '#6b7280',
        labelTypography: {
          fontSize: { desktop: '13px', tablet: '13px', mobile: '13px' },
          fontFamily: '',
          fontWeight: '600',
          lineHeight: '',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        titleTypography: {
          fontSize: { desktop: '22px', tablet: '22px', mobile: '22px' },
          fontFamily: '',
          fontWeight: '700',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        artistTypography: {
          fontSize: { desktop: '15px', tablet: '15px', mobile: '15px' },
          fontFamily: '',
          fontWeight: '400',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        progressColor: '#F62477',
        progressBg: '#e5e7eb',
        timeColor: '#9ca3af',
        controlColor: '#F62477',
      },
    },
  ],
};
