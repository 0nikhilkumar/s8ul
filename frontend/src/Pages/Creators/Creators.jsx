import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, X, Users, Star, Heart, Eye } from 'lucide-react';
import './Creators.css';

gsap.registerPlugin(ScrollTrigger);

function Creators() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCreators, setFilteredCreators] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    const searchRef = useRef(null);
    const gridRef = useRef(null);
    const heroRef = useRef(null);

    const creators = [
        { name: 'Mortal',    role: 'Content Creator', game: 'BGMI',     image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop', featured: true,  isLive: true,  viewers: 15000, likes: 2500 },
        { name: 'Scout',     role: 'Pro Player',       game: 'BGMI',     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', featured: true,  isLive: true,  viewers: 12000, likes: 1800 },
        { name: 'Thug',      role: 'Content Creator', game: 'BGMI',     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', featured: true,  isLive: false, viewers: 0,     likes: 0    },
        { name: 'Jonathan',  role: 'Content Creator', game: 'Valorant', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 8500,  likes: 1200 },
        { name: 'Viper',     role: 'Streamer',         game: 'BGMI',     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Mavi',      role: 'Pro Player',       game: 'BGMI',     image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 6700,  likes: 950  },
        { name: 'Regaltos',  role: 'Content Creator', game: 'BGMI',     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Clutchgod', role: 'Streamer',         game: 'BGMI',     image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 5200,  likes: 780  },
        { name: 'Akshu',     role: 'Content Creator', game: 'BGMI',     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Ash',       role: 'Pro Player',       game: 'BGMI',     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Zgod',      role: 'Streamer',         game: 'Valorant', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 9800,  likes: 1500 },
        { name: 'Goldy',     role: 'Content Creator', game: 'GTA V',    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Neyoo',     role: 'Streamer',         game: 'Valorant', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 4300,  likes: 620  },
        { name: 'Payal',     role: 'Content Creator', game: 'Variety',  image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop', featured: false, isLive: false, viewers: 0,     likes: 0    },
        { name: 'Sid',       role: 'Streamer',         game: 'Minecraft',image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop', featured: false, isLive: true,  viewers: 7100,  likes: 1100 },
    ];

    useEffect(() => {
        applyFilters();
    }, [activeTab]);

    const applyFilters = () => {
        let filtered = creators;
        if (activeTab === 'live') filtered = filtered.filter(c => c.isLive);
        if (searchQuery !== '') {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(searchQuery) ||
                c.role.toLowerCase().includes(searchQuery) ||
                c.game.toLowerCase().includes(searchQuery)
            );
        }
        setFilteredCreators(filtered);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        let filtered = creators;
        if (activeTab === 'live') filtered = filtered.filter(c => c.isLive);
        if (query !== '') {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.role.toLowerCase().includes(query) ||
                c.game.toLowerCase().includes(query)
            );
        }
        setFilteredCreators(filtered);
    };

    const clearSearch = () => {
        setSearchQuery('');
        applyFilters();
    };

    const handleTabChange = (tab) => {
        const cards = document.querySelectorAll('.creator-card');
        if (cards.length > 0) {
            gsap.to(cards, {
                opacity: 0, scale: 0.9, duration: 0.3, stagger: 0.02,
                onComplete: () => { setActiveTab(tab); setSearchQuery(''); }
            });
        } else {
            setActiveTab(tab);
            setSearchQuery('');
        }
    };

    const formatNumber = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    // Hero entrance animation
    useEffect(() => {
        gsap.timeline()
            .fromTo('.creators-hero-badge',
                { opacity: 0, scale: 0.5, rotateZ: -10 },
                { opacity: 1, scale: 1, rotateZ: 0, duration: 0.8, ease: 'back.out(2)' }
            )
            .fromTo('.creators-title',
                { opacity: 0, y: 60, rotateX: -30 },
                { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power3.out' },
                '-=0.4'
            );

        gsap.fromTo('.tabs-search-wrapper',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: '.tabs-search-wrapper', start: 'top 85%' } }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // Card entrance animation
    useEffect(() => {
        const cards = document.querySelectorAll('.creator-card');
        if (cards.length > 0) {
            gsap.fromTo(cards,
                { opacity: 0, scale: 0.5, y: 50, rotateY: -30 },
                { opacity: 1, scale: 1, y: 0, rotateY: 0, duration: 0.6,
                  stagger: { amount: 0.8, from: 'start', ease: 'power2.out' },
                  ease: 'back.out(1.5)', clearProps: 'transform' }
            );
        }
    }, [filteredCreators]);

    return (
        <div className="creators-page">

            {/* ── Background — slider3.webp only ── */}
            <div className="creators-bg-wall" aria-hidden="true">
                <div className="creators-bg-grid" />
                <div className="creators-bg-overlay" />
                <div className="creators-bg-glow" />
            </div>

            {/* Hero Section */}
            <section className="creators-hero" ref={heroRef}>
                <div className="container">
                    <div className="creators-hero-badge">
                        <Users className="hero-badge-icon" />
                        <span>S8UL FAMILY</span>
                    </div>
                    <h1 className="creators-title">
                        Meet Our <span className="gradient-text">Creators</span>
                    </h1>
                </div>
            </section>

            {/* Tabs and Search */}
            <section className="tabs-search-section">
                <div className="container">
                    <div className="tabs-search-wrapper">
                        <div className="creators-tabs">
                            <button className={`tab-btn ${activeTab === 'all'  ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
                                <Users size={18} /><span>All Creators</span>
                            </button>
                            <button className={`tab-btn ${activeTab === 'live' ? 'active' : ''}`} onClick={() => handleTabChange('live')}>
                                <div className="live-indicator"></div><span>Live Creators</span>
                            </button>
                        </div>

                        <div className="search-container" ref={searchRef}>
                            <Search className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search creators..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            {searchQuery && (
                                <button className="clear-btn" onClick={clearSearch}>
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="search-stats">
                        <span className="stat-text">
                            {filteredCreators.length} {filteredCreators.length === 1 ? 'Creator' : 'Creators'} Found
                        </span>
                    </div>
                </div>
            </section>

            {/* Creators Grid */}
            <section className="creators-grid-section" ref={gridRef}>
                <div className="container">
                    {filteredCreators.length > 0 ? (
                        <div className="creators-grid">
                            {filteredCreators.map((creator, index) => (
                                <div key={index} className="creator-card">
                                    <div className="card-circle">
                                        <div className="circle-wrapper">
                                            <img src={creator.image} alt={creator.name} className="creator-image" />
                                            <div className="circle-border"></div>

                                            {creator.featured && (
                                                <div className="featured-badge">
                                                    <Star size={14} fill="currentColor" />
                                                </div>
                                            )}

                                            {creator.isLive && activeTab === 'live' && (
                                                <div className="live-badge">
                                                    <span className="live-dot"></span>LIVE
                                                </div>
                                            )}

                                            {activeTab === 'all' ? (
                                                <div className="hover-overlay-hidden"></div>
                                            ) : (
                                                <div className="hover-overlay">
                                                    <div className="overlay-content">
                                                        <div className="stat-item"><Eye size={18} /><span>{formatNumber(creator.viewers)}</span></div>
                                                        <div className="stat-item"><Heart size={18} /><span>{formatNumber(creator.likes)}</span></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h3 className="creator-name">{creator.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon"><Search size={48} /></div>
                            <h3 className="no-results-title">No Creators Found</h3>
                            <p className="no-results-text">Try searching with different keywords</p>
                            <button className="reset-btn" onClick={clearSearch}>Clear Search</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Creators;