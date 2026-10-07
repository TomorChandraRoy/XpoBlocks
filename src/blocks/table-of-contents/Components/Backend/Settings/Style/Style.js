import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, UnitControl, SpacingControl, BorderControl, Typography } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { updateData } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes }) => {
  const {sidebarBorder,sidebarBorderRadius,headerBgColor,headerTextColor,iconColor,sideHeaderTypography,headerIconSize,headerBorderWidth,sidebarBgColor,sidebarItemColor,sidebarItemTypography,activeHeaderBgColor,activeTextColor,activeBorderLine,activeIconColor,activeBorderRadius,sideTextIconSize,contentBgColor,contentBorderRadius,contentBorder,contentHeaderTextColor,contentHeaderTypography,contentHeaderBorderLine,contentDescriptionColor,contentDescriptionTypography,contentTitleColor,contentTitleTypography,contentParagraphColor,contentParagraphTypography,
  } = attributes;

  return (
    <>
      {/* --- SIDEBAR STYLE --- */}
      <PanelBody className="bPlPanelBody" title={__('Sidebar Header', 'xpo-blocks')} initialOpen={true}>
        <BorderControl
          label={__('Sidebar Border', 'xpo-blocks')}
          value={sidebarBorder}
          onChange={val => setAttributes({ sidebarBorder: val })}
          defaultBorder={{
            color: '#e2e8f0',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />
        <Spacer />
        <SpacingControl
          label={__('Sidebar Border Radius', 'xpo-blocks')}
          value={sidebarBorderRadius}
          onChange={val => setAttributes({ sidebarBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '0px', right: '0px', bottom: '0px', left: '0px' }}
        />
        <Spacer />

        <ColorControl label={__('Header Background', 'xpo-blocks')} value={headerBgColor} onChange={val => setAttributes({ headerBgColor: val })} defaultColor="#f9fafb" />

        <ColorControl label={__('Header Text Color', 'xpo-blocks')} value={headerTextColor} onChange={val => setAttributes({ headerTextColor: val })} defaultColor="#1e293b" />
        <ColorControl label={__('Icon Color', 'xpo-blocks')} value={iconColor} onChange={val => setAttributes({ iconColor: val })} defaultColor="#64748b" />
        <Spacer />

        <Typography
          label={__('Header Typography', 'xpo-blocks')}
          value={sideHeaderTypography}
          onChange={val => setAttributes({ sideHeaderTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '600',
            fontSize: {
              desktop: '14px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />

        <UnitControl label={__('Header icon Size', 'xpo-blocks')} value={headerIconSize} onChange={val => setAttributes(updateData(attributes, val, 'headerIconSize'))} units={[pxUnit()]} defaultVal="20px" />
        <Spacer />

        <BorderControl
          label={__('Border Line ', 'xpo-blocks')}
          value={headerBorderWidth}
          onChange={val => setAttributes({ headerBorderWidth: val })}
          units={[pxUnit()]}
          defaultBorder={{
            color: '#e5e7eb',
            width: '1px',
            style: 'solid',
            side: 'bottom',
          }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Sidebar Content', 'xpo-blocks')} initialOpen={false}>
        <ColorControl label={__('Content Background', 'xpo-blocks')} value={sidebarBgColor} onChange={val => setAttributes({ sidebarBgColor: val })} defaultColor="#f9fafb" />
        <Spacer />
        <Typography
          label={__('Text Typography', 'xpo-blocks')}
          value={sidebarItemTypography}
          onChange={val => setAttributes({ sidebarItemTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '500',
            fontSize: {
              desktop: '13px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />
        <ColorControl label={__('Text Color', 'xpo-blocks')} value={sidebarItemColor} onChange={val => setAttributes({ sidebarItemColor: val })} defaultColor="#475569" />
        <Spacer />
        <UnitControl label={__('Text Icon Size', 'xpo-blocks')} value={sideTextIconSize} onChange={val => setAttributes(updateData(attributes, val, 'sideTextIconSize'))} units={[pxUnit()]} defaultVal="18px" />
        <Spacer />
        <ColorControl label={__('Item Active Background', 'xpo-blocks')} value={activeHeaderBgColor} onChange={val => setAttributes({ activeHeaderBgColor: val })} defaultColor="#1573d1" />
        <Spacer />
        <ColorControl label={__('Active Text Color', 'xpo-blocks')} value={activeTextColor} onChange={val => setAttributes({ activeTextColor: val })} defaultColor="#ffffff" />
        <Spacer />
        <BorderControl
          label={__('Active Border Line', 'xpo-blocks')}
          value={activeBorderLine}
          onChange={val => setAttributes({ activeBorderLine: val })}
          defaultBorder={{
            color: '#00f03c',
            width: '4px',
            style: 'solid',
            side: 'left',
          }}
        />
        <Spacer />
        <ColorControl label={__('Active Icon Color', 'xpo-blocks')} value={activeIconColor} onChange={val => setAttributes({ activeIconColor: val })} defaultColor="#0f172a" />
        <Spacer />
        <SpacingControl
          label={__('Active Border Radius', 'xpo-blocks')}
          value={activeBorderRadius}
          onChange={val => setAttributes({ activeBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '0px', right: '4px', bottom: '4px', left: '0px' }}
        />
        <Spacer />
      </PanelBody>

      {/* --- CONTENT Header STYLE --- */}
      <PanelBody className="bPlPanelBody" title={__('Content Header', 'xpo-blocks')} initialOpen={false}>
        <ColorControl label={__('Content Background', 'xpo-blocks')} value={contentBgColor} onChange={val => setAttributes({ contentBgColor: val })} defaultColor="#f9fafb" />

        <SpacingControl label={__('Border Radius', 'xpo-blocks')} value={contentBorderRadius} onChange={val => setAttributes({ contentBorderRadius: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal={{ top: '0px', right: '0px', bottom: '0px', left: '0px' }} />
        <Spacer />
        <BorderControl
          label={__('Border', 'xpo-blocks')}
          value={contentBorder}
          onChange={val => setAttributes({ contentBorder: val })}
          defaultBorder={{
            color: '#e5e7eb',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />
        <Spacer />
        <ColorControl label={__('Content Header Color', 'xpo-blocks')} value={contentHeaderTextColor} onChange={val => setAttributes({ contentHeaderTextColor: val })} defaultColor="#1e293b" />
        <Spacer />
        <Typography
          label={__('Text Typography', 'xpo-blocks')}
          value={contentHeaderTypography}
          onChange={val => setAttributes({ contentHeaderTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '800',
            fontSize: {
              desktop: '28px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />
        <BorderControl
          label={__('Border Line', 'xpo-blocks')}
          value={contentHeaderBorderLine}
          onChange={val => setAttributes({ contentHeaderBorderLine: val })}
          defaultBorder={{
            color: '#e5e7eb',
            width: '1px',
            style: 'solid',
            side: 'bottom',
          }}
        />
        <Spacer />
        <ColorControl label={__('Content Description Color', 'xpo-blocks')} value={contentDescriptionColor} onChange={val => setAttributes({ contentDescriptionColor: val })} defaultColor="#6b7280" />
        <Spacer />
        <Typography
          label={__('Content Description Typography', 'xpo-blocks')}
          value={contentDescriptionTypography}
          onChange={val => setAttributes({ contentDescriptionTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '',
            fontSize: {
              desktop: '14px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />
      </PanelBody>

      {/* --- CONTENT AREA STYLE --- */}
      <PanelBody className="bPlPanelBody" title={__('Content  Area', 'xpo-blocks')} initialOpen={false}>
        <ColorControl label={__('Content Title Color', 'xpo-blocks')} value={contentTitleColor} onChange={val => setAttributes({ contentTitleColor: val })} defaultColor="#111827" />
        <Spacer />
        <Typography
          label={__('Content Title Typography', 'xpo-blocks')}
          value={contentTitleTypography}
          onChange={val => setAttributes({ contentTitleTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '400',
            fontSize: {
              desktop: '20px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />

        <ColorControl label={__('Content Paragraph Color', 'xpo-blocks')} value={contentParagraphColor} onChange={val => setAttributes({ contentParagraphColor: val })} defaultColor="#4b5563" />
        <Spacer />
        <Typography
          label={__('Content Paragraph Typography', 'xpo-blocks')}
          value={contentParagraphTypography}
          onChange={val => setAttributes({ contentParagraphTypography: val })}
          defaultTypography={{
            fontFamily: 'Google Sans Flex',
            fontWeight: '',
            fontSize: {
              desktop: '14px',
              tablet: '',
              mobile: '',
            },
            lineHeight: '',
            letterSpacing: '',
            textTransform: '',
            textDecoration: '',
            fontStyle: '',
          }}
        />
        <Spacer />
      </PanelBody>
    </>
  );
};

export default Style;
