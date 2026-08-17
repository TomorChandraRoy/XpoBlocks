import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { subStyleTabs } from '../../../utils/options';
import { DocsLink } from 'tr-tools';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes, clientId }) => {
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  return (
    <InspectorControls>
      <DocsLink 
        link="https://gutenbuilder.com/docs/accordion" 
        text={__('Documentation', 'guten-builder-blocks')} 
      />

      {isTemplateSelected && (
        <TabPanel className="guten-builder-blocks-tab-panel" activeClass="guten-builder-blocks-active-tab" tabs={subStyleTabs}>
          {tab => (
            <>
              {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} clientId={clientId} />}
              {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
            </>
          )}
        </TabPanel>
      )}
    </InspectorControls>
  );
};
export default Settings;
