import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiCheckCircle, FiFolder, FiStar } from 'react-icons/fi';

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'Generative AI & ADAS' },
    { id: 'data', label: 'SQL & Power BI' },
    { id: 'nlp', label: 'Python & NLP' },
];

export default function Projects() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 120 });
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    useEffect(() => {
        if (gridRef.current) {
            const children = gridRef.current.querySelectorAll('.reveal-stagger');
            children.forEach((child) => child.classList.add('revealed'));
        }
    }, [activeCategory, gridRef]);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                {/* Section Header */}
                <div ref={headerRef} className="reveal projects-header">
                    <div className="section-header-pill">
                        <FiFolder />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="section-title">Engineering Case Studies</h2>
                    <p className="projects-subtitle">
                        Production-grade applications spanning RAG clinical knowledge retrieval, nutrition business intelligence dashboards, real-time computer vision ADAS, and NLP sentiment analytics.
                    </p>

                    {/* Filter Tabs */}
                    <div className="projects-filter-wrapper">
                        <div className="projects-filter-tabs">
                            {categories.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`filter-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div ref={gridRef} className="reveal revealed">
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="reveal-stagger revealed project-card">
                                {/* Media Wrap with Badges */}
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
                                        <span className="flagship-badge">
                                            <FiStar className="star-icon" /> Flagship RAG Architecture
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

                                    {/* Action Buttons */}
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
                        <p>Discover complete open-source repositories, Jupyter notebooks, SQL scripts, and analytics models on GitHub.</p>
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
                .projects-section {
                    padding: 120px 0 100px;
                    position: relative;
                }

                .projects-header {
                    text-align: center;
                    margin-bottom: 56px;
                }

                /* Filter Tabs */
                .projects-filter-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-top: 36px;
                }

                .projects-filter-tabs {
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

                .filter-tab-btn {
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

                .filter-tab-btn:hover {
                    color: #ffffff;
                }

                .filter-tab-btn.active {
                    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 18px rgba(99, 102, 241, 0.4);
                }

                /* Grid Layout */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 28px;
                    max-width: 1140px;
                    margin: 0 auto;
                }

                /* Card Design */
                .project-card {
                    background: rgba(18, 18, 24, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }

                .project-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(99, 102, 241, 0.35);
                    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.15);
                }

                /* Media Wrap */
                .card-media-wrap {
                    position: relative;
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #02040a;
                }

                .card-media-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .project-card:hover .card-media-img {
                    transform: scale(1.05);
                }

                .media-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(18, 18, 24, 0.98) 0%, rgba(18, 18, 24, 0.4) 60%, transparent 100%);
                }

                .domain-badge {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    padding: 5px 12px;
                    border-radius: 9999px;
                    background: rgba(12, 12, 16, 0.85);
                    border: 1px solid rgba(99, 102, 241, 0.35);
                    color: #a5b4fc;
                    font-size: 0.6875rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    backdrop-filter: blur(8px);
                }

                .flagship-badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 12px;
                    border-radius: 9999px;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    color: #ffffff;
                    font-size: 0.6875rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
                }

                .star-icon {
                    font-size: 0.75rem;
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
                    color: #ffffff;
                    margin-bottom: 10px;
                    line-height: 1.3;
                    transition: color 0.3s ease;
                }

                .project-card:hover .project-card-title {
                    color: #a5b4fc;
                }

                .project-card-desc {
                    font-size: 0.8875rem;
                    color: var(--text-secondary);
                    line-height: 1.65;
                    margin-bottom: 18px;
                }

                /* Architecture Highlights */
                .project-highlights-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-bottom: 20px;
                    padding: 14px 16px;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .highlight-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #e2e8f0;
                }

                .highlight-icon {
                    color: #6366f1;
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
                    font-size: 0.6875rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.03);
                    color: var(--text-secondary);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.25s ease;
                }

                .project-card:hover .tag-pill {
                    border-color: rgba(99, 102, 241, 0.3);
                    color: #ffffff;
                }

                /* Actions Footer */
                .project-actions-footer {
                    display: flex;
                    gap: 12px;
                }

                .card-btn {
                    flex: 1;
                    font-size: 0.775rem !important;
                    padding: 10px 16px !important;
                    min-height: 40px !important;
                }

                /* GitHub Showcase Banner */
                .projects-github-banner {
                    margin-top: 60px;
                    padding: 36px 40px;
                    border-radius: 24px;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(18, 18, 24, 0.95) 100%);
                    border: 1px solid rgba(99, 102, 241, 0.25);
                    box-shadow: 0 10px 40px -15px rgba(99, 102, 241, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    max-width: 1140px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .banner-content h3 {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 6px;
                }

                .banner-content p {
                    font-size: 0.8875rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .banner-btn {
                    font-size: 0.8rem !important;
                    padding: 12px 24px !important;
                    flex-shrink: 0;
                }

                @media (max-width: 900px) {
                    .projects-grid { grid-template-columns: 1fr; }
                    .projects-github-banner { flex-direction: column; text-align: center; padding: 28px; }
                }

                @media (max-width: 640px) {
                    .projects-section { padding: 80px 0 60px !important; }
                    .card-body-wrap { padding: 20px 18px; }
                    .card-media-wrap { height: 200px; }
                    .project-card-title { font-size: 1.2rem; }
                    .filter-tab-btn { padding: 6px 14px; font-size: 0.75rem; }
                    .project-actions-footer { flex-direction: column; }
                }
            `}</style>
        </section>
    );
}
