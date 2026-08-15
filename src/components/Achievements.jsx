import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SiResearchgate, SiOpencv } from 'react-icons/si';
import { FaMedal, FaBasketball, FaTrophy, FaStar } from 'react-icons/fa6';
import nccBgImage from '../assets/ncc_redfort_parade.png';
import adasBgImage from '../assets/adas_hackathon.png';
import paperBgImage from '../assets/paper_presentation.png';
import districtBasketballBgImage from '../assets/district_basketball.png';
import zonalBasketballBgImage from '../assets/zonal_basketball.png';

const categories = [
    { id: 'all', label: 'All Recognitions' },
    { id: 'tech', label: 'Hackathons & AI' },
    { id: 'national', label: 'National Honors' },
    { id: 'sports', label: 'Sports Excellence' },
];

const achievements = [
    {
        id: 'ncc-rdc',
        title: 'NCC Republic Day Camp (RDC) Selection',
        event: 'Republic Day Parade',
        organization: 'Red Fort, New Delhi',
        year: 'Jan 2019',
        category: 'national',
        badge: '🎖️ National Selection',
        color: '#10B981',
        icon: <FaMedal className="award-icon" style={{ color: '#10B981' }} />,
        desc: 'Selected to represent NCC at the prestigious Republic Day Camp (RDC), participating in the March Past at the Red Fort, New Delhi. Represented national cadet corps with high military drill discipline, endurance & athletic leadership.',
        featured: true,
        bgImage: nccBgImage,
        tags: ['National Honor', 'Red Fort Parade', 'Leadership', 'NCC Cadets', 'Republic Day'],
    },
    {
        id: 'adas-hackathon',
        title: '3rd Prize – ADAS Hackathon',
        event: 'National Level Hackathon',
        organization: 'ANCIT Consulting',
        year: '2024',
        category: 'tech',
        badge: '🥉 3rd Prize Champion',
        color: '#38BDF8',
        icon: <SiOpencv className="award-icon" style={{ color: '#38BDF8' }} />,
        desc: 'Awarded 3rd Prize for designing an Intelligent Driver Monitoring & Emergency Control System prototype featuring real-time eye aspect ratio tracking and automated emergency speed governor alerts.',
        featured: false,
        bgImage: adasBgImage,
        tags: ['Computer Vision', 'OpenCV', 'ADAS', 'Embedded C', 'Real-Time IoT'],
    },
    {
        id: 'paper-presentation',
        title: '2nd Prize – Paper Presentation',
        event: 'National Level Technical Symposium',
        organization: 'Thiyagarajar University',
        year: '2024',
        category: 'tech',
        badge: '🥈 2nd Prize',
        color: '#F59E0B',
        icon: <SiResearchgate className="award-icon" style={{ color: '#F59E0B' }} />,
        desc: 'Presented technical research paper on advanced electronics & AI systems at the national level symposium, evaluating neural architecture efficiency and real-time processing.',
        featured: false,
        bgImage: paperBgImage,
        tags: ['Research Paper', 'AI Systems', 'Academic Honor', 'Symposium'],
    },
    {
        id: 'district-basketball',
        title: '1st Prize – District Level Basketball',
        event: 'District Basketball Championship',
        organization: 'District Sports Association',
        year: '2020',
        category: 'sports',
        badge: '🏆 1st Prize Champion',
        color: '#EC4899',
        icon: <FaTrophy className="award-icon" style={{ color: '#EC4899' }} />,
        desc: 'Won 1st Prize and overall team championship at the District Level Basketball Championship, showcasing high-tempo playmaking and tactical athletic endurance.',
        featured: false,
        bgImage: districtBasketballBgImage,
        tags: ['District Champion', 'Team Leadership', 'Sports Excellence'],
    },
    {
        id: 'zonal-basketball',
        title: '2nd Prize – Zonal Level Basketball',
        event: 'Zonal Basketball Championship',
        organization: 'Zonal Sports Federation',
        year: '2021',
        category: 'sports',
        badge: '🥈 2nd Prize',
        color: '#818CF8',
        icon: <FaBasketball className="award-icon" style={{ color: '#818CF8' }} />,
        desc: 'Secured 2nd Prize representing the institution at the Zonal Basketball Championship, maintaining strategic defense under competitive pressure.',
        featured: false,
        bgImage: zonalBasketballBgImage,
        tags: ['Zonal Runner-Up', 'Athletic Leadership', 'Competitive Sports'],
    },
];

