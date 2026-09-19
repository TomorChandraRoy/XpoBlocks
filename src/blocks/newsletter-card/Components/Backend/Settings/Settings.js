import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/option';
import General from './General/General';
import { DocsLink } from 'tr-tools';

import Style from './Style/Style';
const Settings = ({ attributes, setAttributes }) => {
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  if (!isTemplateSelected) {
    return null;
  }
  return (
    <InspectorControls>
      <DocsLink link="https://gutenbuilder.com/docs/newsletter-card" text={__('Documentation', 'guten-builder-blocks')} />
      <TabPanel className="guten-builder-blocks-tab-panel" activeClass="guten-builder-blocks-active-tab" tabs={generalStyleTabs}>
        {tab => (
          <>
            {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}
            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
};
export default Settings;
