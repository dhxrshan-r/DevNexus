import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiArrowDownRight, FiFileText } from 'react-icons/fi';

const roles = [
    "Generative AI & RAG Developer",
    "Data Analyst & Power BI Specialist",
    "Computer Vision & ADAS Developer",
    "ECE Graduate (CGPA 7.93)"
];

const metrics = [
    { value: '7.93', label: 'B.E ECE CGPA', detail: 'RVS College of Engineering' },
    { value: '4', label: 'AI & Data Projects', detail: 'RAG, SQL, Power BI & ADAS' },
    { value: '2', label: 'Technical Internships', detail: 'Popular Systems & CodeAlpha' },
];

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 300);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    const handleScroll = (e, target) => {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="hero-section"
            style={{
                background: 'transparent',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '130px 0 90px',
            }}
        >
            {/* Ambient Aurora Glow Background Orbs */}
            <div className="hero-aurora-bg">
                <div className="aurora-orb orb-1" />
                <div className="aurora-orb orb-2" />
                <div className="hero-grid-pattern" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                
                {/* Available Status Pill */}
                <div
                    className={loaded ? 'hero-pill-loaded' : 'hero-hidden'}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '8px 22px',
                        borderRadius: 9999,
                        background: 'rgba(52, 211, 153, 0.08)',
                        border: '1px solid rgba(52, 211, 153, 0.3)',
                        backdropFilter: 'blur(10px)',
                        marginBottom: 32,
                        transition: 'all 0.7s ease',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        boxShadow: '0 0 20px rgba(52, 211, 153, 0.15)',
                    }}
                >
                    <span className="live-status-dot" />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em' }}>
                        Available for AI & Data Analyst Roles
                    </span>
                </div>

                {/* CLEAN & BOLD NAME SECTION */}
                <div className={`hero-name-stage ${loaded ? 'revealed' : ''}`}>
                    {/* Main Name Heading with Holographic Gradient */}
                    <h1 className="hero-name-title">
                        <span className="name-text-primary">DHARSHAN</span>
                        <span className="name-text-accent"> R</span>
                    </h1>
                </div>

                {/* Cyber Terminal Role Rotator */}
                <div className={`hero-terminal-rotator ${loaded ? 'revealed' : ''}`}>
                    <div className="terminal-inner">
                        <span className="terminal-prompt">user@devnexus:~$&nbsp;</span>
                        <span className="terminal-command">const role =</span>
                        <span className={`terminal-role ${fade ? 'fade-in' : 'fade-out'}`}>
                            "{roles[roleIndex]}"
                        </span>
                        <span className="terminal-cursor">|</span>
                    </div>
                </div>

                {/* Main Bio Paragraph */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 20,
                        marginBottom: 44,
                        transition: 'all 0.7s ease 0.4s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <p
                        style={{
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            maxWidth: 780,
                            margin: 0,
                        }}
                    >
                        Electronics & Communication Engineering Graduate (CGPA 7.93). Developing intelligent <strong style={{ color: 'var(--text-primary)' }}>RAG Medical Assistants</strong>, interactive <strong style={{ color: 'var(--text-primary)' }}>SQL & Power BI Dashboards</strong>, and real-time <strong style={{ color: 'var(--text-primary)' }}>Computer Vision ADAS Systems</strong>.
                    </p>
                </div>

                {/* CTAs & Social Links */}
                <div
                    className="hero-actions-row"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 60,
                        transition: 'all 0.7s ease 0.5s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="btn btn-primary hero-btn glow-btn">
                        Explore Featured Work <FiArrowDownRight style={{ fontSize: '1.2rem' }} />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn">
                        <FiFileText /> View Resume
                    </a>

                    <div className="hero-social-divider" />

                    <div style={{ display: 'flex', gap: 14 }}>
                        <a 
                            href="https://github.com/dhxrshan-r" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub" 
                            className="hero-social-icon"
                        >
                            <FiGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/dharshanr6/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn" 
                            className="hero-social-icon linkedin-icon"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>

                {/* Floating Metric Banner Strip */}
                <div
                    className="hero-metrics-strip"
                    style={{
                        transition: 'all 0.7s ease 0.6s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    {metrics.map((m, i) => (
                        <div key={i} className="hero-metric-card">
                            <span className="metric-val">{m.value}</span>
                            <div className="metric-text-wrap">
                                <span className="metric-label">{m.label}</span>
                                <span className="metric-detail">{m.detail}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                /* Background Aurora Orbs & Grid */
                .hero-aurora-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                    overflow: hidden;
                }
                .aurora-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.15;
                    animation: orb-float 14s infinite ease-in-out alternate;
                }
                .orb-1 {
                    width: 500px;
                    height: 500px;
                    background: var(--accent);
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .orb-2 {
                    width: 400px;
                    height: 400px;
                    background: #3b82f6;
                    bottom: -150px;
                    right: 10%;
                    animation-delay: -7s;
                }
                @keyframes orb-float {
                    0% { transform: translate(-50%, 0) scale(1); }
                    100% { transform: translate(-45%, 30px) scale(1.15); }
                }
                .hero-grid-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
                    background-size: 32px 32px;
                    opacity: 0.4;
                }

                .live-status-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--accent);
                    border-radius: 50%;
                    box-shadow: 0 0 12px var(--accent);
                    animation: status-pulse 2s infinite ease-in-out;
                }
                @keyframes status-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.6); opacity: 0.4; }
                }

                /* NAME STAGE REDESIGN */
                .hero-name-stage {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 28px;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
                }
                .hero-name-stage.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .name-code-wrapper {
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
                .name-code-bracket {
                    color: var(--accent);
                }
                .name-code-text {
                    color: rgba(255, 255, 255, 0.6);
                    margin: 0 4px;
                }

                .hero-name-title {
                    font-size: clamp(3.75rem, 11vw, 7.5rem);
                    font-family: 'Outfit', sans-serif;
                    font-weight: 900;
                    text-transform: uppercase;
                    line-height: 0.92;
                    letterSpacing: -0.04em;
                    margin: 0 0 16px 0;
                    position: relative;
                }
                .name-text-primary {
                    background: linear-gradient(180deg, #ffffff 20%, #a1a1aa 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 35px rgba(255, 255, 255, 0.15));
                }
                .name-text-accent {
                    background: linear-gradient(135deg, var(--accent) 30%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 25px var(--accent-faded));
                }

                .name-badge-strip {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 18px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(8px);
                    font-size: 0.725rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    color: var(--text-secondary);
                }
                .badge-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--accent);
                }
                .badge-label {
                    color: var(--text-primary);
                }
                .badge-divider {
                    color: rgba(255, 255, 255, 0.2);
                }
                .badge-sub {
                    color: var(--accent);
                }

                /* Floating Tech Badges (Desktop) */
                .floating-tags-container {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }
                .floating-tag {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 9999px;
                    background: rgba(10, 10, 10, 0.75);
                    border: 1px solid;
                    backdrop-filter: blur(12px);
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #ffffff;
                    pointer-events: auto;
                    transition: transform 0.3s ease;
                    animation: float-tag 6s ease-in-out infinite alternate;
                }
                .floating-tag:hover {
                    transform: scale(1.08) translateY(-4px);
                }
                .tag-pos-0 { animation-delay: 0s; }
                .tag-pos-1 { animation-delay: -1.5s; }
                .tag-pos-2 { animation-delay: -3s; }
                .tag-pos-3 { animation-delay: -4.5s; }

                @keyframes float-tag {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-10px); }
                }

                /* CYBER TERMINAL ROLE ROTATOR */
                .hero-terminal-rotator {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 28px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s ease 0.3s;
                }
                .hero-terminal-rotator.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }
                .terminal-inner {
                    display: inline-flex;
                    align-items: center;
                    padding: 10px 24px;
                    border-radius: 12px;
                    background: rgba(5, 5, 5, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 8px 24px -8px rgba(0, 0, 0, 0.5);
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: clamp(0.875rem, 2vw, 1.05rem);
                }
                .terminal-prompt {
                    color: rgba(255, 255, 255, 0.35);
                }
                .terminal-command {
                    color: #38bdf8;
                    margin-right: 8px;
                }
                .terminal-role {
                    color: var(--accent);
                    font-weight: 700;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    display: inline-block;
                }
                .terminal-role.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                .terminal-role.fade-out {
                    opacity: 0;
                    transform: translateY(4px);
                }
                .terminal-cursor {
                    color: var(--accent);
                    margin-left: 4px;
                    font-weight: 900;
                    animation: blink 1s step-start infinite;
                }
                @keyframes blink { 50% { opacity: 0; } }

                .glow-btn {
                    box-shadow: 0 0 20px var(--accent-faded);
                }
                .glow-btn:hover {
                    box-shadow: 0 0 30px var(--accent-faded);
                }

                .hero-social-divider {
                    width: 1px;
                    height: 32px;
                    background: var(--border);
                    margin: 0 8px;
                }
                .hero-social-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.35rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .hero-social-icon:hover {
                    color: var(--accent);
                    border-color: var(--accent);
                    transform: translateY(-3px);
                    box-shadow: 0 0 15px var(--accent-faded);
                }
                .linkedin-icon:hover {
                    color: #0077b5;
                    border-color: #0077b5;
                    box-shadow: 0 0 15px rgba(0, 119, 181, 0.2);
                }

                /* Metrics Strip */
                .hero-metrics-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 24px 32px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    backdrop-filter: blur(12px);
                }
                .hero-metric-card {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    text-align: left;
                }
                .metric-val {
                    font-size: 2rem;
                    font-weight: 800;
                    font-family: 'Outfit', sans-serif;
                    color: var(--text-primary);
                    background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .metric-text-wrap {
                    display: flex;
                    flex-direction: column;
                }
                .metric-label {
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                }
                .metric-detail {
                    font-size: 0.725rem;
                    color: var(--text-secondary);
                }

                @media (max-width: 1024px) {
                    .floating-tags-container { display: none; }
                }

                @media (max-width: 850px) {
                    .hero-metrics-strip { grid-template-columns: 1fr; gap: 16px; text-align: center; }
                    .hero-metric-card { justify-content: center; }
                    .hero-social-divider { display: none; }
                }
                @media (max-width: 767px) {
                    .hero-section { padding: 90px 0 40px !important; }
                    .hero-actions-row { flex-direction: column !important; gap: 14px !important; }
                    .hero-btn { width: 100% !important; max-width: 280px !important; }
                    .hero-name-title { font-size: 3.5rem !important; }
                    .terminal-inner { padding: 8px 14px !important; font-size: 0.78rem !important; }
                }
            `}</style>
        </section>
    );
}

