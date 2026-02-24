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
    id: 'dev-004',
    name: 'Muhammad Ahmad',
    role: 'Operations Manager & Creative Lead',
    avatar: '/ahmad.jpeg',
    bio: 'Manager and Team Lead with 2+ years in CSR and dispatch operations (vGrubs/Grubcon). Experienced in graphic design and team leadership.',
    skills: ['Team Leadership', 'CRM', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'HTML', 'CSS', 'Customer Support']
  },
  {
    id: 'dev-001',
    name: 'Muhammad Shaheer',
    role: 'Full Stack Developer',
    avatar: '/shaheer.jpeg', // Ensure these image paths match your actual assets
    bio: 'Final-year Computer Systems student building functional web apps. Experienced in commercial full-stack development and hardware-software interfaces.',
    skills: ['ReactJS', 'ExpressJS', 'FastAPI', 'DevOps', 'Computer Systems']
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    githubUrl: 'https://github.com/shaheeranser',
    liveUrl: 'https://lookvisa.com',
    contributors: ['dev-001'],
    categories: ['platform', 'enterprise']
  },
  {
    id: 2,
    title: 'Thrive Forward',
    description: 'Therapy clinic platform with automated scheduling and contact integrations. Focused on static front-end and business operations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    githubUrl: 'https://github.com/shaheeranser',
    liveUrl: 'https://thrive-forward.vercel.app',
    contributors: ['dev-001'],
    categories: ['design', 'commercial']
  },
  {
    id: 3,
    title: 'Student Performance Dashboard',
    description: 'Interactive Power BI dashboard visualizing KPIs like subject-wise performance, attendance trends, and pass/fail ratios using DAX.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-002'],
    categories: ['data', 'analytics']
  },
  {
    id: 4,
    title: 'Lahorified',
    description: 'Video editor and on camera host for a YouTube channel focused on Lahore’s culture and lifestyle, producing content that engages a local audience.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['design', 'creative']
  },
  {
    id: 5,
    title: 'LDA Project Supervision',
    description: 'Supervised on-site project operations and coordinated between technical teams for the Lahore Development Authority.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['management', 'operations']
  },
  {
    id: 6,
    title: 'vGrubs & Grubcon Operations',
    description: 'Managed recovery, concierge, and food dispatch departments. Collaborated with UberEATS, Grubhub, and Doordash providers.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['management', 'operations']
  },
  {
    id: 7,
    title: 'Virtual Car Showroom (VCS)',
    description: 'AI-powered web application integrating intelligent recommendation features into a web-based platform.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-003'],
    categories: ['ai', 'web']
  },
  {
    id: 8,
    title: 'Generic ML Pipeline',
    description: 'End-to-end machine learning system with modular components for data ingestion, transformation, and MLOps deployment.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-002'],
    categories: ['ml', 'ops']
  },
  {
    id: 9,
    title: 'PNY Trainings Brand Ambassadorship',
    description: 'Represented PNY at promotional campaigns and workshops, engaging students and professionals in technical education.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-004'],
    categories: ['marketing', 'communications']
  },
  {
    id: 10,
    title: 'vGrubs & Grubcon Operations',
    description: 'Customemr support operator handling high-volume inquiries and issue resolution for food delivery services, ensuring customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-003'],
    categories: ['management', 'operations']
  },
  {
    id: 11,
    title: 'AI for Brain-Computer Interfaces',
    description: 'Developed AI models for brain-computer interfaces, enabling direct neural control of digital systems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    githubUrl: '#',
    liveUrl: '#',
    contributors: ['dev-001', 'dev-004'],
    categories: ['ai', 'research']
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