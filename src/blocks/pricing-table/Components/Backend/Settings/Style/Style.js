import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Typography, ColorControl, SpacingControl, BorderControl, ShadowControl, BackgroundControl } from 'tr-tools';
import { defaultPopularTypo } from '../../../../utils/options';

const Style = ( { attributes, setAttributes } ) => {
	const { badgeTypo, badgeColor, badgeBgColor, badgeRadius, featuredCardBg, featuredCardBorder, featuredCardBoxShadow, cardBg, cardBorder, cardBoxShadow, cardBorderRadius, cardTitleTypo, cardTitleColor, cardDescTypo, cardDescColor, pricingTables = [] } = attributes;

  const hasPopularCard = pricingTables.some(plan => plan.isFeatured);

	return (
    <>
      {hasPopularCard && (
        <PanelBody title={__('Popular Layout', 'guten-builder-blocks')} initialOpen={false}>
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

      <PanelBody title={__('Normal Layout', 'guten-builder-blocks')} initialOpen={false}>
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
          onChange={(val) => setAttributes({ cardBoxShadow: val })}
          defaultShadow={{
            hOffset: '0px',
            vOffset: '4px',
            blur: '6px',
            spread: '-1px',
            color: 'rgba(0, 0, 0, 0.1)',
          }}
        />

        <ColorControl
          label={__('Title Color', 'guten-builder-blocks')}
          value={cardTitleColor}
          onChange={(val) => setAttributes({ cardTitleColor: val })}
          defaultColor="#111827"
        />

        <Typography
          label={__('Title Typography', 'guten-builder-blocks')}
          value={cardTitleTypo}
          onChange={(val) => setAttributes({ cardTitleTypo: val })}
        />

        <ColorControl
          label={__('Description Color', 'guten-builder-blocks')}
          value={cardDescColor}
          onChange={(val) => setAttributes({ cardDescColor: val })}
          defaultColor="#4b5563"
        />

        <Typography
          label={__('Description Typography', 'guten-builder-blocks')}
          value={cardDescTypo}
          onChange={(val) => setAttributes({ cardDescTypo: val })}
        />
      </PanelBody>

      
    </>
  );
};

export default Style;
