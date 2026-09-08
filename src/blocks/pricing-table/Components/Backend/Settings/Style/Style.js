import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';
import { Typography, ColorControl, SpacingControl, BorderControl, ShadowControl, BackgroundControl } from 'tr-tools';
import { defaultPopularTypo } from '../../../../utils/options';

const Style = ( { attributes, setAttributes } ) => {
	const { badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, cardBg, cardBorder, cardBoxShadow, cardBorderRadius, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor, priceColor, priceTypo, periodTypo, buttonBg, buttonHoverBg, buttonRadius, buttonTypo, buttonColor, buttonHoverColor, buttonBorder, dividerColor, featuresTitleColor, featuresTitleTypo, featureIconSize, featureTextColor, featureTextTypo, pricingTables = [] } = attributes;

  const hasPopularCard = pricingTables.some(plan => plan.isFeatured);

	return (
    <>
      {hasPopularCard && (
        <PanelBody className="bPlPanelBody" title={__('Popular Layout', 'guten-builder-blocks')} initialOpen={false}>
          <Typography label={__('Typography', 'guten-builder-blocks')} value={badgeTypo} defaultTypography={defaultPopularTypo} onChange={val => setAttributes({ badgeTypo: val })} />

          <ColorControl label={__('Text Color', 'guten-builder-blocks')} value={badgeColor} defaultColor={'#ffffff'} onChange={val => setAttributes({ badgeColor: val || '#ffffff' })} />

          <ColorControl label={__('Background Color', 'guten-builder-blocks')} value={badgeBgColor} defaultColor={'#4f46e5'} onChange={val => setAttributes({ badgeBgColor: val || '#4f46e5' })} />

          <SpacingControl label={__('Border Radius', 'guten-builder-blocks')} value={badgeRadius} onChange={val => setAttributes({ badgeRadius: val })} defaultVal={{ top: '1px', right: '1px', bottom: '1px', left: '16px' }} />

          <BackgroundControl label={__('Card Background', 'guten-builder-blocks')} value={featuredCardBg} onChange={val => setAttributes({ featuredCardBg: val })} defaultBackground={{ type: 'solid', color: '#f8fafc' }} />

          <BorderControl
            label={__('Card Border', 'guten-builder-blocks')}
            value={featuredCardBorder}
            onChange={val => setAttributes({ featuredCardBorder: val })}
            defaultBorder={{
              color: '#4f46e5',
              width: '2px',
              style: 'solid',
              side: 'all',
            }}
          />

          <ShadowControl
            label={__('Card Box Shadow', 'guten-builder-blocks')}
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
        </PanelBody>
      )}

      <PanelBody className="bPlPanelBody" title={__('Normal Layout', 'guten-builder-blocks')} initialOpen={false}>
        <BackgroundControl label={__('Background', 'guten-builder-blocks')} value={cardBg} onChange={val => setAttributes({ cardBg: val })} defaultBackground={{ type: 'solid', color: '#ffffff' }} />

        <BorderControl
          label={__('Border', 'guten-builder-blocks')}
          value={cardBorder}
          onChange={val => setAttributes({ cardBorder: val })}
          defaultBorder={{
            color: '#e5e7eb',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />

        <SpacingControl label={__('Border Radius', 'guten-builder-blocks')} value={cardBorderRadius} onChange={val => setAttributes({ cardBorderRadius: val })} defaultVal={{ top: '8px', right: '8px', bottom: '8px', left: '8px' }} />

        <ShadowControl
          label={__('Box Shadow', 'guten-builder-blocks')}
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

        <ColorControl label={__('Title Color', 'guten-builder-blocks')} value={cardTitleColor} onChange={val => setAttributes({ cardTitleColor: val })} defaultColor="#111827" />

        <Typography label={__('Title Typography', 'guten-builder-blocks')} value={cardTitleTypo} onChange={val => setAttributes({ cardTitleTypo: val })} />

        <ColorControl label={__('Description Color', 'guten-builder-blocks')} value={cardDescColor} onChange={val => setAttributes({ cardDescColor: val })} defaultColor="#4b5563" />

        <Typography label={__('Description Typography', 'guten-builder-blocks')} value={cardDescTypo} onChange={val => setAttributes({ cardDescTypo: val })} />

        <Typography label={__('Period Typography', 'guten-builder-blocks')} value={periodTypo} onChange={val => setAttributes({ periodTypo: val })} />

        <ColorControl label={__('Price & Period Color', 'guten-builder-blocks')} value={priceColor} onChange={val => setAttributes({ priceColor: val })} defaultColor="#111827" />

        <Typography label={__('Price Typography', 'guten-builder-blocks')} value={priceTypo} onChange={val => setAttributes({ priceTypo: val })} />

        <Typography label={__('Period Typography', 'guten-builder-blocks')} value={periodTypo} onChange={val => setAttributes({ periodTypo: val })} />

        <ColorControl label={__('Button Background', 'guten-builder-blocks')} value={buttonBg} onChange={val => setAttributes({ buttonBg: val })} defaultColor="#4f46e5" />

        <ColorControl label={__('Button Hover Background', 'guten-builder-blocks')} value={buttonHoverBg} onChange={val => setAttributes({ buttonHoverBg: val })} defaultColor="#fcfcfc" />

        <ColorControl label={__('Button Text Color', 'guten-builder-blocks')} value={buttonColor} onChange={val => setAttributes({ buttonColor: val })} defaultColor="#ffffff" />

        <ColorControl label={__('Button Hover Text Color', 'guten-builder-blocks')} value={buttonHoverColor} onChange={val => setAttributes({ buttonHoverColor: val })} defaultColor="#4f46e5" />

        <Typography label={__('Button Typography', 'guten-builder-blocks')} value={buttonTypo} onChange={val => setAttributes({ buttonTypo: val })} />

        <BorderControl
          label={__('Button Border', 'guten-builder-blocks')}
          value={buttonBorder}
          onChange={val => setAttributes({ buttonBorder: val })}
          defaultBorder={{
            color: '#4f46e5',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />

        <SpacingControl label={__('Button Border Radius', 'guten-builder-blocks')} value={buttonRadius} onChange={val => setAttributes({ buttonRadius: val })} defaultVal={{ top: '2px', right: '2px', bottom: '2px', left: '2px' }} />

        <ColorControl label={__('Divider Color', 'guten-builder-blocks')} value={dividerColor} onChange={val => setAttributes({ dividerColor: val })} defaultColor="#e5e7eb" />

        <ColorControl label={__('Features Title Color', 'guten-builder-blocks')} value={featuresTitleColor} onChange={val => setAttributes({ featuresTitleColor: val })} defaultColor="#111827" />

        <Typography
          label={__('Features Title Typography', 'guten-builder-blocks')}
          value={featuresTitleTypo}
          onChange={(val) => setAttributes({ featuresTitleTypo: val })}
        />

        <RangeControl
          label={__('Feature Icon Size', 'guten-builder-blocks')}
          value={featureIconSize}
          onChange={(val) => setAttributes({ featureIconSize: val })}
          min={10}
          max={60}
        />

        <ColorControl
          label={__('Feature Text Color', 'guten-builder-blocks')}
          value={featureTextColor}
          onChange={(val) => setAttributes({ featureTextColor: val })}
          defaultColor="#374151"
        />

        <Typography
          label={__('Feature Text Typography', 'guten-builder-blocks')}
          value={featureTextTypo}
          onChange={(val) => setAttributes({ featureTextTypo: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
