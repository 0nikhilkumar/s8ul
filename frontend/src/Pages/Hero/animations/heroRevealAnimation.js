import gsap from 'gsap'

export const createHeroRevealTimeline = (refs) => {
    const { logoRef, subtitleRef, imagesRef, scrollIndicatorRef, marqueeRef } = refs
    const tl = gsap.timeline()

    // Logo entrance
    tl.from(logoRef.current, {
        scale: 1.8,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.2,
        ease: 'expo.out',
    })

    // Title slide in
    tl.from(
        '.hero__title',
        {
            opacity: 0,
            y: 60,
            filter: 'blur(10px)',
            duration: 1,
            ease: 'power3.out',
        },
        '-=0.6'
    )

    // Subtitle
    tl.from(
        subtitleRef.current,
        {
            y: 40,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 0.7,
            ease: 'power3.out',
        },
        '-=0.3'
    )

    // Images — instant clip-path reveal together
    imagesRef.current.forEach((img) => {
        if (!img) return
        const inner = img.querySelector('.hero__image-inner')
        gsap.set(inner, { clipPath: 'inset(100% 0 0 0)' })
    })

    tl.to(
        imagesRef.current.map((img) => img?.querySelector('.hero__image-inner')).filter(Boolean),
        {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.inOut',
        },
        '-=0.5'
    )

    // Images scale from within
    tl.from(
        imagesRef.current.map((img) => img?.querySelector('img')).filter(Boolean),
        {
            scale: 1.2,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
        },
        '-=0.8'
    )

    // Scroll indicator
    tl.from(
        scrollIndicatorRef.current,
        {
            opacity: 0,
            y: 20,
            duration: 0.5,
        },
        '-=0.2'
    )

    // Marquee
    tl.from(
        marqueeRef.current,
        {
            opacity: 0,
            duration: 0.5,
        },
        '-=0.3'
    )

    return tl
}
