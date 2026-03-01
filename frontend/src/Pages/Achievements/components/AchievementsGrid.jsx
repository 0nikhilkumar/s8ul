import React, { forwardRef } from 'react'
import AchievementCard, { achievementsData } from './AchievementCard'

const AchievementsGrid = forwardRef(({ cardRefs }, ref) => {
    return (
        <div ref={ref} className="achievements__grid">
            {achievementsData.map((achievement, index) => (
                <AchievementCard
                    key={achievement.id}
                    ref={el => cardRefs.current[index] = el}
                    achievement={achievement}
                    index={index}
                />
            ))}
        </div>
    )
})

AchievementsGrid.displayName = 'AchievementsGrid'

export default AchievementsGrid
