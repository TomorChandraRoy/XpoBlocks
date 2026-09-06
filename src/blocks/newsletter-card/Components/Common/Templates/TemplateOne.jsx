import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const TemplateOne = ({ attributes, setAttributes }) => {
  const { title, description, buttonText, successMessage, errorMessage } = attributes || {};
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const isEditor = typeof setAttributes === 'function';
console.log(isEditor,"fdgdsfgdffffffffffffffffffffffffffffffffff");

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
      setStatus({ type: 'error', message: errorMessage || __('Please enter a valid email address.', 'guten-builder-blocks') });
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
        setStatus({ type: 'success', message: successMessage || data.message || __('Thank you for subscribing!', 'guten-builder-blocks') });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.message || errorMessage || __('Something went wrong. Please try again.', 'guten-builder-blocks') });
      }
    } catch {
      setStatus({ type: 'error', message: errorMessage || __('Connection error. Please try again later.', 'guten-builder-blocks') });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="gbb-newsletter-form-wrapper">
          <form className="gbb-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={__('Enter your email', 'guten-builder-blocks')}
              required
              disabled={isSubmitting}
              className="gbb-newsletter-input"
            />

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
              <button
                type="submit"
                disabled={isSubmitting}
                className="gbb-newsletter-button"
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? __('Subscribing...', 'guten-builder-blocks') : (buttonText || __('Subscribe', 'guten-builder-blocks'))}
              </button>
            )}
          </form>

          {!isEditor && status.message && (
            <div
              className={`gbb-newsletter-status gbb-newsletter-status--${status.type}`}
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
