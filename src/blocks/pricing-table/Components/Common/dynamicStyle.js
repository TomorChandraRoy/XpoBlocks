import { tabBreakpoint, mobileBreakpoint, getTypographyCss, getBorderCss, getShadowCss, getBackgroundCss } from 'tr-tools';
import { getBorderRadiusCss } from 'tr-tools/utils/getCSS';

const DynamicStyle = ({ attributes, clientId }) => {
  const { columns = 3, gap = 24, containerWidth = 1200, badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, featuredCardBorderRadius, featuredCardTitleTypo, featuredCardTitleColor, featuredCardDescTypo, featuredCardDescColor, featuredPriceColor, featuredPriceTypo, featuredPeriodTypo, featuredButtonBg, featuredButtonHoverBg, featuredButtonColor, featuredButtonHoverColor, featuredButtonBorder, featuredButtonRadius, featuredButtonTypo, featuredDividerColor, featuredFeaturesTitleColor, featuredFeaturesTitleTypo, featuredFeatureIconSize, featuredFeatureTextColor, featuredFeatureTextTypo, cardBg, cardBorder, cardBorderRadius, cardBoxShadow, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor, priceColor, priceTypo, periodTypo, buttonBg, buttonHoverBg, buttonRadius, buttonTypo, buttonColor, buttonHoverColor, buttonBorder, dividerColor, featuresTitleColor, featuresTitleTypo, featureIconSize = 21, featureTextColor, featureTextTypo } = attributes;


  const mainSl = clientId ? `#${clientId}` : '.wp-block-xpo-blocks-pricing-table';
  const xpoPricingContainer = `${mainSl} .xpo-pricing-container`;
  const xpoPricingGrid = `${xpoPricingContainer} .xpo-pricing-grid`;
  const xpoPricingCard = `${xpoPricingGrid} .xpo-pricing-card`;
  const xpoPricingName = `${xpoPricingCard} .xpo-pricing-name`;
  const xpoPricingDesc = `${xpoPricingCard} .xpo-pricing-desc`;
  const xpoPricingBadge = `${xpoPricingCard} .xpo-pricing-badge`;
  const xpoPricingCardTop = `${xpoPricingCard} .xpo-pricing-card-top`;
  const xpoPricingPriceWrap = `${xpoPricingCard} .xpo-pricing-price-wrap`;
  const xpoPricingPrice = `${xpoPricingCard} .xpo-pricing-price`;
  const xpoPricingPeriod = `${xpoPricingCard} .xpo-pricing-period`;
  const xpoPricingButton = `${xpoPricingCard} .xpo-pricing-button`;
  const xpoFeaturesTitle = `${xpoPricingCard} .xpo-features-title`;
  const xpoFeatureIcon = `${xpoPricingCard} .xpo-icon-success, ${xpoPricingCard} .xpo-icon-error`;
  const xpoFeatureText = `${xpoPricingCard} .xpo-feature-text`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${xpoPricingContainer} {
          max-width: ${containerWidth};
        }

        ${xpoPricingGrid} {
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${gap}px;
        }

        ${xpoPricingBadge}  span {
          ${getTypographyCss(badgeTypo)}
          color: ${badgeColor};
        }

        ${xpoPricingBadge} {
          background-color: ${badgeBgColor};
          ${getBorderRadiusCss(badgeRadius)}
        }

        ${xpoPricingCard} {
          ${getBackgroundCss(cardBg) ? `background: ${getBackgroundCss(cardBg)};` : ''}
          ${getBorderCss(cardBorder)}
          ${getBorderRadiusCss(cardBorderRadius)}
          ${getShadowCss(cardBoxShadow) ? `box-shadow: ${getShadowCss(cardBoxShadow)};` : ''}
        }

        ${xpoPricingCard}.is-featured {
          ${getBackgroundCss(featuredCardBg) ? `background: ${getBackgroundCss(featuredCardBg)};` : ''}
          ${getBorderCss(featuredCardBorder)}
          ${getBorderRadiusCss(featuredCardBorderRadius)}
          ${getShadowCss(featuredCardBoxShadow) ? `box-shadow: ${getShadowCss(featuredCardBoxShadow)};` : ''}
        }

        ${xpoPricingCardTop} {
          border-bottom-color: ${dividerColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-card-top {
          ${featuredDividerColor ? `border-bottom-color: ${featuredDividerColor};` : ''}
        }

        ${xpoPricingName} {
          ${getTypographyCss(cardTitleTypo)}
          color: ${cardTitleColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-name {
          ${getTypographyCss(featuredCardTitleTypo)}
          ${featuredCardTitleColor ? `color: ${featuredCardTitleColor};` : ''}
        }

        ${xpoPricingDesc} {
          ${getTypographyCss(cardDescTypo)}
          color: ${cardDescColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-desc {
          ${getTypographyCss(featuredCardDescTypo)}
          ${featuredCardDescColor ? `color: ${featuredCardDescColor};` : ''}
        }

        ${xpoFeaturesTitle} {
          ${getTypographyCss(featuresTitleTypo)}
          color: ${featuresTitleColor};
        }

        ${xpoPricingCard}.is-featured .xpo-features-title {
          ${getTypographyCss(featuredFeaturesTitleTypo)}
          ${featuredFeaturesTitleColor ? `color: ${featuredFeaturesTitleColor};` : ''}
        }

        ${xpoFeatureIcon} {
          width: ${featureIconSize}px;
          height: ${featureIconSize}px;
        }

        ${xpoPricingCard}.is-featured .xpo-icon-success, ${xpoPricingCard}.is-featured .xpo-icon-error {
          ${featuredFeatureIconSize ? `width: ${featuredFeatureIconSize}px; height: ${featuredFeatureIconSize}px;` : ''}
        }

        ${xpoFeatureText} {
          ${getTypographyCss(featureTextTypo)}
          color: ${featureTextColor};
        }

        ${xpoPricingCard}.is-featured .xpo-feature-text {
          ${getTypographyCss(featuredFeatureTextTypo)}
          ${featuredFeatureTextColor ? `color: ${featuredFeatureTextColor};` : ''}
        }

        ${xpoPricingPriceWrap} {
          /* Wrapper styles if needed */
        }

        ${xpoPricingPrice} {
          ${getTypographyCss(priceTypo)}
          color: ${priceColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-price {
          ${getTypographyCss(featuredPriceTypo)}
          ${featuredPriceColor ? `color: ${featuredPriceColor};` : ''}
        }

        ${xpoPricingPeriod} {
          ${getTypographyCss(periodTypo)}
          color: ${priceColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-period {
          ${getTypographyCss(featuredPeriodTypo)}
          ${featuredPriceColor ? `color: ${featuredPriceColor};` : ''}
        }

        ${xpoPricingButton} {
          background-color: ${buttonBg};
          color: ${buttonColor};
          ${getTypographyCss(buttonTypo)}
          ${getBorderRadiusCss(buttonRadius)}
          ${getBorderCss(buttonBorder)}
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-button {
          ${featuredButtonBg ? `background-color: ${featuredButtonBg};` : ''}
          ${featuredButtonColor ? `color: ${featuredButtonColor};` : ''}
          ${getTypographyCss(featuredButtonTypo)}
          ${getBorderRadiusCss(featuredButtonRadius)}
          ${getBorderCss(featuredButtonBorder)}
        }

        ${xpoPricingButton}:hover {
          background-color: ${buttonHoverBg};
          color: ${buttonHoverColor};
        }

        ${xpoPricingCard}.is-featured .xpo-pricing-button:hover {
          ${featuredButtonHoverBg ? `background-color: ${featuredButtonHoverBg};` : ''}
          ${featuredButtonHoverColor ? `color: ${featuredButtonHoverColor};` : ''}
        }

        ${tabBreakpoint} {
          ${xpoPricingGrid} {
            grid-template-columns: repeat(${columns > 2 ? 2 : columns}, 1fr);
          }
        }

        ${mobileBreakpoint} {
          ${xpoPricingGrid} {
            grid-template-columns: 1fr;
          }
        }

			  `.replace(/\s+/g, ' '),
      }}
    />
  );
};

export default DynamicStyle;
