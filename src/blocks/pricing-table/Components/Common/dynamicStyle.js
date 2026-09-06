import { tabBreakpoint, mobileBreakpoint, getTypographyCss } from 'tr-tools';

const DynamicStyle = ({ attributes, clientId }) => {
  const { columns = 3, gap = 24, containerWidth = 1200, badgeTypo, badgeColor, badgeBgColor } = attributes;


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

        ${mainSl} .gbb-pricing-badge span {
          ${getTypographyCss(badgeTypo)}
          color: ${badgeColor};
        }
        
        ${mainSl} .gbb-pricing-badge {
          background-color: ${badgeBgColor};
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
