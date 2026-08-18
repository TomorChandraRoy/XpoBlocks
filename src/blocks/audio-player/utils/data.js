import { __ } from "@wordpress/i18n";

export const TemplateOneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 580"
    width="100%"
    height="100%"
    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
  >
    {/* Background */}
    <rect width="800" height="580" fill="#ffffff" rx="8" />
    {/* Mock Card Player */}
    <rect x="150" y="100" width="500" height="380" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    
    {/* Cover Art Box */}
    <rect x="330" y="140" width="140" height="140" rx="12" fill="#e2e8f0" />
    <circle cx="400" cy="210" r="30" fill="#cbd5e1" />
    
    {/* Title & Artist */}
    <rect x="250" y="310" width="300" height="20" rx="4" fill="#94a3b8" />
    <rect x="300" y="340" width="200" height="14" rx="4" fill="#cbd5e1" />
    
    {/* Progress Bar */}
    <rect x="200" y="390" width="400" height="6" rx="3" fill="#e2e8f0" />
    <rect x="200" y="390" width="180" height="6" rx="3" fill="#f06292" />
    <circle cx="380" cy="393" r="8" fill="#f06292" />
    
    {/* Play Controls Mock */}
    <circle cx="400" cy="440" r="24" fill="#f06292" />
    <polygon points="395,430 412,440 395,450" fill="#ffffff" />
    
    <circle cx="330" cy="440" r="16" fill="#cbd5e1" />
    <circle cx="470" cy="440" r="16" fill="#cbd5e1" />
  </svg>
);

export const templateData = {
  title: __('Select Audio Player Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your audio player block.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Modern Card', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        labelText: 'Now Playing'
      }
    }
  ]
};
