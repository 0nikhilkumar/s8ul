import React, { forwardRef } from 'react'

const achievementsData = [
    // Global Awards
    {
        id: 'esports-award-2022',
        title: 'Esports Content Group of the Year 2022',
        category: 'Global Award',
        year: '2022',
        description: 'Won the prestigious Esports Content Group of the Year at the Esports Awards.',
        icon: '🏆',
        type: 'global'
    },
    {
        id: 'esports-award-2023',
        title: 'Esports Content Group of the Year 2023',
        category: 'Global Award',
        year: '2023',
        description: 'Back-to-back victory at the global Esports Awards.',
        icon: '🏆',
        type: 'global'
    },
    {
        id: 'esports-award-2024',
        title: 'Esports Content Group of the Year 2024',
        category: 'Global Award',
        year: '2024',
        description: 'First organization globally to win 3 consecutive Esports Content Group of the Year titles.',
        icon: '🏆',
        type: 'golden'
    },
    {
        id: 'esports-award-2025',
        title: 'Esports Content Group of the Year 2025',
        category: 'Global Award',
        year: '2025',
        description: 'Historic 4 consecutive global titles - unprecedented dominance in esports content.',
        icon: '🏆',
        type: 'global'
    },
    {
        id: 'personality-2025',
        title: 'Esports Personality of the Year 2025',
        category: 'Individual Honor',
        year: '2025',
        description: 'Animesh "8Bit Thug" Agarwal recognized as the Esports Personality of the Year.',
        icon: '⭐',
        type: 'global'
    },
    {
        id: 'mobies-award',
        title: 'MOBIES Global Impact Award',
        category: 'Global Recognition',
        year: '2024',
        description: 'Recognized for outstanding contribution to mobile gaming & esports ecosystem.',
        icon: '🌍',
        type: 'global'
    },
    // International Achievements
    {
        id: 'ewc-partner',
        title: 'Esports World Cup 2025 Partner',
        category: 'International',
        year: '2025',
        description: 'Official Indian Club Partner for Esports World Cup 2025 in Riyadh.',
        icon: '🌏',
        type: 'international'
    },
    {
        id: 'algs-2026',
        title: 'ALGS Championship 2026 - Top 5',
        category: 'International',
        year: '2026',
        description: 'Top 5 global finish with ₹1 Crore+ prize winnings - best-ever ALGS performance by an Indian organization.',
        icon: '🎮',
        type: 'international'
    },
    // Historic Firsts
    {
        id: 'first-global',
        title: 'First Indian Org - Multiple Global Awards',
        category: 'Historic First',
        year: '2024',
        description: 'First Indian Esports Organization to win multiple global Esports Awards.',
        icon: '🇮🇳',
        type: 'first'
    },
    {
        id: 'first-dual',
        title: 'First Dual Award Win',
        category: 'Historic First',
        year: '2025',
        description: 'First Indian organization to win two awards in a single Esports Awards edition.',
        icon: '🥇',
        type: 'first'
    },
    // National Milestones
    {
        id: 'largest-org',
        title: 'India\'s Largest Esports Organization',
        category: 'National Milestone',
        year: '2024',
        description: 'Built India\'s largest esports & gaming creator organization.',
        icon: '🏠',
        type: 'national'
    },
    {
        id: 'influential-brand',
        title: 'India\'s Most Influential Esports Brand',
        category: 'National Milestone',
        year: '2025',
        description: 'Recognized as India\'s most influential esports brand in the gaming industry.',
        icon: '💎',
        type: 'national'
    },
    {
        id: 'ecosystem',
        title: 'Unified Esports + Content Ecosystem',
        category: 'Industry Innovation',
        year: '2023',
        description: 'Successfully merged competitive esports + content creation under one ecosystem.',
        icon: '🔗',
        type: 'national'
    },
    {
        id: 'new-standards',
        title: 'Creator-Led Organization Standards',
        category: 'Industry Impact',
        year: '2024',
        description: 'Set new standards for creator-led esports organizations in India.',
        icon: '📈',
        type: 'national'
    }
]

const AchievementCard = forwardRef(({ achievement, index }, ref) => {
    const typeClass = achievement.type ? `achievement-card--${achievement.type}` : ''

    return (
        <div
            ref={ref}
            className={`achievement-card ${typeClass}`}
        >
            <div className="achievement-card__glow" />
            <div className="achievement-card__border" />

            <div className="achievement-card__icon">{achievement.icon}</div>

            <div className="achievement-card__content">
                <div className="achievement-card__year">{achievement.year}</div>
                <span className="achievement-card__category">{achievement.category}</span>
                <h3 className="achievement-card__title">{achievement.title}</h3>
                <p className="achievement-card__description">{achievement.description}</p>
            </div>

            <div className="achievement-card__shine" />
        </div>
    )
})

AchievementCard.displayName = 'AchievementCard'

export { achievementsData }
export default AchievementCard
