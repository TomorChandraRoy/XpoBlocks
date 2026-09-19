import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { DocsLink } from 'tr-tools';

const Settings = ({ attributes, setAttributes, clientId }) => {
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  if (!isTemplateSelected) {
    return null;
  }

  return (
    <InspectorControls>
      <DocsLink
        link="https://gutenbuilder.com/docs/audio-player"
        text={__('Documentation', 'guten-builder-blocks')}
      />

      <TabPanel className="guten-builder-blocks-tab-panel" activeClass="guten-builder-blocks-active-tab" tabs={generalStyleTabs}>
        {tab => (
          <>
            {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} clientId={clientId} />}
            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
};
export default Settings;
