import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Policies.css'

const ShippingPolicy = () => {
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
                    <span className="policy__label">Shipping</span>
                    <h1 className="policy__title">Shipping Policy</h1>
                    <p className="policy__updated">Delivery information for your orders</p>
                </div>

                {/* Content */}
                <div className="policy__content">
                    <div className="policy__section">
                        <h2 className="policy__section-title">Shipping Coverage</h2>
                        <p className="policy__text">
                            All items purchased through this website are eligible for shipping to any location within <span className="policy__highlight">India</span>, typically arriving within an estimated shipping timeframe of <span className="policy__highlight">7-10 business days</span>.
                        </p>
                        <p className="policy__text">
                            Please note that orders cannot be processed on Sundays and public holidays.
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Order Information</h2>
                        <p className="policy__text">
                            It is crucial to provide a valid mobile number and shipping address when placing your order. On occasion, our delivery partners may request a valid ID proof during the delivery process.
                        </p>
                        <p className="policy__text">
                            For additional inquiries, please reach out to us at <a href="mailto:merch@s8ul.gg" className="policy__link">merch@s8ul.gg</a>
                        </p>
                    </div>

                    <div className="policy__section">
                        <h2 className="policy__section-title">Multiple Item Orders</h2>
                        <p className="policy__text">
                            Due to fluctuating item availability, orders with multiple items may be dispatched separately. Each shipment will be assigned a unique tracking number, accessible on the Track Order page under the corresponding order number.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShippingPolicy
