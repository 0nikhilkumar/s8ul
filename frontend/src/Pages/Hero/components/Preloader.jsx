import React, { forwardRef } from 'react'

const Preloader = forwardRef(({ counterRef }, ref) => {
    return (
        <div ref={ref} className="preloader">
            <div className="preloader__columns">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="preloader__col" />
                ))}
            </div>
            <div className="preloader__content">
                <h2 className="preloader__title">
                    {'S8UL'.split('').map((char, i) => (
                        <span key={i}>{char}</span>
                    ))}
                </h2>
                <div className="preloader__counter">
                    <span ref={counterRef}>0</span>
                </div>
                <div className="preloader__progress">
                    <div className="preloader__progress-fill" />
                </div>
            </div>
        </div>
    )
})

Preloader.displayName = 'Preloader'

export default Preloader
