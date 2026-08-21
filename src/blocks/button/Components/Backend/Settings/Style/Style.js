import { __ } from '@wordpress/i18n';
import { PanelBody, TabPanel, RangeControl, ToggleControl, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, BackgroundControl, SpacingControl, ShadowControl, UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';

const Style = ({ attributes, setAttributes }) => {

  const { textColor, buttonBg, hoverTextColor, hoverButtonBg, buttonBorderRadius, buttonEdgeBg, buttonBoxShadow, buttonOffsetY, buttonHoverOffsetY, enable3DEffect, buttonWidth, buttonPadding } = attributes;

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

      <PanelBody className="bPlPanelBody" title={__('Layout', 'guten-builder-blocks')} initialOpen={false}>
        <UnitControl label={__('Width :', 'guten-builder-blocks')} value={buttonWidth} onChange={val => setAttributes({ buttonWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} responsive={true} />

        <Spacer />

        <SpacingControl
          label={__('Padding :', 'guten-builder-blocks')}
          value={buttonPadding}
          onChange={val => setAttributes({ buttonPadding: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '12px', right: '27px', bottom: '12px', left: '27px' }}
          responsive={true}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Border', 'guten-builder-blocks')} initialOpen={false}>
        <SpacingControl
          label={__('Border Radius :', 'guten-builder-blocks')}
          value={buttonBorderRadius}
          onChange={val => setAttributes({ buttonBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '12px', right: '12px', bottom: '12px', left: '12px' }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('3D Effect', 'guten-builder-blocks')} initialOpen={false}>
        <ToggleControl label={__('Enable 3D Effect', 'guten-builder-blocks')} checked={enable3DEffect} onChange={val => setAttributes({ enable3DEffect: val })} />
        {enable3DEffect && (
          <>
            <RangeControl label={__('Depth (Translate Y)', 'guten-builder-blocks')} value={buttonOffsetY !== undefined ? buttonOffsetY : -4} onChange={val => setAttributes({ buttonOffsetY: val })} min={-20} max={20} step={1} allowReset={true} resetFallbackValue={-4} />
            <RangeControl label={__('Hover Depth (Translate Y)', 'guten-builder-blocks')} value={buttonHoverOffsetY !== undefined ? buttonHoverOffsetY : -6} onChange={val => setAttributes({ buttonHoverOffsetY: val })} min={-20} max={20} step={1} allowReset={true} resetFallbackValue={-6} />
            <ShadowControl label={__('Box Shadow :', 'guten-builder-blocks')} value={buttonBoxShadow} onChange={val => setAttributes({ buttonBoxShadow: val })} />
            <BackgroundControl label={__('Edge Background :', 'guten-builder-blocks')} value={buttonEdgeBg} onChange={val => setAttributes({ buttonEdgeBg: val })} />
          </>
        )}
      </PanelBody>
    </>
  );
};

export default Style;
