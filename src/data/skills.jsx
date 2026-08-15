import {
    SiOpenai,
    SiLangchain,
    SiAnthropic,
    SiHuggingface,
    SiScikitlearn,
    SiPytorch,
    SiSpacy,
    SiPostgresql,
    SiPandas,
    SiPlotly,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiMysql,
    SiGithub,
    SiC,
    SiArduino,
    SiOpencv,
} from 'react-icons/si';

const PowerBiLogo = ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="4.5" height="10" rx="1" fill="#F2C811"/>
        <rect x="9.75" y="6.5" width="4.5" height="14.5" rx="1" fill="#F2C811"/>
        <rect x="16.5" y="2.5" width="4.5" height="18.5" rx="1" fill="#F2C811"/>
    </svg>
);

export const skillCategories = [
    {
        title: "Generative AI & LLMs",
        skills: [
            { 
                name: "Generative AI", 
                icon: <SiOpenai size={36} color="#10A37F" />
            },
            { 
                name: "LLMs & RAG", 
                icon: <SiLangchain size={36} color="#34D399" />
            },
            { 
                name: "Prompt Engineering", 
                icon: <SiAnthropic size={36} color="#D97757" />
            },
            { 
                name: "Fine-Tuning", 
                icon: <SiHuggingface size={36} color="#FFD21E" />
            }
        ]
    },
    {
        title: "AI, ML & NLP",
        skills: [
            { 
                name: "Machine Learning", 
                icon: <SiScikitlearn size={36} color="#F7931E" />
            },
            { 
                name: "Deep Learning", 
                icon: <SiPytorch size={36} color="#EE4C2C" />
            },
            { 
                name: "NLP & VADER", 
                icon: <SiSpacy size={36} color="#09A3D5" />
            }
        ]
    },
    {
        title: "Data Analytics & Query",
        skills: [
            { 
                name: "SQL & Query Languages", 
                icon: <SiPostgresql size={36} color="#4169E1" />
            },
            { 
                name: "Power Query & ETL", 
                icon: <PowerBiLogo size={36} />
            },
            { 
                name: "Data Wrangling", 
                icon: <SiPandas size={36} color="#E70488" />
            },
            { 
                name: "Data Visualization & EDA", 
                icon: <SiPlotly size={36} color="#3F4F75" />
            }
        ]
    },
    {
        title: "Programming & Tools",
        skills: [
            { 
                name: "Python", 
                icon: <SiPython size={36} color="#3776AB" />
            },
            { 
                name: "JavaScript", 
                icon: <SiJavascript size={36} color="#F7DF1E" />
            },
            { 
                name: "HTML & CSS", 
                icon: (
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        <SiHtml5 size={30} color="#E34F26" />
                        <SiCss size={30} color="#1572B6" />
                    </div>
                )
            },
            { 
                name: "Power BI", 
                icon: <PowerBiLogo size={36} />
            },
            { 
                name: "MySQL", 
                icon: <SiMysql size={36} color="#4479A1" />
            },
            { 
                name: "GitHub", 
                icon: <SiGithub size={36} color="#FFFFFF" />
            }
        ]
    },
    {
        title: "Core ADAS & Embedded",
        skills: [
            { 
                name: "Embedded C", 
                icon: <SiC size={36} color="#A8B9CC" />
            },
            { 
                name: "Sensor Interfacing", 
                icon: <SiArduino size={36} color="#00979D" />
            },
            { 
                name: "ADAS Designing", 
                icon: <SiOpencv size={36} color="#5C3EE8" />
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