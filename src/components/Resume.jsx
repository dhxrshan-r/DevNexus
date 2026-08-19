import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
    FiBookOpen, 
    FiBriefcase, 
    FiAward, 
    FiCalendar, 
    FiCheckCircle, 
    FiDownload, 
    FiChevronRight, 
    FiChevronDown,
    FiStar,
    FiTerminal,
    FiCpu,
    FiActivity,
    FiShield
} from 'react-icons/fi';

const resumeItems = [
    {
        id: 'edu-be',
        nodeCode: 'NODE_01 // EDU',
        year: '2022 - 2026',
        title: 'B.E Electronics & Communication Engineering',
        org: 'RVS College of Engineering, Dindigul',
        subtitle: 'CGPA : 7.93',
        description: 'Graduated in Electronics and Communication Engineering with hands-on skills in Python, SQL, Power BI, Data Visualization, ML & DL, LLMs, RAG, and Fine-Tuning. Strong foundation in data analysis and Generative AI.',
        type: 'education',
        icon: <FiBookOpen />,
        skills: [
            { name: 'Generative AI & RAG Systems', level: 95 },
            { name: 'SQL & Power BI ETL Pipelines', level: 92 },
            { name: 'Machine Learning & ADAS Vision', level: 88 },
        ],
        bullets: [
            'Specialized in Generative AI RAG systems & Computer Vision ADAS prototypes',
            'Advanced coursework in Signal Processing, Embedded C, SQL Data Warehousing & Power BI ETL',
            'Graduated with 7.93 CGPA & active technical symposium leadership'
        ],
        tags: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'RAG LLMs', 'Embedded C'],
        badgeText: '🎓 B.E DEGREE',
        hash: '0x7F93_ECE'
    },
    {
        id: 'intern-codealpha',
        nodeCode: 'NODE_02 // INTERN',
        year: 'Jan 2026',
        title: 'Full Stack Development Intern',
        org: 'CodeAlpha — Virtual Internship',
        subtitle: '1 Month Industrial Internship',
        description: 'Built application components across frontend, backend, and database layers, applying full-stack development concepts to develop and integrate functional web features.',
        type: 'internship',
        icon: <FiBriefcase />,
        skills: [
            { name: 'Frontend Component Engineering', level: 90 },
            { name: 'REST API & State Dispatch', level: 88 },
            { name: 'Database Integration Queries', level: 85 },
        ],
        bullets: [
            'Built application components across frontend, backend, and database layers',
            'Applied full-stack development concepts to develop and integrate functional web features',
            'Collaborated on API endpoints, state management, and real-time frontend UI feedback'
        ],
        tags: ['React', 'Node.js', 'REST APIs', 'Full Stack', 'Database Integration'],
        badgeText: '💼 FULL-STACK INTERN',
        hash: '0xCA01_DEV'
    },
    {
        id: 'intern-popular',
        nodeCode: 'NODE_03 // INTERN',
        year: 'Aug 2025',
        title: 'Hardware Trainee Intern',
        org: 'Popular Systems — Summer Internship',
        subtitle: '1 Month On-site Internship',
        description: 'Gained practical exposure to sensor manufacturing and hardware production processes, including sensor assembly, testing, calibration, and quality inspection of sensor-based components.',
        type: 'internship',
        icon: <FiBriefcase />,
        skills: [
            { name: 'Sensor Assembly & Calibration', level: 92 },
            { name: 'Signal Diagnostic Testing', level: 89 },
            { name: 'Quality Assurance Standards', level: 86 },
        ],
        bullets: [
            'Gained practical exposure to sensor manufacturing and hardware production processes',
            'Performed sensor assembly, testing, calibration, and quality inspection of sensor-based components',
            'Analyzed diagnostic signal outputs to ensure hardware reliability & standards compliance'
        ],
        tags: ['Hardware Testing', 'Sensor Calibration', 'Embedded Systems', 'Quality Inspection'],
        badgeText: '💼 HARDWARE TRAINEE',
        hash: '0xPS08_HW'
    },
    {
        id: 'cert-anthropic',
        nodeCode: 'NODE_04 // CERT',
        year: 'March 2026',
        title: 'AI Fluency: Framework & Foundations',
        org: 'Certified by Anthropic',
        subtitle: 'Official AI Certification',
        description: 'Certified by Anthropic in AI frameworks, foundation models, prompt engineering, and LLM implementation.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'Anthropic Prompt Engineering', level: 96 },
            { name: 'LLM Context Architecture', level: 94 },
            { name: 'AI Safety & RAG Design', level: 91 },
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
        nodeCode: 'NODE_05 // CERT',
        year: 'Mar - Apr 2025',
        title: 'Power BI Data Analytics Certification',
        org: 'Certified by LOGICPIES',
        subtitle: 'Professional Analytics Certification',
        description: 'Certified by LOGICPIES in Power BI data visualization, Power Query ETL, data modeling, and business analytics.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'DAX Measures & Calculations', level: 94 },
            { name: 'Power Query ETL Dataflow', level: 92 },
            { name: 'Interactive Executive KPIs', level: 90 },
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
        nodeCode: 'NODE_06 // CERT',
        year: 'Nov - Dec 2024',
        title: 'Full Stack Web Development',
        org: 'Academy: AlphaFly',
        subtitle: 'Web Development Certification',
        description: 'Certified in modern full-stack web development, frontend components, and backend database integration.',
        type: 'certification',
        icon: <FiAward />,
        skills: [
            { name: 'Full-Stack Architecture', level: 88 },
            { name: 'Modern CSS & Glassmorphism', level: 90 },
            { name: 'Relational DB Schemas', level: 85 },
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
        bg: 'rgba(168, 85, 247, 0.15)', 
        color: '#A855F7', 
        border: 'rgba(168, 85, 247, 0.4)', 
        glow: 'rgba(168, 85, 247, 0.35)',
        label: 'Education'
    },
    internship: { 
        bg: 'rgba(6, 182, 212, 0.15)', 
        color: '#06B6D4', 
        border: 'rgba(6, 182, 212, 0.4)', 
        glow: 'rgba(6, 182, 212, 0.35)',
        label: 'Internship'
    },
    certification: { 
        bg: 'rgba(244, 63, 94, 0.15)', 
        color: '#F43F5E', 
        border: 'rgba(244, 63, 94, 0.4)', 
        glow: 'rgba(244, 63, 94, 0.35)',
        label: 'Certification'
    },
};

