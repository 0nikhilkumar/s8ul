import gsap from 'gsap'

export const setupContinuousAnimations = (imagesRef, logoRef) => {
    // Marquee continuous scroll
    gsap.to('.marquee__inner', {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: 'none',
    })

    // Title text scroll right to left
    gsap.to('.hero__title', {
        xPercent: -50,
        duration: 100,
        repeat: -1,
        ease: 'none',
    })

    // Floating animation for images
    imagesRef.current.forEach((img, i) => {
        if (!img) return
        gsap.to(img, {
            y: `+=${8 + i * 3}`,
            rotation: `+=${1.5 + i * 0.5}`,
            duration: 3 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3,
        })
    })

    // Scroll indicator pulse
    gsap.to('.scroll-indicator__dot', {
        y: 24,
        duration: 1.5,
        repeat: -1,
        ease: 'power2.inOut',
    })

    // Logo hover handlers
    const logoEl = logoRef.current
    const onLogoEnter = () => {
        gsap.to(logoEl, {
            scale: 1.1,
            filter: 'drop-shadow(0 0 15px rgba(120, 50, 255, 0.4))',
            duration: 0.4,
            ease: 'power2.out',
        })
        gsap.to('.hero__logo-glow', {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
        })
    }
    const onLogoLeave = () => {
        gsap.to(logoEl, {
            scale: 1,
            filter: 'drop-shadow(0 0 0px rgba(120, 50, 255, 0))',
            duration: 0.4,
            ease: 'power2.out',
        })
        gsap.to('.hero__logo-glow', {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: 'power2.in',
        })
    }
    logoEl.addEventListener('mouseenter', onLogoEnter)
    logoEl.addEventListener('mouseleave', onLogoLeave)

    // Mouse-move parallax
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const moveX = (clientX - centerX) / centerX
        const moveY = (clientY - centerY) / centerY

        imagesRef.current.forEach((img, i) => {
            if (!img) return
            const depth = [20, 30, 15, 35, 10][i]
            gsap.to(img, {
                x: moveX * depth,
                y: moveY * depth,
                duration: 0.8,
                ease: 'power2.out',
                overwrite: 'auto',
            })
        })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        logoEl.removeEventListener('mouseenter', onLogoEnter)
        logoEl.removeEventListener('mouseleave', onLogoLeave)
    }
}
