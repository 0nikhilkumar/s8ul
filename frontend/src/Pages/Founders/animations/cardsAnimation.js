import gsap from 'gsap'

export const setupCardsAnimations = (foundersRef, cardsRef) => {
    const cleanupFns = []

    cardsRef.current.forEach((card, i) => {
        if (!card) return

        // Initial state
        gsap.set(card, {
            opacity: 0,
            y: 100,
            rotateY: -15,
            transformPerspective: 1000,
        })

        // Scroll reveal
        gsap.to(card, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: foundersRef.current,
                start: 'top 60%',
            },
            delay: i * 0.2,
        })

        // Image reveal
        const img = card.querySelector('.founder-card__image')
        if (!img) return

        gsap.set(img, { scale: 1.3, filter: 'grayscale(100%)' })

        gsap.to(img, {
            scale: 1,
            filter: 'grayscale(30%)',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: foundersRef.current,
                start: 'top 50%',
            },
            delay: i * 0.2 + 0.3,
        })

        // Hover animations
        const content = card.querySelector('.founder-card__content')
        const glow = card.querySelector('.founder-card__glow')
        const border = card.querySelector('.founder-card__border')

        const handleMouseEnter = () => {
            gsap.to(card, {
                y: -15,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out',
            })
            gsap.to(img, {
                scale: 1.1,
                filter: 'grayscale(0%)',
                duration: 0.5,
                ease: 'power2.out',
            })
            if (glow) {
                gsap.to(glow, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                })
            }
            if (border) {
                gsap.to(border, {
                    opacity: 1,
                    duration: 0.3,
                })
            }
            if (content) {
                gsap.to(content, {
                    y: -10,
                    duration: 0.4,
                    ease: 'power2.out',
                })
            }
        }

        const handleMouseLeave = () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
            })
            gsap.to(img, {
                scale: 1,
                filter: 'grayscale(30%)',
                duration: 0.5,
                ease: 'power2.out',
            })
            if (glow) {
                gsap.to(glow, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4,
                })
            }
            if (border) {
                gsap.to(border, {
                    opacity: 0,
                    duration: 0.3,
                })
            }
            if (content) {
                gsap.to(content, {
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                })
            }
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        cleanupFns.push(() => {
            card.removeEventListener('mouseenter', handleMouseEnter)
            card.removeEventListener('mouseleave', handleMouseLeave)
        })
    })

    return () => {
        cleanupFns.forEach(fn => fn())
    }
}
