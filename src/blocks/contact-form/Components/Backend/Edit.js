import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ContactForm from '../Common/ContactForm';

const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { formTitle, showTitle, submitButtonText } = attributes;

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Form Settings', 'guten-builder-blocks')} initialOpen={true}>
                    <ToggleControl
                        label={__('Show Title', 'guten-builder-blocks')}
                        checked={showTitle}
                        onChange={(value) => setAttributes({ showTitle: value })}
                    />
                    {showTitle && (
                        <TextControl
                            label={__('Form Title', 'guten-builder-blocks')}
                            value={formTitle}
                            onChange={(value) => setAttributes({ formTitle: value })}
                        />
                    )}
                    <TextControl
                        label={__('Submit Button Text', 'guten-builder-blocks')}
                        value={submitButtonText}
                        onChange={(value) => setAttributes({ submitButtonText: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <ContactForm attributes={attributes} />
        </div>
    );
};

export default Edit;
