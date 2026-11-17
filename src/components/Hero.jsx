import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const roles = [
    "Generative AI & RAG Developer",
    "Data Analyst & Power BI Specialist",
    "Feature Engineering & ML Practitioner",
    "Computer Vision & ADAS Developer",
    "ECE Graduate (7.93 CGPA)"
];

const metrics = [
    { value: '7.93', label: 'B.E ECE CGPA', detail: 'RVS College of Engineering' },
    { value: '4', label: 'AI & Data Projects', detail: 'RAG, SQL, Power BI & ADAS' },
    { value: '2', label: 'Technical Internships', detail: 'Popular Systems & CodeAlpha' },
    { value: '4', label: 'Verified Certifications', detail: 'GenAI, Anthropic, Power BI, FSD' },
];

const techPills = [
    "Generative AI",
    "RAG Architecture",
    "LangChain",
    "Prompt Engineering",
    "Fine-Tuning LLM",
    "Python",
    "SQL (MySQL)",
    "Power BI & Power Query",
    "Feature Engineering",
    "Computer Vision & OpenCV",
    "ADAS Designing",
    "Embedded C"
];

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 120);
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
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                {/* Status Indicator Pill */}
                <div className={`hero-status-pill ${loaded ? 'revealed' : ''}`}>
                    <span className="status-beacon" />
                    <span className="status-text">Available for Full-time Roles & AI Projects</span>
                </div>

                {/* Main Name Heading */}
                <div className={`hero-name-stage ${loaded ? 'revealed' : ''}`}>
                    <p className="hero-greeting">ENGINEERING INTELLIGENT SYSTEMS & DATA SOLUTIONS</p>
                    <h1 className="hero-name-title">
                        <span className="name-text-primary">Dharshan</span>
                        <span className="name-text-accent"> R</span>
                    </h1>
                </div>

                {/* Modern Dynamic Role Badge */}
                <div className={`hero-role-stage ${loaded ? 'revealed' : ''}`}>
                    <div className="hero-role-pill">
                        <span className="role-sparkle">✦</span>
                        <span className="role-prefix">Specializing in</span>
                        <span className={`role-text ${fade ? 'fade-in' : 'fade-out'}`}>
                            {roles[roleIndex]}
                        </span>
                    </div>
                </div>

                {/* Bio Summary */}
                <div className={`hero-bio-container ${loaded ? 'revealed' : ''}`}>
                    <p className="hero-bio-text">
                        Electronics & Communication Engineering Graduate from <strong className="highlight-text">RVS College of Engineering (7.93 CGPA)</strong> with hands-on expertise building production-grade <strong className="highlight-text">Generative AI & RAG solutions</strong>, interactive <strong className="highlight-text">SQL & Power BI analytics pipelines</strong>, and real-time <strong className="highlight-text">Computer Vision ADAS</strong> systems.
                    </p>
                </div>

                {/* CTAs & Social Links Row */}
                <div className={`hero-actions-row ${loaded ? 'revealed' : ''}`}>
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        className="btn btn-primary hero-btn glow-btn"
                    >
                        Explore Featured Work <FiArrowDownRight style={{ fontSize: '1.2rem' }} />
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Dharshan_R_Resume.pdf"
                        className="btn btn-outline hero-btn"
                    >
                        <FiDownload /> Download Resume
                    </a>

                    <div className="hero-social-divider" />

                    <div className="hero-socials-group">
                        <a 
                            href="https://github.com/dhxrshan-r" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub Profile" 
                            className="hero-social-icon"
                        >
                            <SiGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/dharshanr6/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn Profile" 
                            className="hero-social-icon"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="mailto:dhxrshanr@gmail.com" 
                            aria-label="Send Email" 
                            className="hero-social-icon"
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>

                {/* Hero Metrics Bento Strip */}
                <div className={`hero-metrics-strip ${loaded ? 'revealed' : ''}`}>
                    {metrics.map((m, idx) => (
                        <div key={idx} className="hero-metric-card">
                            <span className="metric-val">{m.value}</span>
                            <div className="metric-text-wrap">
                                <span className="metric-label">{m.label}</span>
                                <span className="metric-detail">{m.detail}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Tech Pills Marquee */}
                <div className={`hero-tech-strip ${loaded ? 'revealed' : ''}`}>
                    <div className="tech-pills-wrap">
                        {techPills.map((tech, idx) => (
                            <span key={idx} className="tech-pill-chip">
                                <span className="tech-pill-dot" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    padding: clamp(110px, 16vh, 160px) 0 clamp(60px, 8vh, 100px);
                }

                .hero-container {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                /* Status Pill */
                .hero-status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 18px;
                    border-radius: 9999px;
                    background: rgba(24, 24, 27, 0.65);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    margin-bottom: 24px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .hero-status-pill.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .status-beacon {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 10px #22c55e;
                    animation: pulseGlow 2s infinite ease-in-out;
                }

                .status-text {
                    font-size: 0.775rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    color: #e4e4e7;
                }

                /* Hero Name Stage */
                .hero-name-stage {
                    margin-bottom: 20px;
                    opacity: 0;
                    transform: translateY(28px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
                }

                .hero-name-stage.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-greeting {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #a5b4fc;
                    margin-bottom: 14px;
                }

                .hero-name-title {
                    font-size: clamp(2.8rem, 8.5vw, 6rem);
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.035em;
                    margin: 0;
                }

                .name-text-primary {
                    background: linear-gradient(180deg, #ffffff 40%, #a1a1aa 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .name-text-accent {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* Modern Dynamic Role Badge */
                .hero-role-stage {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 28px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
                    max-width: 100%;
                }

                .hero-role-stage.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-role-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 24px;
                    border-radius: 9999px;
                    background: rgba(18, 18, 24, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(16px);
                    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    font-size: clamp(0.85rem, 2.5vw, 1.05rem);
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 100%;
                }

                .role-sparkle {
                    color: #818cf8;
                    font-size: 0.95rem;
                }

                .role-prefix {
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .role-text {
                    background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .role-text.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .role-text.fade-out {
                    opacity: 0;
                    transform: translateY(4px);
                }

                /* Bio */
                .hero-bio-container {
                    max-width: 780px;
                    margin-bottom: 38px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
                }

                .hero-bio-container.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-bio-text {
                    font-size: clamp(0.95rem, 2.4vw, 1.15rem);
                    color: var(--text-secondary);
                    line-height: 1.75;
                    margin: 0;
                }

                .highlight-text {
                    color: #ffffff;
                    font-weight: 600;
                }

                /* Actions Row */
                .hero-actions-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 56px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
                }

                .hero-actions-row.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .glow-btn {
                    box-shadow: 0 0 25px rgba(99, 102, 241, 0.4);
                }

                .hero-social-divider {
                    width: 1px;
                    height: 32px;
                    background: var(--border);
                    margin: 0 6px;
                }

                .hero-socials-group {
                    display: flex;
                    gap: 12px;
                }

                .hero-social-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .hero-social-icon:hover {
                    color: #ffffff;
                    border-color: var(--accent);
                    background: rgba(99, 102, 241, 0.15);
                    transform: translateY(-3px);
                    box-shadow: 0 0 20px var(--accent-glow);
                }

                /* Metrics Bento Strip */
                .hero-metrics-strip {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    width: 100%;
                    max-width: 1050px;
                    margin: 0 auto 36px;
                    padding: 24px 28px;
                    background: rgba(18, 18, 24, 0.7);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 24px;
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
                }

                .hero-metrics-strip.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-metric-card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    text-align: left;
                    padding: 8px 12px;
                    border-radius: 14px;
                    transition: background 0.3s ease;
                }

                .hero-metric-card:hover {
                    background: rgba(255, 255, 255, 0.03);
                }

                .metric-val {
                    font-size: 2.25rem;
                    font-weight: 900;
                    font-family: 'Outfit', sans-serif;
                    background: linear-gradient(135deg, #ffffff 30%, #818cf8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .metric-text-wrap {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .metric-label {
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                }

                .metric-detail {
                    font-size: 0.7rem;
                    color: var(--text-secondary);
                    line-height: 1.3;
                }

                /* Tech Marquee */
                .hero-tech-strip {
                    width: 100%;
                    max-width: 1050px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
                }

                .hero-tech-strip.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }

                .tech-pills-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                }

                .tech-pill-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                }

                .tech-pill-chip:hover {
                    color: #ffffff;
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(99, 102, 241, 0.1);
                    transform: translateY(-2px);
                }

                .tech-pill-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #6366f1;
                }

                @media (max-width: 991px) {
                    .hero-metrics-strip { grid-template-columns: repeat(2, 1fr); gap: 14px; }
                }

                @media (max-width: 640px) {
                    .hero-section { padding: 90px 0 50px !important; }
                    .hero-name-title { font-size: clamp(2.2rem, 9.5vw, 3.8rem) !important; }
                    .hero-actions-row { flex-direction: column !important; gap: 12px !important; }
                    .hero-btn { width: 100% !important; max-width: 290px !important; }
                    .hero-social-divider { display: none !important; }
                    .terminal-prompt { display: none !important; }
                    .hero-metrics-strip { grid-template-columns: 1fr; gap: 12px; padding: 18px 16px; }
                    .hero-metric-card { justify-content: flex-start; }
                }
            `}</style>
        </section>
    );
}
