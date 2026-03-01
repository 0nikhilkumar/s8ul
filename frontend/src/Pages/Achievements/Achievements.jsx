import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { AchievementsHeader, AchievementsGrid, AchievementsDecor, achievementsData } from './components'
import { setupHeaderAnimations, setupCardsAnimations, setupDecorAnimations } from './animations'
import './Achievements.css'

const Achievements = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const gridRef = useRef(null)
    const decorRef = useRef(null)
    const cardRefs = useRef([])
    const navigate = useNavigate()

    useGSAP(() => {
        setupHeaderAnimations(headerRef)
        setupCardsAnimations(cardRefs)
        setupDecorAnimations(decorRef)
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="achievements">
            <button className="achievements__back-btn" onClick={() => navigate('/')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
            </button>
            <AchievementsDecor ref={decorRef} />
            <AchievementsHeader ref={headerRef} />
            <AchievementsGrid ref={gridRef} cardRefs={cardRefs} />
        </section>
    )
}

export default Achievements
