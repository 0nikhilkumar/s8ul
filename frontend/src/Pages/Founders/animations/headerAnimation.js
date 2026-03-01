import gsap from 'gsap'

export const setupHeaderAnimations = (foundersRef) => {
    gsap.from('.founders__label', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 80%',
        },
    })

    gsap.from('.founders__title-line', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 75%',
        },
    })

    gsap.from('.founders__subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 70%',
        },
    })
}
