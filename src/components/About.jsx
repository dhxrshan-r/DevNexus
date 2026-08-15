import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        value: '7.93',
        label: 'ECE CGPA',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
            </svg>
        ),
        color: '#818CF8',
    },
    {
        value: '4',
        label: 'Projects Built',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        color: '#38BDF8',
    },
    {
        value: '3',
        label: 'Certifications',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        color: '#34D399',
    },
    {
        value: '2',
        label: 'Internships',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        color: '#FB923C',
    },
    {
        value: '5',
        label: 'Achievements',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 0 1-12 0V4z" />
                <path d="M6 4H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4M18 4h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4" />
            </svg>
        ),
        color: '#F59E0B',
    },
];

function CountUp({ target, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const num = parseFloat(target);
                    if (isNaN(num)) { setCount(target); return; }
                    let start = 0;
                    const step = Math.max(0.1, num / (duration / 16));
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= num) { setCount(target); clearInterval(timer); }
                        else setCount(start.toFixed(2));
                    }, 24);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{typeof count === 'string' ? count : `${count}${suffix}`}</span>;
}

export default function About() {
    const headerRef = useScrollReveal();
    const textRef = useScrollReveal();
    const statsRef = useScrollReveal({ staggerDelay: 120 });

    return (
        <section
            id="about"
            className="about-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
                    <p className="section-label">Get to know me</p>
                    <h2 className="section-title">About Me</h2>
                </div>

                {/* Text */}
                <div ref={textRef} className="reveal about-desc-container">
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)', lineHeight: 1.8 }}>
                        I'm <strong style={{ color: 'var(--text-primary)' }}>Dharshan</strong>, an Electronics and Communication Engineering graduate from <strong style={{ color: 'var(--text-primary)' }}>RVS College of Engineering, Dindigul</strong> (CGPA: 7.93). 
                        I specialize in <strong style={{ color: 'var(--text-primary)' }}>Python, SQL, Power BI, Data Visualization, ML & DL, LLMs, RAG, and Fine-Tuning</strong>. With a strong foundation in data analysis and Generative AI, I focus on applying analytical and AI techniques to develop data-driven, intelligent solutions.
                    </p>
                </div>

                {/* Modern 5-Card Stats Strip */}
                <div ref={statsRef} className="reveal" style={{ marginTop: 50 }}>
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="reveal-stagger about-stat-card"
                                style={{ '--card-color': stat.color }}
                            >
                                <div className="stat-card-top-bar" />
                                <div className="stat-icon-wrap" style={{ color: stat.color, background: `${stat.color}15`, borderColor: `${stat.color}30` }}>
                                    {stat.icon}
                                </div>
                                <span className="stat-num">
                                    {stat.value.includes('+') ? <CountUp target={stat.value.replace('+', '')} suffix="+" /> : stat.value}
                                </span>
                                <span className="stat-text">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .about-desc-container {
                    max-width: 840px;
                    margin: 0 auto 60px;
                    text-align: center;
                    padding: 36px 44px;
                    background: rgba(18, 24, 20, 0.6);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
                }

                .about-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .about-stat-card {
                    position: relative;
                    text-align: center;
                    padding: 32px 18px 28px;
                    border-radius: 24px;
                    background: rgba(18, 24, 20, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    will-change: transform, opacity;
                }

                .stat-card-top-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--card-color), transparent);
                    opacity: 0.4;
                    transition: opacity 0.3s ease;
                }

                .stat-icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.35rem;
                    border: 1px solid;
                    margin-bottom: 16px;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }

                .about-stat-card:hover {
                    background: rgba(255, 255, 255, 0.045);
                    border-color: var(--card-color);
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 25px calc(var(--card-color) * 0.25);
                }

                .about-stat-card:hover .stat-card-top-bar {
                    opacity: 1;
                }

                .about-stat-card:hover .stat-icon-wrap {
                    transform: scale(1.15) rotate(5deg);
                    box-shadow: 0 0 20px var(--card-color);
                }

                .stat-num {
                    font-size: 2.35rem;
                    font-weight: 900;
                    font-family: 'Outfit', sans-serif;
                    background: linear-gradient(135deg, #ffffff 40%, var(--card-color) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 6px;
                    display: block;
                    line-height: 1;
                    transition: transform 0.3s ease;
                }

                .stat-text {
                    font-size: 0.725rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-secondary);
                    transition: color 0.3s ease;
                }

                .about-stat-card:hover .stat-text {
                    color: var(--text-primary);
                }

                @media (max-width: 1024px) {
                    .about-stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 16px;
                    }
                    .about-stat-card:nth-child(4),
                    .about-stat-card:nth-child(5) {
                        grid-column: span 1;
                    }
                }

                @media (max-width: 640px) {
                    .about-section { padding: 60px 0 !important; }
                    .about-desc-container {
                        max-width: 100%;
                        padding: 20px 16px;
                        margin-bottom: 36px;
                        text-align: left;
                    }
                    .about-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                    }
                    .about-stat-card:last-child {
                        grid-column: span 2;
                        max-width: 100%;
                        margin: 0 auto;
                        width: 100%;
                    }
                    .about-stat-card { padding: 20px 12px 16px; border-radius: 16px; }
                    .stat-num { font-size: 1.65rem; }
                    .stat-icon-wrap { width: 36px; height: 36px; font-size: 1rem; margin-bottom: 10px; }
                    .stat-text { font-size: 0.65rem; letter-spacing: 0.08em; }
                }
            `}</style>
        </section>
    );
}


