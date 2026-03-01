
import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { useMediaQuery } from 'react-responsive';

const AboutUs = () => {
    const boxRef = useRef(null);
    const bgRef = useRef(null);
    const isLaptop = useMediaQuery({ minWidth: 1024 });

    useEffect(() => {
        if (isLaptop && window.gsap && boxRef.current && bgRef.current) {
            window.gsap.fromTo(
                boxRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
            );

            // GSAP hover effect for background (behind the box)
            const box = boxRef.current;
            const bg = bgRef.current;
            const onEnter = () => {
                window.gsap.to(bg, {
                    opacity: 1,
                    scale: 1.08,
                    filter: 'blur(18px)',
                    duration: 0.5,
                    ease: 'power2.out',
                });
            };
            const onLeave = () => {
                window.gsap.to(bg, {
                    opacity: 0.7,
                    scale: 1,
                    filter: 'blur(8px)',
                    duration: 0.5,
                    ease: 'power2.out',
                });
            };
            box.addEventListener('mouseenter', onEnter);
            box.addEventListener('mouseleave', onLeave);
            return () => {
                box.removeEventListener('mouseenter', onEnter);
                box.removeEventListener('mouseleave', onLeave);
            };
        }
    }, [isLaptop]);

    return (
        <div className="aboutus-page">
            <div className="aboutus-bg-effect" ref={bgRef} aria-hidden="true" />
            <div className="aboutus-box" ref={boxRef}>
                <h1 className="aboutus-title">Our Story</h1>
                <h2 className="aboutus-subtitle">Leading the Gaming Revolution</h2>
                <p className="aboutus-text">
                    " S8UL is a global name in esports and gaming content, headquartered in Mumbai, India. "<br /><br />
                    Combining championship-winning teams with world-class content creation, we are shaping the future of gaming on both national and international stages. Our BGMI and Pokémon Unite rosters dominate the competition, while our recent expansion into Valorant marks our growing presence in global esports.<br /><br />
                    Beyond esports, S8UL is a three-time winner of the Esports Content Group of the Year at the Esports Awards, recognised for revolutionising gaming content. Our state-of-the-art S8UL Gaming House 2.0 is among the world's most advanced creator hubs, home to 25+ of India's top gaming creators, setting new benchmarks for content and innovation.<br /><br />
                    We've collaborated with over 250 global and regional brands, including IQOO, Monster Energy, Lenovo, Netflix, Krafton, Red Bull, and Gillette. As the first Indian esports org to win the MOBIES Global Impact Award, we continue to lead the charge in gaming excellence.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
