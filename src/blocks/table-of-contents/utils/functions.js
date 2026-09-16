import { produce } from "immer";
import { ColorPalette } from '@wordpress/components';

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

/** Reusable UI Components **/
export const CustomColorPicker = ({ label, value, onChange, defaultVal = '#ffffff', marginTop = '10px' }) => (
    <>
        <p style={{ fontWeight: 'bold', margin: `${marginTop} 0 5px 0` }}>{label}</p>
        <ColorPalette
            value={value}
            onChange={(val) => onChange(val || defaultVal)}
        />
    </>
);

/** Auto Slug Generation Helper **/
export const generateSlug = (text, defaultId = 'section') => {
  if (!text) return defaultId;
  const slug = String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-');
  return slug || defaultId;
};

export const getItemId = (item, index = 0) => {
  if (item?.id && item.id.trim() !== '') {
    return generateSlug(item.id);
  }
  return generateSlug(item?.title, `section-${index + 1}`);
};



