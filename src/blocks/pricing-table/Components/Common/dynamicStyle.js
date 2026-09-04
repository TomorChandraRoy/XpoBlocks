const DynamicStyle = ({ attributes, id }) => {
  // The blockId is used as the class selector
  // const mainSl = `#${id}`;
console.log(id);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

			`.replace(/\s+/g, ' '),
      }}
    />
  );
};

export default DynamicStyle;
