import React, { forwardRef } from 'react'

const spotlightData = [
    {
        id: 'esports-award-1',
        title: 'Esports Award 2021',
        category: 'Content Creator of the Year',
        year: '2021',
        description: 'S8UL won the prestigious Esports Content Creator of the Year award, dominating the Indian gaming content space.',
        type: 'esports'
    },
    {
        id: 'esports-award-2',
        title: 'Esports Award 2022',
        category: 'Content Creator of the Year',
        year: '2022',
        description: 'Back-to-back victory! S8UL retained the Esports Content Creator of the Year title with groundbreaking content.',
        type: 'esports'
    },
    {
        id: 'esports-award-3',
        title: 'Esports Award 2023',
        category: 'Content Creator of the Year',
        year: '2023',
        description: 'Historic three-peat! S8UL became the first to win Content Creator of the Year three times in a row.',
        type: 'esports'
    },
    {
        id: 'golden-award',
        title: 'Golden Esports Award',
        category: 'Lifetime Achievement',
        year: '2024',
        description: 'The prestigious Golden Esports Award for winning 3 Content Creator Awards in a row - a historic achievement in Indian esports.',
        type: 'golden'
    },
    {
        id: 'esports-award-4',
        title: 'Esports Award 2025',
        category: 'Content Creator of the Year',
        year: '2025',
        description: 'Unstoppable! S8UL continues their legendary streak with a 4th Content Creator of the Year victory.',
        type: 'esports'
    },
    {
        id: 'personality-award',
        title: '8Bit Thug',
        category: 'Esports Personality of the Year',
        year: '2024',
        description: 'Animesh "8Bit Thug" Agarwal recognized as the Esports Personality of the Year for his visionary leadership and impact on Indian gaming.',
        type: 'esports'
    }
];

const SpotlightCard = forwardRef(({ spotlight, index }, ref) => {
    const isGolden = spotlight.type === 'golden'

    return (
        <div
            ref={ref}
            className={`spotlight-card ${isGolden ? 'spotlight-card--golden' : ''}`}
        >
            <div className="spotlight-card__glow" />
            <div className="spotlight-card__border" />

            {isGolden && <div className="spotlight-card__golden-badge">★</div>}

            <div className="spotlight-card__content">
                <div className="spotlight-card__year">{spotlight.year}</div>
                <span className="spotlight-card__category">{spotlight.category}</span>
                <h3 className="spotlight-card__title">{spotlight.title}</h3>
                <p className="spotlight-card__description">{spotlight.description}</p>
            </div>

            <div className="spotlight-card__shine" />
        </div>
    )
})

SpotlightCard.displayName = 'SpotlightCard'

export { spotlightData }
export default SpotlightCard
