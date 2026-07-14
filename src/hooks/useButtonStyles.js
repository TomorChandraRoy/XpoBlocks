/**
 * Custom hook to generate button inline styles based on block attributes.
 * This can be shared with any block that needs a standard button styling.
 */
export default function useButtonStyles( attributes ) {
	const { bgColor, textColor } = attributes;
	
	const styles = {
		backgroundColor: bgColor,
		color: textColor,
		padding: '10px 20px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		textDecoration: 'none',
		display: 'inline-block'
	};

	return styles;
}
