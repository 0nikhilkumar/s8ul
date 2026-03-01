import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Spotlight.css'
import { SpotlightHeader, SpotlightGrid, SpotlightDecor } from './components'
import { setupHeaderAnimations, setupCardsAnimations, setupDecorAnimations } from './animations'

gsap.registerPlugin(ScrollTrigger)

const Spotlight = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const navigate = useNavigate()

    useGSAP(() => {
        setupHeaderAnimations(sectionRef)
        const cleanupCards = setupCardsAnimations(sectionRef, cardsRef)
        setupDecorAnimations(sectionRef)

        return () => {
            if (cleanupCards) cleanupCards()
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="spotlight">
            <SpotlightDecor />
            <SpotlightHeader />
            <SpotlightGrid cardsRef={cardsRef} />
            <div className="spotlight__cta">
                <button className="spotlight__btn" onClick={() => navigate('/achievements')}>
                    <span>More Achievements</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Spotlight
