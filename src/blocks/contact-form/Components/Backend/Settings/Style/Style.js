import { __ } from '@wordpress/i18n';
import { PanelBody } from "@wordpress/components"

const Style = ({attributes, setAttributes}) => {
  return (
        <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>

        </PanelBody>
  )
}

export default Style
