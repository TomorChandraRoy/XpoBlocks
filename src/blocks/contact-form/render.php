<?php
$formTitle = isset($attributes['formTitle']) ? $attributes['formTitle'] : 'Contact Us';
$showTitle = isset($attributes['showTitle']) ? $attributes['showTitle'] : true;
$submitButtonText = isset($attributes['submitButtonText']) ? $attributes['submitButtonText'] : 'Send Message';
$formId = isset($attributes['formId']) && !empty($attributes['formId']) ? $attributes['formId'] : 'contact-form-' . uniqid();

$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="guten-builder-contact-form" id="<?php echo esc_attr($formId); ?>">
        <?php if ($showTitle && !empty($formTitle)) : ?>
            <h3 class="form-title"><?php echo esc_html($formTitle); ?></h3>
        <?php endif; ?>
        
        <form action="#" method="POST" class="guten-contact-form-inner">
            <div class="form-group">
                <label for="<?php echo esc_attr($formId); ?>-name"><?php esc_html_e('Name', 'guten-builder-blocks'); ?></label>
                <input type="text" id="<?php echo esc_attr($formId); ?>-name" name="guten_name" required>
            </div>
            
            <div class="form-group">
                <label for="<?php echo esc_attr($formId); ?>-email"><?php esc_html_e('Email', 'guten-builder-blocks'); ?></label>
                <input type="email" id="<?php echo esc_attr($formId); ?>-email" name="guten_email" required>
            </div>
            
            <div class="form-group">
                <label for="<?php echo esc_attr($formId); ?>-subject"><?php esc_html_e('Subject', 'guten-builder-blocks'); ?></label>
                <input type="text" id="<?php echo esc_attr($formId); ?>-subject" name="guten_subject">
            </div>
            
            <div class="form-group">
                <label for="<?php echo esc_attr($formId); ?>-message"><?php esc_html_e('Message', 'guten-builder-blocks'); ?></label>
                <textarea id="<?php echo esc_attr($formId); ?>-message" name="guten_message" rows="5" required></textarea>
            </div>
            
            <div class="form-group form-submit">
                <button type="submit"><?php echo esc_html($submitButtonText); ?></button>
            </div>
            <div class="form-response"></div>
        </form>
    </div>
</div>
