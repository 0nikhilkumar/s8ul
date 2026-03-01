import React, { forwardRef } from 'react'

const SpotlightHeader = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="spotlight__header">
            <span className="spotlight__label">Our Journey</span>
            <h2 className="spotlight__title">
                <span className="spotlight__title-line">Crucial</span>
                <span className="spotlight__title-line spotlight__title-line--accent">Moments</span>
            </h2>
            <p className="spotlight__subtitle">
                Celebrating the milestones that defined S8UL's legacy in Indian esports
            </p>
        </div>
    )
})

SpotlightHeader.displayName = 'SpotlightHeader'

export default SpotlightHeader
