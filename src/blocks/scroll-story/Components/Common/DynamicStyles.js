const DynamicStyle = ({ attributes, clientId }) => {
	const {
		progressColor = '#3b82f6',
		activeTitleColor = '#1e293b',
		inactiveTitleColor = '#94a3b8',
		descColor = '#475569',
		imageFit = 'cover',
		mediaBgColor = '#f1f5f9',
		mediaHeight = '400px',
		mediaRadius = '20px',
		stepGap = '60px'
	} = attributes;

	// In editor, the prop clientId is passed as 'block-{id}'. Frontend fallback to generic class.
	const mainSl = clientId ? `#${clientId}` : '.wp-block-guten-builder-blocks-scroll-story';
	const gbbCnt = `${mainSl} .gbb-scroll-story-content`;
	const gbbSPF = `${mainSl} .gbb-scroll-progress-fill`;
	const gbbSST = `${mainSl} .gbb-scroll-story-title`;
	const gbbSSA = `${mainSl} .gbb-scroll-story-step.is-active .gbb-scroll-story-title`;
	const gbbSSD = `${mainSl} .gbb-scroll-story-desc`;
	const gbbImg = `${mainSl} .gbb-scroll-story-image`;
	const gbbMediaWrp = `${mainSl} .gbb-scroll-story-media-wrapper`;
	const gbbMediaStk = `${mainSl} .gbb-scroll-story-media-sticky`;

	return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
				${gbbCnt} {
					gap: ${stepGap};
				}

				${gbbSPF} {
					background: ${progressColor};
				}

				${gbbSST} {
					color: ${inactiveTitleColor};
				}

				${gbbSSA} {
					color: ${activeTitleColor};
				}

				${gbbSSD} {
					color: ${descColor};
				}

				${gbbImg} {
					object-fit: ${imageFit};
				}

				${gbbMediaWrp} {
					background: ${mediaBgColor};
					border-radius: ${mediaRadius};
				}

				${gbbMediaStk} {
					min-height: ${mediaHeight};
				}
			`.replace(/\s+/g, ' '),
      }}
    />
  );
};

export default DynamicStyle;
