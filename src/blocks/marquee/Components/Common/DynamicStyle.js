import { getGradientCss } from 'tr-tools';

const DynamicStyle = ({ attributes, id }) => {
  const { itemHeight, containerMaxWidth, showFrame, frameBg, frameRadius, enableSweepAnimation, textGradient, containerBg, containerBorderColor, containerRadius } = attributes;

  // Handle older blocks where itemHeight was a number
  const getVal = (val, def) => (typeof val === 'number' ? `${val}px` : val) || def;
  const finalHeight = getVal(itemHeight, '120px');
  const finalMaxWidth = getVal(containerMaxWidth, '1024px');
  const finalFrameBg = frameBg || '#ffffff';
  const finalFrameRadius = typeof frameRadius === 'number' ? `${frameRadius}px` : '12px';

  const mainSl = `#${id}`;
  const blockClass = `${mainSl} .wp-block-xpo-block-marquee`;
  const sectionClass = `${blockClass} .xpo-logo-cloud-section`;
  const wrapperClass = `${sectionClass} .xpo-logo-cloud-wrapper`;
  const backendImgClass = `${wrapperClass} .xpo-mq-item img`;

  const frontendSectionClass = `${mainSl} .xpo-logo-cloud-section`;
  const frontendWrapperClass = `${frontendSectionClass} .xpo-logo-cloud-wrapper`;
  const frontendImgClass = `${frontendWrapperClass} .xpo-mq-item img`;

  const getSweepGradient = (gradient) => {
    if (!gradient || typeof gradient !== 'object') {
      return 'linear-gradient(90deg, currentColor 0%, currentColor 45%, #ffaa40 47%, #9c40ff 50%, #ffaa40 53%, currentColor 55%, currentColor 100%)';
    }

    const stops = Array.isArray(gradient.stops) && gradient.stops.length > 0
      ? gradient.stops
      : [
          { color: gradient.color1 || '#ffaa40', location: 0 },
          ...(gradient.color3 ? [{ color: gradient.color3, location: 50 }] : []),
          { color: gradient.color2 || '#9c27b0', location: 100 }
        ];

    // Map each stop location from [0, 100] to [47, 53] to replicate the original sweep animation
    const mappedStopsStr = stops
      .map(stop => {
        const mappedLoc = 47 + (stop.location * 0.06);
        return `${stop.color} ${mappedLoc}%`;
      })
      .join(', ');

    const angle = gradient.angle !== undefined ? gradient.angle : 90;
    return `linear-gradient(${angle}deg, currentColor 0%, currentColor 45%, ${mappedStopsStr}, currentColor 55%, currentColor 100%)`;
  };

  const gradientCss = enableSweepAnimation ? getSweepGradient(textGradient) : getGradientCss(textGradient);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${wrapperClass},
          ${frontendWrapperClass} {
            max-width: ${finalMaxWidth};
            background-color: ${containerBg || '#ffffff'} !important;
            border-radius: ${typeof containerRadius === 'number' ? `${containerRadius}px` : '8px'} !important;
          }

          ${wrapperClass} .xpo-border-beam-inner,
          ${frontendWrapperClass} .xpo-border-beam-inner {
            background-color: ${containerBg || '#ffffff'} !important;
            border-radius: ${typeof containerRadius === 'number' ? `${containerRadius}px` : '8px'} !important;
            border-color: ${containerBorderColor || '#e2e8f0'} !important;
          }

          ${backendImgClass},
          ${frontendImgClass} {
            height: ${finalHeight};
          }

          ${showFrame ? `
            #${id} .has-frame .xpo-mq-item {
              background-color: ${finalFrameBg} !important;
              border-radius: ${finalFrameRadius} !important;
            }
          ` : ''}

          #${id} .xpo-logo-text-wave {
            background-image: ${gradientCss} !important;
          }
        `,
      }}
    />
  );
};

export default DynamicStyle;
