const DynamicStyles = ({ attributes, id }) => {
  const {
    playerLayout = 'extended',
    compactSize = 160,
    enableSeekbar = false,
    bgColor = '#111111',
    textColor = '#ffffff',
    accentColor = 'var(--gbb-ap-accent, #10b981)',
    progressColor = 'rgba(255,255,255,0.15)',
    borderRadius = 50,
    paddingV = 16,
    paddingH = 32,
    playerAlign = 'center',
  } = attributes || {};

  const isCompact = playerLayout === 'compact';

  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const button = `${wrapper} .gbb-ap-button`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${wrapper} {
          display: flex;
          justify-content: ${playerAlign};
          align-items: center;
          width: 100%;
        }

        ${button} {
          --gbb-ap-bg: ${bgColor};
          --gbb-ap-text: ${textColor};
          --gbb-ap-accent: ${accentColor};
          --gbb-ap-progress: ${enableSeekbar ? progressColor : 'transparent'};
          --gbb-ap-br: ${isCompact ? '50%' : `${borderRadius}px`};
          --gbb-ap-pad-v: ${isCompact ? '0px' : `${paddingV}px`};
          --gbb-ap-pad-h: ${isCompact ? '0px' : `${paddingH}px`};
          --gbb-ap-width: ${isCompact ? `${compactSize}px` : 'auto'};
          --gbb-ap-height: ${isCompact ? `${compactSize}px` : 'auto'};
          --gbb-ap-jc: ${isCompact ? 'center' : 'flex-start'};
        }
        `,
      }}
    />
  );
};

export default DynamicStyles;
