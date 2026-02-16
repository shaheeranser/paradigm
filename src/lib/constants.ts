// Dummy developers data
export const DEVELOPERS = [
  {
    name: 'Alex Chen',
    role: 'Senior Full-Stack Developer',
    avatar: '/avatar.svg',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'Jordan Lee',
    role: 'UI/UX Designer & Frontend Dev',
    avatar: '/avatar.svg',
    skills: ['Figma', 'React', 'Tailwind CSS', 'Animation', 'Design Systems']
  },
  {
    name: 'Sam Rivera',
    role: 'Backend & DevOps Engineer',
    avatar: '/avatar.svg',
    skills: ['Python', 'Docker', 'AWS', 'PostgreSQL', 'GraphQL']
  }
];

// Dummy projects data
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory and payment integration.',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for monitoring metrics and user engagement in real-time.',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Mobile App (React Native)',
    description: 'Cross-platform mobile application with offline-first architecture.',
    image: '/placeholder-project.svg',
    githubUrl: 'https://github.com',
    liveUrl: '#'
  }
];

// Navigation items
export const NAV_ITEMS = [
  { label: '</Home>', id: 'home' },
  { label: '</AboutMe>', id: 'about' },
  { label: '</Skills>', id: 'skills' },
  { label: '</Projects>', id: 'projects' }
];

// Skill categories
export const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    category: 'DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
  },
  {
    category: 'Design',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems']
  }
];
