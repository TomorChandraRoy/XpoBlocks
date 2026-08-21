import { __ } from '@wordpress/i18n';
import { PanelBody } from "@wordpress/components";
import { ColorControl, Typography } from 'tr-tools';
import { templateData } from '../../../../utils/data';

const Style = ({attributes, setAttributes}) => {
  const { selectedTemplate = 'template-1', dividerColor = '#d1d5db', textTypography, dividerType = 'text' } = attributes || {};

  return (
        <PanelBody className="bPlPanelBody" title={__('Colors', 'guten-builder-blocks')} initialOpen={true}>
            <ColorControl 
                label={__('Color :', 'guten-builder-blocks')} 
                value={dividerColor} 
                onChange={color => setAttributes({ dividerColor: color })} 
                defaultColor="#d1d5db" 
            />

            {selectedTemplate === 'template-1' && dividerType === 'text' && (
                <Typography 
                    label={__('Typography :', 'guten-builder-blocks')} 
                    value={textTypography} 
                    onChange={val => setAttributes({ textTypography: val })} 
                    defaultTypography={templateData.templates[0].attributes.textTypography}
                />
            )}
        </PanelBody>
  );
};

export default Style;
