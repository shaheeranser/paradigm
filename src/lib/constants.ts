// Types
export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
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
    avatar: '/shaheer.jpeg', // Ensure these image paths match your actual assets
    bio: 'Final-year Computer Systems student building functional web apps. Experienced in commercial full-stack development and hardware-software interfaces.',
    skills: ['ReactJS', 'ExpressJS', 'FastAPI', 'DevOps', 'Computer Systems']
  },
  {
    id: 'dev-004',
    name: 'Muhammad Ahmad',
    role: 'Operations Manager & Creative Lead',
    avatar: '/ahmad.jpeg',
    bio: 'Manager and Team Lead with 2+ years in CSR and dispatch operations (vGrubs/Grubcon). Experienced in graphic design and team leadership.',
    skills: ['Team Leadership', 'CRM', 'Adobe Photoshop', 'Adobe Illustrator', 'Customer Support']
  },
  {
    id: 'dev-002',
    name: 'Rida Hanif',
    role: 'Data Scientist',
    avatar: '/rida.jpeg',
    bio: 'Data Scientist focused on end-to-end ML pipelines, visualization, and MLOps. Skilled in communicating insights via Power BI and Azure.',
    skills: ['Python', 'SQL', 'Power BI', 'MLOps', 'Azure', 'Docker']
  },
  {
    id: 'dev-003',
    name: 'Samra Akhtar',
    role: 'Frontend Developer & AI Enthusiast',
    avatar: '/samra.jpeg',
    bio: 'Post-ADP CS student combining web development with AI integration. focused on responsive design and voice recognition logic.',
    skills: ['HTML/CSS', 'Bootstrap', 'Python', 'C++', 'Voice Recognition']
  },
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
    title: 'Thrive Forward',
    description: 'Therapy clinic platform with automated scheduling and contact integrations. Focused on static front-end and business operations.',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com/shaheeranser',
    liveUrl: 'https://thrive-forward.vercel.app',
    contributors: ['dev-001'],
    categories: ['design', 'commercial']
  },
  {
    id: 3,
    title: 'Student Performance Dashboard',
    description: 'Interactive Power BI dashboard visualizing KPIs like subject-wise performance, attendance trends, and pass/fail ratios using DAX.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-002'],
    categories: ['data', 'analytics']
  },
  {
    id: 4,
    title: 'Lahorified (Creative Lead)',
    description: 'Led creative direction and design operations, overseeing digital content and visual branding strategies.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['design', 'creative']
  },
  {
    id: 5,
    title: 'LDA Project Supervision',
    description: 'Supervised on-site project operations and coordinated between technical teams for the Lahore Development Authority.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['management', 'operations']
  },
  {
    id: 6,
    title: 'vGrubs & Grubcon Operations',
    description: 'Managed recovery, concierge, and dispatch departments. Collaborated with UberEATS, Grubhub, and Doordash providers.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['management', 'operations']
  },
  {
    id: 7,
    title: 'Virtual Car Showroom (VCS)',
    description: 'AI-powered web application integrating intelligent recommendation features into a web-based platform.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-003'],
    categories: ['ai', 'web']
  },
  {
    id: 8,
    title: 'Generic ML Pipeline',
    description: 'End-to-end machine learning system with modular components for data ingestion, transformation, and MLOps deployment.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-002'],
    categories: ['ml', 'ops']
  },
  {
    id: 9,
    title: 'PNY Trainings Brand Ambassadorship',
    description: 'Represented PNY at promotional campaigns and workshops, engaging students and professionals in technical education.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['marketing', 'communications']
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
    category: 'Full Stack & AI',
    skills: ['ReactJS', 'FastAPI', 'Python', 'C++', 'Voice Recognition']
  },
  {
    category: 'Data Science',
    skills: ['SQL', 'Power BI', 'MLOps', 'Azure', 'Docker', 'R']
  },
  {
    category: 'Operations & Design',
    skills: ['Team Leadership', 'CRM', 'Adobe Photoshop', 'Illustrator', 'Management']
  },
  {
    category: 'Core Engineering',
    skills: ['HTML/CSS', 'Bootstrap', 'Git', 'Computer Systems', 'DevOps']
  }
];