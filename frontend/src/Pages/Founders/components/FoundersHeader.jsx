import React, { forwardRef } from 'react'

const FoundersHeader = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="founders__header">
            <span className="founders__label">THE VISIONARIES</span>
            <h2 className="founders__title">
                <span className="founders__title-line">MEET THE</span>
                <span className="founders__title-line founders__title-line--accent">FOUNDERS</span>
            </h2>
            <p className="founders__subtitle">
                The minds behind India's biggest gaming organization
            </p>
        </div>
    )
})

FoundersHeader.displayName = 'FoundersHeader'

export default FoundersHeader
