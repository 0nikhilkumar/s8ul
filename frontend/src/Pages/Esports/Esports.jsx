import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { esportsApi } from '../../services/api';
import {
    Trophy, Target, Zap, Award, Swords, Users, Loader2, AlertCircle
} from 'lucide-react';
import './Esports.css';

gsap.registerPlugin(ScrollTrigger);

const TABS = [
    { id: 'bgmi', name: 'bgmi', label: 'BGMI', hasTeam: true, icon: Target },
    { id: 'freefire', name: 'freefire', label: 'FREE FIRE', hasTeam: false, icon: Zap },
    { id: 'moba', name: 'mobalegends', label: 'MOBA LEGENDS', hasTeam: false, icon: Swords },
    { id: 'apex', name: 'apexlegends', label: 'APEX LEGENDS', hasTeam: false, icon: Trophy },
    { id: 'chess', name: 'chess', label: 'CHESS', hasTeam: false, icon: Award },
];

function extractPlayers(raw, category, team) {
    if (!raw) return [];
    const list = Array.isArray(raw) ? raw : raw.teams ?? raw.data ?? raw.result ?? [];
    if (list.length === 0) return [];

    const match = list.find(t => {
        const catMatch = t.categoryName?.toLowerCase() === category?.toLowerCase();
        const teamMatch = !team || t.teamName?.toLowerCase() === team?.toLowerCase();
        return catMatch && teamMatch;
    });

    if (match) return match.players ?? [];

    return list
        .filter(t => t.categoryName?.toLowerCase() === category?.toLowerCase())
        .flatMap(t => t.players ?? []);
}

