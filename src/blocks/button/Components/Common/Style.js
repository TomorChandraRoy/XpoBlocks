const Style = ({ attributes, id }) => {
  const {} = attributes;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .guten-builder-blocks-button`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		${blockSl} {

		}

	`,
      }}
    />
  );
};
export default Style;
