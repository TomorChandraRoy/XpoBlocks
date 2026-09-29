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
	const xpoCnt = `${mainSl} .xpo-scroll-story-content`;
	const xpoSPF = `${mainSl} .xpo-scroll-progress-fill`;
	const xpoSST = `${mainSl} .xpo-scroll-story-title`;
	const xpoSSA = `${mainSl} .xpo-scroll-story-step.is-active .xpo-scroll-story-title`;
	const xpoSSD = `${mainSl} .xpo-scroll-story-desc`;
	const xpoImg = `${mainSl} .xpo-scroll-story-image`;
	const xpoMediaWrp = `${mainSl} .xpo-scroll-story-media-wrapper`;
	const xpoMediaStk = `${mainSl} .xpo-scroll-story-media-sticky`;

	return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
				${xpoCnt} {
					gap: ${stepGap};
				}

				${xpoSPF} {
					background: ${progressColor};
				}

				${xpoSST} {
					color: ${inactiveTitleColor};
				}

				${xpoSSA} {
					color: ${activeTitleColor};
				}

				${xpoSSD} {
					color: ${descColor};
				}

				${xpoImg} {
					object-fit: ${imageFit};
				}

				${xpoMediaWrp} {
					background: ${mediaBgColor};
					border-radius: ${mediaRadius};
				}

				${xpoMediaStk} {
					min-height: ${mediaHeight};
				}
			`.replace(/\s+/g, ' '),
      }}
    />
  );
};

export default DynamicStyle;
