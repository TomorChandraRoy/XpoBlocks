import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, Typography, BackgroundControl, BorderControl, SpacingControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultSubtitleTypo, defaultTitleTypo, defaultDescriptionTypo, defaultQuestionTypo, defaultAnswerTypo } from '../../../../../utils/options';

const Style = ({ attributes, setAttributes }) => {
  const { subtitleColor, subtitleTypography, titleColor, titleTypography, descriptionColor, descriptionTypography, questionBg = '#FFFFFF', questionBorder, questionBorderRadius, questionTypography, answerTypography, questionColor, answerColor, showHeader } = attributes;

  return (
    <>
      {showHeader && (
        <PanelBody className="bPlPanelBody" title={__(' Heading', 'guten-builder-blocks')} initialOpen={true}>
          <ColorControl
            label={__('Subtitle Color', 'guten-builder-blocks')}
            value={subtitleColor}
            onChange={color => {
              setAttributes({ subtitleColor: color });
            }}
            defaultColor="#475569"
          />

          <Typography
            label={__('Subtitle Typography', 'guten-builder-blocks')}
            value={subtitleTypography}
            onChange={val => {
              setAttributes({ subtitleTypography: val });
            }}
            defaultTypography={defaultSubtitleTypo}
          />

          <ColorControl
            label={__('Title Color', 'guten-builder-blocks')}
            value={titleColor}
            onChange={color => {
              setAttributes({ titleColor: color });
            }}
            defaultColor="#0f172a"
          />

          <Typography
            label={__('Title Typography', 'guten-builder-blocks')}
            value={titleTypography}
            onChange={val => {
              setAttributes({ titleTypography: val });
            }}
            defaultTypography={defaultTitleTypo}
          />

          <ColorControl
            label={__('Description Color', 'guten-builder-blocks')}
            value={descriptionColor}
            onChange={color => {
              setAttributes({ descriptionColor: color });
            }}
            defaultColor="#64748b"
          />

          <Typography
            label={__('Description Typography', 'guten-builder-blocks')}
            value={descriptionTypography}
            onChange={val => {
              setAttributes({ descriptionTypography: val });
            }}
            defaultTypography={defaultDescriptionTypo}
          />
        </PanelBody>
      )}

      <PanelBody className="bPlPanelBody" title={__('Q/A Content', 'guten-builder-blocks')} initialOpen={false}>
        <BackgroundControl label={__('Question Bg :', 'guten-builder-blocks')} value={questionBg} onChange={val => setAttributes({ questionBg: val })} />

        <Spacer />

        <BorderControl
          label={__('Question Border :', 'guten-builder-blocks')}
          value={questionBorder}
          onChange={val => setAttributes({ questionBorder: val })}
          defaultBorder={{
            color: '#e0e7ff',
            width: '1px',
            style: 'solid',
            side: 'all',
          }}
        />
        <SpacingControl
          label={__('Border Radius :', 'guten-builder-blocks')}
          value={questionBorderRadius}
          onChange={val => setAttributes({ questionBorderRadius: val })}
          units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
          defaultVal={{ top: '6px', right: '6px', bottom: '6px', left: '6px' }}
        />

        <Spacer />
        <ColorControl
          label={__('Question Color', 'guten-builder-blocks')}
          value={questionColor}
          onChange={color => {
            setAttributes({ questionColor: color });
          }}
          defaultColor="#0f172a"
        />

        <Typography
          label={__('Question Typography', 'guten-builder-blocks')}
          value={questionTypography}
          onChange={val => {
            setAttributes({ questionTypography: val });
          }}
          defaultTypography={defaultQuestionTypo}
        />

        <Spacer />
        <ColorControl
          label={__('Answer Color', 'guten-builder-blocks')}
          value={answerColor}
          onChange={color => {
            setAttributes({ answerColor: color });
          }}
          defaultColor="#475569"
        />

        <Typography
          label={__('Answer Typography', 'guten-builder-blocks')}
          value={answerTypography}
          onChange={val => {
            setAttributes({ answerTypography: val });
          }}
          defaultTypography={defaultAnswerTypo}
        />
      </PanelBody>
    </>
  );
};

export default Style;
