import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";

export const templateData = {
  title: __('Select Scroll Story Template', 'xpo-blocks'),
  subtitle: __('Choose a design template for your scroll story.', 'xpo-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'xpo-blocks'),
      tag: __('Classic Scroll Story', 'xpo-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        selectedTemplate: 'template-1',
        layout: 'sticky-right',
        steps: [
          {
            title: __('Welcome to our story', 'xpo-blocks'),
            description: __('This is the first step. Scroll down to see the magic happen.', 'xpo-blocks'),
            mediaType: 'image',
            mediaUrl: '',
            lottieUrl: '',
          },
          {
            title: __('Second Step', 'xpo-blocks'),
            description: __('As you scroll, the content changes and progress updates automatically.', 'xpo-blocks'),
            mediaType: 'image',
            mediaUrl: '',
            lottieUrl: '',
          },
          {
            title: __('Third Step', 'xpo-blocks'),
            description: __('You can add Lottie animations or images to showcase your story.', 'xpo-blocks'),
            mediaType: 'image',
            mediaUrl: '',
            lottieUrl: '',
          },
          {
            title: __('Fourth Step', 'xpo-blocks'),
            description: __('Engage your visitors with responsive sticky scrolling interactive elements.', 'xpo-blocks'),
            mediaType: 'image',
            mediaUrl: '',
            lottieUrl: '',
          },
        ],
        progressColor: '#3b82f6',
        activeTitleColor: '#1e293b',
        inactiveTitleColor: '#94a3b8',
        descColor: '#475569',
        imageFit: 'cover',
        mediaBgColor: '#f1f5f9',
        mediaHeight: '400px',
        mediaRadius: '20px',
        stepGap: '60px',
      },
    },
  ],
};
