import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Typography, ColorControl } from 'tr-tools';
import { defaultPopularTypo } from '../../../../utils/options';

const Style = ( { attributes, setAttributes } ) => {
	const { badgeTypo, badgeColor, badgeBgColor, pricingTables = [] } = attributes;

  const hasPopularCard = pricingTables.some(plan => plan.isFeatured);

	return (
    <>
      {hasPopularCard && (
        <PanelBody title={__('Badge Styling', 'guten-builder-blocks')} initialOpen={false}>
          <Typography label={__('Typography', 'guten-builder-blocks')} value={badgeTypo} defaultTypography={defaultPopularTypo} onChange={val => setAttributes({ badgeTypo: val })} />

          <ColorControl label={__('Text Color', 'guten-builder-blocks')} value={badgeColor} defaultColor={"#ffffff"} onChange={val => setAttributes({ badgeColor: val || '#ffffff' })} />

          <ColorControl label={__('Background Color', 'guten-builder-blocks')} value={badgeBgColor} defaultColor={"#4f46e5"} onChange={val => setAttributes({ badgeBgColor: val || '#4f46e5' })} />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
