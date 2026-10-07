import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalSpacer as Spacer } from '@wordpress/components';
import { ColorControl, Typography, BackgroundControl, BorderControl, SpacingControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultSubtitleTypo, defaultTitleTypo, defaultDescriptionTypo, defaultQuestionTypo, defaultAnswerTypo } from '../../../../utils/options';
const Style = ({ attributes, setAttributes }) => {
  const { selectedTemplate = 'template-1', subtitleColor, subtitleTypography, titleColor, titleTypography, descriptionColor, descriptionTypography, questionBg = '#FFFFFF', questionBorder, questionBorderRadius, questionTypography, answerTypography, questionColor, answerColor, showHeader } = attributes;

  return (
    <>
      {showHeader && (
        <PanelBody className="bPlPanelBody" title={__(' Heading', 'xpo-blocks')} initialOpen={true}>
          <ColorControl
            label={__('Subtitle Color', 'xpo-blocks')}
            value={subtitleColor}
            onChange={color => {
              setAttributes({ subtitleColor: color });
            }}
            defaultColor="#475569"
          />

          <Typography
            label={__('Subtitle Typography', 'xpo-blocks')}
            value={subtitleTypography}
            onChange={val => {
              setAttributes({ subtitleTypography: val });
            }}
            defaultTypography={defaultSubtitleTypo}
          />

          <ColorControl
            label={__('Title Color', 'xpo-blocks')}
            value={titleColor}
            onChange={color => {
              setAttributes({ titleColor: color });
            }}
            defaultColor="#0f172a"
          />

          <Typography
            label={__('Title Typography', 'xpo-blocks')}
            value={titleTypography}
            onChange={val => {
              setAttributes({ titleTypography: val });
            }}
            defaultTypography={defaultTitleTypo}
          />

          <ColorControl
            label={__('Description Color', 'xpo-blocks')}
            value={descriptionColor}
            onChange={color => {
              setAttributes({ descriptionColor: color });
            }}
            defaultColor="#64748b"
          />

          <Typography
            label={__('Description Typography', 'xpo-blocks')}
            value={descriptionTypography}
            onChange={val => {
              setAttributes({ descriptionTypography: val });
            }}
            defaultTypography={defaultDescriptionTypo}
          />
        </PanelBody>
      )}

      <PanelBody className="bPlPanelBody" title={__('Q/A Content', 'xpo-blocks')} initialOpen={false}>
        {(selectedTemplate === 'template-1' || selectedTemplate === 'template-3') && (
          <>
            <BackgroundControl label={__('Question Bg :', 'xpo-blocks')} value={questionBg} onChange={val => setAttributes({ questionBg: val })} />
            <Spacer />
          </>
        )}

        {(selectedTemplate === 'template-1' || selectedTemplate === 'template-2' || selectedTemplate === 'template-3') && (
          <>
            <BorderControl
              label={__('Question Border :', 'xpo-blocks')}
              value={questionBorder}
              onChange={val => setAttributes({ questionBorder: val })}
              defaultBorder={
                selectedTemplate === 'template-2'
                  ? {
                      color: '#e2e8f0',
                      width: '1px',
                      style: 'solid',
                      side: 'bottom',
                    }
                  : {
                      color: '#e0e7ff',
                      width: '1px',
                      style: 'solid',
                      side: 'all',
                    }
              }
            />
            <Spacer />
          </>
        )}

        {(selectedTemplate === 'template-1' || selectedTemplate === 'template-3') && (
          <>
            <SpacingControl
              label={__('Border Radius :', 'xpo-blocks')}
              value={questionBorderRadius}
              onChange={val => setAttributes({ questionBorderRadius: val })}
              units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
              defaultVal={{ top: '6px', right: '6px', bottom: '6px', left: '6px' }}
            />
            <Spacer />
          </>
        )}
        <ColorControl
          label={__('Question Color', 'xpo-blocks')}
          value={questionColor}
          onChange={color => {
            setAttributes({ questionColor: color });
          }}
          defaultColor="#0f172a"
        />

        <Typography
          label={__('Question Typography', 'xpo-blocks')}
          value={questionTypography}
          onChange={val => {
            setAttributes({ questionTypography: val });
          }}
          defaultTypography={defaultQuestionTypo}
        />

        <Spacer />
        <ColorControl
          label={__('Answer Color', 'xpo-blocks')}
          value={answerColor}
          onChange={color => {
            setAttributes({ answerColor: color });
          }}
          defaultColor="#475569"
        />

        <Typography
          label={__('Answer Typography', 'xpo-blocks')}
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
