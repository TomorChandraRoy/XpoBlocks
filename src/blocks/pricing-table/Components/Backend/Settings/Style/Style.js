import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';
import { Typography, ColorControl, SpacingControl, BorderControl, ShadowControl, BackgroundControl } from 'tr-tools';
import { defaultPopularTypo } from '../../../../utils/options';
const Style = ( { attributes, setAttributes } ) => {
	const { badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, featuredCardBorderRadius, featuredCardTitleTypo, featuredCardTitleColor, featuredCardDescTypo, featuredCardDescColor, featuredPriceColor, featuredPriceTypo, featuredPeriodTypo, featuredButtonBg, featuredButtonHoverBg, featuredButtonColor, featuredButtonHoverColor, featuredButtonBorder, featuredButtonRadius, featuredButtonTypo, featuredDividerColor, featuredFeaturesTitleColor, featuredFeaturesTitleTypo, featuredFeatureIconSize, featuredFeatureTextColor, featuredFeatureTextTypo, cardBg, cardBorder, cardBoxShadow, cardBorderRadius, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor, priceColor, priceTypo, periodTypo, buttonBg, buttonHoverBg, buttonRadius, buttonTypo, buttonColor, buttonHoverColor, buttonBorder, dividerColor, featuresTitleColor, featuresTitleTypo, featureIconSize, featureTextColor, featureTextTypo, pricingTables = [] } = attributes;

  const hasPopularCard = pricingTables.some(plan => plan.isFeatured);

	return (
    <>
      {/* Badge Style */}
      {hasPopularCard && (
        <PanelBody className="bPlPanelBody" title={__('Badge Layout', 'xpo-blocks')} initialOpen={false}>
          <Typography label={__('Badge Typography', 'xpo-blocks')} value={badgeTypo} defaultTypography={defaultPopularTypo} onChange={val => setAttributes({ badgeTypo: val })} />

          <ColorControl label={__('Badge Text Color', 'xpo-blocks')} value={badgeColor} defaultColor={'#ffffff'} onChange={val => setAttributes({ badgeColor: val || '#ffffff' })} />

          <ColorControl label={__('Badge Background Color', 'xpo-blocks')} value={badgeBgColor} defaultColor={'#4f46e5'} onChange={val => setAttributes({ badgeBgColor: val || '#4f46e5' })} />

          <SpacingControl label={__('Badge Border Radius', 'xpo-blocks')} value={badgeRadius} onChange={val => setAttributes({ badgeRadius: val })} defaultVal={{ top: '1px', right: '1px', bottom: '1px', left: '16px' }} />
        </PanelBody>
      )}

      {/* popular card */}
      {hasPopularCard && (
        <PanelBody className="bPlPanelBody" title={__('Popular Layout', 'xpo-blocks')} initialOpen={false}>
          <BackgroundControl label={__('Card Background', 'xpo-blocks')} value={featuredCardBg} onChange={val => setAttributes({ featuredCardBg: val })} defaultBackground={{ type: 'solid', color: '#f8fafc' }} />

          <BorderControl
            label={__('Card Border', 'xpo-blocks')}
            value={featuredCardBorder}
            onChange={val => setAttributes({ featuredCardBorder: val })}
            defaultBorder={{
              color: '#4f46e5',
              width: '2px',
              style: 'solid',
              side: 'all',
            }}
          />

          <SpacingControl label={__('Card Border Radius', 'xpo-blocks')} value={featuredCardBorderRadius} onChange={val => setAttributes({ featuredCardBorderRadius: val })} defaultVal={{ top: '8px', right: '8px', bottom: '8px', left: '8px' }} />


          <ShadowControl
            label={__('Card Box Shadow', 'xpo-blocks')}
            value={featuredCardBoxShadow}
            onChange={val => setAttributes({ featuredCardBoxShadow: val })}
            defaultShadow={{
              hOffset: '0px',
              vOffset: '10px',
              blur: '15px',
              spread: '-3px',
              color: 'rgba(79, 70, 229, 0.1)',
            }}
          />

          <ColorControl label={__('Title Color', 'xpo-blocks')} value={featuredCardTitleColor} onChange={val => setAttributes({ featuredCardTitleColor: val })} defaultColor="#111827" />

          <Typography label={__('Title Typography', 'xpo-blocks')} value={featuredCardTitleTypo} onChange={val => setAttributes({ featuredCardTitleTypo: val })} />

          <ColorControl label={__('Description Color', 'xpo-blocks')} value={featuredCardDescColor} onChange={val => setAttributes({ featuredCardDescColor: val })} defaultColor="#4b5563" />

          <Typography label={__('Description Typography', 'xpo-blocks')} value={featuredCardDescTypo} onChange={val => setAttributes({ featuredCardDescTypo: val })} />

          <ColorControl label={__('Price & Period Color', 'xpo-blocks')} value={featuredPriceColor} onChange={val => setAttributes({ featuredPriceColor: val })} defaultColor="#111827" />

          <Typography label={__('Price Typography', 'xpo-blocks')} value={featuredPriceTypo} onChange={val => setAttributes({ featuredPriceTypo: val })} />

          <Typography label={__('Period Typography', 'xpo-blocks')} value={featuredPeriodTypo} onChange={val => setAttributes({ featuredPeriodTypo: val })} />

          <ColorControl label={__('Button Background', 'xpo-blocks')} value={featuredButtonBg} onChange={val => setAttributes({ featuredButtonBg: val })} defaultColor="#4f46e5" />

          <ColorControl label={__('Button Hover Background', 'xpo-blocks')} value={featuredButtonHoverBg} onChange={val => setAttributes({ featuredButtonHoverBg: val })} defaultColor="#fcfcfc" />

          <ColorControl label={__('Button Text Color', 'xpo-blocks')} value={featuredButtonColor} onChange={val => setAttributes({ featuredButtonColor: val })} defaultColor="#ffffff" />

          <ColorControl label={__('Button Hover Text Color', 'xpo-blocks')} value={featuredButtonHoverColor} onChange={val => setAttributes({ featuredButtonHoverColor: val })} defaultColor="#4f46e5" />

          <Typography label={__('Button Typography', 'xpo-blocks')} value={featuredButtonTypo} onChange={val => setAttributes({ featuredButtonTypo: val })} />

          <BorderControl
            label={__('Button Border', 'xpo-blocks')}
            value={featuredButtonBorder}
            onChange={val => setAttributes({ featuredButtonBorder: val })}
            defaultBorder={{
              color: '#4f46e5',
              width: '1px',
              style: 'solid',
              side: 'all',
            }}
          />

          <SpacingControl label={__('Button Border Radius', 'xpo-blocks')} value={featuredButtonRadius} onChange={val => setAttributes({ featuredButtonRadius: val })} defaultVal={{ top: '2px', right: '2px', bottom: '2px', left: '2px' }} />

          <ColorControl label={__('Divider Color', 'xpo-blocks')} value={featuredDividerColor} onChange={val => setAttributes({ featuredDividerColor: val })} defaultColor="#e5e7eb" />

          <ColorControl label={__('Features Title Color', 'xpo-blocks')} value={featuredFeaturesTitleColor} onChange={val => setAttributes({ featuredFeaturesTitleColor: val })} defaultColor="#111827" />

          <Typography label={__('Features Title Typography', 'xpo-blocks')} value={featuredFeaturesTitleTypo} onChange={val => setAttributes({ featuredFeaturesTitleTypo: val })} />

          <RangeControl label={__('Feature Icon Size', 'xpo-blocks')} value={featuredFeatureIconSize} onChange={val => setAttributes({ featuredFeatureIconSize: val })} min={10} max={60} />

          <ColorControl label={__('Feature Text Color', 'xpo-blocks')} value={featuredFeatureTextColor} onChange={val => setAttributes({ featuredFeatureTextColor: val })} defaultColor="#374151" />

          <Typography label={__('Feature Text Typography', 'xpo-blocks')} value={featuredFeatureTextTypo} onChange={val => setAttributes({ featuredFeatureTextTypo: val })} />
        </PanelBody>
      )}

      {/* Normal Card */}
      <PanelBody className="bPlPanelBody" title={__('Normal Layout', 'xpo-blocks')} initialOpen={false}>
        <BackgroundControl label={__('Background', 'xpo-blocks')} value={cardBg} onChange={val => setAttributes({ cardBg: val })} defaultBackground={{ type: 'solid', color: '#ffffff' }} />

        <BorderControl
          label={__('Border', 'xpo-blocks')}
          value={cardBorder}
          onChange={val => setAttributes({ cardBorder: val })}
          defaultBorder={{
            color: '#e5e7eb',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />

        <SpacingControl label={__('Border Radius', 'xpo-blocks')} value={cardBorderRadius} onChange={val => setAttributes({ cardBorderRadius: val })} defaultVal={{ top: '8px', right: '8px', bottom: '8px', left: '8px' }} />

        <ShadowControl
          label={__('Box Shadow', 'xpo-blocks')}
          value={cardBoxShadow}
          onChange={val => setAttributes({ cardBoxShadow: val })}
          defaultShadow={{
            hOffset: '0px',
            vOffset: '4px',
            blur: '6px',
            spread: '-1px',
            color: 'rgba(0, 0, 0, 0.1)',
          }}
        />

        <ColorControl label={__('Title Color', 'xpo-blocks')} value={cardTitleColor} onChange={val => setAttributes({ cardTitleColor: val })} defaultColor="#111827" />

        <Typography label={__('Title Typography', 'xpo-blocks')} value={cardTitleTypo} onChange={val => setAttributes({ cardTitleTypo: val })} />

        <ColorControl label={__('Description Color', 'xpo-blocks')} value={cardDescColor} onChange={val => setAttributes({ cardDescColor: val })} defaultColor="#4b5563" />

        <Typography label={__('Description Typography', 'xpo-blocks')} value={cardDescTypo} onChange={val => setAttributes({ cardDescTypo: val })} />

        <ColorControl label={__('Price & Period Color', 'xpo-blocks')} value={priceColor} onChange={val => setAttributes({ priceColor: val })} defaultColor="#111827" />

        <Typography label={__('Price Typography', 'xpo-blocks')} value={priceTypo} onChange={val => setAttributes({ priceTypo: val })} />

        <Typography label={__('Period Typography', 'xpo-blocks')} value={periodTypo} onChange={val => setAttributes({ periodTypo: val })} />

        <ColorControl label={__('Button Background', 'xpo-blocks')} value={buttonBg} onChange={val => setAttributes({ buttonBg: val })} defaultColor="#4f46e5" />

        <ColorControl label={__('Button Hover Background', 'xpo-blocks')} value={buttonHoverBg} onChange={val => setAttributes({ buttonHoverBg: val })} defaultColor="#fcfcfc" />

        <ColorControl label={__('Button Text Color', 'xpo-blocks')} value={buttonColor} onChange={val => setAttributes({ buttonColor: val })} defaultColor="#ffffff" />

        <ColorControl label={__('Button Hover Text Color', 'xpo-blocks')} value={buttonHoverColor} onChange={val => setAttributes({ buttonHoverColor: val })} defaultColor="#4f46e5" />

        <Typography label={__('Button Typography', 'xpo-blocks')} value={buttonTypo} onChange={val => setAttributes({ buttonTypo: val })} />

        <BorderControl
          label={__('Button Border', 'xpo-blocks')}
          value={buttonBorder}
          onChange={val => setAttributes({ buttonBorder: val })}
          defaultBorder={{
            color: '#4f46e5',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />

        <SpacingControl label={__('Button Border Radius', 'xpo-blocks')} value={buttonRadius} onChange={val => setAttributes({ buttonRadius: val })} defaultVal={{ top: '2px', right: '2px', bottom: '2px', left: '2px' }} />

        <ColorControl label={__('Divider Color', 'xpo-blocks')} value={dividerColor} onChange={val => setAttributes({ dividerColor: val })} defaultColor="#e5e7eb" />

        <ColorControl label={__('Features Title Color', 'xpo-blocks')} value={featuresTitleColor} onChange={val => setAttributes({ featuresTitleColor: val })} defaultColor="#111827" />

        <Typography label={__('Features Title Typography', 'xpo-blocks')} value={featuresTitleTypo} onChange={val => setAttributes({ featuresTitleTypo: val })} />

        <RangeControl label={__('Feature Icon Size', 'xpo-blocks')} value={featureIconSize} onChange={val => setAttributes({ featureIconSize: val })} min={10} max={60} />

        <ColorControl label={__('Feature Text Color', 'xpo-blocks')} value={featureTextColor} onChange={val => setAttributes({ featureTextColor: val })} defaultColor="#374151" />

        <Typography label={__('Feature Text Typography', 'xpo-blocks')} value={featureTextTypo} onChange={val => setAttributes({ featureTextTypo: val })} />
      </PanelBody>

    </>
  );
};

export default Style;
