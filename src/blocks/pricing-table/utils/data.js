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
        pricingTables: [
          {
            name: __('Starter', 'guten-builder-blocks'),
            desc: __('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'guten-builder-blocks'),
            price: '20',
            priceCurrency: '$',
            period: 'month',
            link: '#',
            linkLabel: __('Get Started', 'guten-builder-blocks'),
            isFeatured: false,
            badgeText: '',
            features: [
              { label: __('10 users', 'guten-builder-blocks'), isEnable: true },
              { label: __('2GB of storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Email support', 'guten-builder-blocks'), isEnable: true },
              { label: __('Help center access', 'guten-builder-blocks'), isEnable: false },
              { label: __('Phone support', 'guten-builder-blocks'), isEnable: false },
              { label: __('Community access', 'guten-builder-blocks'), isEnable: false }
            ]
          },
          {
            name: __('Pro', 'guten-builder-blocks'),
            desc: __('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'guten-builder-blocks'),
            price: '30',
            priceCurrency: '$',
            period: 'month',
            link: '#',
            linkLabel: __('Get Started', 'guten-builder-blocks'),
            isFeatured: true,
            badgeText: __('Popular', 'guten-builder-blocks'),
            features: [
              { label: __('20 users', 'guten-builder-blocks'), isEnable: true },
              { label: __('5GB of storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Email support', 'guten-builder-blocks'), isEnable: true },
              { label: __('Help center access', 'guten-builder-blocks'), isEnable: true },
              { label: __('Phone support', 'guten-builder-blocks'), isEnable: false },
              { label: __('Community access', 'guten-builder-blocks'), isEnable: false }
            ]
          },
          {
            name: __('Enterprise', 'guten-builder-blocks'),
            desc: __('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'guten-builder-blocks'),
            price: '100',
            priceCurrency: '$',
            period: 'month',
            link: '#',
            linkLabel: __('Get Started', 'guten-builder-blocks'),
            isFeatured: false,
            badgeText: '',
            features: [
              { label: __('50 users', 'guten-builder-blocks'), isEnable: true },
              { label: __('20GB of storage', 'guten-builder-blocks'), isEnable: true },
              { label: __('Email support', 'guten-builder-blocks'), isEnable: true },
              { label: __('Help center access', 'guten-builder-blocks'), isEnable: true },
              { label: __('Phone support', 'guten-builder-blocks'), isEnable: true },
              { label: __('Community access', 'guten-builder-blocks'), isEnable: true }
            ]
          }
        ]
      }
    }
  ]
};
