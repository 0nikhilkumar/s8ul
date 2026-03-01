import React, { forwardRef } from 'react'

const ScrollIndicator = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="scroll-indicator">
            <span className="scroll-indicator__text">SCROLL</span>
            <div className="scroll-indicator__track">
                <div className="scroll-indicator__dot" />
            </div>
        </div>
    )
})

ScrollIndicator.displayName = 'ScrollIndicator'

export default ScrollIndicator
