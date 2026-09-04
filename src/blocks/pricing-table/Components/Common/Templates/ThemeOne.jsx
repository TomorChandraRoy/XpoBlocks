
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
    <div className="gbb-pricing-container">
      <div className="gbb-pricing-grid">
        {pricingTables.map((plan, index) => (
          <div className="gbb-pricing-card" key={index}>
            <div className="gbb-pricing-card-top">
              <RichTextEl
                tagName="h2"
                className="gbb-pricing-name"
                value={plan.name}
                onChange={(val) => updatePricingTable(index, 'name', val)}
                placeholder="Plan Name"
              />
              {(isBackend || plan.desc) && (
                <RichTextEl
                  tagName="p"
                  className="gbb-pricing-desc"
                  value={plan.desc}
                  onChange={(val) => updatePricingTable(index, 'desc', val)}
                  placeholder="Description"
                />
              )}
              <p className="gbb-pricing-price-wrap">
                <strong className="gbb-pricing-price">
                  <span>{plan.priceCurrency}</span>
                  <RichTextEl
                    tagName="span"
                    value={plan.price}
                    onChange={(val) => updatePricingTable(index, 'price', val)}
                    placeholder="20"
                  />
                </strong>
                <span className="gbb-pricing-period">
                  /
                  <RichTextEl
                    tagName="span"
                    value={plan.period}
                    onChange={(val) => updatePricingTable(index, 'period', val)}
                    placeholder="month"
                  />
                </span>
              </p>
              {isBackend ? (
                <RichTextEl
                  tagName="div"
                  className="gbb-pricing-button"
                  value={plan.linkLabel}
                  onChange={(val) => updatePricingTable(index, 'linkLabel', val)}
                  placeholder="Get Started"
                />
              ) : (
                <a className="gbb-pricing-button" href={plan.link || '#'}>
                  <RichTextEl
                    tagName="span"
                    value={plan.linkLabel}
                  />
                </a>
              )}
            </div>

            <div className="gbb-pricing-card-bottom">
              <p className="gbb-features-title">What's included:</p>
              <ul className="gbb-features-list">
                {plan.features && plan.features.map((feature, fIndex) => (
                  <li className="gbb-feature-item" key={fIndex}>
                    {feature.isEnable ? (
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <RichTextEl
                      tagName="span"
                      className="gbb-feature-text"
                      value={feature.label}
                      onChange={(val) => updateFeature(index, fIndex, val)}
                      placeholder="Feature item"
                    />
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
