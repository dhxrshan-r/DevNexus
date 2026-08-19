import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const roles = [
    "Generative AI & RAG Developer",
    "Data Analyst & Power BI Specialist",
    "Computer Vision & ADAS Developer",
    "ECE Graduate"
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
                padding: 'clamp(90px, 12vh, 130px) 0 clamp(40px, 6vh, 90px)',
            }}
        >
            {/* Ambient Glow & Grid Background */}
            <div className="hero-aurora-bg">
                <div className="hero-grid-pattern" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
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
                    <div className="terminal-inner hud-box">
                        <div className="hud-corner-tl" />
                        <div className="hud-corner-tr" />
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
                        Electronics & Communication Engineering Graduate specializing in <strong style={{ color: 'var(--text-primary)' }}>Generative AI & RAG</strong>, <strong style={{ color: 'var(--text-primary)' }}>Data Analytics & Power BI</strong>, and <strong style={{ color: 'var(--text-primary)' }}>Computer Vision</strong>.
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
                    <a href="/resume.pdf" download="Dharshan_R_Resume.pdf" className="btn btn-outline hero-btn">
                        <FiDownload /> Download Resume
                    </a>

                    <div className="hero-social-divider" />

                    <div style={{ display: 'flex', gap: 14 }}>
                        <a 
                            href="https://github.com/dhxrshan-r" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub" 
                            className="hero-social-icon github-icon"
                        >
                            <SiGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/dharshanr6/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn" 
                            className="hero-social-icon linkedin-icon"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                /* Background Aurora Orbs & Grid */
                .hero-cyber-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 18px;
                    border-radius: 9999px;
                    background: rgba(11, 13, 25, 0.85);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.25);
                    margin-bottom: 24px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .hero-cyber-status.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }
                .hud-status-txt {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.725rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #06b6d4;
                }

                .hero-aurora-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                    background: 
                        radial-gradient(ellipse 700px 450px at 50% 25%, rgba(168, 85, 247, 0.16), transparent 70%),
                        radial-gradient(ellipse 550px 380px at 85% 65%, rgba(6, 182, 212, 0.12), transparent 70%);
                }
                .hero-grid-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px);
                    background-size: 32px 32px;
                    -webkit-mask-image: radial-gradient(ellipse 80% 75% at 50% 40%, #000 30%, transparent 85%);
                    mask-image: radial-gradient(ellipse 80% 75% at 50% 40%, #000 30%, transparent 85%);
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
                    max-width: 100%;
                }
                .hero-name-stage.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-name-title {
                    font-size: clamp(2.25rem, 8.5vw, 6.5rem);
                    font-family: 'Outfit', sans-serif;
                    font-weight: 900;
                    text-transform: uppercase;
                    line-height: 0.95;
                    letter-spacing: -0.03em;
                    margin: 0 0 16px 0;
                    position: relative;
                    word-break: break-word;
                }
                .name-text-primary {
                    background: linear-gradient(180deg, #ffffff 20%, #94a3b8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .name-text-accent {
                    color: var(--accent);
                    -webkit-text-fill-color: var(--accent);
                    background: none;
                }

                /* CYBER TERMINAL ROLE ROTATOR */
                .hero-terminal-rotator {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 28px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s ease 0.3s;
                    max-width: 100%;
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
                    background: rgba(11, 13, 25, 0.85);
                    border: 1px solid rgba(168, 85, 247, 0.25);
                    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 8px 24px -8px rgba(168, 85, 247, 0.3);
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: clamp(0.75rem, 2.4vw, 1.05rem);
                    max-width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .terminal-prompt {
                    color: rgba(248, 250, 252, 0.4);
                    white-space: nowrap;
                }
                .terminal-command {
                    color: #06b6d4;
                    margin-right: 8px;
                    white-space: nowrap;
                }
                .terminal-role {
                    color: #a855f7;
                    font-weight: 700;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    display: inline-block;
                    white-space: nowrap;
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
                    color: #06b6d4;
                    margin-left: 4px;
                    font-weight: 900;
                    animation: blink 1s step-start infinite;
                }
                @keyframes blink { 50% { opacity: 0; } }

                .glow-btn {
                    box-shadow: 0 0 24px rgba(168, 85, 247, 0.35);
                }
                .glow-btn:hover {
                    box-shadow: 0 0 35px rgba(6, 182, 212, 0.5);
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
                    box-shadow: 0 0 20px var(--accent-glow);
                }

                /* Metrics Strip */
                .hero-metrics-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 24px 32px;
                    background: rgba(11, 13, 25, 0.6);
                    border: 1px solid rgba(168, 85, 247, 0.2);
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
                    background: linear-gradient(135deg, #ffffff 20%, #a855f7 60%, #06b6d4 100%);
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
                    .hero-metrics-strip { grid-template-columns: 1fr; gap: 16px; text-align: center; padding: 18px 16px; }
                    .hero-metric-card { justify-content: center; }
                    .hero-social-divider { display: none; }
                }
                @media (max-width: 767px) {
                    .hero-section { padding: 80px 0 40px !important; }
                    .hero-actions-row { flex-direction: column !important; gap: 14px !important; }
                    .hero-btn { width: 100% !important; max-width: 280px !important; }
                    .hero-name-title { font-size: clamp(2.25rem, 9.5vw, 3.5rem) !important; }
                    .terminal-inner { padding: 8px 14px !important; font-size: clamp(0.72rem, 3.1vw, 0.88rem) !important; white-space: nowrap !important; }
                }
                @media (max-width: 520px) {
                    .terminal-prompt { display: none !important; }
                    .terminal-inner { padding: 6px 12px !important; font-size: clamp(0.68rem, 3.4vw, 0.82rem) !important; }
                }
            `}</style>
        </section>
    );
}


