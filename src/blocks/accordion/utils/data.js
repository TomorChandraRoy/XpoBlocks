import { __ } from "@wordpress/i18n";
import { TemplateOneSvg, TemplateTwoSvg, TemplateThreeSvg } from './icons';
//Edit.js file jasche
export const templateData = {
  title: __('FAQ Accordion Layouts', 'xpo-blocks'),
  subtitle: __('Select a layout for your FAQ accordion block.', 'xpo-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'xpo-blocks'),
      tag: __('Classic Minimal', 'xpo-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        subtitle: '',
        title: '',
        description: '',
        faqsData: [
          {
            question: '',
            answer: '',
          },
          {
            question: '',
            answer: '',
          },
          {
            question: '',
            answer: '',
          },
          {
            question: '',
            answer: '',
          },
        ],
        showHeader: false,
        allowMultiple: false,
        iconPosition: 'right',
        iconType: 'chevron',
        iconSize: 22,
        iconColor: '#0f172a',
        subtitleColor: '#475569',
        subtitleTypography: {
          fontSize: {
            desktop: '16px',
            tablet: '14px',
            mobile: '12px',
          },
          fontFamily: '',
          fontWeight: '400',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },

        titleColor: '#0f172a',
        titleTypography: {
          fontSize: {
            desktop: '24px',
            tablet: '23px',
            mobile: '22px',
          },
          fontFamily: '',
          fontWeight: '700',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        descriptionColor: '#64748b',
        descriptionTypography: {
          fontSize: {
            desktop: '14px',
            tablet: '14px',
            mobile: '13px',
          },
          fontFamily: '',
          fontWeight: '400',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        questionBg: {},
        questionBorder: {
          color: '#e0e7ff',
          width: '1px',
          style: 'solid',
          side: 'all',
        },
        questionBorderRadius: {
            top: '6px',
            right: '6px',
            bottom: '6px',
            left: '6px',
        },

        questionTypography: {
          fontSize: { desktop: '16px', tablet: '16px', mobile: '14px' },
          fontFamily: '',
          fontWeight: '600',
          lineHeight: '',
          letterSpacing: '',
          textTransform: 'none',
          textDecoration: 'none',
          fontStyle: 'normal',
        },
        questionColor: '#0f172a',

        answerTypography: {
            fontSize: {
              desktop: '14px',
              tablet: '14px',
              mobile: '13px',
            },
            fontFamily: "",
            fontWeight: "400",
            lineHeight: "",
            letterSpacing: "",
            textTransform: "none",
            textDecoration: "none",
            fontStyle: "normal"
        },
        answerColor: '#475569',

      },
    },
    {
      id: 'template-2',
      label: __('Template 2', 'xpo-blocks'),
      tag: __('Center Aligned', 'xpo-blocks'),
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
      label: __('Template 3', 'xpo-blocks'),
      tag: __('FAQ Gradient', 'xpo-blocks'),
      icon: TemplateThreeSvg,
      attributes: {
        iconType: 'chevron',
        iconPosition: 'right',
        showHeader: true,
      },
    },
  ],
};

