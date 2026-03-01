import React from 'react'
import FounderCard, { foundersData } from './FounderCard'

const FoundersGrid = ({ cardsRef, onCardClick }) => {
    return (
        <div className="founders__grid">
            {foundersData.map((founder, i) => (
                <FounderCard
                    key={founder.name}
                    ref={(el) => (cardsRef.current[i] = el)}
                    founder={founder}
                    index={i}
                    onCardClick={onCardClick}
                />
            ))}
        </div>
    )
}

export default FoundersGrid
