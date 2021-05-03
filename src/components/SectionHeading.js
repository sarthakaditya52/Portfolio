import React from 'react'

function SectionHeading({index, heading}) {
    return (
        <div>
            <span className="section-heading-container">
                <div className="section-heading-index">
                    {(index).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}.
                </div>
                <div className="section-heading">
                    {heading}
                </div>
                <div className="head-underline"></div>
            </span>
        </div>
    )
}

export default SectionHeading
