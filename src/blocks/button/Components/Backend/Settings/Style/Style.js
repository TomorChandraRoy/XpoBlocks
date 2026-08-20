import { __ } from '@wordpress/i18n';
import { PanelBody, TabPanel } from '@wordpress/components';
import { ColorControl, BackgroundControl, SpacingControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';

const Style = ({ attributes, setAttributes }) => {
  const { textColor, buttonBg, hoverTextColor, hoverButtonBg, buttonBorderRadius } = attributes;

  const tabs = [
    { name: 'normal', title: __('Normal', 'guten-builder-blocks') },
    { name: 'hover', title: __('Hover', 'guten-builder-blocks') }
  ];

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Colors', 'guten-builder-blocks')} initialOpen={true}>
        <TabPanel className="guten-builder-blocks-tab-panel" activeClass="guten-builder-blocks-active-tab" tabs={tabs}>
          {tab => (
            <>
              {tab.name === 'normal' && (
                <>
                  <ColorControl label={__('Text Color :', 'guten-builder-blocks')} value={textColor} onChange={color => setAttributes({ textColor: color })} defaultColor="#ffffff" />
                  <BackgroundControl label={__('Background :', 'guten-builder-blocks')} value={buttonBg} onChange={val => setAttributes({ buttonBg: val })} defaultBackground={{ type: 'solid', color: '#F62477' }} />
                </>
              )}
              {tab.name === 'hover' && (
                <>
                  <ColorControl label={__('Text Color :', 'guten-builder-blocks')} value={hoverTextColor} onChange={color => setAttributes({ hoverTextColor: color })} defaultColor="#ffffff" />
                  <BackgroundControl label={__('Background :', 'guten-builder-blocks')} value={hoverButtonBg} onChange={val => setAttributes({ hoverButtonBg: val })} defaultBackground={{ type: 'solid', color: '#F62477' }} />
                </>
              )}
            </>
          )}
        </TabPanel>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('dskfl;sd', 'guten-builder-blocks')} initialOpen={false}>
        <SpacingControl
          label={__('Border Radius :', 'guten-builder-blocks')}
          value={buttonBorderRadius}
          onChange={val => setAttributes({ buttonBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '12px', right: '12px', bottom: '12px', left: '12px' }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
