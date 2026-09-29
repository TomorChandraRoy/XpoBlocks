import { __ } from '@wordpress/i18n';
import { TemplateOneSvg } from './icons';

const textDomain="xpo-block";

export const templateData = {
  title: __('QR Code Layouts', textDomain),
  subtitle: __('Select a layout for your QR code generator block.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Frame Card Layout', 'guten-builder-blocks'),
      tag: __('Modern frame card with dynamic title, subtitle, logo overlay, and CTA download button.', 'guten-builder-blocks'),
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
        containerBg: '#ffffff00',
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
