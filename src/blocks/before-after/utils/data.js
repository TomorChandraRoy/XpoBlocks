import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";
const textDomain = 'xpo-blocks';

export const templateData = {
  title: __('Select Before/After Template', textDomain),
  subtitle: __('Choose a design template for your before/after slider.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', textDomain),
      tag: __('Classic Slider', textDomain),
      icon: TemplateOneSvg,
      attributes: {
        showLabels: true,
        beforeLabel: 'Before',
        afterLabel: 'After',
        dividerIcon: 'dots',
        customDividerIcon: '',
        dividerIconSize: 16,
        labelColor: '#ffffff',
        labelBg: { type: 'solid', color: 'rgba(0, 0, 0, 0.6)' },
        labelTypography: {
          fontSize: { desktop: '14px', tablet: '14px', mobile: '14px' },
          fontFamily: '',
          fontWeight: '600',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        labelBorderRadius: { top: '5px', right: '5px', bottom: '5px', left: '5px' },
        wrapperBorderRadius: { top: '5px', right: '5px', bottom: '5px', left: '5px' },
        dividerStyle: 'solid',
        dividerColor: '#ffffff',
        handleColor: '#111111',
        handleIconColor: '#ffffff',
      }
    },
  ],
};
