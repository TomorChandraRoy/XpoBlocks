import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";

export const templateData = {
  title: __('Select Marquee Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your marquee.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Logo Marquee', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        itemHeight: '100px',
        containerMaxWidth: '1024px',
        showBorder: true,
        showTopText: true,
        speed: 30,
        reverseDirection: false,
        pauseOnHover: true,
        hoverSlowDown: false
      }
    }
  ]
};
