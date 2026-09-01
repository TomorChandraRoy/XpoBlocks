import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const TemplateOne = ({ attributes, setAttributes }) => {
    const { title, description, buttonText } = attributes;
    
    // Check if the component is being rendered in the editor
    const isEditor = typeof setAttributes === 'function';

    return (
      <section className="gbb-newsletter-section">
        <div className="gbb-newsletter-container">
          <div className="gbb-newsletter-content">
            {isEditor ? (
              <>
                <RichText
                  tagName="h2"
                  className="gbb-newsletter-title"
                  value={title}
                  onChange={(val) => setAttributes({ title: val })}
                  placeholder={__('Enter title...', 'guten-builder-blocks')}
                />
                <RichText
                  tagName="p"
                  className="gbb-newsletter-description"
                  value={description}
                  onChange={(val) => setAttributes({ description: val })}
                  placeholder={__('Enter description...', 'guten-builder-blocks')}
                />
              </>
            ) : (
              <>
                <RichText.Content tagName="h2" className="gbb-newsletter-title" value={title} />
                <RichText.Content tagName="p" className="gbb-newsletter-description" value={description} />
              </>
            )}
          </div>

          <form className="gbb-newsletter-form" onSubmit={(e) => { if (isEditor) e.preventDefault(); }}>
            <input type="email" id="email" name="email" placeholder={__('Enter your email', 'guten-builder-blocks')} required className="gbb-newsletter-input" />
            
            {isEditor ? (
              <RichText
                tagName="span"
                className="gbb-newsletter-button"
                value={buttonText}
                onChange={(val) => setAttributes({ buttonText: val })}
                placeholder={__('Button text...', 'guten-builder-blocks')}
                style={{ display: 'inline-block', textAlign: 'center' }}
              />
            ) : (
              <RichText.Content tagName="button" type="submit" className="gbb-newsletter-button" value={buttonText} />
            )}
          </form>
        </div>
      </section>
    );
};

export default TemplateOne;
