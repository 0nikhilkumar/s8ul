import React, { forwardRef } from 'react'

const titleText = 'S8UL DOMINATE'

const HeroContent = forwardRef(({ subtitleRef, titleCharsRef }, ref) => {
    return (
        <div className="hero__content">
            <div ref={ref} className="hero__logo">
                <div className="hero__logo-glow" />
                <img src="/s8ul/logo.webp" alt="S8UL Logo" />
            </div>

            <div className="hero__title-marquee">
                <h1 className="hero__title" ref={(el) => (titleCharsRef.current[0] = el)}>
                    {[...Array(6)].map((_, repeat) => (
                        <span key={repeat} className="hero__title-segment">
                            {titleText} <span className="hero__title-dot">●</span>{' '}
                        </span>
                    ))}
                </h1>
            </div>

            <p ref={subtitleRef} className="hero__subtitle">
                INDIA'S PREMIER ESPORTS ORGANIZATION
            </p>
        </div>
    )
})

HeroContent.displayName = 'HeroContent'

export default HeroContent
