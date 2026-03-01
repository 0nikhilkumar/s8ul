import gsap from 'gsap'

export const setupDecorAnimations = (foundersRef) => {
    // Decorative lines
    gsap.from('.founders__line', {
        scaleY: 0,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 70%',
        },
    })

    // Background glow pulse
    gsap.to('.founders__bg-glow', {
        scale: 1.1,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
    })
}
