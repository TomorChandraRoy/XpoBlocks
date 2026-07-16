import { ColorPalette } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
	const {
		progressColor,
		activeTitleColor,
		inactiveTitleColor,
		descColor
	} = attributes;

	return (
		<div>
			<div style={{ marginBottom: '20px' }}>
				<p style={{ marginBottom: '8px' }}>Progress Bar Color</p>
				<ColorPalette
					value={progressColor}
					onChange={(val) => setAttributes({ progressColor: val })}
				/>
			</div>

			<div style={{ marginBottom: '20px' }}>
				<p style={{ marginBottom: '8px' }}>Active Title Color</p>
				<ColorPalette
					value={activeTitleColor}
					onChange={(val) => setAttributes({ activeTitleColor: val })}
				/>
			</div>

			<div style={{ marginBottom: '20px' }}>
				<p style={{ marginBottom: '8px' }}>Inactive Title Color</p>
				<ColorPalette
					value={inactiveTitleColor}
					onChange={(val) => setAttributes({ inactiveTitleColor: val })}
				/>
			</div>

			<div style={{ marginBottom: '20px' }}>
				<p style={{ marginBottom: '8px' }}>Description Color</p>
				<ColorPalette
					value={descColor}
					onChange={(val) => setAttributes({ descColor: val })}
				/>
			</div>
		</div>
	);
};

export default Style;
