import React from 'react'

const SpotlightDecor = () => {
    return (
        <>
            {/* Background gradient orbs */}
            <div className="spotlight__orb spotlight__orb--1" />
            <div className="spotlight__orb spotlight__orb--2" />
            <div className="spotlight__orb spotlight__orb--3" />

            {/* Trophy/Award decorative elements */}
            <div className="spotlight__trophy spotlight__trophy--left">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>
            <div className="spotlight__trophy spotlight__trophy--right">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>

            {/* Floating particles */}
            <div className="spotlight__particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="spotlight__particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }} />
                ))}
            </div>

            {/* Decorative lines */}
            <div className="spotlight__line spotlight__line--1" />
            <div className="spotlight__line spotlight__line--2" />
        </>
    )
}

export default SpotlightDecor
