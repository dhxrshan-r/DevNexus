export const skillCategories = [
    {
        title: "Generative AI & LLMs",
        skills: [
            { 
                name: "Generative AI", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.8 8.2L21 11L14.8 13.8L12 20L9.2 13.8L3 11L9.2 8.2L12 2Z" fill="#8E75FF"/>
                        <path d="M5 2L5.8 4L7.8 4.8L5.8 5.6L5 7.6L4.2 5.6L2.2 4.8L4.2 4L5 2Z" fill="#8E75FF" opacity="0.6"/>
                        <path d="M20 16L20.8 18L22.8 18.8L20.8 19.6L20 21.6L19.2 19.6L17.2 18.8L19.2 18L20 16Z" fill="#8E75FF" opacity="0.6"/>
                    </svg>
                )
            },
            { 
                name: "LLMs & RAG", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                        <path d="M2 12h20"/>
                    </svg>
                )
            },
            { 
                name: "Prompt Engineering", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5"/>
                        <line x1="12" y1="19" x2="20" y2="19"/>
                    </svg>
                )
            },
            { 
                name: "Fine-Tuning", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"/>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                )
            }
        ]
    },
    {
        title: "AI, ML & NLP",
        skills: [
            { 
                name: "Machine Learning", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                )
            },
            { 
                name: "Deep Learning", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M3 12h6M15 12h6M12 3v6M12 15v6"/>
                    </svg>
                )
            },
            { 
                name: "NLP & VADER", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                )
            }
        ]
    },
    {
        title: "Data Analytics & Query",
        skills: [
            { name: "SQL & Query Languages", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="SQL" width="36" height="36" /> },
            { 
                name: "Power Query & ETL", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                )
            },
            { 
                name: "Data Wrangling", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                )
            },
            { 
                name: "Data Visualization & EDA", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21H3V3" stroke="#E97627" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 14L11 10L15 14L21 8" stroke="#E97627" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            }
        ]
    },
    {
        title: "Programming & Tools",
        skills: [
            { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width="36" height="36" /> },
            { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" /> },
            { name: "HTML & CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" width="36" height="36" /> },
            { 
                name: "Power BI", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="10" width="4" height="11" fill="#F2C811"/>
                        <rect x="10" y="6" width="4" height="15" fill="#F2C811"/>
                        <rect x="17" y="3" width="4" height="18" fill="#F2C811"/>
                    </svg>
                )
            },
            { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" width="36" height="36" /> },
            { name: "GitHub", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width="36" height="36" /> }
        ]
    },
    {
        title: "Core ADAS & Embedded",
        skills: [
            { 
                name: "Embedded C", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <rect x="9" y="9" width="6" height="6"/>
                        <line x1="9" y1="1" x2="9" y2="4"/>
                        <line x1="15" y1="1" x2="15" y2="4"/>
                        <line x1="9" y1="20" x2="9" y2="23"/>
                        <line x1="15" y1="20" x2="15" y2="23"/>
                        <line x1="20" y1="9" x2="23" y2="9"/>
                        <line x1="20" y1="15" x2="23" y2="15"/>
                        <line x1="1" y1="9" x2="4" y2="9"/>
                        <line x1="1" y1="15" x2="4" y2="15"/>
                    </svg>
                )
            },
            { 
                name: "Sensor Interfacing", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                )
            },
            { 
                name: "ADAS Designing", 
                icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 8v4l3 3"/>
                    </svg>
                )
            }
        ]
    }
];

export const coreSkills = [
    "Generative AI: LLMs, RAG, Prompt Engineering & Fine-Tuning",
    "Data Analysis: SQL Data Wrangling & Power BI Dashboarding",
    "Computer Vision & Embedded: ADAS Designing, OpenCV & Sensor Interfacing",
    "Machine Learning, Deep Learning & NLP Sentiment Analysis"
];

export const skills = [];