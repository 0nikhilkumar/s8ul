import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupHeaderAnimations = (spotlightRef) => {
    const header = spotlightRef.current?.querySelector('.spotlight__header')
    if (!header) return

    const label = header.querySelector('.spotlight__label')
    const titleLines = header.querySelectorAll('.spotlight__title-line')
    const subtitle = header.querySelector('.spotlight__subtitle')

    gsap.set([label, titleLines, subtitle], { opacity: 0, y: 50 })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    })

    tl.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    })
        .to(titleLines, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.3')
        .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
}

export const setupCardsAnimations = (spotlightRef, cardsRef) => {
    const cards = cardsRef.current?.filter(Boolean)
    if (!cards?.length) return

    cards.forEach((card, index) => {
        gsap.set(card, {
            opacity: 0,
            y: 80,
            scale: 0.95
        })

        gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })

        // Hover animations
        const shine = card.querySelector('.spotlight-card__shine')
        const glow = card.querySelector('.spotlight-card__glow')

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            })
            gsap.to(shine, {
                x: '200%',
                duration: 0.6,
                ease: 'power2.out'
            })
            gsap.to(glow, {
                opacity: 1,
                duration: 0.3
            })
        })

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            })
            gsap.set(shine, { x: '-100%' })
            gsap.to(glow, {
                opacity: 0,
                duration: 0.3
            })
        })
    })

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
    }
}

export const setupDecorAnimations = (spotlightRef) => {
    const orbs = spotlightRef.current?.querySelectorAll('.spotlight__orb')
    const trophies = spotlightRef.current?.querySelectorAll('.spotlight__trophy')

    if (orbs) {
        orbs.forEach((orb, i) => {
            gsap.to(orb, {
                x: `${(i % 2 === 0 ? 1 : -1) * 30}px`,
                y: `${(i % 2 === 0 ? -1 : 1) * 20}px`,
                duration: 4 + i,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        })
    }

    if (trophies) {
        gsap.set(trophies, { opacity: 0, scale: 0, rotation: -30 })

        trophies.forEach((trophy, i) => {
            gsap.to(trophy, {
                opacity: 0.1,
                scale: 1,
                rotation: 0,
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: spotlightRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse'
                }
            })
        })
    }
}
