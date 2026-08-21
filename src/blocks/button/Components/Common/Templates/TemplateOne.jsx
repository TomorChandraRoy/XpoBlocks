const TemplateOne = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes || {};
  const isEditor = !!setAttributes;

  return (
    <a
      className="guten-builder-blocks-button"
      href={buttonUrl || '#'}
      target={openInNewTab && buttonUrl ? '_blank' : undefined}
      rel={openInNewTab && buttonUrl ? 'noopener noreferrer' : undefined}
      onClick={(e) => isEditor && e.preventDefault()}
    >
      <span className="guten-builder-blocks-button-shadow"></span>
      <span className="guten-builder-blocks-button-edge"></span>
      <span className="guten-builder-blocks-button-front text"> {buttonText || 'Click me'}</span>
    </a>
  );
};

export default TemplateOne;
