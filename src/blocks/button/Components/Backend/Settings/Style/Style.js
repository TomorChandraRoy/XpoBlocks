import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalBoxControl as BoxControl, ColorPalette } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
  const { padding, margin, bgColor, textColor } = attributes;

  return (
    <>
      <PanelBody className="guten-builder-blocks-panel-body" title={__('Spacing', 'guten-builder-blocks')} initialOpen={true}>
        <h4>{__('Padding', 'guten-builder-blocks')}</h4>
        <BoxControl values={padding || {}} onChange={newPadding => setAttributes({ padding: newPadding })} />

        <div style={{ marginTop: '20px' }}>
          <h4>{__('Margin', 'guten-builder-blocks')}</h4>
          <BoxControl values={margin || {}} onChange={newMargin => setAttributes({ margin: newMargin })} />
        </div>
      </PanelBody>

      <PanelBody className="guten-builder-blocks-panel-body" title={__('Colors', 'guten-builder-blocks')} initialOpen={false}>
        <h4>{__('Background Color', 'guten-builder-blocks')}</h4>
        <ColorPalette
          colors={[
            { name: 'Blue', color: '#007cba' },
            { name: 'Red', color: '#ff0000' },
            { name: 'Green', color: '#00d084' },
            { name: 'Black', color: '#000000' },
            { name: 'White', color: '#ffffff' },
          ]}
          value={bgColor}
          onChange={color => setAttributes({ bgColor: color })}
        />

        <div style={{ marginTop: '20px' }}>
          <h4>{__('Text Color', 'guten-builder-blocks')}</h4>
          <ColorPalette
            colors={[
              { name: 'White', color: '#ffffff' },
              { name: 'Black', color: '#000000' },
              { name: 'Grey', color: '#7a7a7a' },
            ]}
            value={textColor}
            onChange={color => setAttributes({ textColor: color })}
          />
        </div>
      </PanelBody>
    </>
  );
};

export default Style;
