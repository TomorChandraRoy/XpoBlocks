import { __ } from '@wordpress/i18n';
import { TemplateOneSvg } from './icons';

export const templateData = {
  title: __('QR Code Layouts', 'xpo-blocks'),
  subtitle: __('Select a layout for your QR code generator block.', 'xpo-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Frame Card Layout', 'xpo-blocks'),
      tag: __('Modern frame card with dynamic title, subtitle, logo overlay, and CTA download button.', 'xpo-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        qrText: 'https://wordpress.org',
        qrSize: 220,
        qrMargin: 2,
        fgColor: '#0f172a',
        bgColor: '#ffffff',
        transparentBg: false,
        errorCorrectionLevel: 'M',
        logoUrl: '',
        logoWidth: 42,
        logoHeight: 42,
        showLogoBg: true,
        titleText: 'Scan QR Code',
        descriptionText: 'Point your phone camera to scan and visit the link.',
        showDownloadBtn: false,
        downloadBtnText: 'Download QR Code',
        downloadBtnColor: '#10b981',
        containerBg: '#ffffff',
        containerBorder: {
          color: '#e2e8f0',
          width: '',
          style: 'solid',
          side: 'all',
        },
        containerRadius: {
          top: '16px',
          right: '16px',
          bottom: '16px',
          left: '16px',
        },
        titleColor: '#0f172a',
        titleTypography: {
          fontSize: { desktop: '1.35rem' },
          fontWeight: '700',
        },
        descriptionColor: '#64748b',
        descriptionTypography: {
          fontSize: { desktop: '0.9rem' },
          fontWeight: '400',
        },

        align: 'center',
      },
    },
  ],
};