export default function Resume() {
    const headerRef = useScrollReveal();
    const contentRef = useScrollReveal({ staggerDelay: 120 });

    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedId, setSelectedId] = useState(resumeItems[0].id);
    const [mobileExpandedId, setMobileExpandedId] = useState(resumeItems[0].id);

    const filteredItems = activeFilter === 'all' 
        ? resumeItems 
        : resumeItems.filter((item) => item.type === activeFilter);

    const currentSelectedId = filteredItems.some(i => i.id === selectedId) 
        ? selectedId 
        : (filteredItems[0]?.id || resumeItems[0].id);

    const selectedItem = resumeItems.find((item) => item.id === currentSelectedId) || resumeItems[0];
    const selectedConfig = typeConfig[selectedItem.type];

    const counts = {
        all: resumeItems.length,
        education: resumeItems.filter(i => i.type === 'education').length,
        internship: resumeItems.filter(i => i.type === 'internship').length,
        certification: resumeItems.filter(i => i.type === 'certification').length,
    };

    const toggleMobileExpand = (id) => {
        setMobileExpandedId(mobileExpandedId === id ? null : id);
        setSelectedId(id);
    };

    return (
        <section id="resume" className="cyber-resume-section">
            <div className="container">
                {/* Sci-Fi Top Console HUD Bar */}
                <div className="cyber-hud-console-bar">
                    <div className="hud-console-left">
                        <FiTerminal className="console-icon" />
                        <span>[// SYSTEM_LOGS :: v2.6]</span>
                    </div>
                    <div className="hud-console-center">
                        <span className="hud-status-dot" />
                        <span>STATUS: ONLINE_VERIFIED</span>
                    </div>
                    <div className="hud-console-right">
                        <span>HASH: {selectedItem.hash}</span>
                    </div>
                </div>

                {/* Header */}
                <div ref={headerRef} className="reveal resume-header">
                    <p className="section-label">// EXPERIENCE_MATRIX</p>
                    <h2 className="section-title">Education, Internships & Certifications</h2>
                    <p className="resume-subtitle">
                        An interactive holographic deck mapping academic credentials, industrial internships, and certified AI capabilities.
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

                {/* Cyber Filter Bar */}
                <div className="reveal resume-filter-wrapper">
                    <div className="cyber-filter-bar">
                        <button
                            className={`cyber-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            <span className="btn-code">[01]</span>
                            <span>ALL NODES</span>
                            <span className="count-pill">{counts.all}</span>
                        </button>
                        <button
                            className={`cyber-filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('education')}
                        >
                            <span className="btn-code">[02]</span>
                            <span>🎓 EDUCATION</span>
                            <span className="count-pill">{counts.education}</span>
                        </button>
                        <button
                            className={`cyber-filter-btn ${activeFilter === 'internship' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('internship')}
                        >
                            <span className="btn-code">[03]</span>
                            <span>💼 INTERNSHIPS</span>
                            <span className="count-pill">{counts.internship}</span>
                        </button>
                        <button
                            className={`cyber-filter-btn ${activeFilter === 'certification' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('certification')}
                        >
                            <span className="btn-code">[04]</span>
                            <span>📜 CERTIFICATIONS</span>
                            <span className="count-pill">{counts.certification}</span>
                        </button>
                    </div>
                </div>

                {/* Interactive Holographic Deck (Desktop & Tablet) */}
                <div ref={contentRef} className="reveal resume-deck-container desktop-only-deck">
                    {/* Left Selector Deck */}
                    <div className="resume-master-list">
                        {filteredItems.map((item) => {
                            const config = typeConfig[item.type];
                            const isSelected = item.id === currentSelectedId;

                            return (
                                <div
                                    key={item.id}
                                    className={`resume-master-card ${isSelected ? 'active' : ''}`}
                                    style={{
                                        '--item-color': config.color,
                                        '--item-bg': config.bg,
                                        '--item-border': config.border,
                                        '--item-glow': config.glow,
                                    }}
                                    onClick={() => setSelectedId(item.id)}
                                >
                                    {/* Corner Sci-Fi Brackets */}
                                    <div className="hud-corner-tl" />
                                    <div className="hud-corner-tr" />

                                    <div className="active-rail" />

                                    <div className="master-card-top">
                                        <span className="hud-tag">
                                            <FiCpu /> {item.nodeCode}
                                        </span>
                                        <span className="item-type-badge" style={{ background: config.bg, color: config.color, borderColor: config.border }}>
                                            {item.type}
                                        </span>
                                    </div>

                                    <h3 className="master-card-title">{item.title}</h3>
                                    <p className="master-card-org">{item.org}</p>

                                    <div className="master-card-footer">
                                        <span className="item-year-chip">
                                            <FiCalendar style={{ fontSize: '0.75rem' }} />
                                            {item.year}
                                        </span>
                                        <span className="click-hint">
                                            {isSelected ? 'ACTIVE NODE' : 'INSPECT'}
                                        </span>
                                        <FiChevronRight className="chevron-icon" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Holographic Detail Stage */}
                    <div 
                        className="resume-detail-stage hud-box"
                        style={{
                            '--stage-color': selectedConfig.color,
                            '--stage-bg': selectedConfig.bg,
                            '--stage-border': selectedConfig.border,
                            '--stage-glow': selectedConfig.glow,
                        }}
                    >
                        <div className="hud-corner-tl" />
                        <div className="hud-corner-tr" />
                        <div className="hud-corner-bl" />
                        <div className="hud-corner-br" />

                        <div className="stage-top-glow-bar" />

                        {/* Stage Header */}
                        <div className="stage-header">
                            <div className="stage-icon-wrap" style={{ color: selectedConfig.color, background: selectedConfig.bg, borderColor: selectedConfig.border }}>
                                {selectedItem.icon}
                            </div>
                            <div className="stage-header-info">
                                <div className="stage-badge-row">
                                    <span className="stage-badge-pill" style={{ color: selectedConfig.color, background: selectedConfig.bg, borderColor: selectedConfig.border }}>
                                        {selectedItem.badgeText}
                                    </span>
                                    <span className="stage-year-pill">
                                        <FiCalendar /> {selectedItem.year}
                                    </span>
                                    {selectedItem.subtitle && (
                                        <span className="stage-subtitle-pill">
                                            <FiStar /> {selectedItem.subtitle}
                                        </span>
                                    )}
                                </div>
                                <h3 className="stage-title">{selectedItem.title}</h3>
                                <p className="stage-org">{selectedItem.org}</p>
                            </div>
                        </div>

                        {/* Stage Body */}
                        <div className="stage-body">
                            <p className="stage-description">{selectedItem.description}</p>

                            {/* Competency Skill Radar Meters */}
                            {selectedItem.skills && (
                                <div className="stage-skills-meters-block">
                                    <h4 className="stage-section-heading">// COMPETENCY_METRICS</h4>
                                    <div className="skills-meters-grid">
                                        {selectedItem.skills.map((s, idx) => (
                                            <div key={idx} className="skill-meter-row">
                                                <div className="meter-info">
                                                    <span className="meter-name">{s.name}</span>
                                                    <span className="meter-val" style={{ color: selectedConfig.color }}>{s.level}%</span>
                                                </div>
                                                <div className="meter-track">
                                                    <div 
                                                        className="meter-fill" 
                                                        style={{ 
                                                            width: `${s.level}%`, 
                                                            background: `linear-gradient(90deg, ${selectedConfig.color}, #06b6d4)`,
                                                            boxShadow: `0 0 12px ${selectedConfig.color}`
                                                        }} 
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Interactive Code Snippet Box */}
                            <div className="cyber-code-snippet-box">
                                <div className="code-box-header">
                                    <span className="code-dot red" />
                                    <span className="code-dot yellow" />
                                    <span className="code-dot green" />
                                    <span className="code-title">milestone_node.json</span>
                                </div>
                                <pre className="code-pre">
                                    <code>
{`{
  "node_id": "${selectedItem.id}",
  "title": "${selectedItem.title}",
  "organization": "${selectedItem.org}",
  "verification": "CRYPTOGRAPHICALLY_VERIFIED",
  "hash": "${selectedItem.hash}"
}`}
                                    </code>
                                </pre>
                            </div>

                            {/* Bullets */}
                            {selectedItem.bullets && (
                                <div className="stage-bullets-section">
                                    <h4 className="stage-section-heading">// DELIVERABLES_&_HIGHLIGHTS</h4>
                                    <ul className="stage-bullets-list">
                                        {selectedItem.bullets.map((bullet, idx) => (
                                            <li key={idx} className="stage-bullet-item">
                                                <span className="bullet-check-icon" style={{ color: selectedConfig.color }}>
                                                    <FiCheckCircle />
                                                </span>
                                                <span className="bullet-text">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Tags */}
                            {selectedItem.tags && (
                                <div className="stage-tags-section">
                                    <h4 className="stage-section-heading">// TECH_STACK_TAGS</h4>
                                    <div className="stage-tags-flex">
                                        {selectedItem.tags.map((tag, idx) => (
                                            <span key={idx} className="stage-skill-chip">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Stage Footer */}
                        <div className="stage-footer">
                            <div className="verification-badge">
                                <FiShield style={{ color: selectedConfig.color, fontSize: '1.1rem' }} />
                                VERIFIED NODE HASH: {selectedItem.hash}
                            </div>
                            <a
                                href="/resume.pdf"
                                download="Dharshan_R_Resume.pdf"
                                className="btn btn-outline stage-download-btn"
                            >
                                Download Full PDF Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Cyber Accordion (Mobile Only <= 768px) */}
                <div className="mobile-only-accordion">
                    {filteredItems.map((item) => {
                        const config = typeConfig[item.type];
                        const isExpanded = mobileExpandedId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`mobile-bento-card hud-box ${isExpanded ? 'open' : ''}`}
                                style={{
                                    '--item-color': config.color,
                                    '--item-bg': config.bg,
                                    '--item-border': config.border,
                                    '--item-glow': config.glow,
                                }}
                            >
                                <div className="hud-corner-tl" />
                                <div className="hud-corner-tr" />

                                <div className="mobile-card-top-bar" />

                                {/* Mobile Trigger Header */}
                                <div 
                                    className="mobile-card-header"
                                    onClick={() => toggleMobileExpand(item.id)}
                                >
                                    <div className="mobile-header-left">
                                        <div className="mobile-icon-bubble" style={{ color: config.color, background: config.bg, borderColor: config.border }}>
                                            {item.icon}
                                        </div>
                                        <div className="mobile-title-wrap">
                                            <div className="mobile-meta-tags">
                                                <span className="mobile-badge" style={{ color: config.color, background: config.bg, borderColor: config.border }}>
                                                    {item.badgeText}
                                                </span>
                                                <span className="mobile-year">
                                                    <FiCalendar /> {item.year}
                                                </span>
                                            </div>
                                            <h3 className="mobile-item-title">{item.title}</h3>
                                            <p className="mobile-item-org">{item.org}</p>
                                        </div>
                                    </div>
                                    <div className="mobile-toggle-btn">
                                        <FiChevronDown className={`mobile-chevron ${isExpanded ? 'rotated' : ''}`} />
                                    </div>
                                </div>

                                {/* Mobile Expandable Content Body */}
                                <div className="mobile-card-body">
                                    <div className="mobile-body-inner">
                                        <p className="mobile-desc">{item.description}</p>

                                        {item.subtitle && (
                                            <div className="mobile-subtitle-chip" style={{ color: config.color, background: config.bg, borderColor: config.border }}>
                                                <FiStar /> {item.subtitle}
                                            </div>
                                        )}

                                        {/* Skill Meters on Mobile */}
                                        {item.skills && (
                                            <div className="mobile-skills-meters">
                                                {item.skills.map((s, idx) => (
                                                    <div key={idx} className="mobile-meter-item">
                                                        <div className="mobile-meter-txt">
                                                            <span>{s.name}</span>
                                                            <span style={{ color: config.color }}>{s.level}%</span>
                                                        </div>
                                                        <div className="mobile-meter-bg">
                                                            <div className="mobile-meter-bar" style={{ width: `${s.level}%`, background: config.color }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {item.bullets && (
                                            <div className="mobile-bullets-block">
                                                <h4 className="mobile-section-title">// HIGHLIGHTS</h4>
                                                <ul className="mobile-bullets-list">
                                                    {item.bullets.map((b, idx) => (
                                                        <li key={idx} className="mobile-bullet-row">
                                                            <FiCheckCircle style={{ color: config.color, flexShrink: 0 }} />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {item.tags && (
                                            <div className="mobile-tags-block">
                                                {item.tags.map((t, idx) => (
                                                    <span key={idx} className="mobile-tag-chip">
                                                        #{t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mobile-card-footer">
                                            <span className="mobile-verified-text">
                                                <FiShield style={{ color: config.color }} /> HASH: {item.hash}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .cyber-resume-section {
                    padding: 110px 0;
                    background: transparent;
                    position: relative;
                    overflow: hidden;
                }

                /* Sci-Fi Top Console HUD Bar */
                .cyber-hud-console-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1150px;
                    margin: 0 auto 36px auto;
                    padding: 10px 20px;
                    background: rgba(11, 13, 25, 0.85);
                    border: 1px solid rgba(168, 85, 247, 0.25);
                    border-radius: 12px;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.725rem;
                    color: var(--text-secondary);
                    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
                }

                .hud-console-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #06b6d4;
                    font-weight: 700;
                }

                .console-icon {
                    font-size: 0.9rem;
                }

                .hud-console-center {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--text-primary);
                }

                .hud-status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #10b981;
                    box-shadow: 0 0 10px #10b981;
                    animation: statusPulse 2s infinite ease-in-out;
                }

                @keyframes statusPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.4); }
                }

                .hud-console-right {
                    color: #a855f7;
                    font-weight: 700;
                }

                .resume-header {
                    text-align: center;
                    margin-bottom: 44px;
                }

                .resume-subtitle {
                    font-size: clamp(0.9375rem, 2.5vw, 1.1rem);
                    color: var(--text-secondary);
                    max-width: 580px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .resume-download-btn {
                    font-size: 0.8rem !important;
                    padding: 12px 28px !important;
                }

                /* Filter Wrapper */
                .resume-filter-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 40px;
                }

                .cyber-filter-bar {
                    display: inline-flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    background: rgba(11, 13, 25, 0.7);
                    border: 1px solid rgba(168, 85, 247, 0.25);
                    padding: 8px 12px;
                    border-radius: 9999px;
                    box-shadow: 0 8px 30px -10px rgba(0, 0, 0, 0.5);
                }

                .cyber-filter-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    padding: 10px 20px;
                    border-radius: 9999px;
                    font-size: 0.825rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .btn-code {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.7rem;
                    color: #06b6d4;
                    opacity: 0.8;
                }

                .count-pill {
                    font-size: 0.7rem;
                    font-weight: 800;
                    padding: 2px 7px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.08);
                    color: var(--text-muted);
                    transition: all 0.3s ease;
                }

                .cyber-filter-btn:hover {
                    color: var(--text-primary);
                }

                .cyber-filter-btn.active {
                    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.45);
                }

                .cyber-filter-btn.active .btn-code {
                    color: #ffffff;
                    opacity: 1;
                }

                .cyber-filter-btn.active .count-pill {
                    background: rgba(255, 255, 255, 0.25);
                    color: #ffffff;
                }

                /* Desktop Master-Detail Grid */
                .desktop-only-deck {
                    display: grid;
                    grid-template-columns: 380px 1fr;
                    gap: 28px;
                    max-width: 1150px;
                    margin: 0 auto;
                    align-items: start;
                }

                .mobile-only-accordion {
                    display: none;
                }

                /* Master List (Left Deck) */
                .resume-master-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .resume-master-card {
                    position: relative;
                    background: rgba(11, 13, 25, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 20px;
                    cursor: pointer;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }

                .active-rail {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: var(--item-color);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .resume-master-card.active {
                    background: rgba(168, 85, 247, 0.08);
                    border-color: var(--item-color);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 20px var(--item-glow);
                    transform: translateX(6px);
                }

                .resume-master-card.active .active-rail {
                    opacity: 1;
                }

                .resume-master-card:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.035);
                    border-color: rgba(255, 255, 255, 0.18);
                    transform: translateX(3px);
                }

                .master-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    gap: 8px;
                }

                .item-type-badge {
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    padding: 4px 10px;
                    border-radius: 9999px;
                    border: 1px solid;
                }

                .master-card-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 6px 0;
                    line-height: 1.35;
                }

                .master-card-org {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    margin: 0 0 14px 0;
                }

                .master-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 12px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .item-year-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.725rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    font-family: 'Fira Code', monospace;
                }

                .click-hint {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    font-family: 'Fira Code', monospace;
                    transition: color 0.3s ease;
                }

                .resume-master-card.active .click-hint {
                    color: var(--item-color);
                }

                .chevron-icon {
                    font-size: 1rem;
                    color: var(--text-muted);
                    transition: transform 0.3s ease, color 0.3s ease;
                }

                .resume-master-card.active .chevron-icon {
                    transform: translateX(4px);
                    color: var(--item-color);
                }

                /* Detail Stage (Right Panel) */
                .resume-detail-stage {
                    position: relative;
                    background: rgba(11, 13, 25, 0.75);
                    border: 1px solid var(--stage-border);
                    border-radius: 28px;
                    padding: 36px;
                    box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px var(--stage-glow);
                    backdrop-filter: blur(16px);
                    overflow: hidden;
                    animation: stageFade 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes stageFade {
                    from { opacity: 0.4; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .stage-top-glow-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--stage-color), transparent);
                }

                .stage-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    margin-bottom: 28px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .stage-icon-wrap {
                    width: 56px;
                    height: 56px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.65rem;
                    border: 1px solid;
                    flex-shrink: 0;
                }

                .stage-header-info {
                    flex-grow: 1;
                }

                .stage-badge-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .stage-badge-pill {
                    font-size: 0.725rem;
                    font-weight: 700;
                    padding: 4px 14px;
                    border-radius: 9999px;
                    border: 1px solid;
                    letter-spacing: 0.04em;
                }

                .stage-year-pill,
                .stage-subtitle-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 4px 12px;
                    border-radius: 9999px;
                }

                .stage-subtitle-pill {
                    color: #A855F7;
                    border-color: rgba(168, 85, 247, 0.3);
                }

                .stage-title {
                    font-size: clamp(1.25rem, 3vw, 1.65rem);
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 6px 0;
                    line-height: 1.25;
                }

                .stage-org {
                    font-size: 0.9375rem;
                    font-weight: 600;
                    color: var(--stage-color);
                    margin: 0;
                }

                .stage-body {
                    margin-bottom: 32px;
                }

                .stage-description {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 24px;
                }

                .stage-section-heading {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.725rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    color: #06b6d4;
                    margin-bottom: 14px;
                }

                /* Competency Meters */
                .stage-skills-meters-block {
                    margin-bottom: 24px;
                }

                .skills-meters-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .skill-meter-row {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .meter-info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.825rem;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .meter-val {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.8rem;
                }

                .meter-track {
                    height: 6px;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .meter-fill {
                    height: 100%;
                    border-radius: 4px;
                    transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Cyber Code Snippet Box */
                .cyber-code-snippet-box {
                    background: rgba(5, 6, 12, 0.9);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    border-radius: 14px;
                    padding: 14px 18px;
                    margin-bottom: 24px;
                    font-family: 'Fira Code', monospace;
                    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
                }

                .code-box-header {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 10px;
                    padding-bottom: 6px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }

                .code-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                }
                .code-dot.red { background: #ef4444; }
                .code-dot.yellow { background: #f59e0b; }
                .code-dot.green { background: #10b981; }

                .code-title {
                    font-size: 0.6875rem;
                    color: var(--text-muted);
                    margin-left: 6px;
                }

                .code-pre {
                    margin: 0;
                    font-size: 0.775rem;
                    color: #a855f7;
                    line-height: 1.5;
                }

                .stage-bullets-section {
                    margin-bottom: 24px;
                }

                .stage-bullets-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .stage-bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: var(--text-primary);
                    background: rgba(255, 255, 255, 0.02);
                    padding: 12px 16px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.04);
                }

                .bullet-check-icon {
                    font-size: 1.1rem;
                    flex-shrink: 0;
                    margin-top: 1px;
                }

                .stage-tags-flex {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .stage-skill-chip {
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                }

                .stage-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 24px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .verification-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.725rem;
                    font-weight: 700;
                    color: var(--text-secondary);
                    letter-spacing: 0.06em;
                    font-family: 'Fira Code', monospace;
                }

                .stage-download-btn {
                    font-size: 0.75rem !important;
                    padding: 10px 20px !important;
                }

                /* Mobile View Redesign (<= 768px) */
                @media (max-width: 768px) {
                    .desktop-only-deck {
                        display: none !important;
                    }

                    .cyber-hud-console-bar {
                        flex-direction: column;
                        gap: 8px;
                        align-items: flex-start;
                        padding: 12px 16px;
                    }

                    .mobile-only-accordion {
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                        max-width: 100%;
                    }

                    .resume-filter-wrapper {
                        width: 100%;
                        overflow-x: auto;
                        padding-bottom: 8px;
                        justify-content: flex-start;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                    }

                    .resume-filter-wrapper::-webkit-scrollbar {
                        display: none;
                    }

                    .cyber-filter-bar {
                        display: flex;
                        flex-wrap: nowrap;
                        width: max-content;
                        padding: 6px 10px;
                    }

                    .cyber-filter-btn {
                        padding: 8px 14px;
                        font-size: 0.75rem;
                        white-space: nowrap;
                    }

                    .mobile-bento-card {
                        position: relative;
                        background: rgba(11, 13, 25, 0.75);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 20px;
                        overflow: hidden;
                        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .mobile-bento-card.open {
                        border-color: var(--item-border);
                        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px var(--item-glow);
                        background: rgba(11, 13, 25, 0.88);
                    }

                    .mobile-card-top-bar {
                        height: 3px;
                        background: linear-gradient(90deg, transparent, var(--item-color), transparent);
                        opacity: 0.6;
                    }

                    .mobile-card-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 18px 16px;
                        cursor: pointer;
                        gap: 12px;
                    }

                    .mobile-header-left {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        flex-grow: 1;
                    }

                    .mobile-icon-bubble {
                        width: 40px;
                        height: 40px;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.2rem;
                        border: 1px solid;
                        flex-shrink: 0;
                    }

                    .mobile-title-wrap {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }

                    .mobile-meta-tags {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        flex-wrap: wrap;
                    }

                    .mobile-badge {
                        font-size: 0.625rem;
                        font-weight: 700;
                        padding: 2px 8px;
                        border-radius: 9999px;
                        border: 1px solid;
                    }

                    .mobile-year {
                        font-size: 0.6875rem;
                        font-family: 'Fira Code', monospace;
                        color: var(--text-secondary);
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                    }

                    .mobile-item-title {
                        font-size: 0.9375rem;
                        font-weight: 800;
                        color: var(--text-primary);
                        margin: 0;
                        line-height: 1.3;
                    }

                    .mobile-item-org {
                        font-size: 0.775rem;
                        color: var(--text-secondary);
                        margin: 0;
                    }

                    .mobile-toggle-btn {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.04);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        border: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .mobile-chevron {
                        font-size: 1.1rem;
                        color: var(--text-secondary);
                        transition: transform 0.35s ease, color 0.35s ease;
                    }

                    .mobile-chevron.rotated {
                        transform: rotate(180deg);
                        color: var(--item-color);
                    }

                    /* Expandable Content */
                    .mobile-card-body {
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                        opacity: 0;
                    }

                    .mobile-bento-card.open .mobile-card-body {
                        max-height: 1000px;
                        opacity: 1;
                    }

                    .mobile-body-inner {
                        padding: 0 16px 18px 16px;
                        border-top: 1px solid rgba(255, 255, 255, 0.06);
                        padding-top: 14px;
                    }

                    .mobile-desc {
                        font-size: 0.85rem;
                        line-height: 1.6;
                        color: var(--text-secondary);
                        margin-bottom: 12px;
                    }

                    .mobile-subtitle-chip {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 0.725rem;
                        font-weight: 700;
                        padding: 4px 12px;
                        border-radius: 9999px;
                        border: 1px solid;
                        margin-bottom: 14px;
                    }

                    .mobile-skills-meters {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        margin-bottom: 14px;
                    }

                    .mobile-meter-item {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }

                    .mobile-meter-txt {
                        display: flex;
                        justify-content: space-between;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .mobile-meter-bg {
                        height: 4px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 2px;
                        overflow: hidden;
                    }

                    .mobile-meter-bar {
                        height: 100%;
                        border-radius: 2px;
                    }

                    .mobile-section-title {
                        font-family: 'Fira Code', monospace;
                        font-size: 0.65rem;
                        font-weight: 700;
                        letter-spacing: 0.12em;
                        color: #06b6d4;
                        margin-bottom: 8px;
                    }

                    .mobile-bullets-block {
                        margin-bottom: 14px;
                    }

                    .mobile-bullets-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .mobile-bullet-row {
                        display: flex;
                        align-items: flex-start;
                        gap: 8px;
                        font-size: 0.8125rem;
                        line-height: 1.45;
                        color: var(--text-primary);
                    }

                    .mobile-tags-block {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-bottom: 14px;
                    }

                    .mobile-tag-chip {
                        font-size: 0.6875rem;
                        font-weight: 600;
                        padding: 4px 10px;
                        border-radius: 6px;
                        background: rgba(255, 255, 255, 0.04);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        color: var(--text-secondary);
                    }

                    .mobile-card-footer {
                        padding-top: 10px;
                        border-top: 1px solid rgba(255, 255, 255, 0.05);
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .mobile-verified-text {
                        font-size: 0.6875rem;
                        font-weight: 700;
                        font-family: 'Fira Code', monospace;
                        color: var(--text-secondary);
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }
                }
            `}</style>
        </section>
    );
}
