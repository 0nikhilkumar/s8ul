import React, { forwardRef } from 'react'

const foundersData = [
    {
        id: 'thug',
        name: '8Bit Thug',
        realName: 'Animesh Agarwal',
        role: 'Founder & CEO',
        image: '/founders/thug.jpg',
        bio: 'Animesh Agarwal, known as 8Bit Thug, is the visionary founder and CEO of S8UL. A pioneer in Indian esports, he transformed his passion for gaming into one of the largest gaming organizations in Asia. Under his leadership, S8UL has grown from a small gaming team to a multi-million dollar esports powerhouse.',
        achievements: [
            'Founded S8UL in 2018',
            'Built India\'s largest gaming content house',
            'Led the team to multiple championship victories',
            'Pioneered esports infrastructure in India'
        ],
        socials: {
            youtube: 'https://youtube.com/@8bitthug',
            instagram: 'https://instagram.com/8bit_thug',
            discord: 'https://discord.gg/s8ul'
        }
    },
    {
        id: 'goldy',
        name: '8Bit Goldy',
        realName: 'Lokesh Jain',
        role: 'Co-Founder',
        image: '/founders/goldy.jpg',
        bio: 'Lokesh Jain, famously known as 8Bit Goldy, is a co-founder of S8UL and a legendary figure in Indian gaming. His strategic vision and business acumen have been instrumental in establishing S8UL as a dominant force in the esports industry. He continues to shape the future of competitive gaming in India.',
        achievements: [
            'Co-founded S8UL organization',
            'Managed multiple championship-winning teams',
            'Expanded S8UL into content creation',
            'Built strategic partnerships across gaming industry'
        ],
        socials: {
            youtube: 'https://youtube.com/@8bitgoldy',
            instagram: 'https://instagram.com/8bit_goldy',
            discord: 'https://discord.gg/s8ul'
        }
    },
    {
        id: 'mortal',
        name: 'Mortal',
        realName: 'Naman Mathur',
        role: 'Co-Founder',
        image: '/founders/mortal.jpg',
        bio: 'Naman Mathur, universally known as Mortal, is one of India\'s most celebrated gaming personalities and a co-founder of S8UL. With millions of followers across platforms, he has become the face of Indian esports. His exceptional skills and charismatic personality have inspired countless gamers across the nation.',
        achievements: [
            'India\'s most subscribed gaming creator',
            'Multiple PUBG Mobile championship titles',
            'Esports Awards Winner',
            'Brand ambassador for major gaming companies'
        ],
        socials: {
            youtube: 'https://youtube.com/@MortaLyt',
            instagram: 'https://instagram.com/moraboratory',
            discord: 'https://discord.gg/s8ul'
        }
    },
    {
        id: 'sumit',
        name: 'Sumit',
        realName: 'Sumit Sovasaria',
        role: 'Co-Founder',
        image: '/founders/sumit.jpg',
        bio: 'Sumit Sovasaria is a co-founder of S8UL who brings exceptional operational expertise to the organization. His behind-the-scenes leadership has been crucial in building S8UL\'s infrastructure and managing the complex operations of a world-class esports organization.',
        achievements: [
            'Co-founded S8UL organization',
            'Operational excellence leadership',
            'Built S8UL gaming house',
            'Managed talent acquisition and development'
        ],
        socials: {
            youtube: 'https://youtube.com/@sumit',
            instagram: 'https://instagram.com/sumitsovasaria',
            discord: 'https://discord.gg/s8ul'
        }
    },
]

const FounderCard = forwardRef(({ founder, index, onCardClick }, ref) => {
    return (
        <div
            ref={ref}
            className="founder-card"
            onClick={() => onCardClick && onCardClick(founder)}
        >
            <div className="founder-card__image-wrapper">
                <div className="founder-card__image-bg" />
                <img
                    src={founder.image}
                    alt={founder.name}
                    className="founder-card__image"
                />
                <div className="founder-card__image-overlay" />
            </div>

            <div className="founder-card__content">
                <span className="founder-card__number">0{index + 1}</span>
                <h3 className="founder-card__name">{founder.name}</h3>
                <p className="founder-card__real-name">{founder.realName}</p>
                <span className="founder-card__role">{founder.role}</span>
            </div>

            <div className="founder-card__border" />
            <div className="founder-card__glow" />
        </div>
    )
})

FounderCard.displayName = 'FounderCard'

export { foundersData }
export default FounderCard
