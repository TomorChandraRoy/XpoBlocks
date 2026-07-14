import { useState } from 'react';

const Accordion = ({ attributes, id }) => {
    const items = attributes.items || [];
    const allowMultiple = attributes.allowMultiple || false;
    
    // Manage which items are open
    const [openIndices, setOpenIndices] = useState(() => {
        const initial = [];
        items.forEach((item, index) => {
            if (item.isOpen) {
                initial.push(index);
            }
        });
        return initial;
    });

    const toggleItem = (index) => {
        if (allowMultiple) {
            if (openIndices.includes(index)) {
                setOpenIndices(openIndices.filter(i => i !== index));
            } else {
                setOpenIndices([...openIndices, index]);
            }
        } else {
            if (openIndices.includes(index)) {
                setOpenIndices([]);
            } else {
                setOpenIndices([index]);
            }
        }
    };

    if (items.length === 0) return null;

    const blockId = id || attributes.blockId || 'gbb-faq-react';

    return (
        <>
            {items.map((item, index) => {
                const isOpen = openIndices.includes(index);
                const headerId = `${blockId}-header-${index}`;
                const panelId = `${blockId}-panel-${index}`;

                return (
                    <div 
                        key={index} 
                        className={`gbb-accordion-item ${isOpen ? 'is-open' : ''}`}
                    >
                        <div
                            id={headerId}
                            className="gbb-accordion-header"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleItem(index)}
                        >
                            <span className="gbb-accordion-title" dangerouslySetInnerHTML={{ __html: item.title || '' }} />
                            <span className="gbb-accordion-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>

                        <div
                            id={panelId}
                            className="gbb-accordion-content"
                            role="region"
                            aria-labelledby={headerId}
                        >
                            <div className="gbb-accordion-inner-content" dangerouslySetInnerHTML={{ __html: item.content || '' }} />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Accordion;
