import { FiArrowUp, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-wrap">
            <div className="container footer-container">
                <div className="footer-top-row">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <span className="brand-beacon" />
                            <span className="brand-text">
                                <span className="brand-white">DEV</span>
                                <span className="brand-accent">NEXUS</span>
                            </span>
                        </div>
                        <p className="footer-tagline">
                            Engineering intelligent Generative AI solutions, analytics pipelines, and embedded vision systems.
                        </p>
                    </div>

                    {/* Socials & Back to Top */}
                    <div className="footer-right-group">
                        <div className="footer-socials">
                            <a
                                href="https://github.com/dhxrshan-r"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="footer-social-btn"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dharshanr6/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="footer-social-btn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:dhxrshanr@gmail.com"
                                aria-label="Email Dharshan"
                                className="footer-social-btn"
                            >
                                <FiMail />
                            </a>
                        </div>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="back-to-top-btn"
                            aria-label="Back to top of page"
                        >
                            <span>Back to Top</span>
                            <FiArrowUp />
                        </button>
                    </div>
                </div>

                <div className="footer-bottom-row">
                    <p className="copyright-text">
                        © {currentYear} <strong style={{ color: '#ffffff' }}>Dharshan R</strong>. All rights reserved.
                    </p>
                    <p className="footer-built-text">
                        Designed & Developed with precision in Tamil Nadu, India.
                    </p>
                </div>
            </div>

            <style>{`
                .footer-wrap {
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(9, 9, 11, 0.95);
                    position: relative;
                    z-index: 20;
                    padding: 50px 0 36px;
                }

                .footer-container {
                    display: flex;
                    flex-direction: column;
                    gap: 36px;
                }

                .footer-top-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 24px;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    max-width: 440px;
                }

                .brand-logo {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }

                .brand-beacon {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #6366f1;
                    box-shadow: 0 0 10px #6366f1;
                }

                .brand-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.15rem;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                }

                .brand-white {
                    color: #ffffff;
                }

                .brand-accent {
                    color: #6366f1;
                }

                .footer-tagline {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                .footer-right-group {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .footer-socials {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .footer-social-btn {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    text-decoration: none;
                }

                .footer-social-btn:hover {
                    color: #ffffff;
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.15);
                    transform: translateY(-3px);
                    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
                }

                .back-to-top-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text-secondary);
                    padding: 9px 18px;
                    border-radius: 9999px;
                    font-size: 0.775rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .back-to-top-btn:hover {
                    color: #ffffff;
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(99, 102, 241, 0.1);
                    transform: translateY(-2px);
                }

                .footer-bottom-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 16px;
                    padding-top: 24px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                .copyright-text,
                .footer-built-text {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .footer-top-row { flex-direction: column; align-items: flex-start; }
                    .footer-bottom-row { flex-direction: column; align-items: flex-start; gap: 8px; }
                }
            `}</style>
        </footer>
    );
}
