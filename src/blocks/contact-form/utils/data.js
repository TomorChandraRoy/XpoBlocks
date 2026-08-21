import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";



export const templateData = {
  title: __('Select Contact Form Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your contact form.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Contact Form', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {}
    }
  ]
};
