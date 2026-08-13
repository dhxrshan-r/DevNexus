import shopnovaImg from '../assets/projects/shopnova.png';
import preconnectImg from '../assets/projects/preconnect.png';
import gpafyImg from '../assets/projects/gpafy.png';
import projectManagementImg from '../assets/projects/project_management.png';

export const projects = [
    {
        id: 1,
        title: 'Intelligent Medical Knowledge Assistant',
        description: 'Developed a Python-based RAG application using LangChain, LLaMA, HuggingFace embeddings, and ChromaDB to retrieve trusted medical knowledge and generate context-aware, evidence-based responses.',
        image: preconnectImg,
        tags: ['Python', 'LangChain', 'LLaMA', 'HuggingFace', 'ChromaDB'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
    {
        id: 2,
        title: 'Social Media Analytics & Insights',
        description: 'Analyzed social media data using Python to uncover engagement trends, audience behavior, and actionable insights through data analysis and visualization.',
        image: gpafyImg,
        tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
    {
        id: 3,
        title: 'NLP-based Stock Market Sentiment Analysis',
        description: 'Developed a Python-based NLP system to classify financial news sentiment using Word2Vec, Sentence Transformers, Random Forest, and Neural Networks for stock market insights.',
        image: projectManagementImg,
        tags: ['Python', 'Word2Vec', 'Sentence Transformers', 'Random Forest', 'Neural Networks'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
    {
        id: 4,
        title: 'Zomato Restaurant Analysis',
        description: 'Developed an interactive Power BI dashboard to analyze restaurant ratings, pricing, locations, and customer preferences, generating actionable insights from Zomato data.',
        image: shopnovaImg,
        tags: ['Power BI', 'SQL', 'Data Visualization', 'Power Query'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
];