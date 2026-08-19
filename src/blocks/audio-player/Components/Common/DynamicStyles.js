import { getBorderCss, getBorderRadiusCss, getBackgroundCss, getTypographyCss } from 'tr-tools';

const DynamicStyles = ({ attributes, id }) => {
  const { playerAlign, playerBorder, playerBorderRadius, playerBg, labelColor, titleColor, artistColor, labelTypography, titleTypography, artistTypography, progressColor, progressBg, timeColor } = attributes || {};

  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const topPart = `${mainSl} .gbb-audio-player-one__top`;
  const infoContent = `${topPart} .gbb-audio-player-one__content`;
  const labelText = `${infoContent} .gbb-audio-player-one__label `;
  const titleText = `${infoContent} .gbb-audio-player-one__title`;
  const artistText = `${infoContent} .gbb-audio-player-one__artist`;
  const timeText = `${infoContent} .gbb-audio-player-one__time`;


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

        ${wrapper} .gbb-audio-player-one__progress input {
          background: linear-gradient(
            to right,
            ${progressColor ? progressColor : '#F62477'} calc(7px + var(--progress) * 1% - 14px * var(--progress) / 100),
            ${progressBg ? progressBg : '#e5e7eb'} calc(7px + var(--progress) * 1% - 14px * var(--progress) / 100)
          ) !important;
        }

        ${wrapper} .gbb-audio-player-one__progress input::-webkit-slider-thumb {
          background: ${progressColor ? progressColor : '#F62477'} !important;
        }

        ${wrapper} .gbb-audio-player-one__progress input::-moz-range-thumb {
          background: ${progressColor ? progressColor : '#F62477'} !important;
        }

        ${timeText} {
          ${timeColor ? `color: ${timeColor};` : ''}
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
