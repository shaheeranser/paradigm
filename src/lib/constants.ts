// Types
export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  yearsOfExperience?: number;
  bio?: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  contributors?: string[];
  categories?: string[];
}

// Developers data updated from provided profiles
export const DEVELOPERS: Developer[] = [
  {
    id: 'dev-001',
    name: 'Muhammad Shaheer',
    role: 'Full Stack Developer',
    avatar: '/shaheer.jpeg',
    yearsOfExperience: 6,
    bio: 'Lead engineer focused on building scalable web platforms and integrations.',
    skills: ['ReactJS', 'ExpressJS', 'FastAPI', 'Python', 'DevOps']
  },
  {
    id: 'dev-002',
    name: 'Rida Hanif',
    role: 'Data Scientist',
    avatar: '/rida.jpeg',
    yearsOfExperience: 5,
    bio: 'Data scientist specializing in analytics, ML pipelines and visualizations.',
    skills: ['Python', 'SQL', 'Power BI', 'MLOps', 'Azure']
  },
  {
    id: 'dev-003',
    name: 'Samra Akhtar',
    role: 'Web Developer & Designer',
    avatar: '/samra.jpeg',
    yearsOfExperience: 4,
    bio: 'Front-end developer with a focus on UI/UX and accessible designs.',
    skills: ['HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'Python', 'UI/UX']
  },
  {
    id: 'dev-004',
    name: 'Muhammad Ahmad',
    role: 'AI Engineer & Data Analyst',
    avatar: '/ahmad.jpeg',
    yearsOfExperience: 3,
    bio: 'AI engineer working on production ML systems and generative AI integrations.',
    skills: ['Python', 'Generative AI', 'NLP', 'LangChain', 'Scikit-learn']
  }
];

// Projects data populated with key projects from the profiles
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'LookVisa',
    description: 'Commercial platform connecting international investors with sponsors, featuring custom marketplace logic and user workflows.',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com/shaheeranser',
    liveUrl: 'https://lookvisa.com',
    contributors: ['dev-001'],
    categories: ['platform', 'enterprise']
  },
  {
    id: 2,
    title: 'Student Performance Dashboard',
    description: 'Interactive Power BI dashboard visualizing KPIs like subject-wise performance and attendance trends with DAX measures.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-002'],
    categories: ['data', 'education']
  },
  {
    id: 3,
    title: 'Virtual Car Showroom (VCS)',
    description: 'AI-powered web application integrating intelligent recommendation features into a web-based platform.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-003', 'dev-004'],
    categories: ['ai', 'product']
  },
  {
    id: 4,
    title: 'Thrive Forward',
    description: 'Front-end and UX for a therapy clinic with automated scheduling and contact integrations (design-focused).',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com/shaheeranser',
    liveUrl: 'https://thrive-forward.vercel.app',
    contributors: ['dev-001', 'dev-003'],
    categories: ['design', 'csr']
  },
  {
    id: 5,
    title: 'Generic ML Pipeline',
    description: 'End-to-end machine learning pipeline with modular components for data ingestion, transformation, and MLOps deployment.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004', 'dev-002'],
    categories: ['ml', 'ops']
  }
];

// Navigation items
export const NAV_ITEMS = [
  { label: '</Home>', id: 'home' },
  { label: '</AboutUs>', id: 'about' },
  { label: '</Team>', id: 'team' },
  { label: '</Contact>', id: 'contact' }
];

// Web3Forms — replace with your real access key (or set via env and load here)
export const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_YOUR_WEB3FORMS_KEY';

// Skill categories updated with combined skills from all profiles
export const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: ['ReactJS', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    category: 'Backend & AI',
    skills: ['Python', 'ExpressJS', 'FastAPI', 'C++', 'Generative AI', 'NLP']
  },
  {
    category: 'Data & DevOps',
    skills: ['SQL', 'Power BI', 'Tableau', 'Docker', 'Azure', 'MLOps']
  },
  {
    category: 'Tools & Design',
    skills: ['Git', 'Postman', 'Excel', 'LangChain', 'Scikit-learn']
  }
];