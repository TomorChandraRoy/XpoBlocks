import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/option';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes, clientId }) => {
	const { selectedTemplate = '' } = attributes;
	const isTemplateSelected = Boolean(selectedTemplate);

	if (!isTemplateSelected) {
		return null;
	}

	return (
		<InspectorControls>
			<TabPanel className="guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-scroll-story" activeClass="guten-builder-blocks-active-tab" tabs={generalStyleTabs}>
				{tab => (
					<>
						{'general' === tab.name && <General {...{ attributes, setAttributes, clientId }} />}
						{'style' === tab.name && <Style {...{ attributes, setAttributes }} />}
					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;
