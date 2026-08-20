import { getBorderRadiusCss, getBackgroundCss, getTypographyCss } from 'tr-tools';

const DynamicStyle = ({ attributes, id }) => {
  const {  } = attributes || {};

  const mainSl = `#${id}`;
  const button = `${mainSl} .guten-builder-blocks-button`;
  const front = `${button} .guten-builder-blocks-button-front`;
  const shadow = `${button} .guten-builder-blocks-button-shadow`;
  const edge = `${button} .guten-builder-blocks-button-edge`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
    
        }
        `,
      }}
    />
  );
};

export default DynamicStyle;
