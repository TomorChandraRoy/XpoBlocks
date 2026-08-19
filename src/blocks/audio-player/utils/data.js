import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icon";


export const templateData = {
  title: __('Select Audio Player Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your audio player block.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Modern Audio Card', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        labelText: ''
      }
    }
  ]
};
