import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { BackgroundControl, BorderControl, ColorControl, Typography } from 'tr-tools';
const textDomain = 'xpo-blocks';
const Style = ({ attributes, setAttributes }) => {
  const {containerBg,containerBorder,titleColor,titleTypography,descriptionColor,descriptionTypography,inputColor,inputBg,inputBorder,inputTypography,buttonColor,buttonBg,buttonBorder,buttonTypography,} = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Container', textDomain)} initialOpen={false}>
        <BackgroundControl
          label={__('Background :', textDomain)}
          value={containerBg}
          onChange={val => setAttributes({ containerBg: val })}
          defaultBackground={{
            type: 'solid',
            color: '#ffffff',
          }}
        />

        <BorderControl
          label={__('Border :', textDomain)}
          value={containerBorder}
          onChange={val => setAttributes({ containerBorder: val })}
          defaultBorder={{
            color: '#e2e8f0',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Title', textDomain)} initialOpen={false}>
        <ColorControl
          label={__('Color :', textDomain)}
          value={titleColor}
          onChange={val => setAttributes({ titleColor: val })}
          defaultColor="#1e293b"
        />
        <Typography
          label={__('Typography :', textDomain)}
          value={titleTypography}
          onChange={val => setAttributes({ titleTypography: val })}
          defaultTypography={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '1.5',
            textTransform: 'none',
            letterSpacing: '0px',
            textAlign: 'left',
            color: '#1e293b',
          }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Description', textDomain)} initialOpen={false}>
        <ColorControl
          label={__('Color :', textDomain)}
          value={descriptionColor}
          onChange={val => setAttributes({ descriptionColor: val })}
          defaultColor="#64748b"
        />
        <Typography
          label={__('Typography :', textDomain)}
          value={descriptionTypography}
          onChange={val => setAttributes({ descriptionTypography: val })}
          defaultTypography={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '1.5',
            textTransform: 'none',
            letterSpacing: '0px',
            textAlign: 'left',
            color: '#64748b',
          }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Input Field', textDomain)} initialOpen={false}>
        <ColorControl
          label={__('Text Color :', textDomain)}
          value={inputColor}
          onChange={val => setAttributes({ inputColor: val })}
          defaultColor="#0f172a"
        />
        <BackgroundControl
          label={__('Background :', textDomain)}
          value={inputBg}
          onChange={val => setAttributes({ inputBg: val })}
          defaultBackground={{
            type: 'solid',
            color: '#ffffff',
          }}
        />
        <BorderControl
          label={__('Border :', textDomain)}
          value={inputBorder}
          onChange={val => setAttributes({ inputBorder: val })}
          defaultBorder={{
            color: '#cbd5e1',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />
        <Typography
          label={__('Typography :', textDomain)}
          value={inputTypography}
          onChange={val => setAttributes({ inputTypography: val })}
          defaultTypography={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '1.5',
            textTransform: 'none',
            letterSpacing: '0px',
            textAlign: 'left',
            color: '#0f172a',
          }}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Button', textDomain)} initialOpen={false}>
        <ColorControl
          label={__('Text Color :', textDomain)}
          value={buttonColor}
          onChange={val => setAttributes({ buttonColor: val })}
          defaultColor="#ffffff"
        />
        <BackgroundControl
          label={__('Background :', textDomain)}
          value={buttonBg}
          onChange={val => setAttributes({ buttonBg: val })}
          defaultBackground={{
            type: 'solid',
            color: '#000000',
          }}
        />
        <BorderControl
          label={__('Border :', textDomain)}
          value={buttonBorder}
          onChange={val => setAttributes({ buttonBorder: val })}
          defaultBorder={{
            color: 'transparent',
            width: '',
            style: 'solid',
            side: 'all',
          }}
        />
        <Typography
          label={__('Typography :', textDomain)}
          value={buttonTypography}
          onChange={val => setAttributes({ buttonTypography: val })}
          defaultTypography={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '1.5',
            textTransform: 'none',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#ffffff',
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
