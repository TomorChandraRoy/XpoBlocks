import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";



export const templateData = {
  title: __('Select Before/After Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your before/after slider.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Slider', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
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
      },
    },
  ],
};
