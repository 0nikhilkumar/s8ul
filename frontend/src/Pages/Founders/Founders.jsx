import React, { useRef, useState, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Founders.css'
import { FoundersHeader, FoundersGrid, FoundersDecor, FounderDetail } from './components'
import { setupHeaderAnimations, setupCardsAnimations, setupDecorAnimations } from './animations'

gsap.registerPlugin(ScrollTrigger)

const Founders = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const [selectedFounder, setSelectedFounder] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = useCallback((founder) => {
        setSelectedFounder(founder)
        setIsModalOpen(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    useGSAP(() => {
        setupHeaderAnimations(sectionRef)
        const cleanupCards = setupCardsAnimations(sectionRef, cardsRef)
        setupDecorAnimations(sectionRef)

        return () => {
            if (cleanupCards) cleanupCards()
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="founders">
            <FoundersDecor />
            <FoundersHeader />
            <FoundersGrid cardsRef={cardsRef} onCardClick={handleCardClick} />
            <FounderDetail
                founder={selectedFounder}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}

export default Founders
