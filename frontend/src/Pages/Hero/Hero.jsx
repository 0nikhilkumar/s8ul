import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'
import {
    GrainOverlay,
    // Preloader,
    HeroImages,
    HeroContent,
    ScrollIndicator,
    Marquee,
    Showcase,
} from './components'
import {
    // createPreloaderTimeline,
    createHeroRevealTimeline,
    setupScrollAnimations,
    setupContinuousAnimations,
} from './animations'

gsap.registerPlugin(ScrollTrigger)

// Track if hero animation has played this session
const hasAnimationPlayed = () => sessionStorage.getItem('heroAnimationPlayed') === 'true'
const setAnimationPlayed = () => sessionStorage.setItem('heroAnimationPlayed', 'true')

// Mobile check — 1024px se chhota = mobile/tablet
const isMobile = () => window.innerWidth <= 1024

const Hero = () => {
    const wrapperRef = useRef(null)
    const heroRef = useRef(null)
    const imagesRef = useRef([])
    const titleCharsRef = useRef([])
    const subtitleRef = useRef(null)
    const logoRef = useRef(null)
    const scrollIndicatorRef = useRef(null)
    const marqueeRef = useRef(null)
    const grainRef = useRef(null)
    const [animationPlayed] = useState(hasAnimationPlayed)

    useGSAP(() => {
        // ─── MOBILE: Sab kuch static, koi animation nahi ───
        if (isMobile()) {
            document.body.style.overflow = 'auto'

            // Sabhi elements seedhe final state mein set karo
            gsap.set(
                [
                    logoRef.current,
                    subtitleRef.current,
                    scrollIndicatorRef.current,
                    marqueeRef.current,
                ],
                { opacity: 1, y: 0, scale: 1, clearProps: 'filter' }
            )

            imagesRef.current.forEach(img => {
                if (img) gsap.set(img, { opacity: 1, scale: 1, y: 0, clearProps: 'filter' })
            })

            // Mobile pe koi scroll ya continuous animations nahi
            return
        }

        // ─── DESKTOP: Pehle wali poori animation logic ───
        if (animationPlayed) {
            document.body.style.overflow = 'auto'

            gsap.set(
                [
                    logoRef.current,
                    subtitleRef.current,
                    scrollIndicatorRef.current,
                    marqueeRef.current,
                ],
                { opacity: 1, y: 0, scale: 1 }
            )

            imagesRef.current.forEach(img => {
                if (img) gsap.set(img, { opacity: 1, scale: 1, y: 0 })
            })
        } else {
            const master = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = 'auto'
                    setAnimationPlayed()
                },
            })

            master.add(
                createHeroRevealTimeline({
                    logoRef,
                    subtitleRef,
                    imagesRef,
                    scrollIndicatorRef,
                    marqueeRef,
                })
            )
        }

        // Scroll + Continuous animations sirf desktop pe
        setupScrollAnimations(heroRef, imagesRef)
        const cleanup = setupContinuousAnimations(imagesRef, logoRef)

        return cleanup
    }, { scope: wrapperRef })

    return (
        <div ref={wrapperRef} className="hero-wrapper">
            <GrainOverlay ref={grainRef} />
            {/* <Preloader ref={preloaderRef} counterRef={counterRef} /> */}

            <section ref={heroRef} className="hero">
                <div className="hero__bg" />
                <HeroImages imagesRef={imagesRef} />
                <HeroContent ref={logoRef} subtitleRef={subtitleRef} titleCharsRef={titleCharsRef} />
                <ScrollIndicator ref={scrollIndicatorRef} />
                <Marquee ref={marqueeRef} />
            </section>

            <Showcase />
        </div>
    )
}

export default Hero