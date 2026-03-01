import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Policies.css'

const RefundPolicy = () => {
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
                    <span className="policy__label">Refunds</span>
                    <h1 className="policy__title">Refund Policy</h1>
                    <p className="policy__updated">Please read our refund policy carefully</p>
                </div>

                {/* Content */}
                <div className="policy__content">
                    <div className="policy__section">
                        <h2 className="policy__section-title">Overview</h2>
                        <p className="policy__text">
                            Thank you for shopping at <span className="policy__highlight">S8UL.GG</span>.
                        </p>
                        <p className="policy__text">
                            We strive to provide high-quality jerseys and ensure customer satisfaction. However, due to the nature of our products and the potential for hygiene concerns, <span className="policy__highlight">we do not offer refunds or exchanges on any jersey purchases</span>.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Before You Purchase</h2>
                        <p className="policy__text">
                            Please ensure that you carefully review the product details, size charts, and any other relevant information before placing your order.
                        </p>
                        <p className="policy__text">
                            If you have any questions or require clarification regarding a specific jersey before making a purchase, please do not hesitate to contact our customer support team. We will be happy to assist you.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Damaged or Incorrect Items</h2>
                        <p className="policy__text">
                            While refunds are not applicable, if you receive a damaged or incorrect item, please contact us within <span className="policy__highlight">one day</span> of receiving your order with photographic evidence.
                        </p>
                        <p className="policy__text">
                            We will assess the issue and, at our discretion, may offer a replacement for the damaged or incorrect item.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Acknowledgment</h2>
                        <p className="policy__text">
                            By completing your purchase on S8UL.GG, you acknowledge and agree to this no-refund policy.
                        </p>
                        <p className="policy__text">
                            Thank you for your understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RefundPolicy
