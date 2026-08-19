import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI, RAG & ADAS' },
    { id: 'data', label: 'SQL & Power BI' },
    { id: 'nlp', label: 'Python & NLP' },
];

export default function Projects() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 150 });
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    // Ensure filtered cards are revealed when switching tabs
    useEffect(() => {
        if (gridRef.current) {
            const children = gridRef.current.querySelectorAll('.reveal-stagger');
            children.forEach((child) => child.classList.add('revealed'));
        }
    }, [activeCategory]);

    return (
        <section
            id="projects"
            className="projects-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Section Header */}
                <div ref={headerRef} className="reveal projects-header">
                    <p className="section-label">Portfolio Showcase</p>
                    <h2 className="section-title">Featured Engineering Projects</h2>
                    <p className="projects-subtitle">
                        Projects spanning RAG medical assistants, SQL & Power BI nutrition analytics, NLTK VADER sentiment analysis, and computer vision ADAS driver monitoring.
                    </p>

                    {/* Filter Tabs */}
                    <div className="projects-filter-tabs">
                        {categories.map((tab) => (
                            <button
                                key={tab.id}
                                className={`filter-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div ref={gridRef} className="reveal revealed">
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="reveal-stagger revealed projects-card-redesign hud-box">
                                <div className="hud-corner-tl" />
                                <div className="hud-corner-tr" />
                                <div className="hud-corner-bl" />
                                <div className="hud-corner-br" />
                                {/* Top Image Container with Domain Badge */}
                                <div className="card-media-wrap">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="card-media-img"
                                        />
                                    )}
                                    <div className="media-overlay" />
                                    
                                    <span className="domain-badge">
                                        {project.categoryLabel}
                                    </span>

                                    {project.id === 1 && (
                                        <span className="featured-badge">
                                            ★ Flagship RAG Project
                                        </span>
                                    )}
                                </div>

                                {/* Body Content */}
                                <div className="card-body-wrap">
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-desc">{project.description}</p>

                                    {/* Architecture Highlights */}
                                    {project.highlights && (
                                        <div className="project-highlights-list">
                                            {project.highlights.map((h, i) => (
                                                <div key={i} className="highlight-item">
                                                    <FiCheckCircle className="highlight-icon" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech Stack Pills */}
                                    <div className="project-tags-wrap">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag-pill">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="project-actions-footer">
                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline card-btn"
                                        >
                                            <FiGithub /> Source Code
                                        </a>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary card-btn"
                                            >
                                                <FiExternalLink /> Live Visit
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom GitHub Showcase Banner */}
                <div className="projects-github-banner">
                    <div className="banner-content">
                        <h3>Explore All Code Repositories</h3>
                        <p>Discover complete open-source source code, notebooks, and analytics models on GitHub.</p>
                    </div>
                    <a
                        href="https://github.com/dhxrshan-r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary banner-btn"
                    >
                        <FiGithub style={{ fontSize: '1.2rem' }} /> View GitHub Profile →
                    </a>
                </div>
            </div>

            <style>{`
                .projects-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 12px;
                    margin-bottom: 56px;
                }
                .projects-subtitle {
                    font-size: clamp(0.9375rem, 2.5vw, 1.1rem);
                    color: var(--text-secondary);
                    max-width: 640px;
                    line-height: 1.65;
                    margin-bottom: 24px;
                }

                /* Category Filter Tabs */
                .projects-filter-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    background: rgba(18, 24, 20, 0.6);
                    border: 1px solid var(--border);
                    padding: 8px;
                    border-radius: 9999px;
                }
                .filter-tab-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    padding: 10px 22px;
                    border-radius: 9999px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .filter-tab-btn:hover {
                    color: var(--text-primary);
                }
                .filter-tab-btn.active {
                    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.45);
                }

                /* Grid Layout */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    max-width: 1150px;
                    margin: 0 auto;
                }

                /* Card Design */
                .projects-card-redesign {
                    background: rgba(11, 13, 25, 0.6);
                    border: 1px solid rgba(168, 85, 247, 0.2);
                    border-radius: 28px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .projects-card-redesign:hover {
                    transform: translateY(-8px);
                    border-color: var(--accent);
                    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px var(--accent-glow);
                }

                /* Media Wrap */
                .card-media-wrap {
                    position: relative;
                    width: 100%;
                    height: 230px;
                    overflow: hidden;
                }
                .card-media-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .projects-card-redesign:hover .card-media-img {
                    transform: scale(1.06);
                }
                .media-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(11, 13, 25, 0.95) 0%, rgba(11, 13, 25, 0.3) 60%, transparent 100%);
                }
                .domain-badge {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    background: rgba(11, 13, 25, 0.85);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    color: var(--accent);
                    font-size: 0.6875rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }
                .featured-badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    background: linear-gradient(135deg, #a855f7, #06b6d4);
                    color: #ffffff;
                    font-size: 0.6875rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                }

                /* Body Wrap */
                .card-body-wrap {
                    padding: 28px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }
                .project-card-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 10px;
                    line-height: 1.3;
                }
                .project-card-desc {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    line-height: 1.65;
                    margin-bottom: 20px;
                }

                /* Architecture Highlights */
                .project-highlights-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-bottom: 20px;
                    padding: 14px 16px;
                    background: rgba(255, 255, 255, 0.015);
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.04);
                }
                .highlight-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.7875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                }
                .highlight-icon {
                    color: var(--accent);
                    font-size: 0.95rem;
                    flex-shrink: 0;
                }

                /* Tags Wrap */
                .project-tags-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 24px;
                    margin-top: auto;
                }
                .tag-pill {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 5px 12px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.03);
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                }
                .projects-card-redesign:hover .tag-pill {
                    border-color: var(--accent-faded);
                    color: var(--text-primary);
                }

                /* Actions Footer */
                .project-actions-footer {
                    display: flex;
                    gap: 12px;
                }
                .card-btn {
                    flex: 1;
                    font-size: 0.75rem !important;
                    padding: 10px 16px !important;
                    min-height: 38px !important;
                }

                /* GitHub Showcase Banner */
                .projects-github-banner {
                    margin-top: 72px;
                    padding: 40px;
                    border-radius: 32px;
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
                    border: 1px solid rgba(168, 85, 247, 0.35);
                    box-shadow: 0 10px 40px -15px rgba(168, 85, 247, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    max-width: 1150px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .banner-content h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 6px;
                }
                .banner-content p {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    margin: 0;
                }
                .banner-btn {
                    font-size: 0.8rem !important;
                    padding: 14px 28px !important;
                    flex-shrink: 0;
                }

                @media (max-width: 900px) {
                    .projects-grid { grid-template-columns: 1fr; }
                    .projects-github-banner { flex-direction: column; text-align: center; padding: 28px; }
                    .projects-filter-tabs { border-radius: 20px; }
                }
                @media (max-width: 640px) {
                    .projects-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .projects-header { margin-bottom: 36px; }
                    .card-body-wrap { padding: 20px 16px; }
                    .card-media-wrap { height: 190px; }
                    .filter-tab-btn { padding: 8px 14px; font-size: 0.75rem; }
                    .projects-github-banner { padding: 24px 16px; border-radius: 20px; }
                }
                @media (max-width: 400px) {
                    .project-actions-footer { flex-direction: column; }
                }
            `}</style>
        </section>
    );
}

