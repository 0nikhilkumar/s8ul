import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupHeaderAnimations = (headerRef) => {
    if (!headerRef.current) return

    const header = headerRef.current
    const label = header.querySelector('.achievements__label')
    const titleLines = header.querySelectorAll('.achievements__title-line')
    const subtitle = header.querySelector('.achievements__subtitle')

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    })

    tl.from(label, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
        .from(titleLines, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.5')
        .from(subtitle, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')

    return tl
}

export const setupCardsAnimations = (cardRefs) => {
    if (!cardRefs.current.length) return

    cardRefs.current.forEach((card, index) => {
        if (!card) return

        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.9,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        // Hover animation for glow
        const glow = card.querySelector('.achievement-card__glow')
        const shine = card.querySelector('.achievement-card__shine')

        card.addEventListener('mouseenter', () => {
            gsap.to(glow, { opacity: 0.6, duration: 0.3 })
            gsap.to(shine, { x: '200%', duration: 0.6, ease: 'power2.out' })
            gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
        })

        card.addEventListener('mouseleave', () => {
            gsap.to(glow, { opacity: 0, duration: 0.3 })
            gsap.to(shine, { x: '-100%', duration: 0.3 })
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
        })
    })
}

export const setupDecorAnimations = (decorRef) => {
    if (!decorRef.current) return

    const orbs = decorRef.current.querySelectorAll('.achievements__orb')
    const stars = decorRef.current.querySelectorAll('.achievements__star')

    // Floating animation for orbs
    orbs.forEach((orb, index) => {
        gsap.to(orb, {
            y: 'random(-30, 30)',
            x: 'random(-20, 20)',
            duration: 'random(4, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5
        })
    })

    // Rotate and pulse stars
    stars.forEach((star, index) => {
        gsap.to(star, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        })

        gsap.to(star, {
            scale: 1.2,
            opacity: 0.3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5
        })
    })
}
