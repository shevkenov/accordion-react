import React, { useState } from 'react'

const AccordionItem = ({ title, content }) => {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <div className="accordion-title" onClick={() => setActive(prev => !prev)}>
                <div>
                    {title}
                </div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {
                isActive && (<div className="accordion-content">
                    {content}
                </div>)
            }
        </>
    )
}

export default AccordionItem
