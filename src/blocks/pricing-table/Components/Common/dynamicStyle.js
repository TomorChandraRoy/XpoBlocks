const DynamicStyle = ({ attributes, clientId }) => {
  // The blockId is used as the class selector
  // const mainSl = `#${id}`;


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
