import medicalRagImg from '../assets/projects/medical_rag.png';
import socialAnalyticsImg from '../assets/projects/social_analytics.png';
import foodNutritionImg from '../assets/projects/food_nutrition_analytics.png';
import driverDrowsinessImg from '../assets/projects/driver_drowsiness.png';

export const projects = [
    {
        id: 1,
        title: 'Intelligent Medical Knowledge Assistant',
        category: 'ai',
        categoryLabel: 'Generative AI & RAG',
        date: 'Aug 2026',
        description: 'Developed a RAG-based medical assistant using LangChain and Merck Manuals to provide evidence-based responses to clinical queries. Processed 4,000+ pages of medical knowledge and evaluated Prompt Engineering vs. RAG, achieving approximately 4.5/5 groundedness & relevance.',
        highlights: ['LangChain RAG Pipeline', '4,000+ Pages Medical Knowledge', '4.5/5 Groundedness & Relevance Score'],
        image: medicalRagImg,
        tags: ['Python', 'LangChain', 'LLMs', 'RAG', 'Merck Manuals', 'Prompt Engineering'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
    {
        id: 2,
        title: 'Food & Health Nutrition Analytics',
        category: 'data',
        categoryLabel: 'SQL & Power BI',
        date: 'Aug 2026',
        description: 'Analyzed and cleaned a nutrition-focused dataset using MySQL, applying filtering and aggregation techniques to identify key food, health, and nutritional insights. Transformed SQL-based analysis into an interactive Power BI dashboard with KPIs and visualizations.',
        highlights: ['MySQL Data Wrangling & Aggregation', 'Interactive Power BI Executive Dashboard', 'KPI & Nutritional Trend Visualizations'],
        image: foodNutritionImg,
        tags: ['SQL', 'MySQL', 'Power BI', 'Power Query', 'Data Analytics', 'Data Visualization'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
    {
        id: 3,
        title: 'Social Media Analytics & Insights',
        category: 'nlp',
        categoryLabel: 'Python & NLP',
        date: 'Jun 2026',
        description: 'Parses post metadata (name, position, state) directly from labels and maps each state to its region. Runs sentiment analysis with NLTK\'s VADER to classify posts as positive/negative/neutral, computing sentiment quantiles, hashtags, and per-hashtag sentiment scores.',
        highlights: ['NLTK VADER Sentiment Analysis', 'Region & State Metadata Mapping', 'Hashtag & Quantile Sentiment Scoring'],
        image: socialAnalyticsImg,
        tags: ['Python', 'NLTK', 'VADER', 'Sentiment Analysis', 'Pandas', 'Data Wrangling'],
        sourceUrl: "https://github.com/dhxrshan-r/Capstone-Social-Media-Analytics.git",
    },
    {
        id: 4,
        title: 'Intelligent Driver Monitoring & Emergency Control System',
        category: 'ai',
        categoryLabel: 'Computer Vision & ADAS',
        date: 'May 2026',
        description: 'Developed a real-time driver drowsiness detection system using Python, OpenCV, Dlib, and image processing, analyzing Eye Aspect Ratio (EAR), Head Pose Estimation, and Blink Rate. Implemented CLAHE-based low-light image preprocessing and a 2-of-3 multi-cue decision rule to reduce false alarms.',
        highlights: ['Eye Aspect Ratio & Head Pose Estimation', 'CLAHE Low-Light Image Preprocessing', '2-of-3 Multi-Cue Decision Rule'],
        image: driverDrowsinessImg,
        tags: ['Python', 'OpenCV', 'Dlib', 'Computer Vision', 'ADAS', 'Image Processing'],
        sourceUrl: "https://github.com/dhxrshan-r?tab=repositories",
    },
];

