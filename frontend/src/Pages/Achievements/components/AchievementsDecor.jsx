import React, { forwardRef } from 'react'

const AchievementsDecor = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="achievements__decor">
            {/* Gradient orbs */}
            <div className="achievements__orb achievements__orb--1" />
            <div className="achievements__orb achievements__orb--2" />
            <div className="achievements__orb achievements__orb--3" />

            {/* Star icons */}
            <div className="achievements__star achievements__star--left">✦</div>
            <div className="achievements__star achievements__star--right">✦</div>

            {/* Floating particles */}
            <div className="achievements__particles">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="achievements__particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Decorative lines */}
            <div className="achievements__line achievements__line--1" />
            <div className="achievements__line achievements__line--2" />
        </div>
    )
})

AchievementsDecor.displayName = 'AchievementsDecor'

export default AchievementsDecor
