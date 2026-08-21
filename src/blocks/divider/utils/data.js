import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";



export const templateData = {
  title: __('Select Divider Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your contact form.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Divider', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        dividerWidth: { desktop: '100%', tablet: '', mobile: '' },
        dividerHeight: { desktop: '1px', tablet: '', mobile: '' },
        dividerColor: '#d1d5db',
        textTypography: {
          fontSize: { desktop: '14px', tablet: '14px', mobile: '14px' },
          fontFamily: '',
          fontWeight: '400',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal'
        },
        iconSize: { desktop: '20px', tablet: '', mobile: '' }
      }
    }
  ]
};
