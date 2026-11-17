import { useState } from 'react';
import { skillCategories, coreSkills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCode, FiCheckCircle } from 'react-icons/fi';

export default function Skills() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 60 });
    const [activeFilter, setActiveFilter] = useState('all');

    // Flatten all skills for 'all' tab with their category title
    const allSkills = skillCategories.flatMap(cat => 
        cat.skills.map(skill => ({ ...skill, category: cat.title }))
    );

    const filteredSkills = activeFilter === 'all'
        ? allSkills
        : allSkills.filter(s => s.category === activeFilter);

    const categories = [
        { id: 'all', label: 'All Technologies' },
        ...skillCategories.map(c => ({ id: c.title, label: c.title }))
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                {/* Section Header */}
                <div ref={headerRef} className="reveal skills-header">
                    <div className="section-header-pill">
                        <FiCode />
                        <span>Technical Arsenal</span>
                    </div>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        A curated toolkit spanning Generative AI frameworks, machine learning libraries, SQL data pipelines, and embedded engineering.
                    </p>

                    {/* Filter Pills */}
                    <div className="skills-filter-wrapper">
                        <div className="skills-filter-bar">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    type="button"
                                    className={`skills-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Interactive Grid */}
                <div ref={gridRef} className="reveal skills-cards-grid">
                    {filteredSkills.map((skill, idx) => (
                        <div key={`${skill.name}-${idx}`} className="skill-card">
                            <div className="skill-card-inner">
                                <div className="skill-icon-box">
                                    {skill.icon}
                                </div>
                                <div className="skill-info">
                                    <h4 className="skill-title">{skill.name}</h4>
                                    <span className="skill-cat-label">{skill.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Focus Competencies Bento */}
                <div className="skills-core-section">
                    <div className="core-focus-header">
                        <h3 className="core-focus-title">Primary Engineering Focus Areas</h3>
                        <p className="core-focus-subtitle">Core competencies demonstrated across production projects, internships, and research papers.</p>
                    </div>

                    <div className="core-focus-grid">
                        {coreSkills.map((skillText, idx) => {
                            const [highlight, ...rest] = skillText.split(':');
                            return (
                                <div key={idx} className="core-focus-card">
                                    <div className="core-check-icon">
                                        <FiCheckCircle />
                                    </div>
                                    <div className="core-card-body">
                                        <span className="core-highlight">{highlight}</span>
                                        {rest.length > 0 && <span className="core-rest">: {rest.join(':')}</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .skills-section {
                    padding: 120px 0 100px;
                    position: relative;
                }

                .skills-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                /* Filter Bar */
                .skills-filter-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-top: 36px;
                }

                .skills-filter-bar {
                    display: inline-flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    justify-content: center;
                    background: rgba(18, 18, 24, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 6px;
                    border-radius: 9999px;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
                }

                .skills-filter-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    padding: 8px 18px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    white-space: nowrap;
                }

                .skills-filter-btn:hover {
                    color: #ffffff;
                }

                .skills-filter-btn.active {
                    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 18px rgba(99, 102, 241, 0.4);
                }

                /* Grid Layout */
                .skills-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
                    gap: 16px;
                    max-width: 1140px;
                    margin: 0 auto 60px;
                }

                .skill-card {
                    background: rgba(18, 18, 24, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 18px;
                    padding: 20px;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }

                .skill-card:hover {
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(24, 24, 34, 0.85);
                    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.15);
                    transform: translateY(-3px);
                }

                .skill-card-inner {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .skill-icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.75rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }

                .skill-card:hover .skill-icon-box {
                    transform: scale(1.08);
                }

                .skill-info {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    overflow: hidden;
                }

                .skill-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .skill-cat-label {
                    font-size: 0.6875rem;
                    color: var(--text-secondary);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Core Focus Section */
                .skills-core-section {
                    max-width: 1140px;
                    margin: 0 auto;
                    padding: 36px 32px;
                    background: rgba(18, 18, 24, 0.85);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 24px;
                    box-shadow: 0 14px 40px -10px rgba(0, 0, 0, 0.7);
                }

                .core-focus-header {
                    text-align: center;
                    margin-bottom: 28px;
                }

                .core-focus-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 6px;
                }

                .core-focus-subtitle {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .core-focus-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 14px;
                }

                .core-focus-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    background: rgba(255, 255, 255, 0.025);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 16px;
                    padding: 16px 20px;
                    transition: all 0.3s ease;
                }

                .core-focus-card:hover {
                    border-color: rgba(99, 102, 241, 0.35);
                    background: rgba(99, 102, 241, 0.06);
                    transform: translateY(-2px);
                }

                .core-check-icon {
                    color: #6366f1;
                    font-size: 1.15rem;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .core-card-body {
                    font-size: 0.85rem;
                    line-height: 1.5;
                }

                .core-highlight {
                    font-weight: 700;
                    color: #ffffff;
                }

                .core-rest {
                    color: var(--text-secondary);
                }

                @media (max-width: 768px) {
                    .skills-section { padding: 80px 0 60px !important; }
                    .skills-filter-bar { border-radius: 20px; }
                    .skills-filter-btn { padding: 6px 14px; font-size: 0.75rem; }
                    .skills-cards-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
                    .skill-card { padding: 14px; }
                    .skill-icon-box { width: 40px; height: 40px; font-size: 1.4rem; }
                    .skill-title { font-size: 0.85rem; }
                    .skills-core-section { padding: 24px 18px; }
                    .core-focus-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
