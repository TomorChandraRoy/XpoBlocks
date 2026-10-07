import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { DocsLink } from 'tr-tools';
const Settings = ({ attributes, setAttributes }) => {
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  if (!isTemplateSelected) {
    return null;
  }
  return (
    <InspectorControls>
      <DocsLink link="https://xpoblocks.com/docs/qr-code" text={__('Documentation', 'xpo-blocks')} />
      <TabPanel className="wp-xpo-tab-panel" activeClass="wp-xpo-tab-panel-active-tab" tabs={generalStyleTabs}>
        {tab => (
          <>
            {'general' === tab.name && <General {...{ attributes, setAttributes }} />}
            {'style' === tab.name && <Style {...{ attributes, setAttributes }} />}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
};

export default Settings;
