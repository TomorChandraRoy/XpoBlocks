import { __ } from '@wordpress/i18n';

const ContactForm = ({ attributes }) => {
    const { formTitle, showTitle, submitButtonText } = attributes;

    return (
        <div className="guten-builder-contact-form">
            {showTitle && formTitle && (
                <h3 className="form-title">{formTitle}</h3>
            )}
            <form className="guten-contact-form-inner" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label>{__('Name', 'guten-builder-blocks')}</label>
                    <input type="text" disabled />
                </div>
                
                <div className="form-group">
                    <label>{__('Email', 'guten-builder-blocks')}</label>
                    <input type="email" disabled />
                </div>
                
                <div className="form-group">
                    <label>{__('Subject', 'guten-builder-blocks')}</label>
                    <input type="text" disabled />
                </div>
                
                <div className="form-group">
                    <label>{__('Message', 'guten-builder-blocks')}</label>
                    <textarea rows="5" disabled></textarea>
                </div>
                
                <div className="form-group form-submit">
                    <button type="button">{submitButtonText}</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
