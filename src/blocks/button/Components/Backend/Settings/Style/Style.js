import { __ } from '@wordpress/i18n';
import { PanelBody, TabPanel, RangeControl, ToggleControl, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, BackgroundControl, SpacingControl, ShadowControl, UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
const Style = ({ attributes, setAttributes }) => {

  const { textColor, buttonBg, hoverTextColor, hoverButtonBg, buttonBorderRadius, buttonEdgeBg, buttonBoxShadow, buttonOffsetY, buttonHoverOffsetY, enable3DEffect, buttonWidth, buttonPadding } = attributes;

  const tabs = [
    { name: 'normal', title: __('Normal', 'xpo-blocks') },
    { name: 'hover', title: __('Hover', 'xpo-blocks') }
  ];

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Colors', 'xpo-blocks')} initialOpen={true}>
        <TabPanel className="wp-xpo-tab-panel" activeClass="wp-xpo-tab-panel-active-tab" tabs={tabs}>
          {tab => (
            <>
              {tab.name === 'normal' && (
                <>
                  <ColorControl label={__('Text Color :', 'xpo-blocks')} value={textColor} onChange={color => setAttributes({ textColor: color })} defaultColor="#ffffff" />
                  <BackgroundControl label={__('Background :', 'xpo-blocks')} value={buttonBg} onChange={val => setAttributes({ buttonBg: val })} defaultBackground={{ type: 'solid', color: '#F62477' }} />
                </>
              )}
              {tab.name === 'hover' && (
                <>
                  <ColorControl label={__('Text Color :', 'xpo-blocks')} value={hoverTextColor} onChange={color => setAttributes({ hoverTextColor: color })} defaultColor="#ffffff" />
                  <BackgroundControl label={__('Background :', 'xpo-blocks')} value={hoverButtonBg} onChange={val => setAttributes({ hoverButtonBg: val })} defaultBackground={{ type: 'solid', color: '#F62477' }} />
                </>
              )}
            </>
          )}
        </TabPanel>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout', 'xpo-blocks')} initialOpen={false}>
        <UnitControl label={__('Width :', 'xpo-blocks')} value={buttonWidth} onChange={val => setAttributes({ buttonWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} responsive={true} />

        <Spacer />

        <SpacingControl label={__('Padding :', 'xpo-blocks')} value={buttonPadding} onChange={val => setAttributes({ buttonPadding: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '12px', right: '27px', bottom: '12px', left: '27px' }} responsive={true} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Border', 'xpo-blocks')} initialOpen={false}>
        <SpacingControl label={__('Border Radius :', 'xpo-blocks')} value={buttonBorderRadius} onChange={val => setAttributes({ buttonBorderRadius: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '12px', right: '12px', bottom: '12px', left: '12px' }} />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('3D Effect', 'xpo-blocks')} initialOpen={false}>
        <ToggleControl label={__('Enable 3D Effect', 'xpo-blocks')} checked={enable3DEffect} onChange={val => setAttributes({ enable3DEffect: val })} />
        {enable3DEffect && (
          <>
            <RangeControl label={__('Depth (Translate Y)', 'xpo-blocks')} value={buttonOffsetY !== undefined ? buttonOffsetY : -4} onChange={val => setAttributes({ buttonOffsetY: val })} min={-20} max={20} step={1} allowReset={true} resetFallbackValue={-4} />
            <RangeControl label={__('Hover Depth (Translate Y)', 'xpo-blocks')} value={buttonHoverOffsetY !== undefined ? buttonHoverOffsetY : -6} onChange={val => setAttributes({ buttonHoverOffsetY: val })} min={-20} max={20} step={1} allowReset={true} resetFallbackValue={-6} />
            <ShadowControl label={__('Box Shadow :', 'xpo-blocks')} value={buttonBoxShadow} onChange={val => setAttributes({ buttonBoxShadow: val })} />
            <BackgroundControl label={__('Edge Background :', 'xpo-blocks')} value={buttonEdgeBg} onChange={val => setAttributes({ buttonEdgeBg: val })} />
          </>
        )}
      </PanelBody>
    </>
  );
};

export default Style;
