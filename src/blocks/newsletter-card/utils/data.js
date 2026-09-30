import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";
const textDomain = 'xpo-blocks';

export const templateData = {
  title: __('Select Newsletter Card Template', textDomain),
  subtitle: __('Choose a design template for your contact form.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', textDomain),
      tag: __('Split Card', textDomain),
      icon: TemplateOneSvg,
      attributes: {
        title: __('Subscribe Our Newsletter', textDomain),
        description: __('Subscribe to our newsletter and get the latest updates, offers and exclusive content.', textDomain),
        buttonText: __('Subscribe', textDomain),
        containerMaxWidth: '1000px',
        containerBg: { type: 'solid', color: '#ffffff' },
        containerBorder: { width: '1px', style: 'solid', color: '#e2e8f0', side: 'all' },
        titleColor: '#1e293b',
        descriptionColor: '#64748b',
        inputColor: '#0f172a',
        inputBg: { type: 'solid', color: '#ffffff' },
        inputBorder: { width: '1px', style: 'solid', color: '#cbd5e1', side: 'all' },
        buttonColor: '#ffffff',
        buttonBg: { type: 'solid', color: '#000000' },
        buttonBorder: { width: '', style: 'solid', color: 'transparent', side: 'all' },
        successMessage: __('Thank you for subscribing!', textDomain),
        errorMessage: __('Something went wrong. Please try again.', textDomain),
      }
    }
  ]
};
