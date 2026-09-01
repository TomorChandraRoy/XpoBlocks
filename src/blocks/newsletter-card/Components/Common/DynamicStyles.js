

const DynamicStyles = ({ attributes, id }) => {
  const { containerMaxWidth } = attributes;

  const mainSl = `#${id}`;

  const container =`${mainSl} .gbb-newsletter-container`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${containerMaxWidth ? ` ${container} {max-width:${containerMaxWidth};}` : ''}
          
        `,
      }}
    />
  );
};

export default DynamicStyles;
