import gsap from 'gsap'

export const createPreloaderTimeline = (counterRef, preloaderRef) => {
    const tl = gsap.timeline()
    const counter = { val: 0 }

    tl.from('.preloader__title span', {
        y: 80,
        rotateX: -90,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'back.out(1.7)',
    })
        .to(
            counter,
            {
                val: 100,
                duration: 2.2,
                ease: 'power2.inOut',
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = Math.floor(counter.val)
                    }
                },
            },
            0
        )
        .to('.preloader__progress-fill', {
            scaleX: 1,
            duration: 2.2,
            ease: 'power2.inOut',
        }, 0)
        .to(
            '.preloader__title span',
            {
                y: -60,
                opacity: 0,
                stagger: 0.04,
                duration: 0.4,
                ease: 'power3.in',
            },
            2.4
        )
        .to(counterRef.current, {
            opacity: 0,
            duration: 0.3,
        }, 2.4)
        .to('.preloader__col', {
            scaleY: 0,
            duration: 1,
            ease: 'power4.inOut',
            stagger: {
                each: 0.08,
                from: 'center',
            },
            onComplete: () => {
                if (preloaderRef.current) {
                    preloaderRef.current.style.display = 'none'
                }
            },
        }, 2.8)

    return tl
}
