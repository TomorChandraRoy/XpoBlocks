import { __ } from '@wordpress/i18n';
import { TemplateOneSvg } from './icons';

export const templateData = {
  title: __('Select Pricing Table Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your pricing grid.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Standard Pricing Table', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        themeStyle: 'style-1',
        pricingTables: [
          {
            name: __('Starter', 'guten-builder-blocks'),
            price: '19',
            priceCurrency: '$',
            period: 'mo',
            link: '#',
            linkLabel: __('Get Started', 'guten-builder-blocks'),
            color: '#64748b',
            isFeatured: false,
            badgeText: '',
            features: [
              { label: __('1 User Account', 'guten-builder-blocks'), isEnable: true },
              { label: __('10 GB Cloud Storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Basic Analytics', 'guten-builder-blocks'), isEnable: true },
              { label: __('24/7 Priority Support', 'guten-builder-blocks'), isEnable: false },
              { label: __('Custom Domain Integration', 'guten-builder-blocks'), isEnable: false }
            ]
          },
          {
            name: __('Professional', 'guten-builder-blocks'),
            price: '49',
            priceCurrency: '$',
            period: 'mo',
            link: '#',
            linkLabel: __('Try Pro Free', 'guten-builder-blocks'),
            color: '#2563eb',
            isFeatured: true,
            badgeText: __('MOST POPULAR', 'guten-builder-blocks'),
            features: [
              { label: __('5 User Accounts', 'guten-builder-blocks'), isEnable: true },
              { label: __('100 GB Cloud Storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Advanced Analytics', 'guten-builder-blocks'), isEnable: true },
              { label: __('24/7 Priority Support', 'guten-builder-blocks'), isEnable: true },
              { label: __('Custom Domain Integration', 'guten-builder-blocks'), isEnable: false }
            ]
          },
          {
            name: __('Enterprise', 'guten-builder-blocks'),
            price: '99',
            priceCurrency: '$',
            period: 'mo',
            link: '#',
            linkLabel: __('Contact Sales', 'guten-builder-blocks'),
            color: '#0f172a',
            isFeatured: false,
            badgeText: '',
            features: [
              { label: __('Unlimited Users', 'guten-builder-blocks'), isEnable: true },
              { label: __('Unlimited Storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Custom Analytics & Reports', 'guten-builder-blocks'), isEnable: true },
              { label: __('Dedicated Account Manager', 'guten-builder-blocks'), isEnable: true },
              { label: __('Custom Domain Integration', 'guten-builder-blocks'), isEnable: true }
            ]
          }
        ]
      }
    }
  ]
};
