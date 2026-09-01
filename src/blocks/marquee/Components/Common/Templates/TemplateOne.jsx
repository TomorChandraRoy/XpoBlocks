import { useEffect, useRef } from '@wordpress/element';

const TemplateOne = ({ attributes }) => {
  const {
    images = [],
    speed,
    pauseOnHover,
    reverseDirection,
    edgeFade,
    hoverSlowDown,
    showBorder = true,
    showTopText = true,
    liftEffect = true,
    siblingBlur = false,
    siblingBlurIntensity = 3,
    showProgressRail = false,
    progressRailPosition = 'right',
    showInteractionIndicator = false,
    highlightActiveCenter = false,
    showFrame = true,
    enableSweepAnimation = true
  } = attributes;

  const containerRef = useRef(null);

  useEffect(() => {
    if (!highlightActiveCenter) return;

    let frameId;

    const updateCenter = () => {
      const container = containerRef.current;
      if (!container) {
        frameId = requestAnimationFrame(updateCenter);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const items = container.querySelectorAll('.gbb-mq-item');
      let closestItem = null;
      let minDistance = Infinity;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestItem = item;
        }
      });

      items.forEach((item) => {
        if (item === closestItem) {
          item.classList.add('is-active-center');
        } else {
          item.classList.remove('is-active-center');
        }
      });

      frameId = requestAnimationFrame(updateCenter);
    };

    frameId = requestAnimationFrame(updateCenter);
    return () => cancelAnimationFrame(frameId);
  }, [highlightActiveCenter, images]);

  if (!images || images.length === 0) {
    return <div className="gbb-mq-empty-state">Add images to Marquee Settings</div>;
  }

  // Ensure we have enough images to fill wide screens, even if only 1 image is added
  let displayImages = [...images];
  if (displayImages.length > 0) {
    while (displayImages.length < 12) {
      displayImages = [...displayImages, ...images];
    }
  }

  const trackStyle = {
    animationDuration: `${speed}s`,
    animationDirection: reverseDirection ? 'reverse' : 'normal',
    '--mq-speed': `${speed}s`
  };

  const containerStyle = {
    '--mq-sibling-blur': `${siblingBlurIntensity}px`
  };

  let containerClass = 'gbb-mq-container';
  if (pauseOnHover) containerClass += ' pause-on-hover';
  if (edgeFade) containerClass += ' has-edge-fade';
  if (hoverSlowDown) containerClass += ' slow-on-hover';
  if (liftEffect) containerClass += ' has-lift-effect';
  if (siblingBlur) containerClass += ' has-sibling-blur';
  if (highlightActiveCenter) containerClass += ' has-active-center-highlight';
  if (showFrame) containerClass += ' has-frame';

  return (
    <div className="gbb-logo-cloud-section">
      <div className="gbb-logo-cloud-wrapper">
        {/* Static Border */}
        {showBorder && <div className="gbb-border-beam-inner"></div>}

        {/* Top Text */}
        {showTopText && (
          <div className="gbb-logo-text-container">
            <p className="gbb-logo-text">
              <span className={enableSweepAnimation ? 'gbb-logo-text-wave has-sweep' : 'gbb-logo-text-solid'}>
                Trusted by 1000+ companies <span className="gbb-hide-mobile">around the world</span>
              </span>
            </p>
          </div>
        )}

        {/* Marquee Content */}
        <div className="gbb-logo-content" style={{ position: 'relative' }}>
          <div className={containerClass} ref={containerRef} style={containerStyle}>
            <div className="gbb-mq-track" style={trackStyle}>
              {/* First Group */}
              <div className="gbb-mq-group">
                {displayImages.map((img, i) => (
                  <div key={i} className="gbb-mq-item">
                    {img.link ? (
                      <a href={img.link} target={attributes.openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer">
                        <img src={img.url} alt={img.alt} />
                      </a>
                    ) : (
                      <img src={img.url} alt={img.alt} />
                    )}
                  </div>
                ))}
              </div>
              {/* Second Group (Duplicate for seamless loop) */}
              <div className="gbb-mq-group" aria-hidden="true">
                {displayImages.map((img, i) => (
                  <div key={`dup-${i}`} className="gbb-mq-item">
                    {img.link ? (
                      <a href={img.link} target={attributes.openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" tabIndex="-1">
                        <img src={img.url} alt={img.alt} />
                      </a>
                    ) : (
                      <img src={img.url} alt={img.alt} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interaction Indicator Badge */}
          {showInteractionIndicator && (
            <div className="gbb-mq-indicator-badge">
              <span className="gbb-mq-indicator-dot"></span>
              <span className="gbb-mq-indicator-text">
                {pauseOnHover ? 'PAUSED' : 'SLOWED'}
              </span>
            </div>
          )}

          {/* Segmented Progress Rail */}
          {showProgressRail && (
            <div className={`gbb-mq-rail position-${progressRailPosition}`}>
              <div className="gbb-mq-rail-track">
                {images.map((_, i) => (
                  <span key={i} className="gbb-mq-rail-segment"></span>
                ))}
                <div
                  className="gbb-mq-rail-fill"
                  style={{
                    animationDuration: `${speed}s`,
                    animationDirection: reverseDirection ? 'reverse' : 'normal'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
