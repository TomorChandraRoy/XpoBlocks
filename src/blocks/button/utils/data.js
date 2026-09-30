import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";
const textDomain = 'xpo-blocks';

export const templateData = {
  title: __('Select Button Template', textDomain),
  subtitle: __('Choose a design template for your button.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', textDomain),
      tag: __('3D Button', textDomain),
      icon: TemplateOneSvg,
      attributes: {
        buttonWidth: {
          desktop: '',
          tablet: '20%',
          mobile: '40%'
        },
        buttonPadding: {
          desktop: '12px 27px 12px 27px',
          tablet: '12px 27px 12px 27px',
          mobile: '12px 27px 12px 27px'
        }
      }
    }
  ]
};
