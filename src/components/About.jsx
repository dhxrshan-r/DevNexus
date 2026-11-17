import { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCpu, FiBarChart2, FiAward, FiGlobe, FiLayers, FiCheckCircle } from 'react-icons/fi';

const stats = [
    { value: '7.93', label: 'B.E ECE CGPA', suffix: '', color: '#6366f1' },
    { value: '4', label: 'AI & Data Projects', suffix: '+', color: '#8b5cf6' },
    { value: '4', label: 'Certifications', suffix: '', color: '#3b82f6' },
    { value: '2', label: 'Internships', suffix: '', color: '#a855f7' },
    { value: '5', label: 'Awards & Honors', suffix: '', color: '#06b6d4' },
];

function CountUp({ target, duration = 1800, suffix = '' }) {
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
                        if (start >= num) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(target.includes('.') ? start.toFixed(2) : Math.floor(start));
                        }
                    }, 24);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{typeof count === 'string' ? count : `${count}${suffix}`}</span>;
}

export default function About() {
    const headerRef = useScrollReveal();
    const bentoRef = useScrollReveal({ staggerDelay: 100 });

    return (
        <section id="about" className="about-section">
            <div className="container">
                {/* Section Header */}
                <div ref={headerRef} className="reveal about-header">
                    <div className="section-header-pill">
                        <FiLayers />
                        <span>Background & Expertise</span>
                    </div>
                    <h2 className="section-title">Bridging AI, Data & Hardware</h2>
                    <p className="section-subtitle">
                        Passionate about architecting end-to-end intelligent systems, from state-of-the-art LLM RAG pipelines to real-time embedded sensor solutions.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div ref={bentoRef} className="reveal bento-grid">
                    {/* Bento Card 1: Main Story (Spans 2 columns) */}
                    <div className="bento-card bento-card-main">
                        <div className="bento-card-inner">
                            <span className="bento-badge">ACADEMIC FOUNDATION</span>
                            <h3 className="bento-title">Electronics & Communication Engineer</h3>
                            <p className="bento-desc">
                                I graduated from <strong className="text-white">RVS College of Engineering, Dindigul</strong> with a <strong className="text-white">7.93 CGPA</strong>. My technical journey combines rigorous electrical engineering fundamentals with modern computational intelligence: <strong className="text-white">Python, SQL, Generative AI, RAG, and Feature Engineering</strong>.
                            </p>
                            <p className="bento-desc">
                                Driven by curiosity and technical rigor, I specialize in transforming unstructured raw data into actionable enterprise insights and building reliable, production-ready AI applications that solve real-world problems.
                            </p>
                            <div className="bento-tag-row">
                                <span className="bento-tag">RVS College of Engineering</span>
                                <span className="bento-tag">B.E ECE 2022 - 2026</span>
                                <span className="bento-tag">CGPA 7.93</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Card 2: Generative AI & RAG */}
                    <div className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon-box" style={{ color: '#6366f1', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                                <FiCpu />
                            </div>
                            <span className="bento-badge">CORE FOCUS</span>
                            <h3 className="bento-title">Generative AI & RAG</h3>
                            <p className="bento-desc">
                                Architecting Retrieval-Augmented Generation workflows with LangChain, optimizing embeddings, prompt engineering, and fine-tuning LLMs for grounded enterprise intelligence.
                            </p>
                            <div className="bento-check-list">
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>LangChain RAG Pipelines & Vector DBs</span>
                                </div>
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>Prompt Engineering & Fine-Tuning</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento Card 3: Data Analytics & SQL */}
                    <div className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon-box" style={{ color: '#8b5cf6', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                                <FiBarChart2 />
                            </div>
                            <span className="bento-badge">DATA ANALYTICS</span>
                            <h3 className="bento-title">SQL & Power BI Insights</h3>
                            <p className="bento-desc">
                                Proficient in relational data wrangling using MySQL, complex data aggregation, Power Query ETL pipelines, and interactive executive KPI dashboard design.
                            </p>
                            <div className="bento-check-list">
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>Complex MySQL Queries & Data Modeling</span>
                                </div>
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>Interactive Power BI Executive KPIs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento Card 4: Hardware & Computer Vision */}
                    <div className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon-box" style={{ color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                                <FiAward />
                            </div>
                            <span className="bento-badge">COMPUTER VISION & ADAS</span>
                            <h3 className="bento-title">Embedded AI & Vision</h3>
                            <p className="bento-desc">
                                Experienced in computer vision processing with OpenCV and Dlib for real-time driver drowsiness monitoring, combined with sensor assembly, calibration, and Embedded C interfacing.
                            </p>
                            <div className="bento-check-list">
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>Real-time EAR & Head Pose Tracking</span>
                                </div>
                                <div className="bento-check-item">
                                    <FiCheckCircle className="check-ico" />
                                    <span>Sensor Calibration & Industrial Hardware</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento Card 5: Multilingual Communication (Spans 2 columns) */}
                    <div className="bento-card bento-card-wide">
                        <div className="bento-card-inner">
                            <div className="lang-header-row">
                                <div className="bento-icon-box" style={{ color: '#06B6D4', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                                    <FiGlobe />
                                </div>
                                <div>
                                    <span className="bento-badge">GLOBAL COLLABORATION</span>
                                    <h3 className="bento-title" style={{ margin: 0 }}>Multilingual Communication</h3>
                                </div>
                            </div>
                            <p className="bento-desc" style={{ marginTop: 12 }}>
                                Effective communication across regional and international technical teams with proficiency in three languages:
                            </p>
                            <div className="lang-cards-grid">
                                <div className="lang-badge-card">
                                    <div className="lang-card-top">
                                        <span className="lang-card-name">Tamil</span>
                                        <span className="lang-card-pill">LSWR • Native</span>
                                    </div>
                                    <span className="lang-card-desc">Listening, Speaking, Reading, Writing</span>
                                </div>
                                <div className="lang-badge-card">
                                    <div className="lang-card-top">
                                        <span className="lang-card-name">English</span>
                                        <span className="lang-card-pill">LSWR • Professional</span>
                                    </div>
                                    <span className="lang-card-desc">Full Professional Working Proficiency</span>
                                </div>
                                <div className="lang-badge-card">
                                    <div className="lang-card-top">
                                        <span className="lang-card-name">Telugu</span>
                                        <span className="lang-card-pill">LS • Mother Tongue</span>
                                    </div>
                                    <span className="lang-card-desc">Native Listening & Speaking Fluency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Stats Strip */}
                <div className="about-stats-strip">
                    <div className="stats-strip-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="stat-strip-item">
                                <span className="stat-strip-val" style={{ color: s.color }}>
                                    <CountUp target={s.value} suffix={s.suffix} />
                                </span>
                                <span className="stat-strip-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    padding: 120px 0 100px;
                    position: relative;
                }

                .about-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                /* Bento Grid */
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    max-width: 1140px;
                    margin: 0 auto 40px;
                }

                .bento-card {
                    background: rgba(18, 18, 24, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 32px 28px;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .bento-card:hover {
                    border-color: rgba(99, 102, 241, 0.35);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(99, 102, 241, 0.15);
                    transform: translateY(-4px);
                }

                .bento-card-main {
                    grid-column: span 2;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(18, 18, 24, 0.85) 60%);
                    border-color: rgba(99, 102, 241, 0.25);
                }

                .bento-card-wide {
                    grid-column: span 3;
                }

                .bento-card-inner {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .bento-badge {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.6875rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #818cf8;
                    margin-bottom: 12px;
                    display: inline-block;
                }

                .bento-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 12px;
                    letter-spacing: -0.02em;
                }

                .bento-desc {
                    font-size: 0.925rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 16px;
                }

                .bento-desc:last-of-type {
                    margin-bottom: 20px;
                }

                .text-white {
                    color: #ffffff;
                }

                .bento-tag-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: auto;
                }

                .bento-tag {
                    font-size: 0.725rem;
                    font-weight: 600;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                }

                .bento-icon-box {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.35rem;
                    margin-bottom: 18px;
                }

                .bento-check-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: auto;
                    padding-top: 12px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                .bento-check-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.825rem;
                    font-weight: 600;
                    color: #e2e8f0;
                }

                .check-ico {
                    color: #6366f1;
                    font-size: 0.95rem;
                    flex-shrink: 0;
                }

                /* Languages row inside card */
                .lang-header-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .lang-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                    margin-top: 16px;
                }

                .lang-badge-card {
                    background: rgba(255, 255, 255, 0.025);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 16px;
                    padding: 16px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    transition: all 0.3s ease;
                }

                .lang-badge-card:hover {
                    border-color: rgba(6, 182, 212, 0.4);
                    background: rgba(6, 182, 212, 0.05);
                    transform: translateY(-2px);
                }

                .lang-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .lang-card-name {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                }

                .lang-card-pill {
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: #06b6d4;
                    background: rgba(6, 182, 212, 0.12);
                    border: 1px solid rgba(6, 182, 212, 0.3);
                    padding: 2px 10px;
                    border-radius: 9999px;
                }

                .lang-card-desc {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                }

                /* Stats Strip */
                .about-stats-strip {
                    max-width: 1140px;
                    margin: 0 auto;
                    padding: 28px 36px;
                    background: rgba(18, 18, 24, 0.85);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 24px;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
                }

                .stats-strip-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    align-items: center;
                }

                .stat-strip-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 6px;
                }

                .stat-strip-val {
                    font-family: 'Outfit', sans-serif;
                    font-size: 2.35rem;
                    font-weight: 900;
                    line-height: 1;
                }

                .stat-strip-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: var(--text-secondary);
                }

                @media (max-width: 991px) {
                    .bento-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .bento-card-main {
                        grid-column: span 2;
                    }
                    .bento-card-wide {
                        grid-column: span 2;
                    }
                    .stats-strip-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 24px;
                    }
                }

                @media (max-width: 640px) {
                    .about-section { padding: 80px 0 60px !important; }
                    .bento-grid { grid-template-columns: 1fr; gap: 16px; }
                    .bento-card-main, .bento-card-wide { grid-column: span 1; }
                    .bento-card { padding: 24px 20px; }
                    .lang-cards-grid { grid-template-columns: 1fr; }
                    .stats-strip-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
                    .stat-strip-val { font-size: 1.85rem; }
                }
            `}</style>
        </section>
    );
}
