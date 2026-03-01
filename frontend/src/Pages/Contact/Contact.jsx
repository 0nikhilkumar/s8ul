import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { ContactForm, ContactInfo, ContactSocial } from './components'
import { setupContactAnimations } from './animations'

const Contact = () => {
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    const formRef = useRef(null)
    const infoRef = useRef(null)
    const socialRef = useRef(null)

    useGSAP(() => {
        const cleanup = setupContactAnimations(containerRef, {
            headerRef,
            formRef,
            infoRef,
            socialRef,
        })
        return cleanup
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="contact">
            {/* Decorative Elements */}
            <div className="contact__orb contact__orb--1" />
            <div className="contact__orb contact__orb--2" />
            <div className="contact__line contact__line--1" />
            <div className="contact__line contact__line--2" />

            <div className="contact__container">
                {/* Header */}
                <div ref={headerRef} className="contact__header">
                    <span className="contact__label">Get in Touch</span>
                    <h2 className="contact__title">
                        <span className="contact__title-line">Let's</span>
                        <span className="contact__title-line contact__title-line--accent">Connect</span>
                    </h2>
                    <p className="contact__subtitle">
                        Have a question, partnership inquiry, or just want to say hello?
                        We'd love to hear from you.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="contact__grid">
                    {/* Form Section */}
                    <div className="contact__form-wrapper">
                        <ContactForm ref={formRef} />
                    </div>

                    {/* Info Section */}
                    <div className="contact__info-wrapper">
                        <ContactInfo ref={infoRef} />
                        <ContactSocial ref={socialRef} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="contact__footer">
                <div className="contact__footer-content">
                    <span className="contact__copyright">© 2026 S8UL. All rights reserved.</span>
                    <div className="contact__footer-links">
                        <Link to="/terms" className="contact__footer-link">Terms & Conditions</Link>
                        <Link to="/privacy" className="contact__footer-link">Privacy Policy</Link>
                        <Link to="/shipping" className="contact__footer-link">Shipping Policy</Link>
                        <Link to="/refund" className="contact__footer-link">Refund Policy</Link>
                    </div>
                    <span className="contact__tagline">India's Largest Esports Organization</span>
                </div>
            </div>
        </section>
    )
}

export default Contact
