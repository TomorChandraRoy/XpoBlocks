// import { getBorderRadiusCss, getBackgroundCss, getShadowCss } from 'tr-tools';
// import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';

const DynamicStyle = ({ attributes, id }) => {
  const { itemHeight, containerMaxWidth } = attributes;

  // Handle older blocks where itemHeight was a number
  const getVal = (val, def) => (typeof val === 'number' ? `${val}px` : val) || def;
  const finalHeight = getVal(itemHeight, '120px');
  const finalMaxWidth = getVal(containerMaxWidth, '1024px');

  const mainSl = `#${id}`;
  const blockClass = `${mainSl} .wp-block-guten-builder-blocks-marquee`;
  const sectionClass = `${blockClass} .gbb-logo-cloud-section`;
  const wrapperClass = `${sectionClass} .gbb-logo-cloud-wrapper`;
  const backendImgClass = `${wrapperClass} .gbb-mq-item img`;

  const frontendSectionClass = `${mainSl} .gbb-logo-cloud-section`;
  const frontendWrapperClass = `${frontendSectionClass} .gbb-logo-cloud-wrapper`;
  const frontendImgClass = `${frontendWrapperClass} .gbb-mq-item img`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${wrapperClass},
          ${frontendWrapperClass} {
            max-width: ${finalMaxWidth};
          }

          ${backendImgClass},
          ${frontendImgClass} {
            height: ${finalHeight};
          }
        `,
      }}
    />
  );
};

export default DynamicStyle;
