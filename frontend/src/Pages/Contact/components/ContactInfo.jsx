import React, { forwardRef } from 'react'

const contactDetails = [
    {
        id: 'email',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'contact@s8ul.gg',
        href: 'mailto:contact@s8ul.gg'
    },
    {
        id: 'location',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Location',
        value: 'Mumbai, India',
        href: null
    },
    {
        id: 'business',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        label: 'Business',
        value: 'business@s8ul.gg',
        href: 'mailto:business@s8ul.gg'
    }
]

const ContactInfo = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="contact-info">
            {contactDetails.map((detail) => (
                <div key={detail.id} className="contact-info__card">
                    <div className="contact-info__icon">
                        {detail.icon}
                    </div>
                    <div className="contact-info__content">
                        <span className="contact-info__label">{detail.label}</span>
                        {detail.href ? (
                            <a href={detail.href} className="contact-info__value contact-info__value--link">
                                {detail.value}
                            </a>
                        ) : (
                            <span className="contact-info__value">{detail.value}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
})

ContactInfo.displayName = 'ContactInfo'

export default ContactInfo
