import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { subStyleTabs } from '../../../utils/options';
import { DocsLink } from 'tr-tools';
import General from './General/General';
import Style from './Style/Style';
const textDomain = 'xpo-blocks';


const Settings = ({ attributes, setAttributes, clientId }) => {
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  if (!isTemplateSelected) {
    return null;
  }

  return (
    <InspectorControls>
      <DocsLink link="https://xpo.com/docs/accordion" text={__('Documentation', textDomain)} />

      {/* {isTemplateSelected && ( */}
      <TabPanel className="wp-xpo-tab-panel" activeClass="wp-xpo-tab-panel-active-tab" tabs={subStyleTabs}>
        {tab => (
          <>
            {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} clientId={clientId} />}
            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
          </>
        )}
      </TabPanel>
      {/* )} */}
    </InspectorControls>
  ); 
};
export default Settings;
