import React from 'react'
import SpotlightCard, { spotlightData } from './SpotlightCard'

const SpotlightGrid = ({ cardsRef }) => {
    return (
        <div className="spotlight__grid">
            {spotlightData.map((spotlight, i) => (
                <SpotlightCard
                    key={spotlight.id}
                    spotlight={spotlight}
                    index={i}
                    ref={(el) => (cardsRef.current[i] = el)}
                />
            ))}
        </div>
    )
}

export default SpotlightGrid
