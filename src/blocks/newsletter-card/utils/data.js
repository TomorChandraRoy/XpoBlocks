import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";
export const templateData = {
  title: __('Select Newsletter Card Template', 'xpo-blocks'),
  subtitle: __('Choose a design template for your contact form.', 'xpo-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'xpo-blocks'),
      tag: __('Split Card', 'xpo-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        title: __('Subscribe Our Newsletter', 'xpo-blocks'),
        description: __('Subscribe to our newsletter and get the latest updates, offers and exclusive content.', 'xpo-blocks'),
        buttonText: __('Subscribe', 'xpo-blocks'),
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
        successMessage: __('Thank you for subscribing!', 'xpo-blocks'),
        errorMessage: __('Something went wrong. Please try again.', 'xpo-blocks'),
      }
    }
  ]
};
