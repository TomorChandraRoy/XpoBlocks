import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";


export const templateData = {
  title: __('Select Newsletter Card Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your contact form.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Split Card', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        title: __('Subscribe Our Newsletter', 'guten-builder-blocks'),
        description: __('Subscribe to our newsletter and get the latest updates, offers and exclusive content.', 'guten-builder-blocks'),
        buttonText: __('Subscribe', 'guten-builder-blocks'),
        containerMaxWidth: '1000px',
        containerBg: { type: 'solid', color: '#ffffff' },
        containerBorder: { width: '1px', style: 'solid', color: '#e2e8f0', side: 'all' },
        titleColor: '#1e293b',
        descriptionColor: '#64748b',
        buttonColor: '#ffffff',
        buttonBg: { type: 'solid', color: '#000000' },
        buttonBorder: { width: '', style: 'solid', color: 'transparent', side: 'all' },
      }
    }
  ]
};
