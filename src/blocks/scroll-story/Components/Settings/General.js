import { SelectControl, Button, TextControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';

const General = ({ attributes, setAttributes, clientId }) => {
	const { blockId, layout, steps } = attributes;
	const prevClientId = useRef(clientId);

	useEffect(() => {
		const clientChanged = prevClientId.current !== clientId;
		if (!blockId || clientChanged) {
			const uuid = window.crypto && crypto.randomUUID
				? crypto.randomUUID().split('-')[0]
				: Math.random().toString(36).substring(2, 9);
			setAttributes({ blockId: `gbb-scroll-story-${uuid}` });
			prevClientId.current = clientId;
		}
	}, [blockId, clientId, setAttributes]);

	const addStep = () => {
		setAttributes({
			steps: [
				...steps,
				{
					title: 'New Step',
					description: 'Description here.',
					mediaType: 'image',
					mediaUrl: '',
					lottieUrl: ''
				}
			]
		});
	};

	const removeStep = (index) => {
		const newSteps = [...steps];
		newSteps.splice(index, 1);
		setAttributes({ steps: newSteps });
	};

	const updateStep = (index, key, value) => {
		const newSteps = [...steps];
		newSteps[index] = { ...newSteps[index], [key]: value };
		setAttributes({ steps: newSteps });
	};

	return (
		<div>
			<SelectControl
				label="Layout"
				value={layout}
				options={[
					{ label: 'Sticky Right (Content Left)', value: 'sticky-right' },
					{ label: 'Sticky Left (Content Right)', value: 'sticky-left' }
				]}
				onChange={(val) => setAttributes({ layout: val })}
			/>

			<div style={{ marginTop: '20px' }}>
				<h3>Steps</h3>
				{steps.map((step, index) => (
					<div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
						<p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Step {index + 1}</p>
						
						<SelectControl
							label="Media Type"
							value={step.mediaType || 'image'}
							options={[
								{ label: 'Image URL', value: 'image' },
								{ label: 'Lottie URL', value: 'lottie' }
							]}
							onChange={(val) => updateStep(index, 'mediaType', val)}
						/>

						{step.mediaType === 'lottie' ? (
							<TextControl
								label="Lottie JSON URL"
								value={step.lottieUrl}
								onChange={(val) => updateStep(index, 'lottieUrl', val)}
								placeholder="https://assets.../animation.json"
							/>
						) : (
							<TextControl
								label="Image URL"
								value={step.mediaUrl}
								onChange={(val) => updateStep(index, 'mediaUrl', val)}
								placeholder="https://example.com/image.jpg"
							/>
						)}

						<Button isDestructive onClick={() => removeStep(index)}>Remove Step</Button>
					</div>
				))}
				<Button isPrimary onClick={addStep} style={{ width: '100%', justifyContent: 'center' }}>
					Add Step
				</Button>
			</div>
		</div>
	);
};

export default General;
