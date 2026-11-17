import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
    FiBookOpen, 
    FiBriefcase, 
    FiAward, 
    FiCalendar, 
    FiCheckCircle, 
    FiDownload, 
    FiStar,
    FiShield,
    FiChevronDown
} from 'react-icons/fi';

const resumeItems = [
    {
        id: 'edu-be',
        year: '2022 - 2026',
        title: 'B.E Electronics and Communication Engineering',
        org: 'RVS College of Engineering, Dindigul',
        subtitle: 'CGPA : 7.93',
        description: 'Electronics and Communication Engineering graduate with hands-on skills in Python, SQL, Generative AI, RAG, and Feature Engineering. Skilled in data analysis and developing data-driven solutions, with a strong interest in applying ML and AI techniques to real-world problems.',
        type: 'education',
        icon: <FiBookOpen />,
        skills: [
            { name: 'Generative AI, RAG & LLMs' },
            { name: 'SQL, Power Query & ETL' },
            { name: 'Machine Learning & ADAS Vision' },
        ],
        bullets: [
            'Hands-on specialization in Generative AI, RAG pipelines, Prompt Engineering & Feature Engineering',
            'Coursework in Signal Processing, Embedded C, Sensor Interfacing, SQL & Power BI analytics',
            'Graduated with 7.93 CGPA & active technical symposium leadership'
        ],
        tags: ['Python', 'SQL', 'Generative AI', 'RAG', 'Feature Engineering', 'Embedded C'],
        badgeText: '🎓 B.E DEGREE',
        hash: '0x7F93_ECE'
    },
    {
        id: 'intern-codealpha',
        year: 'Jan 2026',
        title: 'Full stack Development Intern',
        org: 'CodeAlpha — Virtual Internship',
        subtitle: 'Virtual Internship - 1 month',
        description: 'Built application components across frontend, backend, and database layers, applying full-stack development concepts to develop and integrate functional web features.',
        type: 'internship',
        icon: <FiBriefcase />,
        skills: [
            { name: 'Frontend Component Engineering' },
            { name: 'REST API & State Dispatch' },
            { name: 'Database Integration Queries' },
        ],
        bullets: [
            'Built application components across frontend, backend, and database layers',
            'Applied full-stack development concepts to develop and integrate functional web features',
            'Collaborated on API endpoints, state management, and real-time frontend UI feedback'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Full Stack', 'Database Integration'],
        badgeText: '💼 FULL-STACK INTERN',
        hash: '0xCA01_DEV'
    },
    {
        id: 'intern-popular',
        year: 'Aug 2025',
        title: 'Hardware Trainee Intern',
        org: 'Popular Systems — Summer Internship',
        subtitle: 'Summer Internship - 1 month',
        description: 'Gained practical exposure to sensor manufacturing and hardware production processes, including sensor assembly, testing, calibration, quality inspection of sensor-based components.',
        type: 'internship',
        icon: <FiBriefcase />,
        skills: [
            { name: 'Sensor Assembly & Calibration' },
            { name: 'Signal Diagnostic Testing' },
            { name: 'Quality Inspection Standards' },
        ],
        bullets: [
            'Gained practical exposure to sensor manufacturing and hardware production processes',
            'Conducted sensor assembly, testing, calibration, and quality inspection of sensor-based components',
            'Monitored diagnostic signals to ensure hardware reliability and standard compliance'
        ],
        tags: ['Hardware Testing', 'Sensor Calibration', 'Embedded C', 'Quality Inspection'],
        badgeText: '💼 HARDWARE TRAINEE',
        hash: '0xPS08_HW'
    },
    {
        id: 'cert-rvs-genai',
        year: 'Apr - Sep 2026',
        title: 'Specialization Course in Generative AI',
        org: 'RVS CAS, in collaboration with Transform Tech',
        subtitle: 'Specialization Certification',
        description: 'Completed comprehensive specialization in Generative AI architectures, Large Language Models (LLMs), RAG systems, Prompt Engineering, and LLM Fine-Tuning.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'Generative AI & LLM Fine-Tuning' },
            { name: 'RAG Architecture & LangChain' },
            { name: 'Prompt Engineering & NLP' },
        ],
        bullets: [
            'Trained on LLM architectures, context management, prompt engineering, and fine-tuning techniques',
            'Implemented Retrieval-Augmented Generation (RAG) solutions with vector stores and LangChain',
            'Collaborative industrial curriculum delivered by RVS CAS and Transform Tech'
        ],
        tags: ['Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Fine-Tuning LLM', 'LangChain'],
        badgeText: '📜 GEN AI SPECIALIZATION',
        hash: '0xRVS_GENAI'
    },
    {
        id: 'cert-anthropic',
        year: 'March 2026',
        title: 'AI Fluency : Framework & Foundations',
        org: 'Certified by : Anthropic',
        subtitle: 'Official AI Certification',
        description: 'Certified by Anthropic in AI frameworks, foundation models, prompt engineering, and LLM implementation.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'Anthropic Prompt Engineering' },
            { name: 'LLM Context Architecture' },
            { name: 'AI Safety & RAG Design' },
        ],
        bullets: [
            'Mastered LLM prompting frameworks, system instructions, and multi-turn context management',
            'Studied AI safety, retrieval-augmented generation (RAG), and model evaluation standards'
        ],
        tags: ['Anthropic AI', 'Prompt Engineering', 'LLM Frameworks', 'Generative AI'],
        badgeText: '📜 ANTHROPIC CERTIFIED',
        hash: '0xANT_AI'
    },
    {
        id: 'cert-powerbi',
        year: 'Mar - Apr 2025',
        title: 'Power BI Data Analytics',
        org: 'Certified by LOGICPIES',
        subtitle: 'Certified by LOGICPIES',
        description: 'Certified by LOGICPIES in Power BI data visualization, Power Query ETL, data modeling, and business analytics.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'DAX Measures & Calculations' },
            { name: 'Power Query ETL Dataflow' },
            { name: 'Interactive Executive KPIs' },
        ],
        bullets: [
            'Engineered complex DAX measures, automated Power Query ETL pipelines, and interactive dashboards',
            'Transformed raw enterprise datasets into actionable executive insights & KPI scorecards'
        ],
        tags: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Business Intelligence'],
        badgeText: '📜 POWER BI CERTIFIED',
        hash: '0xPBI_DAT'
    },
    {
        id: 'cert-alphafly',
        year: 'Nov - Dec 2024',
        title: 'Full Stack Development',
        org: 'Academy : AlphaFly',
        subtitle: 'Academy : AlphaFly',
        description: 'Certified in modern full-stack web development, frontend components, and backend database integration.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'Full-Stack Architecture' },
            { name: 'Modern CSS & UI Systems' },
            { name: 'Relational DB Schemas' },
        ],
        bullets: [
            'Developed responsive Web Apps using HTML5, CSS3, JavaScript ES6+, and SQL databases',
            'Practiced modern design systems, clean component patterns, and version control workflows'
        ],
        tags: ['Web Development', 'JavaScript', 'HTML/CSS', 'SQL Databases'],
        badgeText: '📜 WEB DEV CERTIFIED',
        hash: '0xALF_WEB'
    },
];

