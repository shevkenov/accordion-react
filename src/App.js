import React from 'react'
import accordionData from './data';

import AccordionItem from './AccordionItem'

const App = () => {
    
    return (
        <div>
            <h1>React Accordion</h1>
            <div className="accordion">
                {
                    accordionData.map(accordion => <AccordionItem title={accordion.title} content={accordion.content} />)
                }
            </div>
        </div>
    )
}

export default App
