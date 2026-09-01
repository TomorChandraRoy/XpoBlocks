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
        buttonText: __('Subscribe', 'guten-builder-blocks')
      }
    }
  ]
};
