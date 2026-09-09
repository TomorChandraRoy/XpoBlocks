import { tabBreakpoint, mobileBreakpoint, getTypographyCss, getBorderCss, getShadowCss, getBackgroundCss } from 'tr-tools';
import { getBorderRadiusCss } from 'tr-tools/utils/getCSS';

const DynamicStyle = ({ attributes, clientId }) => {
  const { columns = 3, gap = 24, containerWidth = 1200, badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, featuredCardBorderRadius, featuredCardTitleTypo, featuredCardTitleColor, featuredCardDescTypo, featuredCardDescColor, featuredPriceColor, featuredPriceTypo, featuredPeriodTypo, featuredButtonBg, featuredButtonHoverBg, featuredButtonColor, featuredButtonHoverColor, featuredButtonBorder, featuredButtonRadius, featuredButtonTypo, featuredDividerColor, featuredFeaturesTitleColor, featuredFeaturesTitleTypo, featuredFeatureIconSize, featuredFeatureTextColor, featuredFeatureTextTypo, cardBg, cardBorder, cardBorderRadius, cardBoxShadow, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor, priceColor, priceTypo, periodTypo, buttonBg, buttonHoverBg, buttonRadius, buttonTypo, buttonColor, buttonHoverColor, buttonBorder, dividerColor, featuresTitleColor, featuresTitleTypo, featureIconSize = 21, featureTextColor, featureTextTypo } = attributes;


  const mainSl = `#${clientId}`;
  const gbbPricingContainer = `${mainSl} .gbb-pricing-container`;
  const gbbPricingGrid = `${gbbPricingContainer} .gbb-pricing-grid`;
  const gbbPricingCard = `${gbbPricingGrid} .gbb-pricing-card`;
  const gbbPricingName = `${gbbPricingCard} .gbb-pricing-name`;
  const gbbPricingDesc = `${gbbPricingCard} .gbb-pricing-desc`;
  const gbbPricingBadge = `${gbbPricingCard} .gbb-pricing-badge`;
  const gbbPricingCardTop = `${gbbPricingCard} .gbb-pricing-card-top`;
  const gbbPricingPriceWrap = `${gbbPricingCard} .gbb-pricing-price-wrap`;
  const gbbPricingPrice = `${gbbPricingCard} .gbb-pricing-price`;
  const gbbPricingPeriod = `${gbbPricingCard} .gbb-pricing-period`;
  const gbbPricingButton = `${gbbPricingCard} .gbb-pricing-button`;
  const gbbFeaturesTitle = `${gbbPricingCard} .gbb-features-title`;
  const gbbFeatureIcon = `${gbbPricingCard} .gbb-icon-success, ${gbbPricingCard} .gbb-icon-error`;
  const gbbFeatureText = `${gbbPricingCard} .gbb-feature-text`;

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
          ${getBorderRadiusCss(featuredCardBorderRadius)}
          ${getShadowCss(featuredCardBoxShadow) ? `box-shadow: ${getShadowCss(featuredCardBoxShadow)};` : ''}
        }

        ${gbbPricingCardTop} {
          border-bottom-color: ${dividerColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-card-top {
          ${featuredDividerColor ? `border-bottom-color: ${featuredDividerColor};` : ''}
        }

        ${gbbPricingName} {
          ${getTypographyCss(cardTitleTypo)}
          color: ${cardTitleColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-name {
          ${getTypographyCss(featuredCardTitleTypo)}
          ${featuredCardTitleColor ? `color: ${featuredCardTitleColor};` : ''}
        }

        ${gbbPricingDesc} {
          ${getTypographyCss(cardDescTypo)}
          color: ${cardDescColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-desc {
          ${getTypographyCss(featuredCardDescTypo)}
          ${featuredCardDescColor ? `color: ${featuredCardDescColor};` : ''}
        }

        ${gbbFeaturesTitle} {
          ${getTypographyCss(featuresTitleTypo)}
          color: ${featuresTitleColor};
        }

        ${gbbPricingCard}.is-featured .gbb-features-title {
          ${getTypographyCss(featuredFeaturesTitleTypo)}
          ${featuredFeaturesTitleColor ? `color: ${featuredFeaturesTitleColor};` : ''}
        }

        ${gbbFeatureIcon} {
          width: ${featureIconSize}px;
          height: ${featureIconSize}px;
        }

        ${gbbPricingCard}.is-featured .gbb-icon-success, ${gbbPricingCard}.is-featured .gbb-icon-error {
          ${featuredFeatureIconSize ? `width: ${featuredFeatureIconSize}px; height: ${featuredFeatureIconSize}px;` : ''}
        }

        ${gbbFeatureText} {
          ${getTypographyCss(featureTextTypo)}
          color: ${featureTextColor};
        }

        ${gbbPricingCard}.is-featured .gbb-feature-text {
          ${getTypographyCss(featuredFeatureTextTypo)}
          ${featuredFeatureTextColor ? `color: ${featuredFeatureTextColor};` : ''}
        }

        ${gbbPricingPriceWrap} {
          /* Wrapper styles if needed */
        }

        ${gbbPricingPrice} {
          ${getTypographyCss(priceTypo)}
          color: ${priceColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-price {
          ${getTypographyCss(featuredPriceTypo)}
          ${featuredPriceColor ? `color: ${featuredPriceColor};` : ''}
        }

        ${gbbPricingPeriod} {
          ${getTypographyCss(periodTypo)}
          color: ${priceColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-period {
          ${getTypographyCss(featuredPeriodTypo)}
          ${featuredPriceColor ? `color: ${featuredPriceColor};` : ''}
        }

        ${gbbPricingButton} {
          background-color: ${buttonBg};
          color: ${buttonColor};
          ${getTypographyCss(buttonTypo)}
          ${getBorderRadiusCss(buttonRadius)}
          ${getBorderCss(buttonBorder)}
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-button {
          ${featuredButtonBg ? `background-color: ${featuredButtonBg};` : ''}
          ${featuredButtonColor ? `color: ${featuredButtonColor};` : ''}
          ${getTypographyCss(featuredButtonTypo)}
          ${getBorderRadiusCss(featuredButtonRadius)}
          ${getBorderCss(featuredButtonBorder)}
        }

        ${gbbPricingButton}:hover {
          background-color: ${buttonHoverBg};
          color: ${buttonHoverColor};
        }

        ${gbbPricingCard}.is-featured .gbb-pricing-button:hover {
          ${featuredButtonHoverBg ? `background-color: ${featuredButtonHoverBg};` : ''}
          ${featuredButtonHoverColor ? `color: ${featuredButtonHoverColor};` : ''}
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
