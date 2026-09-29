import { RenderIcon } from 'tr-tools';


const ThemeOne = ({ attributes = {}, setAttributes, RichTextEl, isBackend = false }) => {
  const { pricingTables = [] } = attributes;

  const updatePricingTable = (index, key, value) => {
    if (!setAttributes) return;
    const newPricingTables = [...pricingTables];
    newPricingTables[index][key] = value;
    setAttributes({ pricingTables: newPricingTables });
  };

  const updateFeature = (tableIndex, featureIndex, value) => {
    if (!setAttributes) return;
    const newPricingTables = [...pricingTables];
    newPricingTables[tableIndex].features[featureIndex].label = value;
    setAttributes({ pricingTables: newPricingTables });
  };



  return (
    <div className="xpo-pricing-container">
      <div className="xpo-pricing-grid">
        {pricingTables.map((plan, index) => (
          <div className={`xpo-pricing-card ${plan.isFeatured ? 'is-featured' : ''}`} key={index}>
            {plan.isFeatured && plan.badgeText && (
              <div className="xpo-pricing-badge">
                <RichTextEl tagName="span" value={plan.badgeText} onChange={val => updatePricingTable(index, 'badgeText', val)} placeholder="POPULAR" />
              </div>
            )}
            <div className="xpo-pricing-card-top">
              <RichTextEl tagName="h2" className="xpo-pricing-name" value={plan.name} onChange={val => updatePricingTable(index, 'name', val)} placeholder="Plan Name" />
              {(isBackend || plan.desc) && <RichTextEl tagName="p" className="xpo-pricing-desc" value={plan.desc} onChange={val => updatePricingTable(index, 'desc', val)} placeholder="Description" />}
              <p className="xpo-pricing-price-wrap">
                <strong className="xpo-pricing-price">
                  <span className="xpo-currency-icon" style={{ color: plan.currencyColor }}>
                    {plan.priceCurrency}
                  </span>
                  <RichTextEl tagName="span" value={plan.price} onChange={val => updatePricingTable(index, 'price', val)} placeholder="Price" />
                </strong>
                <span className="xpo-pricing-period">
                  <RichTextEl tagName="span" value={plan.period} onChange={val => updatePricingTable(index, 'period', val)} placeholder="Period" />
                </span>
              </p>
              {isBackend ? (
                <RichTextEl tagName="div" className="xpo-pricing-button" value={plan.linkLabel} onChange={val => updatePricingTable(index, 'linkLabel', val)} placeholder="Button Text" />
              ) : (
                <a className="xpo-pricing-button" href={plan.link || '#'} target={plan.isLinkNewTab ? '_blank' : '_self'} rel={plan.isLinkNewTab ? 'noopener noreferrer' : undefined}>
                  <RichTextEl tagName="span" value={plan.linkLabel} />
                </a>
              )}
            </div>

            <div className="xpo-pricing-card-bottom">
              <RichTextEl tagName="p" className="xpo-features-title" value={plan.featuresTitle || "What's included:"} onChange={val => updatePricingTable(index, 'featuresTitle', val)} placeholder="Features Title" />
              <ul className="xpo-features-list">
                {plan.features &&
                  plan.features.map((feature, fIndex) => (
                    <li className="xpo-feature-item" key={fIndex}>
                      <RenderIcon
                        value={feature.icon || 'fas-check'}
                        className="xpo-icon-success"
                        style={{ color: feature.iconColor }}
                      />
                      <RichTextEl tagName="span" className="xpo-feature-text" value={feature.label} onChange={val => updateFeature(index, fIndex, val)} placeholder="Feature item" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeOne;
