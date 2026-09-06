import { tabBreakpoint, mobileBreakpoint } from 'tr-tools';

const DynamicStyle = ({ attributes, clientId }) => {
  const { columns = 3, gap = 24, containerWidth = 1200 } = attributes;


  const mainSl = `#${clientId}`;
  const gbbPricingContainer = `${mainSl} .gbb-pricing-container`;
  const gbbPricingGrid = `${gbbPricingContainer} .gbb-pricing-grid`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${gbbPricingContainer} {
          max-width: ${containerWidth};
        }

        ${gbbPricingGrid} {
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${gap}px;
        }




        ${tabBreakpoint} {
          ${gbbPricingGrid} {
            grid-template-columns: repeat(${columns > 2 ? 2 : columns}, 1fr);
          }
        }

        ${mobileBreakpoint} {
          ${gbbPricingGrid} {
            grid-template-columns: 1fr;
          }
        }

			  `.replace(/\s+/g, ' '),
      }}
    />
  );
};

export default DynamicStyle;
