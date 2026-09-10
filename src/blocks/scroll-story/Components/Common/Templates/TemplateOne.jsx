import { useState, useEffect, useRef } from 'react';
import { imageIcon } from '../../../utils/icons';

const TemplateOne = ({ attributes, setAttributes, RichTextEl, isBackend = false }) => {
	const {layout = 'sticky-right',steps = []} = attributes;

	const [activeStep, setActiveStep] = useState(0);
	const stepRefs = useRef([]);

	// Frontend scroll / IntersectionObserver logic with requestAnimationFrame for 60/120fps performance
	useEffect(() => {
		if (isBackend) return;

		let ticking = false;

		const updateActiveStepOnScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					let closestIndex = 0;
					let minDistance = Infinity;
					const viewportCenter = window.innerHeight / 2;

					stepRefs.current.forEach((ref, index) => {
						if (!ref) return;
						const rect = ref.getBoundingClientRect();
						const elementCenter = rect.top + rect.height / 2;
						const distance = Math.abs(elementCenter - viewportCenter);

						if (distance < minDistance) {
							minDistance = distance;
							closestIndex = index;
						}
					});

					setActiveStep((prev) => (prev !== closestIndex ? closestIndex : prev));
					ticking = false;
				});
				ticking = true;
			}
		};

		const observerOptions = {
			root: null,
			threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
		};

		const observer = new IntersectionObserver(() => {
			updateActiveStepOnScroll();
		}, observerOptions);

		stepRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		window.addEventListener('scroll', updateActiveStepOnScroll, { passive: true });

		return () => {
			stepRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
			window.removeEventListener('scroll', updateActiveStepOnScroll);
		};
	}, [isBackend, steps]);

	// Clicking a step changes active step (and scrolls into view on frontend)
	const handleStepClick = (index) => {
		setActiveStep(index);
		if (!isBackend && stepRefs.current[index]) {
			stepRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	const activeMedia = steps[activeStep]?.mediaUrl;
	const activeLottie = steps[activeStep]?.lottieUrl;
	const mediaType = steps[activeStep]?.mediaType || 'image';

	const updateStepAttr = (index, key, value) => {
		if (!isBackend) return;
		const newSteps = [...steps];
		newSteps[index] = { ...newSteps[index], [key]: value };
		setAttributes({ steps: newSteps });
	};

	return (
		<div className={`gbb-scroll-story-container layout-${layout}`}>

			<div className="gbb-scroll-story-content">
				{steps.map((step, index) => (
					<div
						key={index}
						className={`gbb-scroll-story-step ${index === activeStep ? 'is-active' : ''}`}
						data-step-index={index}
						ref={(el) => (stepRefs.current[index] = el)}
						onClick={() => handleStepClick(index)}
					>
						<div className="gbb-scroll-progress-line">
							<div className="gbb-scroll-progress-fill"></div>
						</div>
						<div className="gbb-scroll-story-text">
							<RichTextEl
								tagName="h3"
								className="gbb-scroll-story-title"
								value={step.title}
								onChange={(val) => updateStepAttr(index, 'title', val)}
								placeholder="Step Title"
								allowedFormats={['core/bold', 'core/italic', 'core/link']}
							/>
							<RichTextEl
								tagName="div"
								className="gbb-scroll-story-desc"
								value={step.description}
								onChange={(val) => updateStepAttr(index, 'description', val)}
								placeholder="Step Description..."
								allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/list']}
							/>
						</div>
					</div>
				))}
			</div>

			<div className="gbb-scroll-story-media-sticky">
				<div className="gbb-scroll-story-media-wrapper">
					{mediaType === 'image' && (
						activeMedia ? (
							<img src={activeMedia} alt={`Step ${activeStep + 1}`} className="gbb-scroll-story-image fade-in" key={activeMedia} />
						) : (
							<div className="gbb-scroll-story-placeholder">
								{isBackend ? (
									<span dangerouslySetInnerHTML={{ __html: imageIcon }} />
								) : null}
							</div>
						)
					)}
					{mediaType === 'lottie' && (
						activeLottie ? (
							<div className="gbb-scroll-story-lottie fade-in" key={activeLottie}>
								{(() => {
									let cleanUrl = activeLottie.trim();
									const iframeMatch = cleanUrl.match(/src=["']([^"']+)["']/);
									if (iframeMatch && iframeMatch[1]) {
										cleanUrl = iframeMatch[1];
									}
									if (cleanUrl.includes('/embed/')) {
										return (
											<iframe
												src={cleanUrl}
												style={{ width: '100%', height: '100%', border: 'none' }}
												title={`Lottie Step ${activeStep + 1}`}
											></iframe>
										);
									}
									return (
										<lottie-player
											src={cleanUrl}
											background="transparent"
											speed="1"
											style={{ width: '100%', height: '100%' }}
											loop
											autoplay
										></lottie-player>
									);
								})()}
							</div>
						) : (
							<div className="gbb-scroll-story-placeholder">
								{isBackend ? (
									<span>Lottie Animation</span>
								) : null}
							</div>
						)
					)}
				</div>
			</div>

		</div>
	);
};

export default TemplateOne;
