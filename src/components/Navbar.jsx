import { useState, useEffect, useCallback } from 'react';
import { FiArrowUpRight, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#resume' },
    { label: 'Honors', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [menuOpen]);

    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    }, [menuOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [handleEscape]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const targetId = href.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className="navbar-wrapper">
                <nav className={`floating-dock ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
                    {/* Brand Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="navbar-brand"
                        aria-label="Dharshan R Home"
                    >
                        <span className="brand-beacon" />
                        <span className="brand-title">
                            <span className="brand-main">DEV</span>
                            <span className="brand-sub">NEXUS</span>
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="nav-desktop-menu">
                        {navLinks.map((link) => {
                            const sectionId = link.href.slice(1);
                            const isActive = activeSection === sectionId || (sectionId === 'resume' && activeSection === 'experience');
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`nav-link-pill ${isActive ? 'active' : ''}`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Action / CTA */}
                    <div className="nav-actions">
                        <a
                            href="/resume.pdf"
                            download="Dharshan_R_Resume.pdf"
                            className="nav-cta-btn"
                        >
                            <span>Resume</span>
                            <FiArrowUpRight className="cta-icon" />
                        </a>

                        {/* Hamburger Button for Mobile */}
                        <button
                            type="button"
                            className="nav-hamburger-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                        >
                            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer Overlay */}
            <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)} />
                <div className="mobile-nav-drawer">
                    <div className="mobile-nav-header">
                        <div className="navbar-brand">
                            <span className="brand-beacon" />
                            <span className="brand-title">
                                <span className="brand-main">DEV</span>
                                <span className="brand-sub">NEXUS</span>
                            </span>
                        </div>
                        <button
                            type="button"
                            className="mobile-close-btn"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <FiX size={22} />
                        </button>
                    </div>

                    <div className="mobile-links-list">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                            >
                                <span>{link.label}</span>
                                <FiArrowUpRight className="mobile-link-arrow" />
                            </a>
                        ))}
                    </div>

                    <div className="mobile-drawer-footer">
                        <a
                            href="/resume.pdf"
                            download="Dharshan_R_Resume.pdf"
                            className="btn btn-primary w-full"
                            style={{ width: '100%' }}
                        >
                            <FiDownload /> Download Resume PDF
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .navbar-wrapper {
                    position: fixed;
                    top: 16px;
                    left: 0;
                    right: 0;
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                    padding: 0 16px;
                    pointer-events: none;
                }

                .floating-dock {
                    pointer-events: auto;
                    width: 100%;
                    max-width: 940px;
                    height: 56px;
                    background: rgba(9, 9, 11, 0.8);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.09);
                    border-radius: 9999px;
                    padding: 0 18px 0 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(99, 102, 241, 0.12);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .floating-dock.is-scrolled {
                    background: rgba(9, 9, 11, 0.94);
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 14px 40px -10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(99, 102, 241, 0.2);
                    transform: translateY(2px);
                }

                /* Brand Logo */
                .navbar-brand {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }

                .brand-beacon {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #6366f1;
                    box-shadow: 0 0 12px #6366f1;
                    animation: pulseGlow 2s infinite ease-in-out;
                }

                .brand-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.05rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                }

                .brand-main {
                    color: #ffffff;
                }

                .brand-sub {
                    background: linear-gradient(135deg, #818cf8, #c084fc);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* Desktop Menu */
                .nav-desktop-menu {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .nav-link-pill {
                    font-family: 'Inter', sans-serif;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    padding: 6px 14px;
                    border-radius: 9999px;
                    transition: all 0.25s ease;
                    text-decoration: none;
                }

                .nav-link-pill:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.05);
                }

                .nav-link-pill.active {
                    color: #a5b4fc;
                    background: rgba(99, 102, 241, 0.16);
                    border: 1px solid rgba(99, 102, 241, 0.35);
                    box-shadow: 0 0 12px rgba(99, 102, 241, 0.2);
                }

                /* Right Action */
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .nav-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.775rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    color: #f8fafc;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(139, 92, 246, 0.22));
                    border: 1px solid rgba(99, 102, 241, 0.4);
                    padding: 6px 16px;
                    border-radius: 9999px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    text-decoration: none;
                }

                .nav-cta-btn:hover {
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    color: #ffffff;
                    border-color: transparent;
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
                    transform: translateY(-1px);
                }

                .cta-icon {
                    font-size: 0.85rem;
                    transition: transform 0.25s ease;
                }

                .nav-cta-btn:hover .cta-icon {
                    transform: translate(2px, -2px);
                }

                .nav-hamburger-btn {
                    display: none;
                    background: transparent;
                    border: none;
                    color: #f8fafc;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 8px;
                }

                /* Mobile Drawer */
                .mobile-nav-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }

                .mobile-nav-overlay.open {
                    pointer-events: auto;
                    opacity: 1;
                }

                .mobile-nav-backdrop {
                    position: absolute;
                    inset: 0;
                    background: rgba(9, 9, 11, 0.88);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }

                .mobile-nav-drawer {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    max-width: 340px;
                    background: rgba(12, 12, 16, 0.98);
                    border-left: 1px solid rgba(99, 102, 241, 0.25);
                    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.85);
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .mobile-nav-overlay.open .mobile-nav-drawer {
                    transform: translateX(0);
                }

                .mobile-nav-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .mobile-close-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    cursor: pointer;
                    padding: 6px;
                }

                .mobile-close-btn:hover {
                    color: #ffffff;
                }

                .mobile-links-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-top: 28px;
                    flex-grow: 1;
                }

                .mobile-nav-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: var(--text-secondary);
                    padding: 12px 16px;
                    border-radius: 12px;
                    text-decoration: none;
                    transition: all 0.25s ease;
                }

                .mobile-nav-link:hover,
                .mobile-nav-link.active {
                    color: #a5b4fc;
                    background: rgba(99, 102, 241, 0.14);
                }

                .mobile-link-arrow {
                    font-size: 1rem;
                    opacity: 0.6;
                }

                .mobile-drawer-footer {
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }

                @media (max-width: 820px) {
                    .nav-desktop-menu { display: none; }
                    .nav-hamburger-btn { display: flex; align-items: center; justify-content: center; }
                    .floating-dock { height: 50px; padding: 0 14px 0 18px; }
                }
            `}</style>
        </>
    );
}
