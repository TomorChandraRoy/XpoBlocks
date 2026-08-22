// import { getBorderRadiusCss, getBackgroundCss, getShadowCss } from 'tr-tools';
// import { tabBreakpoint, mobileBreakpoint } from 'tr-tools/utils/options';

const DynamicStyle = ({ attributes, id }) => {


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

export default DynamicStyle;
