import {
    SiOpenai,
    SiLangchain,
    SiAnthropic,
    SiHuggingface,
    SiScikitlearn,
    SiPytorch,
    SiTensorflow,
    SiPandas,
    SiNumpy,
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
    SiJupyter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const powerBiIcon = (
    <svg width={36} height={36} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                icon: <SiOpenai size={36} color="#6366F1" />
            },
            { 
                name: "LLMs & RAG", 
                icon: <SiLangchain size={36} color="#818CF8" />
            },
            { 
                name: "Prompt Engineering", 
                icon: <SiAnthropic size={36} color="#D97757" />
            },
            { 
                name: "Fine-Tuning LLM", 
                icon: <SiHuggingface size={36} color="#FFD21E" />
            }
        ]
    },
    {
        title: "Libraries & ML / DL",
        skills: [
            { 
                name: "TensorFlow", 
                icon: <SiTensorflow size={36} color="#FF6F00" />
            },
            { 
                name: "Transformers", 
                icon: <SiHuggingface size={36} color="#FFD21E" />
            },
            { 
                name: "LangChain", 
                icon: <SiLangchain size={36} color="#818CF8" />
            },
            { 
                name: "Pandas & NumPy", 
                icon: (
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        <SiPandas size={28} color="#E70488" />
                        <SiNumpy size={28} color="#4DABCF" />
                    </div>
                )
            },
            { 
                name: "Matplotlib & Seaborn", 
                icon: <SiPlotly size={36} color="#3F4F75" />
            },
            { 
                name: "ML & Deep Learning", 
                icon: <SiPytorch size={36} color="#EE4C2C" />
            }
        ]
    },
    {
        title: "Data Analysis & Query",
        skills: [
            { 
                name: "SQL", 
                icon: <SiMysql size={36} color="#4479A1" />
            },
            { 
                name: "Power Query", 
                icon: powerBiIcon
            },
            { 
                name: "Data Visualization & EDA", 
                icon: <SiPlotly size={36} color="#06B6D4" />
            },
            { 
                name: "Power BI", 
                icon: powerBiIcon
            }
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            { 
                name: "Python", 
                icon: <SiPython size={36} color="#3776AB" />
            },
            { 
                name: "Java (Basic)", 
                icon: <FaJava size={36} color="#F89820" />
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
            }
        ]
    },
    {
        title: "Core Skills: ADAS & Embedded",
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
    },
    {
        title: "Tools & Software",
        skills: [
            { 
                name: "Jupyter Notebook", 
                icon: <SiJupyter size={36} color="#F37626" />
            },
            { 
                name: "MySQL Workbench", 
                icon: <SiMysql size={36} color="#4479A1" />
            },
            { 
                name: "Power BI", 
                icon: powerBiIcon
            },
            { 
                name: "GitHub", 
                icon: <SiGithub size={36} color="#FFFFFF" />
            }
        ]
    }
];

export const coreSkills = [
    "Generative AI & LLMs: ML, DL, NLP, LLMs, RAG, Prompt Engineering & Fine-Tuning LLM",
    "Data Analysis & Query: SQL, Power Query, Data Visualization & Exploratory Data Analysis",
    "Libraries: Pandas, NumPy, Matplotlib, Seaborn, TensorFlow, Transformers & Langchain",
    "Core Skills: Embedded C, Sensor Interfacing & ADAS Designing",
    "Programming & Tools: Python, Java (Basic), Web Technologies, Jupyter Notebook & MySQL Workbench"
];

export const skills = [];
