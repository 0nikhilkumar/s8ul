import React, { forwardRef } from 'react'

const Marquee = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="marquee">
            <div className="marquee__inner">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="marquee__item">
                        S8UL <span className="marquee__dot">●</span> ESPORTS{' '}
                        <span className="marquee__dot">●</span> GAMING{' '}
                        <span className="marquee__dot">●</span> DOMINATE{' '}
                        <span className="marquee__dot">●</span>{' '}
                    </span>
                ))}
            </div>
        </div>
    )
})

Marquee.displayName = 'Marquee'

export default Marquee