export default function Achievements() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 120 });

    const [activeTab, setActiveTab] = useState('all');

    const filtered = activeTab === 'all' 
        ? achievements 
        : achievements.filter(a => a.category === activeTab);

    // Re-reveal stagger items when tab changes
    useEffect(() => {
        if (gridRef.current) {
            const children = gridRef.current.querySelectorAll('.reveal-stagger');
            children.forEach(child => child.classList.add('revealed'));
        }
    }, [activeTab]);

    return (
        <section
            id="achievements"
            className="achievements-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal section-header">
                    <p className="section-label">Honors & Competitions</p>
                    <h2 className="section-title">Achievements & Recognitions</h2>
                    <p className="section-subtitle">
                        Key awards, national hackathon recognitions, sports honors, and national camp representations.
                    </p>

                    {/* Category Filter Tabs */}
                    <div className="achievements-filter-tabs">
                        {categories.map((tab) => (
                            <button
                                key={tab.id}
                                className={`achievements-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div ref={gridRef} className="reveal revealed">
                    <div className="bento-achievements-grid">
                        {filtered.map((item) => {
                            const isFeatured = item.featured && activeTab === 'all';
                            const hasBgImage = Boolean(item.bgImage);

                            return (
                                <div
                                    key={item.id}
                                    className={`reveal-stagger revealed bento-card ${isFeatured ? 'bento-card-featured' : ''} ${hasBgImage ? 'has-bg-img' : ''}`}
                                    style={{
                                        '--card-accent': item.color,
                                        '--card-accent-bg': `${item.color}12`,
                                        '--card-accent-border': `${item.color}35`,
                                        '--card-accent-faded': `${item.color}20`,
                                        ...(hasBgImage ? {
                                            backgroundImage: `linear-gradient(180deg, rgba(8, 12, 16, 0.76) 0%, rgba(6, 10, 14, 0.94) 100%), url(${item.bgImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        } : {})
                                    }}
                                >
                                    {/* Top Holographic Accent Bar */}
                                    <div className="bento-top-bar" />

                                    {/* Header Badges */}
                                    <div className="card-badge-row">
                                        <div className="badge-left-group">
                                            <span
                                                className="achievement-badge"
                                                style={{
                                                    background: `${item.color}18`,
                                                    color: item.color,
                                                    borderColor: `${item.color}40`,
                                                }}
                                            >
                                                {item.badge}
                                            </span>
                                            {isFeatured && (
                                                <span className="flagship-tag">
                                                    <FaStar className="star-icon" /> Featured National Honor
                                                </span>
                                            )}
                                        </div>
                                        <span className="achievement-year">{item.year}</span>
                                    </div>

                                    {/* Title & Icon Row */}
                                    <div className="achievement-title-wrap">
                                        <div className="award-icon-box" style={{ background: `${item.color}18`, borderColor: `${item.color}40` }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="achievement-title">{item.title}</h3>
                                            <p className="achievement-org">
                                                <strong>{item.event}</strong> — {item.organization}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="achievement-desc">{item.desc}</p>

                                    {/* Tag Pills Footer */}
                                    {item.tags && (
                                        <div className="bento-tags-wrap">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="bento-tag">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .section-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 60px;
                }
                .section-subtitle {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    max-width: 580px;
                    margin: 0 auto 28px;
                    line-height: 1.6;
                }

                /* Filter Tabs */
                .achievements-filter-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    background: rgba(18, 24, 20, 0.6);
                    border: 1px solid var(--border);
                    padding: 6px;
                    border-radius: 9999px;
                }
                .achievements-tab-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    padding: 8px 20px;
                    border-radius: 9999px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .achievements-tab-btn:hover {
                    color: var(--text-primary);
                }
                .achievements-tab-btn.active {
                    background: var(--accent);
                    color: #000000;
                    font-weight: 700;
                    box-shadow: 0 0 16px var(--accent-faded);
                }

                /* Bento Grid Layout */
                .bento-achievements-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    max-width: 1150px;
                    margin: 0 auto;
                }

                .bento-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 28px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .bento-card-featured {
                    grid-column: span 2;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(16, 185, 129, 0.08) 100%);
                    border-color: rgba(16, 185, 129, 0.35);
                }

                .bento-card.has-bg-img {
                    box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.6);
                }

                .bento-top-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--card-accent), transparent);
                    opacity: 0.5;
                    transition: opacity 0.3s ease;
                }

                .bento-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--card-accent-border);
                    box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px var(--card-accent-faded);
                }

                .bento-card:hover .bento-top-bar {
                    opacity: 1;
                }

                .card-badge-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                    gap: 10px;
                    position: relative;
                    z-index: 2;
                }
                .badge-left-group {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .achievement-badge {
                    font-size: 0.725rem;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    border: 1px solid;
                    letter-spacing: 0.04em;
                    backdrop-filter: blur(8px);
                }
                .flagship-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.6875rem;
                    font-weight: 800;
                    color: #10B981;
                    background: rgba(16, 185, 129, 0.15);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    padding: 4px 12px;
                    border-radius: 9999px;
                    letter-spacing: 0.05em;
                    backdrop-filter: blur(8px);
                }
                .star-icon {
                    font-size: 0.7rem;
                }
                .achievement-year {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    font-family: 'Fira Code', monospace;
                    position: relative;
                    z-index: 2;
                }

                .achievement-title-wrap {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    margin-bottom: 14px;
                    position: relative;
                    z-index: 2;
                }
                .award-icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 16px;
                    border: 1px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 2px;
                    backdrop-filter: blur(8px);
                }
                .award-icon {
                    font-size: 1.55rem;
                }
                .achievement-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    line-height: 1.3;
                    margin-bottom: 4px;
                }

                .achievement-org {
                    font-size: 0.85rem;
                    color: var(--card-accent);
                    margin: 0;
                }

                .achievement-desc {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.65;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 2;
                }

                /* Bento Tags Wrap */
                .bento-tags-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                    position: relative;
                    z-index: 2;
                }
                .bento-tag {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    padding: 4px 10px;
                    border-radius: 9999px;
                    background: rgba(0, 0, 0, 0.4);
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                }
                .bento-card:hover .bento-tag {
                    color: #FFFFFF;
                    border-color: var(--card-accent-border);
                }

                @media (max-width: 991px) {
                    .bento-achievements-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .bento-card-featured {
                        grid-column: span 2;
                    }
                }
                @media (max-width: 640px) {
                    .achievements-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .bento-achievements-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .bento-card-featured {
                        grid-column: span 1;
                    }
                    .bento-card { padding: 20px 16px; border-radius: 18px; }
                    .achievement-title { font-size: 1.05rem; }
                    .achievements-filter-tabs { border-radius: 20px; padding: 4px; }
                    .achievements-tab-btn { padding: 6px 14px; font-size: 0.75rem; }
                }
            `}</style>
        </section>
    );
}
