import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupContactAnimations = (containerRef, refs) => {
    const { headerRef, formRef, infoRef, socialRef } = refs

    const ctx = gsap.context(() => {
        // Header animation
        if (headerRef.current) {
            gsap.fromTo(headerRef.current.children,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        }

        // Form animation
        if (formRef.current) {
            const formElements = formRef.current.querySelectorAll('.contact-form__group, .contact-form__submit')
            gsap.fromTo(formElements,
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        }

        // Info cards animation
        if (infoRef.current) {
            const infoCards = infoRef.current.querySelectorAll('.contact-info__card')
            gsap.fromTo(infoCards,
                {
                    x: 50,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        }

        // Social links animation
        if (socialRef.current) {
            const socialLinks = socialRef.current.querySelectorAll('.contact-social__link')
            gsap.fromTo(socialLinks,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: socialRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        }

        // Floating orbs animation
        const orbs = containerRef.current?.querySelectorAll('.contact__orb')
        if (orbs) {
            orbs.forEach((orb, i) => {
                gsap.to(orb, {
                    y: `${15 + i * 5}`,
                    x: `${10 + i * 3}`,
                    duration: 3 + i * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })
        }
    }, containerRef)

    return () => ctx.revert()
}