function Esports() {
    const [activeTab, setActiveTab] = useState('bgmi');
    const [activeBGMILineup, setActiveBGMILineup] = useState('soul');
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const tabsRef = useRef(null);
    const cardsRef = useRef(null);

    const getPlayerCards = () => gsap.utils.toArray('.player-card');

    // ── Fetch players ─────────────────────────────────────────────────────────
    const fetchPlayers = async (tabId, teamName) => {
        const tab = TABS.find(t => t.id === tabId);
        if (!tab) return;

        setLoading(true);
        setError(null);

        const params = { category: tab.name };
        if (tab.hasTeam && teamName) params.team = teamName;

        try {
            const response = await esportsApi.getTeams(params);
            const list = extractPlayers(response.data, tab.name, teamName);
            setPlayers(list);
        } catch (err) {
            console.error('❌ Error:', err?.response ?? err);
            setError('Failed to load roster. Please try again.');
            setPlayers([]);
        } finally {
            setLoading(false);
        }
    };

    // Re-fetch on tab change
    useEffect(() => {
        if (activeTab === 'bgmi') fetchPlayers('bgmi', activeBGMILineup);
        else fetchPlayers(activeTab);
    }, [activeTab]);

    // Re-fetch on BGMI lineup change
    useEffect(() => {
        if (activeTab === 'bgmi') fetchPlayers('bgmi', activeBGMILineup);
    }, [activeBGMILineup]);

    // ── Card entrance — smooth fade+slide, kill any ongoing tween first ───────
    useEffect(() => {
        const playerCards = getPlayerCards();
        if (!loading && players.length > 0 && playerCards.length > 0) {
            gsap.killTweensOf(playerCards);
            gsap.fromTo(playerCards,
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0,
                    duration: 0.4,
                    stagger: 0.06,
                    ease: 'power2.out',
                    const heroBadge = gsap.utils.toArray('.hero-badge');
                    const sectionTitle = gsap.utils.toArray('.section-title');
                    const tabs = gsap.utils.toArray('.tab-button');

                    if(heroBadge.length > 0) {
                tl.fromTo(heroBadge,
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)' }
                );
            }

            if (sectionTitle.length > 0) {
                tl.fromTo(sectionTitle,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.3'
                );
            }

            if (tabs.length > 0) {
                gsap.fromTo(tabs,
                    { opacity: 0, y: -30 },
                    {
                        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
                        scrollTrigger: { trigger: '.tabs-container', start: 'top 80%' }
                    }
                );
            }

            return () => ScrollTrigger.getAll().forEach(t => t.kill());
        }, []);

    // ── Tab change — kill previous tweens, quick fade out then set state ──────
    const handleTabChange = (tabId) => {
        if (tabId === activeTab) return;              // already active — do nothing
        const playerCards = getPlayerCards();

        if (playerCards.length === 0) {
            setActiveTab(tabId);
            if (tabId === 'bgmi') setActiveBGMILineup('soul');
            return;
        }

        gsap.killTweensOf(playerCards);
        gsap.to(playerCards, {
            opacity: 0, y: 10, duration: 0.15,
            overwrite: 'auto',
            onComplete: () => {
                setActiveTab(tabId);
                if (tabId === 'bgmi') setActiveBGMILineup('soul');
            }
        });
    };

    // ── Lineup change — same guard ────────────────────────────────────────────
    const handleBGMILineupChange = (lineup) => {
        if (lineup === activeBGMILineup) return;     // same lineup — do nothing
        const playerCards = getPlayerCards();

        if (playerCards.length === 0) {
            setActiveBGMILineup(lineup);
            return;
        }

        gsap.killTweensOf(playerCards);
        gsap.to(playerCards, {
            opacity: 0, duration: 0.15,
            overwrite: 'auto',
            onComplete: () => setActiveBGMILineup(lineup)
        });
    };
    if (lineup === activeBGMILineup) return;     // same lineup — do nothing
    gsap.killTweensOf('.player-card');
    gsap.to('.player-card', {
        opacity: 0, duration: 0.15,
        overwrite: 'auto',
        onComplete: () => setActiveBGMILineup(lineup)
    });
};

const retryFetch = () => {
    if (activeTab === 'bgmi') fetchPlayers('bgmi', activeBGMILineup);
    else fetchPlayers(activeTab);
};

const currentTab = TABS.find(t => t.id === activeTab);
const rosterTitle = activeTab === 'bgmi'
    ? `${activeBGMILineup.toUpperCase()} ROSTER`
    : `${currentTab?.label} ROSTER`;

return (
    <div className="esports-page">

        <div className="champ-badge-wrapper">
            <div className="hero-badge">
                <Trophy className="badge-icon" />
                <span>CHAMPIONSHIP ROSTERS</span>
            </div>
        </div>

        <section className="tabs-section">
            <div className="container">
                <div className="tabs-container" ref={tabsRef}>
                    {TABS.map(({ id, name, label, icon: Icon }) => (
                        <button
                            key={id}
                            className={`tab-button ${activeTab === id ? 'active' : ''}`}
                            onClick={() => handleTabChange(id)}
                        >
                            <Icon className="tab-icon" />
                            <span>{label}</span>
                        </button>
                    ))}
                </div>

                {activeTab === 'bgmi' && (
                    <div className="lineup-selector">
                        {[
                            { key: 'soul', label: 'SOUL Lineup', logo: 'S' },
                            { key: '8bit', label: '8BIT Lineup', logo: '8' },
                        ].map(({ key, label, logo }) => (
                            <button
                                key={key}
                                className={`lineup-btn ${activeBGMILineup === key ? 'active' : ''}`}
                                onClick={() => handleBGMILineupChange(key)}
                            >
                                <span className="lineup-logo">{logo}</span>
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>

        <section className="players-section" ref={cardsRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{rosterTitle}</h2>
                    <div className="title-underline"></div>
                </div>

                {loading && (
                    <div className="roster-state roster-loading">
                        <Loader2 className="spin-icon" />
                        <span>Loading roster...</span>
                    </div>
                )}

                {!loading && error && (
                    <div className="roster-state roster-error">
                        <AlertCircle className="state-icon" />
                        <span>{error}</span>
                        <button className="retry-btn" onClick={retryFetch}>Retry</button>
                    </div>
                )}

                {!loading && !error && players.length === 0 && (
                    <div className="roster-state roster-empty">
                        <Users className="state-icon" />
                        <span>No players found for this roster.</span>
                    </div>
                )}

                {!loading && !error && players.length > 0 && (
                    <div className="players-grid">
                        {players.map((player, idx) => (
                            <div key={player._id ?? idx} className="player-card">
                                <div className="card-inner">
                                    <div className="card-image-wrapper">
                                        <img
                                            src={
                                                player.image ||
                                                player.imageUrl ||
                                                player.photo ||
                                                player.avatar ||
                                                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop'
                                            }
                                            alt={player.name || player.playerName}
                                            className="card-image"
                                        />
                                        <div className="card-overlay"></div>
                                        <div className="card-logo">
                                            <div className="logo-badge">S8UL</div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-name">
                                            {player.name || player.playerName || player.username}
                                        </h3>
                                        <p className="card-role">
                                            {player.role || player.position || player.ingameRole}
                                        </p>
                                    </div>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    </div>
);
}

export default Esports;