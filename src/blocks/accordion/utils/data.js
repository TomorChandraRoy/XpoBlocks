import { __ } from "@wordpress/i18n";
import { TemplateOneSvg, TemplateTwoSvg, TemplateThreeSvg } from './icons';


//Edit.js file jasche
export const templateData = {
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Minimal', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        iconType: 'chevron',
        iconPosition: 'right',
        subtitleColor: '#475569',
        titleColor: '#0f172a',
        descriptionColor: '#64748b',
        questionColor: '#0f172a',
        answerColor: '#475569',
        iconColor: '#0f172a',
        questionBorder: {
          color: '#e0e7ff',
          width: '1px',
          style: 'solid',
          side: 'all',
        },
      },
    },
    {
      id: 'template-2',
      label: __('Template 2', 'guten-builder-blocks'),
      tag: __('Center Aligned', 'guten-builder-blocks'),
      icon: TemplateTwoSvg,
      attributes: {
        iconType: 'plus-minus',
        iconPosition: 'right',
        showHeader: true,
        subtitleColor: '#475569',
        titleColor: '#0f172a',
        descriptionColor: '#64748b',
        questionColor: '#0f172a',
        answerColor: '#475569',
        iconColor: '#0f172a',
        questionBorder: {
          color: '#e2e8f0',
          width: '1px',
          style: 'solid',
          side: 'bottom',
        },
      },
    },
    {
      id: 'template-3',
      label: __('Template 3', 'guten-builder-blocks'),
      tag: __('FAQ Gradient', 'guten-builder-blocks'),
      icon: TemplateThreeSvg,
      attributes: {
        iconType: 'chevron',
        iconPosition: 'right',
        showHeader: true,
      },
    },
  ],
};

