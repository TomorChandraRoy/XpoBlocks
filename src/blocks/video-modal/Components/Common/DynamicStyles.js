const DynamicStyles = ({ attributes, id }) => {
  const mainSl = `#${id}`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        `,
      }}
    />
  );
};

export default DynamicStyles;
