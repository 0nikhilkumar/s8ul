import React from 'react'

const heroImages = [
    { src: '/s8ul/slider2.jpg', alt: 'S8UL Gaming' },
    { src: '/s8ul/slider3.webp', alt: 'S8UL Esports' },
    { src: '/s8ul/slider8.png', alt: 'S8UL Team' },
    { src: '/s8ul/slider9.webp', alt: 'S8UL Arena' },
    { src: '/s8ul/slider10.png', alt: 'S8UL Victory' },
]

const HeroImages = ({ imagesRef }) => {
    return (
        <div className="hero__images">
            {heroImages.map((img, i) => (
                <div
                    key={i}
                    ref={(el) => (imagesRef.current[i] = el)}
                    className={`hero__image hero__image--${i + 1}`}
                >
                    <div className="hero__image-inner">
                        <img src={img.src} alt={img.alt} loading="eager" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroImages
