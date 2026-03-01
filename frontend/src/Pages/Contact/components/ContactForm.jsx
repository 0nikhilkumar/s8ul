import React, { forwardRef } from 'react'

const ContactForm = forwardRef((props, ref) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted')
    }

    return (
        <form ref={ref} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
                <div className="contact-form__group">
                    <label className="contact-form__label">Name</label>
                    <input
                        type="text"
                        className="contact-form__input"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="contact-form__group">
                    <label className="contact-form__label">Email</label>
                    <input
                        type="email"
                        className="contact-form__input"
                        placeholder="your@email.com"
                        required
                    />
                </div>
            </div>

            <div className="contact-form__group">
                <label className="contact-form__label">Subject</label>
                <input
                    type="text"
                    className="contact-form__input"
                    placeholder="What's this about?"
                />
            </div>

            <div className="contact-form__group">
                <label className="contact-form__label">Message</label>
                <textarea
                    className="contact-form__textarea"
                    placeholder="Tell us more..."
                    rows="5"
                    required
                />
            </div>

            <button type="submit" className="contact-form__submit">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
            </button>
        </form>
    )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
