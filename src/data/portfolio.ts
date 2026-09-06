/**
 * Centralized portfolio data.
 *
 * This is the ONLY file that should need editing to keep the site up to
 * date: swap in real project data, social URLs, the resume file, and the
 * certificate file as they become available. Nothing here is invented —
 * fields that aren't confirmed yet are explicitly marked `null` and the
 * UI renders an honest "to be updated" state for them instead of a guess.
 */

export const personal = {
  name: 'Sonika Kumari',
  role: 'Aspiring Software Developer',
  tagline: 'Building modern web experiences with code, creativity, and continuous learning.',
  email: 'sonikakumari9793@gmail.com',
  location: 'Simdega, Jharkhand, India',
  // Exact date of birth is intentionally left off the public-facing UI —
  // it isn't necessary for a professional portfolio and is a privacy risk.
  profileImage: '/profile.jpeg',
  resumeUrl: '/documents/Sonika-Kumari-Resume.pdf',
};

export const socials = {
  // Replace with real profile URLs when available. Left as `null` rather
  // than a fabricated link — the UI shows these as disabled/placeholder.
  github: null as string | null,
  linkedin: null as string | null,
  email: `mailto:${personal.email}`,
};

export const bio = {
  intro:
    "I'm a computer applications graduate from Simdega, Jharkhand, currently continuing my studies " +
    'in Master of Computer Applications. My interest in software started with curiosity about how ' +
    'the applications I used every day were actually built, and it has grown into a focused pursuit ' +
    'of web development, programming fundamentals, and writing code that solves real problems.',
  objective:
    'To grow as a software developer by building practical, well-engineered web applications — ' +
    'sharpening my skills in JavaScript and React on the frontend, Java and Python for programming ' +
    'and problem-solving, and Node.js on the backend — while contributing meaningfully to a team ' +
    'that values learning and clean, maintainable code.',
  highlights: [
    'Computer Applications graduate (BCA), currently pursuing MCA',
    'Based in Simdega, Jharkhand, India',
    'Focused on web development and programming fundamentals',
  ],
};

export const strengths = [
  {
    title: 'Continuous learning mindset',
    description: 'I treat every new framework or concept as worth understanding properly, not just using.',
  },
  {
    title: 'Problem-solving approach',
    description: 'I break problems into smaller pieces and work through them methodically rather than guessing.',
  },
  {
    title: 'Adaptability',
    description: "Comfortable picking up new tools and workflows quickly when a project calls for it.",
  },
  {
    title: 'Curiosity about technology',
    description: 'I like understanding how things work under the hood, not just what they do on the surface.',
  },
  {
    title: 'Willingness to learn new frameworks',
    description: 'Open to working across the stack and picking up whatever a team or project needs.',
  },
  {
    title: 'Focus on practical solutions',
    description: 'I care more about building something that works well than something that just looks finished.',
  },
];

export type SkillCategory = {
  category: string;
  skills: {
    name: string;
    description: string;
    icon: string; // lucide-react icon name, resolved in Skills.tsx
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', description: 'Semantic markup for accessible, well-structured web pages.', icon: 'FileCode2' },
      { name: 'CSS', description: 'Styling, layout, and responsive design across screen sizes.', icon: 'Palette' },
      { name: 'JavaScript', description: 'Core language for interactivity and application logic in the browser.', icon: 'Braces' },
      { name: 'React.js', description: 'Component-based JavaScript library for building modern user interfaces.', icon: 'Atom' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', description: 'JavaScript runtime for building server-side applications and APIs.', icon: 'Server' },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Java', description: 'Object-oriented language used for general-purpose programming and problem-solving.', icon: 'Coffee' },
      { name: 'Python', description: 'Readable, versatile language used for scripting and problem-solving.', icon: 'Terminal' },
    ],
  },
];

export type EducationEntry = {
  stage: string;
  institution: string | null;
  detail: string | null; // percentage or status
};

export const education: EducationEntry[] = [
  {
    stage: 'Matriculation',
    institution: 'UC Jampani, Simdega',
    detail: '74%',
  },
  {
    stage: 'Intermediate',
    institution: 'St. Mary Inter College, Samtoli, Simdega',
    detail: null,
  },
  {
    stage: 'Bachelor of Computer Applications (BCA)',
    institution: 'Simdega College, Simdega',
    detail: null,
  },
  {
    stage: 'Master of Computer Applications (MCA)',
    institution: null,
    detail: null,
  },
];

export const certifications = [
  {
    title: '3-Day Drone Bootcamp',
    description:
      'A hands-on, short-format bootcamp covering the fundamentals of drone technology.',
    fileUrl: '/documents/drone-bootcamp-certificate.pdf',
    // Issuing organization and exact date are not confirmed — omitted
    // rather than fabricated.
    issuer: null as string | null,
    date: null as string | null,
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  // Optional — set to 'in-progress' for projects that are still being built.
  status?: 'in-progress' | 'completed';
};

// Add real projects here as they're ready, matching the `Project` shape
// above. Leave `stack`, `image`, `githubUrl`, or `liveUrl` empty/null
// rather than guessing until those details are confirmed.
export const projects: Project[] = [
  {
    title: 'LinguaMeet AI',
    description: 'AI-based real-time multilingual meeting assistant.',
    stack: [],
    image: null,
    githubUrl: null,
    liveUrl: null,
    status: 'in-progress',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certification', href: '#certification' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
