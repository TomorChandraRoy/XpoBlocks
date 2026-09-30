import { useState } from '@wordpress/element';
import { renderDividerIcon } from '../../../utils/functions';

const TemplateOne = ({ attributes }) => {
  const [position, setPosition] = useState(50);

  const defaultBefore =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='bold' fill='%2394a3b8'%3EBefore Image%3C/text%3E%3C/svg%3E";
  const defaultAfter =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='100%25' height='100%25' fill='%23cbd5e1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='bold' fill='%2364748b'%3EAfter Image%3C/text%3E%3C/svg%3E";

  const beforeUrl = attributes?.beforeImage?.url || defaultBefore;
  const afterUrl = attributes?.afterImage?.url || defaultAfter;

  const handleSliderChange = event => {
    setPosition(event.target.value);
  };

  return (
    <div className="xpo-before-after-one">
      <div className="xpo-before-after-one__wrapper">
        {/* After Image */}
        <img src={afterUrl} alt="After" className="xpo-before-after-one__image" />

        {/* Before Image */}
        <div
          className="xpo-before-after-one__before-image-wrapper"
          style={{
            '--position': position,
          }}
        >
          <img src={beforeUrl} alt="Before" className="xpo-before-after-one__image xpo-before-after-one__before-image" />
        </div>

        {/* Labels */}
        {attributes?.showLabels !== false && (
          <>
            <span className="xpo-before-after-one__label xpo-before-after-one__label--before">{attributes?.beforeLabel || 'Before'}</span>
            <span className="xpo-before-after-one__label xpo-before-after-one__label--after">{attributes?.afterLabel || 'After'}</span>
          </>
        )}

        {/* Divider */}
        <div
          className="xpo-before-after-one__divider"
          style={{
            left: `${position}%`,
          }}
        >
          {renderDividerIcon(attributes)}
        </div>

        {/* Range Slider */}
        <input type="range" min="0" max="100" value={position} onChange={handleSliderChange} className="xpo-before-after-one__slider" aria-label="Before after comparison slider" />
      </div>
    </div>
  );
};

export default TemplateOne;
