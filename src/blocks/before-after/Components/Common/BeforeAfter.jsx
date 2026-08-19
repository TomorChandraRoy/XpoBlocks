import { useState } from '@wordpress/element';
import { renderDividerIcon } from '../../utils/functions';

const BeforeAfter = ({ attributes }) => {
	const [position, setPosition] = useState(50);

  const beforeUrl = attributes?.beforeImage?.url || 'https://images.unsplash.com/photo-1558370781-d6196949e317?q=80&w=2958&auto=format&fit=crop';
  const afterUrl = attributes?.afterImage?.url ||'https://images.unsplash.com/photo-1558370781-d6196949e317?q=80&w=2958&auto=format&fit=crop&sat=-100';

  const handleSliderChange = event => {
    setPosition(event.target.value);
  };

	return (
    <div className="gbb-before-after-one">
      <div className="gbb-before-after-one__wrapper">
        {/* After Image */}
        <img src={afterUrl} alt="After" className="gbb-before-after-one__image" />

        {/* Before Image */}
        <div
          className="gbb-before-after-one__before-image-wrapper"
          style={{
            '--position': position
          }}
        >
          <img src={beforeUrl} alt="Before" className="gbb-before-after-one__image gbb-before-after-one__before-image" />
        </div>

        {/* Labels */}
        {attributes?.showLabels !== false && (
          <>
            <span className="gbb-before-after-one__label gbb-before-after-one__label--before">{attributes?.beforeLabel || 'Before'}</span>
            <span className="gbb-before-after-one__label gbb-before-after-one__label--after">{attributes?.afterLabel || 'After'}</span>
          </>
        )}

        {/* Divider */}
        <div
          className="gbb-before-after-one__divider"
          style={{
            left: `${position}%`,
          }}
        >
          {renderDividerIcon(attributes)}
        </div>

        {/* Range Slider */}
        <input type="range" min="0" max="100" value={position} onChange={handleSliderChange} className="gbb-before-after-one__slider" aria-label="Before after comparison slider" />
      </div>
    </div>
  );
};

export default BeforeAfter;
