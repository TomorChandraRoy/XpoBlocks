import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { BackgroundControl, BorderControl, ColorControl, Typography } from 'tr-tools';

const Style = ({ attributes, setAttributes }) => {
  const {
    containerBg,
    containerBorder,
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
    buttonColor,
    buttonBg,
    buttonBorder,
    buttonTypography,
  } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Container', 'guten-builder-blocks')} initialOpen={false}>
        <BackgroundControl
          label={__('Background :', 'guten-builder-blocks')}
          value={containerBg}
          onChange={val => setAttributes({ containerBg: val })}
          defaultBackground={{
            type: 'solid',
            color: '#ffffff',
          }}
        />

        <BorderControl
          label={__('Border :', 'guten-builder-blocks')}
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

      <PanelBody className="bPlPanelBody" title={__('Title', 'guten-builder-blocks')} initialOpen={false}>
        <ColorControl
          label={__('Color :', 'guten-builder-blocks')}
          value={titleColor}
          onChange={val => setAttributes({ titleColor: val })}
          defaultColor="#1e293b"
        />
        <Typography
          label={__('Typography :', 'guten-builder-blocks')}
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

      <PanelBody className="bPlPanelBody" title={__('Description', 'guten-builder-blocks')} initialOpen={false}>
        <ColorControl
          label={__('Color :', 'guten-builder-blocks')}
          value={descriptionColor}
          onChange={val => setAttributes({ descriptionColor: val })}
          defaultColor="#64748b"
        />
        <Typography
          label={__('Typography :', 'guten-builder-blocks')}
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

      <PanelBody className="bPlPanelBody" title={__('Button', 'guten-builder-blocks')} initialOpen={false}>
        <ColorControl
          label={__('Text Color :', 'guten-builder-blocks')}
          value={buttonColor}
          onChange={val => setAttributes({ buttonColor: val })}
          defaultColor="#ffffff"
        />
        <BackgroundControl
          label={__('Background :', 'guten-builder-blocks')}
          value={buttonBg}
          onChange={val => setAttributes({ buttonBg: val })}
          defaultBackground={{
            type: 'solid',
            color: '#000000',
          }}
        />
        <BorderControl
          label={__('Border :', 'guten-builder-blocks')}
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
          label={__('Typography :', 'guten-builder-blocks')}
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
