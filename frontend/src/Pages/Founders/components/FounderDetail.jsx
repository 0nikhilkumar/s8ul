import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

// Social media icons as SVG components
const SocialIcons = {
    youtube: () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    instagram: () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    twitter: () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    discord: () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
    )
}

const FounderDetail = ({ founder, isOpen, onClose }) => {
    const modalRef = useRef(null)
    const overlayRef = useRef(null)
    const contentRef = useRef(null)
    const imageRef = useRef(null)
    const infoRef = useRef(null)
    const socialsRef = useRef(null)
    const achievementsRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        if (!modalRef.current) return

        const ctx = gsap.context(() => {
            if (isOpen && founder) {
                // Opening animation
                const tl = gsap.timeline()

                // Set initial states
                gsap.set(modalRef.current, { display: 'flex' })
                gsap.set(overlayRef.current, { opacity: 0 })
                gsap.set(contentRef.current, { scale: 0.9, opacity: 0, y: 50 })
                gsap.set(imageRef.current, { clipPath: 'inset(100% 0 0 0)', scale: 1.2 })
                gsap.set(infoRef.current?.children, { opacity: 0, y: 30 })
                gsap.set(achievementsRef.current?.children, { opacity: 0, x: -20 })
                gsap.set(socialsRef.current?.children, { opacity: 0, scale: 0 })
                gsap.set(closeRef.current, { opacity: 0, rotate: -90 })

                // Animate in
                tl.to(overlayRef.current, {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                })
                    .to(contentRef.current, {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out'
                    }, '-=0.2')
                    .to(imageRef.current, {
                        clipPath: 'inset(0% 0 0 0)',
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.inOut'
                    }, '-=0.4')
                    .to(infoRef.current?.children, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: 'power2.out'
                    }, '-=0.4')
                    .to(achievementsRef.current?.children, {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: 'power2.out'
                    }, '-=0.3')
                    .to(socialsRef.current?.children, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        stagger: 0.08,
                        ease: 'back.out(1.7)'
                    }, '-=0.2')
                    .to(closeRef.current, {
                        opacity: 1,
                        rotate: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }, '-=0.3')

            } else if (!isOpen) {
                // Closing animation
                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.set(modalRef.current, { display: 'none' })
                    }
                })

                tl.to(closeRef.current, {
                    opacity: 0,
                    rotate: 90,
                    duration: 0.2,
                    ease: 'power2.in'
                })
                    .to(socialsRef.current?.children, {
                        opacity: 0,
                        scale: 0,
                        duration: 0.2,
                        stagger: 0.03,
                        ease: 'power2.in'
                    }, '-=0.1')
                    .to([infoRef.current?.children, achievementsRef.current?.children], {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        stagger: 0.02,
                        ease: 'power2.in'
                    }, '-=0.1')
                    .to(imageRef.current, {
                        clipPath: 'inset(0% 0 100% 0)',
                        duration: 0.4,
                        ease: 'power3.inOut'
                    }, '-=0.2')
                    .to(contentRef.current, {
                        scale: 0.95,
                        opacity: 0,
                        y: 30,
                        duration: 0.3,
                        ease: 'power2.in'
                    }, '-=0.2')
                    .to(overlayRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.in'
                    }, '-=0.2')
            }
        }, modalRef)

        return () => ctx.revert()
    }, [isOpen, founder])

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Handle touch/swipe to close on mobile
    useEffect(() => {
        if (!isOpen || !contentRef.current) return

        let startY = 0
        let currentY = 0
        let isDragging = false

        const handleTouchStart = (e) => {
            // Only allow swipe from top of content (first 60px)
            const touch = e.touches[0]
            const rect = contentRef.current.getBoundingClientRect()
            if (touch.clientY - rect.top < 60) {
                startY = touch.clientY
                isDragging = true
            }
        }

        const handleTouchMove = (e) => {
            if (!isDragging) return
            currentY = e.touches[0].clientY
            const diff = currentY - startY

            // Only allow dragging down
            if (diff > 0 && diff < 150) {
                gsap.set(contentRef.current, {
                    y: diff * 0.5,
                    opacity: 1 - (diff / 300)
                })
            }
        }

        const handleTouchEnd = () => {
            if (!isDragging) return
            isDragging = false
            const diff = currentY - startY

            if (diff > 80) {
                // Close modal
                onClose()
            } else {
                // Reset position
                gsap.to(contentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
        }

        const content = contentRef.current
        content.addEventListener('touchstart', handleTouchStart, { passive: true })
        content.addEventListener('touchmove', handleTouchMove, { passive: true })
        content.addEventListener('touchend', handleTouchEnd, { passive: true })

        return () => {
            content.removeEventListener('touchstart', handleTouchStart)
            content.removeEventListener('touchmove', handleTouchMove)
            content.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isOpen, onClose])

    if (!founder) return null

    return (
        <div ref={modalRef} className="founder-detail" style={{ display: 'none' }}>
            <div
                ref={overlayRef}
                className="founder-detail__overlay"
                onClick={onClose}
            />

            <div ref={contentRef} className="founder-detail__content">
                {/* Swipe indicator for mobile */}
                <div className="founder-detail__swipe-indicator" />

                <button
                    ref={closeRef}
                    className="founder-detail__close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="founder-detail__layout">
                    <div className="founder-detail__image-section">
                        <div ref={imageRef} className="founder-detail__image-wrapper">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="founder-detail__image"
                                loading="eager"
                            />
                            <div className="founder-detail__image-gradient" />
                        </div>
                    </div>

                    <div className="founder-detail__info-section">
                        <div ref={infoRef} className="founder-detail__info">
                            <span className="founder-detail__label">{founder.role}</span>
                            <h2 className="founder-detail__name">{founder.name}</h2>
                            <p className="founder-detail__real-name">{founder.realName}</p>
                            <p className="founder-detail__bio">{founder.bio}</p>
                        </div>

                        <div className="founder-detail__achievements">
                            <h3 className="founder-detail__achievements-title">Achievements</h3>
                            <ul ref={achievementsRef} className="founder-detail__achievements-list">
                                {founder.achievements?.map((achievement, i) => (
                                    <li key={i} className="founder-detail__achievement">
                                        <span className="founder-detail__achievement-dot" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="founder-detail__socials-section">
                            <h3 className="founder-detail__socials-title">Connect</h3>
                            <div ref={socialsRef} className="founder-detail__socials">
                                {founder.socials && Object.entries(founder.socials).map(([platform, url]) => {
                                    const Icon = SocialIcons[platform]
                                    if (!Icon) return null
                                    return (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`founder-detail__social founder-detail__social--${platform}`}
                                            aria-label={platform}
                                        >
                                            <Icon />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderDetail
