import { tabBreakpoint, mobileBreakpoint, getTypographyCss, getBorderCss, getShadowCss, getBackgroundCss } from 'tr-tools';
import { getBorderRadiusCss } from 'tr-tools/utils/getCSS';

const DynamicStyle = ({ attributes, clientId }) => {
  const { columns = 3, gap = 24, containerWidth = 1200, badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, cardBg, cardBorder, cardBorderRadius, cardBoxShadow, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor } = attributes;


  const mainSl = `#${clientId}`;
  const gbbPricingContainer = `${mainSl} .gbb-pricing-container`;
  const gbbPricingGrid = `${gbbPricingContainer} .gbb-pricing-grid`;
  const gbbPricingCard = `${gbbPricingGrid} .gbb-pricing-card`;
  const gbbPricingName = `${gbbPricingCard} .gbb-pricing-name`;
  const gbbPricingDesc = `${gbbPricingCard} .gbb-pricing-desc`;
  const gbbPricingBadge = `${gbbPricingCard} .gbb-pricing-badge`;

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

        ${gbbPricingBadge}  span {
          ${getTypographyCss(badgeTypo)}
          color: ${badgeColor};
        }

        ${gbbPricingBadge} {
          background-color: ${badgeBgColor};
          ${getBorderRadiusCss(badgeRadius)}
        }

        ${gbbPricingCard} {
          ${getBackgroundCss(cardBg) ? `background: ${getBackgroundCss(cardBg)};` : ''}
          ${getBorderCss(cardBorder)}
          ${getBorderRadiusCss(cardBorderRadius)}
          ${getShadowCss(cardBoxShadow) ? `box-shadow: ${getShadowCss(cardBoxShadow)};` : ''}
        }

        ${gbbPricingCard}.is-featured {
          ${getBackgroundCss(featuredCardBg) ? `background: ${getBackgroundCss(featuredCardBg)};` : ''}
          ${getBorderCss(featuredCardBorder)}
          ${getShadowCss(featuredCardBoxShadow) ? `box-shadow: ${getShadowCss(featuredCardBoxShadow)};` : ''}
        }

        ${gbbPricingName} {
          ${getTypographyCss(cardTitleTypo)}
          color: ${cardTitleColor};
        }

        ${gbbPricingDesc} {
          ${getTypographyCss(cardDescTypo)}
          color: ${cardDescColor};
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
