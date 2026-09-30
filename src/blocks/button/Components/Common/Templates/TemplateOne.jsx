const TemplateOne = ({ attributes, setAttributes }) => {
  const { buttonText, buttonUrl, openInNewTab } = attributes || {};
  const isEditor = !!setAttributes;

  return (
    <a
      className="xpo-button"
      href={buttonUrl || '#'}
      target={openInNewTab && buttonUrl ? '_blank' : undefined}
      rel={openInNewTab && buttonUrl ? 'noopener noreferrer' : undefined}
      onClick={(e) => isEditor && e.preventDefault()}
    >
      <span className="xpo-button-shadow"></span>
      <span className="xpo-button-edge"></span>
      <span className="xpo-button-front text"> {buttonText || 'Click me'}</span>
    </a>
  );
};

export default TemplateOne;
