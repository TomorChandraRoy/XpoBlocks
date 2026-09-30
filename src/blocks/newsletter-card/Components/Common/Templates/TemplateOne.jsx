import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
const textDomain = 'xpo-blocks';


const TemplateOne = ({ attributes, setAttributes }) => {
  const { title, description, buttonText, successMessage, errorMessage } = attributes || {};
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const isEditor = typeof setAttributes === 'function';


  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditor) return;

    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: errorMessage || __('Please enter a valid email address.', textDomain) });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/wp-json/guten-builder/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: successMessage || data.message || __('Thank you for subscribing!', textDomain) });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.message || errorMessage || __('Something went wrong. Please try again.', textDomain) });
      }
    } catch {
      setStatus({ type: 'error', message: errorMessage || __('Connection error. Please try again later.', textDomain) });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="xpo-newsletter-section">
      <div className="xpo-newsletter-container">
        <div className="xpo-newsletter-content">
          {isEditor ? (
            <>
              <RichText
                tagName="h2"
                className="xpo-newsletter-title"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
                placeholder={__('Enter title...', textDomain)}
              />
              <RichText
                tagName="p"
                className="xpo-newsletter-description"
                value={description}
                onChange={(val) => setAttributes({ description: val })}
                placeholder={__('Enter description...', textDomain)}
              />
            </>
          ) : (
            <>
              <RichText.Content tagName="h2" className="xpo-newsletter-title" value={title} />
              <RichText.Content tagName="p" className="xpo-newsletter-description" value={description} />
            </>
          )}
        </div>

        <div className="xpo-newsletter-form-wrapper">
          <form className="xpo-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={__('Enter your email', textDomain)}
              required
              disabled={isSubmitting}
              className="xpo-newsletter-input"
            />

            {isEditor ? (
              <RichText
                tagName="span"
                className="xpo-newsletter-button"
                value={buttonText}
                onChange={(val) => setAttributes({ buttonText: val })}
                placeholder={__('Button text...', textDomain)}
                style={{ display: 'inline-block', textAlign: 'center' }}
              />
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="xpo-newsletter-button"
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? __('Subscribing...', textDomain) : (buttonText || __('Subscribe', textDomain))}
              </button>
            )}
          </form>

          {!isEditor && status.message && (
            <div
              className={`xpo-newsletter-status xpo-newsletter-status--${status.type}`}
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '13px',
                backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
                color: status.type === 'success' ? '#166534' : '#991b1b',
                border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fca5a5'}`,
              }}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TemplateOne;
