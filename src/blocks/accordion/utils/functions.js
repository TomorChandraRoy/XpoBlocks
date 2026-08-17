import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (!props || props.length === 0) return attr;

  return produce(attr, (draft) => {
    let current = draft;
    for (let i = 0; i < props.length - 1; i++) {
      const prop = props[i];
      if (current[prop] === undefined || current[prop] === null) {
        current[prop] = typeof props[i + 1] === 'number' ? [] : {};
      }
      current = current[prop];
    }
    current[props[props.length - 1]] = value;
  });
};

export const renderFaqIcon = (isOpen, iconType, iconSize, iconColor) => {
  if (iconType === 'none') return null;

  const size = iconSize || 22;
  const colorStyle = iconColor ? { color: iconColor } : {};

  if (iconType === 'plus-minus') {
    return (
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`gbb-faq-arrow gbb-icon-plus-minus ${isOpen ? 'is-open' : ''}`} style={colorStyle}>
        {isOpen ? (
          <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 3.75V14.25M3.75 9H14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    );
  }

  if (iconType === 'caret') {
    return (
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`gbb-faq-arrow ${isOpen ? 'is-open' : ''}`} style={colorStyle}>
        <path d="M5.25 7.5L9 12L12.75 7.5H5.25Z" fill="currentColor" />
      </svg>
    );
  }

  // Default: Chevron
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`gbb-faq-arrow ${isOpen ? 'is-open' : ''}`} style={colorStyle}>
      <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
