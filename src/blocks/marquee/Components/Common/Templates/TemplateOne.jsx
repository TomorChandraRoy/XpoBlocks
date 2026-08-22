const TemplateOne = ({ attributes }) => {
  const { images = [], speed, pauseOnHover, reverseDirection, edgeFade, itemHeight } = attributes;

  if (!images || images.length === 0) {
    return <div className="gbb-mq-empty-state">Add images to Marquee Settings</div>;
  }

  const trackStyle = {
    animationDuration: `${speed}s`,
    animationDirection: reverseDirection ? 'reverse' : 'normal',
    '--mq-speed': `${speed}s`
  };

  let containerClass = 'gbb-mq-container';
  if (pauseOnHover) containerClass += ' pause-on-hover';
  if (edgeFade) containerClass += ' has-edge-fade';

  return (
    <div className="gbb-logo-cloud-section">
      <div className="gbb-logo-cloud-wrapper">
        {/* Static Border */}
        <div className="gbb-border-beam-inner"></div>

        {/* Top Text */}
        <div className="gbb-logo-text-container">
          <p className="gbb-logo-text">
            <span className="gbb-logo-text-wave">
              Trusted by 1000+ companies <span className="gbb-hide-mobile">around the world</span>
            </span>
          </p>
        </div>

        {/* Marquee Content */}
        <div className="gbb-logo-content">
          <div className={containerClass}>
            <div className="gbb-mq-track" style={trackStyle}>
              {[...images, ...images].map((img, i) => (
                <div key={i} className="gbb-mq-item">
                  {img.link ? (
                    <a href={img.link} target={attributes.openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer">
                      <img src={img.url} alt={img.alt} style={{ height: `${itemHeight}px`, objectFit: 'contain' }} />
                    </a>
                  ) : (
                    <img src={img.url} alt={img.alt} style={{ height: `${itemHeight}px`, objectFit: 'contain' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
