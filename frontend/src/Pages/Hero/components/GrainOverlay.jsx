import React, { forwardRef } from 'react'

const GrainOverlay = forwardRef((props, ref) => {
    return <div ref={ref} className="grain-overlay" />
})

GrainOverlay.displayName = 'GrainOverlay'

export default GrainOverlay
