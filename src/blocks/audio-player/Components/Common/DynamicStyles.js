import { getBorderCss, getBorderRadiusCss, getBackgroundCss, getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { playerAlign, playerBorder, playerBorderRadius, playerBg, labelColor, titleColor, artistColor, labelTypography, titleTypography, artistTypography } = attributes || {};

  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const topPart = `${mainSl} .gbb-audio-player-one__top`;
  const infoContent = `${topPart} .gbb-audio-player-one__content`;
  const labelText = `${infoContent} .gbb-audio-player-one__label `;
  const titleText = `${infoContent} .gbb-audio-player-one__title`;
  const artistText = `${infoContent} .gbb-audio-player-one__artist`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${wrapper} {
          justify-content: ${playerAlign};
        }

        ${wrapper} .gbb-audio-player-one {
          ${getBackgroundCss(playerBg) ? `background: ${getBackgroundCss(playerBg)};` : ''}
          ${getBorderCss(playerBorder)}
          ${getBorderRadiusCss(playerBorderRadius)}
        }

        ${labelText} {
          ${labelColor ? `color: ${labelColor};` : ''}
          ${getTypographyCss(labelTypography)}
        }

        ${titleText} {
          ${titleColor ? `color: ${titleColor};` : ''}
          ${getTypographyCss(titleTypography)}
        }

        ${artistText} {
          ${artistColor ? `color: ${artistColor};` : ''}
          ${getTypographyCss(artistTypography)}
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
