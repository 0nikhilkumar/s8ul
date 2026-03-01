import gsap from 'gsap'

export const setupScrollAnimations = (heroRef, imagesRef) => {
    // Parallax on each image
    imagesRef.current.forEach((img, i) => {
        if (!img) return
        const speed = [0.3, 0.5, 0.2, 0.6, 0.4][i]
        const direction = i % 2 === 0 ? -1 : 1

        gsap.fromTo(img,
            { y: 0, rotation: 0, scale: 1 },
            {
                y: direction * speed * 150,
                rotation: direction * speed * 5,
                scale: 1 - speed * 0.15,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            }
        )
    })

    // Images shift slightly on scroll
    imagesRef.current.forEach((img, i) => {
        if (!img) return
        const spreadX = [-30, 30, -40, 40, 0][i]
        gsap.fromTo(img,
            { x: 0, opacity: 1 },
            {
                x: spreadX,
                opacity: 0.6,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: '20% top',
                    end: '80% top',
                    scrub: 2,
                },
            }
        )
    })

    // Title parallax
    gsap.to('.hero__title-marquee', {
        opacity: 0.3,
        scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '60% top',
            scrub: 1,
        },
    })
}
