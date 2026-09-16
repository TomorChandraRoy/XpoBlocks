import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";

export const templateData = {
  title: __('Select Video Modal Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your video modal block.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Video Modal', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        selectedTemplate: 'template-1',
        videoUrl: '',
        coverImage: null,
        autoExtractCover: true,
        playbackMode: 'modal',
        preloadLocalVideo: 'metadata',
        buttonStyle: 'solid',
        buttonColor: '#10b981',
        iconColor: '#ffffff',
        buttonSize: 80,
        dialogAriaLabel: 'Video Player',
        playButtonAriaLabel: 'Play Video',
        closeButtonAriaLabel: 'Close Video',
        backdropStyle: 'glass-dark',
        aspectRatio: '16x9',
        closeOnBackdrop: true,
        showCloseButtonOutside: false,
        imageOverlayOpacity: 0.3
      }
    }
  ]
};
