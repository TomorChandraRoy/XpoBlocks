import { __ } from "@wordpress/i18n";
import { TemplateOneSvg } from "./icons";
const textDomain = 'xpo-blocks';
export const templateData = {
  title: __('Select Marquee Template', textDomain),
  subtitle: __('Choose a design template for your marquee.', textDomain),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', textDomain),
      tag: __('Logo Marquee', textDomain),
      icon: TemplateOneSvg,
      attributes: {
        images: [],
        openInNewTab: false,
        itemHeight: '100px',
        containerMaxWidth: '1024px',
        showBorder: true,
        showTopText: true,
        edgeFade: true,
        speed: 30,
        reverseDirection: false,
        pauseOnHover: true,
        hoverSlowDown: false,
        liftEffect: false,
        siblingBlur: false,
        siblingBlurIntensity: 3,
        showProgressRail: false,
        progressRailPosition: "right",
        showInteractionIndicator: false,
        highlightActiveCenter: false,
        showFrame: false,
        frameBg: "#ffffff",
        frameRadius: 12,
        enableSweepAnimation: true,
        textGradient: {
          gradientType: "linear",
          angle: 90,
          stops: [
            { "color": "#ffaa40", "location": 0 },
            { "color": "#9c40ff", "location": 50 },
            { "color": "#ffaa40", "location": 100 }
          ]
        },
        containerBg: "#ffffff",
        containerBorderColor: "#e2e8f0",
        containerRadius: 8
      }
    }
  ]
};
