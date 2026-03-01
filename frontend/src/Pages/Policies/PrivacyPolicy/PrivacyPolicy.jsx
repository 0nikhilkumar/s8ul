import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Policies.css'

const PrivacyPolicy = () => {
    const navigate = useNavigate()

    return (
        <section className="policy">
            {/* Decorative Elements */}
            <div className="policy__orb policy__orb--1" />
            <div className="policy__orb policy__orb--2" />

            {/* Back Button */}
            <button className="policy__back-btn" onClick={() => navigate('/')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
            </button>

            <div className="policy__container">
                {/* Header */}
                <div className="policy__header">
                    <span className="policy__label">Legal</span>
                    <h1 className="policy__title">Privacy Policy</h1>
                    <p className="policy__updated">Your privacy matters to us</p>
                </div>

                {/* Content */}
                <div className="policy__content">
                    <div className="policy__section">
                        <h2 className="policy__section-title">Introduction</h2>
                        <p className="policy__text">
                            Welcome to S8UL! This privacy policy sets out how we collect, use, and protect any personal information that you give us when you use our website or play our games.
                        </p>
                        <p className="policy__text">
                            S8UL is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using our services, then you can be assured that it will only be used in accordance with this privacy policy.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Information Collected</h2>
                        <p className="policy__text">We may collect the following information:</p>
                        <ul className="policy__list">
                            <li className="policy__list-item">
                                Your name and email address when you sign up for our newsletter or register for an account on our website.
                            </li>
                            <li className="policy__list-item">
                                Your device information, including your device ID, IP address, and location data.
                            </li>
                            <li className="policy__list-item">
                                Your gameplay information, including your progress through our games, in-game purchases, and achievements.
                            </li>
                            <li className="policy__list-item">
                                Your communication with us, including emails and support tickets.
                            </li>
                        </ul>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Use of Information</h2>
                        <p className="policy__text">We use the information we collect to:</p>
                        <ul className="policy__list">
                            <li className="policy__list-item">
                                Improve our products and services, including developing new games and features.
                            </li>
                            <li className="policy__list-item">
                                Respond to your requests and inquiries.
                            </li>
                            <li className="policy__list-item">
                                Send you promotional materials, newsletters, and other marketing communications.
                            </li>
                            <li className="policy__list-item">
                                Monitor and analyze the performance of our games and website.
                            </li>
                        </ul>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Protection of Information</h2>
                        <p className="policy__text">
                            We are committed to ensuring that your information is secure. We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction or damage.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Sharing of Information</h2>
                        <p className="policy__text">
                            We may share your information with third-party service providers that help us operate our website and games, such as hosting, analytics, and customer support services. We may also share your information with law enforcement agencies or other government entities if required by law.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Cookies and Other Tracking Technologies</h2>
                        <p className="policy__text">
                            We use cookies and other tracking technologies to collect information about your use of our website and games. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Your Rights</h2>
                        <p className="policy__text">
                            You have the right to access, correct, delete, and restrict the use of your personal information. You also have the right to object to the processing of your personal information and to withdraw your consent at any time.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Contact Us</h2>
                        <p className="policy__text">
                            If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:service@s8ul.com" className="policy__link">service@s8ul.com</a>. We will respond to your inquiry as soon as possible.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Changes to This Privacy Policy</h2>
                        <p className="policy__text">
                            We reserve the right to update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. You are advised to review this privacy policy periodically for any changes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
