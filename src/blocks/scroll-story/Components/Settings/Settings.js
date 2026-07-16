import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import General from './General';
import Style from './Style';

const Settings = ({ attributes, setAttributes, clientId }) => {
	return (
		<InspectorControls>
			<PanelBody title="General Settings" initialOpen={true}>
				<General {...{ attributes, setAttributes, clientId }} />
			</PanelBody>
			<PanelBody title="Style Settings" initialOpen={false}>
				<Style {...{ attributes, setAttributes }} />
			</PanelBody>
		</InspectorControls>
	);
};

export default Settings;
