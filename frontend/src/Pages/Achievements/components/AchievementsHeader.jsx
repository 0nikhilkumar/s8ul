import React, { forwardRef } from 'react'

const AchievementsHeader = forwardRef((props, ref) => {
    return (
        <header ref={ref} className="achievements__header">
            <span className="achievements__label">Our Journey</span>
            <h2 className="achievements__title">
                <span className="achievements__title-line">More</span>
                <span className="achievements__title-line achievements__title-line--accent">Achievements</span>
            </h2>
            <p className="achievements__subtitle">
                Milestones that define our legacy in Indian gaming and esports
            </p>
        </header>
    )
})

AchievementsHeader.displayName = 'AchievementsHeader'

export default AchievementsHeader
