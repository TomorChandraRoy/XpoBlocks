const DynamicStyle = ({ attributes, clientId }) => {
	const {
		blockId,
		progressColor = '#3b82f6',
		activeTitleColor = '#1e293b',
		inactiveTitleColor = '#94a3b8',
		descColor = '#475569'
	} = attributes;

	const mainSl = `.${blockId}`;

	return (
		<style dangerouslySetInnerHTML={{
			__html: `
				${mainSl} {
					display: flex;
					flex-direction: row;
					align-items: flex-start;
					gap: 40px;
					position: relative;
				}

				${mainSl}.layout-sticky-left {
					flex-direction: row-reverse;
				}

				${mainSl} .gbb-scroll-story-content {
					flex: 1;
					display: flex;
					flex-direction: column;
					gap: 60px;
					padding: 50px 0 300px 0;
				}

				${mainSl} .gbb-scroll-story-media-sticky {
					flex: 1;
					position: sticky;
					top: 100px;
					height: calc(100vh - 200px);
					min-height: 400px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				${mainSl} .gbb-scroll-story-media-wrapper {
					width: 100%;
					height: 100%;
					background: #f1f5f9;
					border-radius: 20px;
					overflow: hidden;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
				}

				${mainSl} .gbb-scroll-story-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: absolute;
					top: 0;
					left: 0;
				}

				${mainSl} .gbb-scroll-story-step {
					display: flex;
					gap: 30px;
					opacity: 0.4;
					transition: opacity 0.4s ease;
					cursor: pointer;
				}

				${mainSl} .gbb-scroll-story-step.is-active {
					opacity: 1;
				}

				${mainSl} .gbb-scroll-progress-line {
					width: 4px;
					background: #e2e8f0;
					border-radius: 4px;
					position: relative;
					overflow: hidden;
					flex-shrink: 0;
				}

				${mainSl} .gbb-scroll-progress-fill {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 0%;
					background: ${progressColor};
					transition: height 0.4s ease;
				}

				${mainSl} .gbb-scroll-story-step.is-active .gbb-scroll-progress-fill {
					height: 100%;
				}

				${mainSl} .gbb-scroll-story-text {
					flex: 1;
				}

				${mainSl} .gbb-scroll-story-title {
					font-size: 28px;
					font-weight: 700;
					color: ${inactiveTitleColor};
					margin: 0 0 16px 0;
					transition: color 0.4s ease;
				}

				${mainSl} .gbb-scroll-story-step.is-active .gbb-scroll-story-title {
					color: ${activeTitleColor};
				}

				${mainSl} .gbb-scroll-story-desc {
					font-size: 16px;
					line-height: 1.6;
					color: ${descColor};
					margin: 0;
				}

				.fade-in {
					animation: fadeIn 0.5s ease-in-out;
				}

				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}

				@media (max-width: 768px) {
					${mainSl} {
						flex-direction: column-reverse;
					}
					${mainSl}.layout-sticky-left {
						flex-direction: column-reverse;
					}
					${mainSl} .gbb-scroll-story-media-sticky {
						position: relative;
						top: 0;
						height: 300px;
						min-height: auto;
						width: 100%;
					}
					${mainSl} .gbb-scroll-story-content {
						padding: 20px 0;
						gap: 40px;
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.fade-in {
						animation: none;
					}
					${mainSl} .gbb-scroll-story-step {
						transition: none;
					}
				}
			`.replace(/\s+/g, ' ')
		}} />
	);
};

export default DynamicStyle;
