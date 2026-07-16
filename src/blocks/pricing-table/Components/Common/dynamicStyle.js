const DynamicStyle = ({ attributes, clientId }) => {
	const {
		blockId,
		pricingTables = [],
		columns,
		columnGap,
		borderRadius,
		cardBgColor,
		cardTextColor,
		buttonBgColor,
		buttonTextColor,
		featuredButtonBgColor,
		featuredButtonTextColor,
		themeStyle = 'style-1',
		hoverHighlightColor = '#ffd700'
	} = attributes;

	// The blockId is used as the class selector
	const mainSl = `.${blockId}`;

	let tableStyles = '';

	pricingTables.forEach((table, index) => {
		const isFeatured = table.isFeatured;
		const planColor = table.color || '#3b82f6';
		const itemClass = `${mainSl} .gbb-pricing-card:nth-child(${index + 1})`;
		const btnClass = `${itemClass} .gbb-pricing-button`;

		if (themeStyle === 'style-2') {
			tableStyles += `
				${itemClass} {
					border: 2px solid transparent;
					transition: all 0.3s ease;
				}
				${itemClass} .gbb-pricing-name {
					color: #ffffff;
				}
				${itemClass} .gbb-feature-icon {
					color: #ffffff;
				}
				${btnClass} {
					background: #000000;
					color: #3b82f6;
					border: 1px solid #000000;
					transition: all 0.3s ease;
				}
			`;
		} else {
			tableStyles += `
				${itemClass} {
					border: ${isFeatured ? `2px solid ${planColor}` : '1px solid #e2e8f0'};
					box-shadow: ${isFeatured ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'};
				}
				${itemClass} .gbb-pricing-badge {
					background: ${planColor};
				}
				${itemClass} .gbb-pricing-name {
					color: ${isFeatured ? planColor : 'inherit'};
				}
				${itemClass} .gbb-feature-icon {
					color: ${isFeatured ? planColor : 'inherit'};
				}
				${btnClass} {
					background: ${isFeatured ? (featuredButtonBgColor || planColor) : buttonBgColor};
					color: ${isFeatured ? featuredButtonTextColor : buttonTextColor};
					border: 1px solid ${isFeatured ? (featuredButtonBgColor || planColor) : buttonBgColor};
				}
			`;
		}
	});

	return (
		<style dangerouslySetInnerHTML={{
			__html: `
				${mainSl} {
					display: grid;
					grid-template-columns: repeat(${columns}, 1fr);
					gap: ${columnGap}px;
					width: 100%;
				}

				${mainSl} .gbb-pricing-card {
					background: ${cardBgColor || '#ffffff'};
					color: ${cardTextColor || '#1e293b'};
					border-radius: ${borderRadius}px;
					position: relative;
					padding: 32px 24px;
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
				}

				${mainSl} .gbb-pricing-badge {
					position: absolute;
					top: 12px;
					right: 12px;
					color: #ffffff;
					padding: 4px 10px;
					border-radius: 20px;
					font-size: 10px;
					font-weight: bold;
					letter-spacing: 1px;
				}

				${mainSl} .gbb-pricing-header {
					border-bottom: 1px solid #e2e8f0;
					padding-bottom: 20px;
					margin-bottom: 20px;
					text-align: center;
				}

				${mainSl} .gbb-pricing-name {
					font-size: 20px;
					font-weight: 700;
					margin: 0 0 10px 0;
				}

				${mainSl} .gbb-pricing-rate {
					display: flex;
					justify-content: center;
					align-items: baseline;
					margin: 15px 0;
				}

				${mainSl} .gbb-pricing-currency {
					font-size: 20px;
					font-weight: 600;
					margin-right: 2px;
				}

				${mainSl} .gbb-pricing-price {
					font-size: 42px;
					font-weight: 800;
					line-height: 1;
				}

				${mainSl} .gbb-pricing-period-separator {
					font-size: 14px;
					opacity: 0.7;
					margin-left: 4px;
				}

				${mainSl} .gbb-pricing-period {
					font-size: 14px;
					opacity: 0.7;
				}

				${mainSl} .gbb-pricing-features {
					list-style: none;
					padding: 0;
					margin: 0 0 30px 0;
					display: flex;
					flex-direction: column;
					gap: 12px;
				}

				${mainSl} .gbb-pricing-feature-item {
					display: flex;
					align-items: center;
					font-size: 14px;
				}
				${mainSl} .gbb-pricing-feature-item.is-enabled {
					color: inherit;
				}
				${mainSl} .gbb-pricing-feature-item.is-disabled {
					color: rgba(0,0,0,0.38);
				}

				${mainSl} .gbb-feature-icon {
					display: flex;
					align-items: center;
				}

				${mainSl} .gbb-pricing-button {
					display: inline-block;
					text-align: center;
					padding: 12px 24px;
					border-radius: 6px;
					font-weight: 600;
					text-decoration: none;
					margin-top: auto;
					transition: all 0.2s;
				}

				${tableStyles}

				${mainSl}.style-2 .gbb-pricing-card {
					background: #1a1a1a;
					color: #94a3b8;
					border-color: #2a2a2a;
				}
				
				${mainSl}.style-2 .gbb-pricing-card .gbb-pricing-price {
					color: #ffffff;
				}
				
				${mainSl}.style-2 .gbb-pricing-card .gbb-pricing-header {
					border-bottom-color: #2a2a2a;
				}
				
				${mainSl}.style-2 .gbb-pricing-feature-item.is-disabled {
					color: #4b5563;
					text-decoration: line-through;
				}

				${mainSl}.style-2 .gbb-pricing-card:hover {
					border-color: ${hoverHighlightColor};
					transform: translateY(-5px);
				}

				${mainSl}.style-2 .gbb-pricing-card:hover .gbb-pricing-button {
					background: ${hoverHighlightColor};
					color: #000000;
					border-color: ${hoverHighlightColor};
				}
			`.replace(/\s+/g, ' ')
		}} />
	);
};

export default DynamicStyle;