const typeConfig = {
    education: { 
        bg: 'rgba(99, 102, 241, 0.12)', 
        color: '#6366f1', 
        border: 'rgba(99, 102, 241, 0.35)', 
        glow: 'rgba(99, 102, 241, 0.25)',
        label: 'Education'
    },
    internship: { 
        bg: 'rgba(139, 92, 246, 0.12)', 
        color: '#8b5cf6', 
        border: 'rgba(139, 92, 246, 0.35)', 
        glow: 'rgba(139, 92, 246, 0.25)',
        label: 'Internship'
    },
    certification: { 
        bg: 'rgba(59, 130, 246, 0.12)', 
        color: '#3b82f6', 
        border: 'rgba(59, 130, 246, 0.35)', 
        glow: 'rgba(59, 130, 246, 0.25)',
        label: 'Certification'
    },
};

export default function Resume() {
    const headerRef = useScrollReveal();
    const listRef = useScrollReveal({ staggerDelay: 100 });

    const [activeFilter, setActiveFilter] = useState('all');
    // Open cards state - initialize with all card IDs expanded
    const [openCardIds, setOpenCardIds] = useState(resumeItems.map(item => item.id));

    const toggleCardOpen = (id) => {
        setOpenCardIds(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const filteredItems = activeFilter === 'all' 
        ? resumeItems 
        : resumeItems.filter((item) => item.type === activeFilter);

    const counts = {
        all: resumeItems.length,
        education: resumeItems.filter(i => i.type === 'education').length,
        internship: resumeItems.filter(i => i.type === 'internship').length,
        certification: resumeItems.filter(i => i.type === 'certification').length,
    };

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal resume-header">
                    <div className="section-header-pill">
                        <FiBookOpen />
                        <span>Experience & Education</span>
                    </div>
                    <h2 className="section-title">Credentials & Track Record</h2>
                    <p className="resume-subtitle">
                        An integrated journey across academic excellence in ECE, hands-on industrial internships, and specialized AI & Analytics certifications.
                    </p>

                    <div style={{ marginTop: 24 }}>
                        <a
                            href="/resume.pdf"
                            download="Dharshan_R_Resume.pdf"
                            className="btn btn-primary resume-download-btn"
                        >
                            <FiDownload style={{ fontSize: '1.1rem' }} />
                            Download Official Resume PDF
                        </a>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="reveal resume-tabs-wrapper">
                    <div className="resume-tabs-bar">
                        <button
                            className={`resume-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            <span>ALL CREDENTIALS</span>
                            <span className="count-pill">{counts.all}</span>
                        </button>
                        <button
                            className={`resume-tab-btn ${activeFilter === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('education')}
                        >
                            <span>🎓 EDUCATION</span>
                            <span className="count-pill">{counts.education}</span>
                        </button>
                        <button
                            className={`resume-tab-btn ${activeFilter === 'internship' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('internship')}
                        >
                            <span>💼 INTERNSHIPS</span>
                            <span className="count-pill">{counts.internship}</span>
                        </button>
                        <button
                            className={`resume-tab-btn ${activeFilter === 'certification' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('certification')}
                        >
                            <span>📜 CERTIFICATIONS</span>
                            <span className="count-pill">{counts.certification}</span>
                        </button>
                    </div>
                </div>

                {/* Collapsible Showcase Cards */}
                <div ref={listRef} className="reveal resume-cards-list">
                    {filteredItems.map((item) => {
                        const config = typeConfig[item.type];
                        const isOpen = openCardIds.includes(item.id);

                        return (
                            <div
                                key={item.id}
                                className={`resume-showcase-card reveal-stagger ${isOpen ? 'is-open' : 'is-closed'}`}
                                style={{
                                    '--card-color': config.color,
                                    '--card-bg': config.bg,
                                    '--card-border': config.border,
                                    '--card-glow': config.glow,
                                }}
                            >
                                <div className="card-top-bar" />

                                {/* Interactive Card Header Row */}
                                <div 
                                    className="card-header-row"
                                    onClick={() => toggleCardOpen(item.id)}
                                >
                                    <div className="card-icon-box" style={{ color: config.color, background: config.bg, borderColor: config.border }}>
                                        {item.icon}
                                    </div>

                                    <div className="card-header-main">
                                        <div className="card-badge-flex">
                                            <span className="badge-type-pill" style={{ color: config.color, background: config.bg, borderColor: config.border }}>
                                                {item.badgeText}
                                            </span>
                                            <span className="badge-year-pill">
                                                <FiCalendar /> {item.year}
                                            </span>
                                            {item.subtitle && (
                                                <span className="badge-sub-pill">
                                                    <FiStar /> {item.subtitle}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="card-title">{item.title}</h3>
                                        <p className="card-org">{item.org}</p>
                                    </div>

                                    {/* Modern Closing / Dropdown Toggle Button */}
                                    <button
                                        type="button"
                                        className="card-dropdown-toggle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleCardOpen(item.id);
                                        }}
                                        aria-expanded={isOpen}
                                        aria-label={isOpen ? "Collapse card" : "Expand card"}
                                    >
                                        <span className="toggle-text">{isOpen ? 'Close' : 'Details'}</span>
                                        <FiChevronDown className={`dropdown-chevron ${isOpen ? 'open' : ''}`} />
                                    </button>
                                </div>

                                {/* Smooth Collapsible Body */}
                                <div className={`card-collapsible-body ${isOpen ? 'expanded' : ''}`}>
                                    <div className="card-collapsible-inner">
                                        {/* Description */}
                                        <p className="card-description">{item.description}</p>

                                        {/* Competency Skill Badges */}
                                        {item.skills && item.skills.length > 0 && (
                                            <div className="card-section-block">
                                                <h4 className="card-section-title">SKILL COMPETENCIES</h4>
                                                <div className="card-competencies-grid">
                                                    {item.skills.map((s, idx) => (
                                                        <div key={idx} className="competency-card">
                                                            <span 
                                                                className="competency-dot" 
                                                                style={{ 
                                                                    background: config.color,
                                                                    boxShadow: `0 0 8px ${config.color}` 
                                                                }} 
                                                            />
                                                            <span className="competency-name">{s.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Bullet Highlights */}
                                        {item.bullets && item.bullets.length > 0 && (
                                            <div className="card-section-block">
                                                <h4 className="card-section-title">KEY HIGHLIGHTS & DELIVERABLES</h4>
                                                <ul className="card-bullets-list">
                                                    {item.bullets.map((b, idx) => (
                                                        <li key={idx} className="card-bullet-item">
                                                            <span className="check-icon" style={{ color: config.color }}>
                                                                <FiCheckCircle />
                                                            </span>
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Footer & Tags */}
                                        <div className="card-footer-row">
                                            {item.tags && item.tags.length > 0 && (
                                                <div className="card-tags-flex">
                                                    {item.tags.map((t, idx) => (
                                                        <span key={idx} className="tag-chip">
                                                            #{t}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="verification-text">
                                                <FiShield style={{ color: config.color }} />
                                                <span>Verified Credential • {item.hash}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Languages Proficiency Showcase */}
                <div className="reveal resume-languages-banner">
                    <div className="languages-banner-header">
                        <span className="lang-icon">🌐</span>
                        <div>
                            <h4 className="lang-title">Language Proficiency</h4>
                            <p className="lang-sub">Multilingual Communication Capabilities</p>
                        </div>
                    </div>
                    <div className="languages-grid">
                        <div className="language-item">
                            <div className="lang-top">
                                <span className="lang-name">Tamil</span>
                                <span className="lang-badge">LSWR • Fluent</span>
                            </div>
                            <span className="lang-detail">Listening, Speaking, Reading, Writing</span>
                        </div>
                        <div className="language-item">
                            <div className="lang-top">
                                <span className="lang-name">English</span>
                                <span className="lang-badge">LSWR • Professional</span>
                            </div>
                            <span className="lang-detail">Listening, Speaking, Reading, Writing</span>
                        </div>
                        <div className="language-item">
                            <div className="lang-top">
                                <span className="lang-name">Telugu</span>
                                <span className="lang-badge">Mother Tongue • LS</span>
                            </div>
                            <span className="lang-detail">Listening, Speaking</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .resume-languages-banner {
                    max-width: 1050px;
                    margin: 40px auto 0;
                    padding: 24px 32px;
                    background: rgba(18, 18, 24, 0.75);
                    border: 1px solid rgba(99, 102, 241, 0.25);
                    border-radius: 20px;
                    position: relative;
                }

                .languages-banner-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 20px;
                }

                .lang-icon {
                    font-size: 1.8rem;
                }

                .lang-title {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 2px 0;
                }

                .lang-sub {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    margin: 0;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .languages-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }

                .language-item {
                    background: rgba(255, 255, 255, 0.025);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 14px;
                    padding: 14px 18px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    transition: all 0.3s ease;
                }

                .language-item:hover {
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(99, 102, 241, 0.05);
                    transform: translateY(-2px);
                }

                .lang-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                }

                .lang-name {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .lang-badge {
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: #818cf8;
                    background: rgba(99, 102, 241, 0.12);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    padding: 2px 10px;
                    border-radius: 9999px;
                }

                .lang-detail {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                }

                @media (max-width: 768px) {
                    .languages-grid {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }
                    .resume-languages-banner {
                        padding: 18px 16px;
                    }
                }
                .resume-section {
                    padding: 110px 0;
                    background: transparent;
                    position: relative;
                }

                .resume-header {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .resume-subtitle {
                    font-size: clamp(0.9375rem, 2.5vw, 1.1rem);
                    color: var(--text-secondary);
                    max-width: 620px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .resume-download-btn {
                    font-size: 0.8rem !important;
                    padding: 12px 28px !important;
                }

                /* Category Tabs */
                .resume-tabs-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 48px;
                }

                .resume-tabs-bar {
                    display: inline-flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    background: rgba(18, 18, 24, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 8px 12px;
                    border-radius: 9999px;
                    box-shadow: 0 8px 30px -10px rgba(0, 0, 0, 0.5);
                }

                .resume-tab-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    padding: 10px 22px;
                    border-radius: 9999px;
                    font-size: 0.825rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .resume-tab-btn:hover {
                    color: var(--text-primary);
                }

                .resume-tab-btn.active {
                    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.45);
                }

                .count-pill {
                    font-size: 0.7rem;
                    font-weight: 800;
                    padding: 2px 8px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.12);
                    color: currentColor;
                }

                .resume-tab-btn.active .count-pill {
                    background: rgba(255, 255, 255, 0.25);
                    color: #ffffff;
                }

                /* Full-Width Showcase Cards */
                .resume-cards-list {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    max-width: 1050px;
                    margin: 0 auto;
                }

                .resume-showcase-card {
                    background: rgba(18, 18, 24, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 28px 32px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .card-top-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--card-color), transparent);
                    opacity: 0.45;
                    transition: opacity 0.3s ease;
                }

                .resume-showcase-card:hover {
                    border-color: var(--card-border);
                    box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.7), 0 0 25px var(--card-glow);
                }

                .resume-showcase-card:hover .card-top-bar {
                    opacity: 1;
                }

                /* Card Header Row */
                .card-header-row {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    cursor: pointer;
                    user-select: none;
                }

                .card-icon-box {
                    width: 52px;
                    height: 52px;
                    border-radius: 16px;
                    border: 1px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                }

                .card-header-main {
                    flex-grow: 1;
                }

                .card-badge-flex {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 8px;
                }

                .badge-type-pill {
                    font-size: 0.725rem;
                    font-weight: 700;
                    padding: 4px 14px;
                    border-radius: 9999px;
                    border: 1px solid;
                    letter-spacing: 0.05em;
                }

                .badge-year-pill,
                .badge-sub-pill {
                    font-size: 0.725rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 4px 12px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }

                .badge-sub-pill {
                    color: var(--card-color);
                    border-color: var(--card-border);
                }

                .card-title {
                    font-size: clamp(1.15rem, 3vw, 1.5rem);
                    font-weight: 800;
                    color: var(--text-primary);
                    line-height: 1.25;
                    margin-bottom: 4px;
                    transition: color 0.3s ease;
                }

                .card-header-row:hover .card-title {
                    color: var(--card-color);
                }

                .card-org {
                    font-size: 0.925rem;
                    font-weight: 600;
                    color: var(--card-color);
                    margin: 0;
                }

                /* Dropdown Toggle Button */
                .card-dropdown-toggle {
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: var(--text-secondary);
                    padding: 8px 16px;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    flex-shrink: 0;
                }

                .card-header-row:hover .card-dropdown-toggle,
                .card-dropdown-toggle:hover {
                    background: var(--card-bg);
                    border-color: var(--card-border);
                    color: var(--text-primary);
                    box-shadow: 0 0 15px var(--card-glow);
                }

                .dropdown-chevron {
                    font-size: 1.1rem;
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .dropdown-chevron.open {
                    transform: rotate(180deg);
                    color: var(--card-color);
                }

                /* Smooth Collapsible Body Transition */
                .card-collapsible-body {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, margin-top 0.35s ease;
                    opacity: 0;
                    margin-top: 0;
                }

                .card-collapsible-body.expanded {
                    grid-template-rows: 1fr;
                    opacity: 1;
                    margin-top: 24px;
                }

                .card-collapsible-inner {
                    overflow: hidden;
                }

                /* Description */
                .card-description {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 24px;
                    padding-top: 12px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                /* Section Block */
                .card-section-block {
                    margin-bottom: 24px;
                }

                .card-section-title {
                    font-size: 0.725rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-secondary);
                    margin-bottom: 12px;
                }

                /* Competencies Grid */
                .card-competencies-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 12px;
                }

                .competency-card {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(255, 255, 255, 0.025);
                    padding: 12px 18px;
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    transition: all 0.3s ease;
                }

                .competency-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--card-border);
                    transform: translateY(-2px);
                }

                .competency-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .competency-name {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                /* Bullets */
                .card-bullets-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 0;
                    margin: 0;
                }

                .card-bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    line-height: 1.5;
                }

                .check-icon {
                    font-size: 1.05rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                /* Footer Row */
                .card-footer-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding-top: 18px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    margin-top: 8px;
                }

                .card-tags-flex {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .tag-chip {
                    font-size: 0.725rem;
                    font-weight: 600;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                    transition: all 0.25s ease;
                }

                .resume-showcase-card:hover .tag-chip {
                    color: var(--text-primary);
                    border-color: var(--card-border);
                }

                .verification-text {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.725rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                @media (max-width: 768px) {
                    .resume-section { padding: 60px 0 !important; }
                    .resume-header { margin-bottom: 32px !important; }
                    .resume-tabs-wrapper { margin-bottom: 32px !important; }
                    .resume-showcase-card { padding: 20px 16px !important; border-radius: 18px !important; }
                    .card-header-row { align-items: flex-start !important; gap: 12px !important; }
                    .card-icon-box { width: 42px !important; height: 42px !important; font-size: 1.2rem !important; }
                    .card-title { font-size: 1.15rem !important; }
                    .card-dropdown-toggle { padding: 6px 12px !important; font-size: 0.7rem !important; }
                    .toggle-text { display: none !important; }
                    .card-meters-grid { grid-template-columns: 1fr !important; }
                    .card-footer-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
                }
            `}</style>
        </section>
    );
}
