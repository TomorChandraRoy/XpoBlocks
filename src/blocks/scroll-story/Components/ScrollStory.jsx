import { useState, useEffect, useRef } from 'react';
import { imageIcon } from '../utils/icons';

const ScrollStory = ({ attributes, setAttributes, RichTextEl, isBackend = false }) => {
	const {
		blockId,
		layout = 'sticky-right',
		steps = []
	} = attributes;

	const [activeStep, setActiveStep] = useState(0);
	const stepRefs = useRef([]);

	// Frontend IntersectionObserver logic
	useEffect(() => {
		if (isBackend) return;
		
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
			threshold: 0
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = parseInt(entry.target.getAttribute('data-step-index'), 10);
					if (!isNaN(index)) {
						setActiveStep(index);
					}
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		stepRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			stepRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, [isBackend, steps]);

	// In the backend, clicking a step changes the active step preview
	const handleStepClick = (index) => {
		if (isBackend) {
			setActiveStep(index);
		}
	};

	const activeMedia = steps[activeStep]?.mediaUrl;
	const activeLottie = steps[activeStep]?.lottieUrl;
	const mediaType = steps[activeStep]?.mediaType || 'image';

	const hasMedia = activeMedia || activeLottie;

	const updateStepAttr = (index, key, value) => {
		if (!isBackend) return;
		const newSteps = [...steps];
		newSteps[index] = { ...newSteps[index], [key]: value };
		setAttributes({ steps: newSteps });
	};

	return (
		<div className={`gbb-scroll-story-container ${blockId} layout-${layout}`}>
			
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
								<lottie-player
									src={activeLottie}
									background="transparent"
									speed="1"
									style={{ width: '100%', height: '100%' }}
									loop
									autoplay
								></lottie-player>
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

export default ScrollStory;
