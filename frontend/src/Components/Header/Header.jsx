import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Header.css'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  // { label: 'Shop', href: '/shop' },
  { label: 'Esports', href: '/esports' },
  { label: 'Creators', href: '/creators' },
]

// Check if hero animation has already played
const hasAnimationPlayed = () => sessionStorage.getItem('heroAnimationPlayed') === 'true'

const Header = () => {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const logoIconRef = useRef(null)
  const navRef = useRef(null)
  const navLinksRef = useRef([])
  const ctaRef = useRef(null)
  const lineLeftRef = useRef(null)
  const lineRightRef = useRef(null)
  const menuBtnRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [animationPlayed] = useState(hasAnimationPlayed)

  useGSAP(() => {
    // If animation already played, show header immediately
    if (animationPlayed) {
      gsap.set(headerRef.current, { opacity: 1 })
      gsap.set(logoRef.current, { opacity: 1, scale: 1, filter: 'blur(0px)' })
      gsap.set(logoIconRef.current, { rotation: 0, scale: 1 })
      gsap.set(navLinksRef.current, { opacity: 1, y: 0 })
      gsap.set(ctaRef.current, { opacity: 1, scale: 1 })
      gsap.set([lineLeftRef.current, lineRightRef.current], { scaleX: 1 })
      gsap.set(menuBtnRef.current, { opacity: 1, scale: 1 })
    } else {
      // Set initial states
      gsap.set(headerRef.current, { opacity: 0 })
      gsap.set(logoRef.current, { opacity: 0, scale: 0.5, filter: 'blur(10px)' })
      gsap.set(logoIconRef.current, { rotation: -180, scale: 0 })
      gsap.set(navLinksRef.current, { opacity: 0, y: -20 })
      gsap.set(ctaRef.current, { opacity: 0, scale: 0.8 })
      gsap.set([lineLeftRef.current, lineRightRef.current], { scaleX: 0 })
      gsap.set(menuBtnRef.current, { opacity: 0, scale: 0 })

      // Entrance timeline — after hero starts loading
      const tl = gsap.timeline({ delay: 1.5, defaults: { ease: 'expo.out' } })

      // Header fade in
      tl.to(headerRef.current, {
        opacity: 1,
        duration: 0.6,
      })

        // Decorative lines expand from center
        .to([lineLeftRef.current, lineRightRef.current], {
          scaleX: 1,
          duration: 1,
          ease: 'power4.inOut',
        }, '-=0.3')

        // Logo icon spins in
        .to(logoIconRef.current, {
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(2)',
        }, '-=0.7')

        // Logo text reveals
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.6,
        }, '-=0.5')

        // Nav links cascade in
        .to(navLinksRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
        }, '-=0.3')

        // CTA button pops in
        .to(ctaRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
        }, '-=0.2')

        // Menu button
        .to(menuBtnRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(2)',
        }, '-=0.4')
    }

    // Magnetic hover on nav links
    navLinksRef.current.forEach((link) => {
      if (!link) return
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: 'power2.out' })
        gsap.to(link.querySelector('.nav-link__line'), {
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power2.out' })
        gsap.to(link.querySelector('.nav-link__line'), {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })

    // Header shrink on scroll
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(headerRef.current, {
            backdropFilter: 'blur(20px)',
            background: 'rgba(0, 0, 0, 0.85)',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            duration: 0.4,
          })
        } else {
          gsap.to(headerRef.current, {
            backdropFilter: 'blur(0px)',
            background: 'transparent',
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            duration: 0.4,
          })
        }
      },
    })
  }, { scope: headerRef })

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (menuOpen) {
      // Lock body scroll when menu is open (works on iOS too)
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'

      // Reset header to full size when menu opens
      gsap.to(headerRef.current, {
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        background: 'transparent',
        backdropFilter: 'blur(0px)',
        duration: 0.4,
      })

      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(150% at 100% 0)',
        duration: 0.8,
        ease: 'power4.inOut',
      })
      gsap.from('.mobile-nav__link', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
        ease: 'power3.out',
      })
    } else {
      // Unlock body scroll when menu is closed
      const scrollY = document.body.style.top
      const hadBodyLock = document.body.style.position === 'fixed'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''

      const restoredScrollY = parseInt(scrollY || '0', 10) * -1
      if (hadBodyLock && Number.isFinite(restoredScrollY)) {
        window.scrollTo(0, restoredScrollY)
      }

      // Restore header shrink state if user was scrolled
      if (restoredScrollY > 80) {
        gsap.to(headerRef.current, {
          backdropFilter: 'blur(20px)',
          background: 'rgba(0, 0, 0, 0.85)',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          duration: 0.4,
        })
      }

      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(0% at 100% 0)',
        duration: 0.6,
        ease: 'power4.inOut',
      })
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a href="#" className="header__logo" ref={logoRef}>
          <div ref={logoIconRef} className="header__logo-icon">
            <img src="/s8ul/logo.webp" alt="S8UL" />
          </div>
          <span className="header__logo-text">S8UL</span>
        </a>

        {/* Left decorative line */}
        <div ref={lineLeftRef} className="header__line header__line--left" />

        {/* Navigation */}
        <nav className="header__nav">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              ref={(el) => (navLinksRef.current[i] = el)}
              href={item.href}
              className="nav-link"
            >
              <span className="nav-link__text">{item.label}</span>
              <span className="nav-link__line" />
            </a>
          ))}
        </nav>

        {/* Right decorative line */}
        <div ref={lineRightRef} className="header__line header__line--right" />

        {/* CTA Button */}
        <div ref={ctaRef} className="header__cta">
          <a href="#contact" className="cta-btn">
            <span className="cta-btn__text">Contact</span>
            <span className="cta-btn__arrow">→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuBtnRef}
          className={`header__menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu__nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav__link mobile-nav__link--cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header