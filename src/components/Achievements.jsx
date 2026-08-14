import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiAward, FiGlobe } from 'react-icons/fi';

const achievements = [
    {
        title: '2nd Prize – Paper Presentation',
        event: 'National Symposium',
        organization: 'Thiyagarajar University',
        year: '2024',
        category: 'Academic & Research',
        badge: '🥈 2nd Prize',
        color: '#F59E0B',
        desc: 'Presented technical research paper on advanced electronics & AI systems at the national level symposium.',
    },
    {
        title: '3rd Prize – ADAS Hackathon',
        event: 'National Level Hackathon',
        organization: 'ANCIT',
        year: '2024',
        category: 'Hackathon & Innovation',
        badge: '🥉 3rd Prize',
        color: '#38BDF8',
        desc: 'Awarded 3rd Prize for designing an Intelligent Driver Monitoring & Emergency Control System prototype.',
    },
    {
        title: 'NCC Republic Day Camp (RDC) Selection',
        event: 'Republic Day Parade',
        organization: 'Red Fort, New Delhi',
        year: 'Jan 2019',
        category: 'National Honor',
        badge: '🎖️ National Selection',
        color: '#10B981',
        desc: 'Selected to represent NCC at the prestigious Republic Day Camp (RDC), participating in the March Past at the Red Fort, New Delhi.',
    },
    {
        title: '2nd Prize – Zonal Level Basketball',
        event: 'Zonal Basketball Championship',
        organization: 'Zonal Sports Federation',
        year: '2021',
        category: 'Sports & Team Leadership',
        badge: '🥈 2nd Prize',
        color: '#818CF8',
        desc: 'Secured 2nd Prize representing the institution at the Zonal Basketball Championship.',
    },
    {
        title: '1st Prize – District Level Basketball',
        event: 'District Basketball Championship',
        organization: 'District Sports Association',
        year: '2020',
        category: 'Sports & Excellence',
        badge: '🏆 1st Prize Champion',
        color: '#EC4899',
        desc: 'Won 1st Prize and overall championship at the District Level Basketball Championship.',
    },
];

const languages = [
    { name: 'Telugu', level: 'Native', flag: '🇮🇳' },
    { name: 'Tamil', level: 'Native', flag: '🇮🇳' },
    { name: 'English', level: 'Conversational, Read & Write', flag: '🌐' },
];

export default function Achievements() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 120 });
    const langRef = useScrollReveal();

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
                </div>

                {/* Grid */}
                <div ref={gridRef} className="reveal">
                    <div className="achievements-grid">
                        {achievements.map((item, idx) => (
                            <div key={idx} className="reveal-stagger achievement-card">
                                <div className="card-badge-row">
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
                                    <span className="achievement-year">{item.year}</span>
                                </div>

                                <div className="achievement-title-wrap">
                                    <FiAward className="award-icon" style={{ color: item.color }} />
                                    <h3 className="achievement-title">{item.title}</h3>
                                </div>

                                <p className="achievement-org">
                                    <strong>{item.event}</strong> — {item.organization}
                                </p>

                                <p className="achievement-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages Section Strip */}
                <div ref={langRef} className="reveal languages-strip-wrap">
                    <div className="languages-card">
                        <div className="lang-header">
                            <FiGlobe className="lang-icon" />
                            <div>
                                <h3 className="lang-title">Languages Known</h3>
                                <p className="lang-sub">Multilingual Communication Capabilities</p>
                            </div>
                        </div>

                        <div className="lang-pills-wrap">
                            {languages.map((lang, i) => (
                                <div key={i} className="lang-pill">
                                    <span className="lang-flag">{lang.flag}</span>
                                    <span className="lang-name">{lang.name}</span>
                                    <span className="lang-sep">•</span>
                                    <span className="lang-level">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .section-subtitle {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    max-width: 540px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .achievements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto 60px;
                }

                .achievement-card {
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
                .achievement-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--accent);
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px var(--accent-faded);
                }

                .card-badge-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }
                .achievement-badge {
                    font-size: 0.725rem;
                    font-weight: 700;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    border: 1px solid;
                    letter-spacing: 0.05em;
                }
                .achievement-year {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    font-family: 'Fira Code', monospace;
                }

                .achievement-title-wrap {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin-bottom: 10px;
                }
                .award-icon {
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .achievement-title {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    line-height: 1.35;
                }

                .achievement-org {
                    font-size: 0.85rem;
                    color: var(--accent);
                    margin-bottom: 12px;
                }
                .achievement-desc {
                    font-size: 0.825rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                /* Languages Strip */
                .languages-strip-wrap {
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .languages-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 28px 36px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    backdrop-filter: blur(10px);
                }
                .lang-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .lang-icon {
                    font-size: 2.2rem;
                    color: var(--accent);
                }
                .lang-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 2px;
                }
                .lang-sub {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .lang-pills-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .lang-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 8px 18px;
                    border-radius: 9999px;
                    font-size: 0.825rem;
                    color: var(--text-primary);
                }
                .lang-flag {
                    font-size: 1.1rem;
                }
                .lang-name {
                    font-weight: 700;
                    color: var(--text-primary);
                }
                .lang-sep {
                    color: var(--accent);
                }
                .lang-level {
                    color: var(--text-secondary);
                    font-size: 0.775rem;
                }

                @media (max-width: 850px) {
                    .languages-card {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 24px;
                    }
                }
            `}</style>
        </section>
    );
}
