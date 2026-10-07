import { __ } from "@wordpress/i18n";
import { TemplateOneSvg, TemplateTwoSvg } from "./icons";

export const templateData = {
  title: __('Select Divider Template', 'xpo-blocks'),
  subtitle: __('Choose a design template for your divider.', 'xpo-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'xpo-blocks'),
      tag: __('Classic Divider', 'xpo-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        dividerType: 'text',
        text: 'Text',
        iconName: 'tabler--crown',
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
          fontStyle: 'normal',
        },
        iconSize: { desktop: '20px', tablet: '', mobile: '' },
      },
    },
    {
      id: 'template-2',
      label: __('Template 2', 'xpo-blocks'),
      tag: __('Simple Divider', 'xpo-blocks'),
      icon: TemplateTwoSvg,
      attributes: {
        dividerWidth: { desktop: '100%', tablet: '', mobile: '' },
        dividerHeight: { desktop: '1px', tablet: '', mobile: '' },
        dividerColor: '#d1d5db',
      },
    },
  ],
};
