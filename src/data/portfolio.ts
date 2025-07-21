import { ProjectDetails } from '../types';

export const portfolioData = {
  name: "Shaik Khasim Sharif",
  title: "Full Stack Developer",
  email: "khasimsharif12@gmail.com",
  phone: "+91 6300483327",
  portfolio: "https://skksharif.vercel.app",
  linkedin: "https://linkedin.com/in/skksharif",
  github: "https://github.com/skksharif",
  leetcode: "https://leetcode.com/u/khasimsharif12",
  
  about: [
    "Passionate Full Stack Developer, skilled in building clean, responsive web apps",
    "and working with REST APIs. Adept in MERN stack and blockchain integrations.",
    "Known for adaptability, leadership, and a love for building things from scratch.",
    "",
    "Currently pursuing B.Tech IT at LBRCE with 8.75 GPA.",
    "President of Naxatra Web Dev Club and active in organizing tech events."
  ],

  skills: {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "Solidity", "Motoko"],
    "Frontend": ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "SQL", "MongoDB", "Database Design"],
    "Blockchain": ["Solidity", "Motoko (ICP)", "Smart Contracts", "DeFi"],
    "Tools": ["Git", "GitHub", "Postman", "Vercel", "cPanel", "Render", "VS Code"]
  },

  experience: [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      duration: "2023 - Present",
      description: "Built responsive web applications using MERN stack for various clients"
    },
    {
      role: "Blockchain Developer Intern", 
      company: "Various Projects",
      duration: "2024",
      description: "Developed decentralized applications on Internet Computer Protocol"
    }
  ],

  projects: {
    "stucert": {
      name: "Stucert",
      description: "Blockchain-based certificate verification system using Internet Computer Protocol",
      stack: ["React.js", "Node.js", "MongoDB", "ICP", "Motoko", "Pinata IPFS"],
      github: "https://github.com/skksharif/stucert",
      features: [
        "Immutable certificate storage on blockchain",
        "QR code verification system",
        "Admin dashboard for certificate management",
        "IPFS integration for document storage"
      ]
    },
    "ai-error-formatter": {
      name: "AI Error Formatter",
      description: "NPM package that converts JavaScript errors into human-readable format using AI",
      stack: ["Node.js", "TypeScript", "Gemini API", "NPM"],
      github: "https://github.com/skksharif/ai-error-formatter",
      features: [
        "AI-powered error explanation",
        "Multiple output formats",
        "Easy integration with existing projects",
        "Comprehensive error analysis"
      ]
    },
    "jira-clone": {
      name: "Jira Clone",
      description: "Project management tool with Kanban boards and team collaboration features",
      stack: ["Next.js", "Clerk Auth", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/skksharif/jira-clone",
      features: [
        "Drag-and-drop Kanban boards",
        "User authentication and authorization",
        "Real-time collaboration",
        "Project analytics and reporting"
      ]
    },
    "portfolio-chatbot": {
      name: "Portfolio with AI Chatbot",
      description: "Personal portfolio website with integrated AI chatbot for visitor interaction",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      github: "https://github.com/skksharif/portfolio-chatbot",
      features: [
        "Interactive AI chatbot",
        "Dynamic content management",
        "Responsive design",
        "Contact form integration"
      ]
    }
  } as Record<string, ProjectDetails>,

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "LBRCE (Lakireddy Bali Reddy College of Engineering)",
      duration: "2021 - 2025",
      gpa: "8.75/10.0"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Board of Intermediate Education",
      duration: "2019 - 2021", 
      score: "910/1000"
    },
    {
      degree: "SSC",
      institution: "Board of Secondary Education",
      duration: "2019",
      gpa: "9.3/10.0"
    }
  ],

  achievements: [
    "🥉 3rd Prize - AWS Hackathon",
    "🥇 1st Prize - Medha Quiz Competition", 
    "💻 100+ problems solved on LeetCode",
    "🎓 NMMS Scholarship recipient",
    "👨‍💼 President - Naxatra Web Development Club",
    "🌟 Swecha Coordinator",
    "🎪 Organized 'WEBIFY' event and workshop at LBRCE",
    "🏗️ Built official website for Lakshya 2k24 fest"
  ],

  certifications: [
    "MERN Stack Development - CISCO ThingQbator",
    "Python Essentials 1 - Cisco NetAcad",
    "JavaScript Algorithms and Data Structures - freeCodeCamp",
    "Responsive Web Design - freeCodeCamp"
  ]
};