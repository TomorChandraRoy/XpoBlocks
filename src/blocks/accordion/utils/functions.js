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

/** Reusable Array Manipulation Functions **/
export const getAddedItems = (items, defaultItem) => {
    return [...items, defaultItem];
};

export const getDeletedItems = (items, index) => {
    return items.filter((_, i) => i !== index);
};

export const getDuplicatedItems = (items, index) => {
    const newItems = [...items];
    // Copy the item exactly, but you could modify the title here if needed
    const duplicatedItem = { ...newItems[index] };
    newItems.splice(index + 1, 0, duplicatedItem);
    return newItems;
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