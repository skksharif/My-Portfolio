import { portfolioData } from '../data/portfolio';
import { Command, CommandOutput } from '../types';

export const commands: Record<string, Command> = {
  help: {
    name: 'help',
    description: 'Show available commands',
    execute: () => ({
      type: 'text',
      content: [
        'Available commands:',
        '',
        '  help                    - Show this help message',
        '  about                   - Display profile summary',
        '  skills                  - List technical skills',
        '  experience             - Show work experience',
        '  projects               - List all projects',
        '  project <name>         - Show specific project details',
        '  education              - Academic background',
        '  achievements           - Awards and recognitions',
        '  certifications         - List certificates',
        '  contact                - Contact information',
        '  resume                 - Download resume',
        '  clear                  - Clear terminal screen',
        '  matrix                 - Enter the matrix... 🌟',
        '',
        'Type any command and press Enter to execute.',
        'Use "project <name>" for specific project details (e.g., "project stucert")'
      ]
    })
  },

  about: {
    name: 'about',
    description: 'Display profile summary',
    execute: () => ({
      type: 'text',
      content: [
        `${portfolioData.name}`,
        `${'='.repeat(portfolioData.name.length)}`,
        `${portfolioData.title}`,
        '',
        ...portfolioData.about
      ]
    })
  },

  skills: {
    name: 'skills',
    description: 'List technical skills',
    execute: () => {
      const skillLines: string[] = ['Technical Skills:', ''];
      
      Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        skillLines.push(`${category}:`);
        skills.forEach(skill => {
          skillLines.push(`  • ${skill}`);
        });
        skillLines.push('');
      });

      return {
        type: 'text',
        content: skillLines
      };
    }
  },

  experience: {
    name: 'experience',
    description: 'Show work experience',
    execute: () => ({
      type: 'text',
      content: [
        'Work Experience:',
        '',
        ...portfolioData.experience.flatMap(exp => [
          `${exp.role} at ${exp.company}`,
          `Duration: ${exp.duration}`,
          `${exp.description}`,
          ''
        ])
      ]
    })
  },

  projects: {
    name: 'projects',
    description: 'List all projects',
    execute: () => ({
      type: 'text',
      content: [
        'Projects Portfolio:',
        '',
        ...Object.values(portfolioData.projects).map(project => 
          `• ${project.name} - ${project.description}`
        ),
        '',
        'Use "project <name>" for detailed information about a specific project.',
        'Available projects: stucert, ai-error-formatter, jira-clone, portfolio-chatbot'
      ]
    })
  },

  project: {
    name: 'project',
    description: 'Show specific project details',
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Please specify a project name. Usage: project <name>\nAvailable: stucert, ai-error-formatter, jira-clone, portfolio-chatbot'
        };
      }

      const projectName = args[0].toLowerCase();
      const project = portfolioData.projects[projectName];

      if (!project) {
        return {
          type: 'error',
          content: `Project "${projectName}" not found.\nAvailable projects: ${Object.keys(portfolioData.projects).join(', ')}`
        };
      }

      return {
        type: 'project',
        content: project
      };
    }
  },

  education: {
    name: 'education',
    description: 'Academic background',
    execute: () => ({
      type: 'text',
      content: [
        'Education:',
        '',
        ...portfolioData.education.flatMap(edu => [
          `${edu.degree}`,
          `${edu.institution}`,
          `Duration: ${edu.duration}`,
          `Score: ${edu.gpa || edu.score}`,
          ''
        ])
      ]
    })
  },

  achievements: {
    name: 'achievements',
    description: 'Awards and recognitions',
    execute: () => ({
      type: 'text',
      content: [
        'Achievements & Recognition:',
        '',
        ...portfolioData.achievements
      ]
    })
  },

  certifications: {
    name: 'certifications',
    description: 'List certificates',
    execute: () => ({
      type: 'text',
      content: [
        'Certifications:',
        '',
        ...portfolioData.certifications.map(cert => `• ${cert}`)
      ]
    })
  },

  contact: {
    name: 'contact',
    description: 'Contact information',
    execute: () => ({
      type: 'text',
      content: [
        'Contact Information:',
        '',
        `📧 Email: ${portfolioData.email}`,
        `📱 Phone: ${portfolioData.phone}`,
        `🌐 Portfolio: ${portfolioData.portfolio}`,
        `💼 LinkedIn: ${portfolioData.linkedin}`,
        `🐙 GitHub: ${portfolioData.github}`,
        `🧩 LeetCode: ${portfolioData.leetcode}`,
        '',
        'Feel free to reach out for collaboration opportunities!'
      ]
    })
  },

  resume: {
    name: 'resume',
    description: 'Download resume',
    execute: () => ({
      type: 'text',
      content: [
        'Resume Download:',
        '',
        '📄 Resume will be available for download soon.',
        'For now, you can view my complete profile at:',
        `🌐 ${portfolioData.portfolio}`,
        `💼 ${portfolioData.linkedin}`
      ]
    })
  },

  clear: {
    name: 'clear',
    description: 'Clear terminal screen',
    execute: () => ({
      type: 'text',
      content: ['']
    })
  },

  matrix: {
    name: 'matrix',
    description: 'Enter the matrix',
    execute: () => ({
      type: 'text',
      content: [
        '🌟 Welcome to the Matrix...',
        '',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        '',
        'The Matrix has you... 🕶️',
        '',
        'Wake up, Neo. The portfolio awaits.',
        'Type "help" to return to reality.'
      ]
    })
  }
};

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const parts = input.trim().split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  
  return { command, args };
};

export const executeCommand = async (input: string): Promise<CommandOutput> => {
  const { command, args } = parseCommand(input);
  
  if (!command) {
    return {
      type: 'error',
      content: 'Please enter a command. Type "help" for available commands.'
    };
  }

  const cmd = commands[command];
  
  if (!cmd) {
    return {
      type: 'error',
      content: [
        `bash: ${command}: command not found`,
        '',
        `[ERROR] Unknown command: '${command}'`,
        `[INFO] Type 'help' to see available commands`,
        `[HINT] Did you mean one of these?`,
        `  • help - Show available commands`,
        `  • about - Display profile information`,
        `  • projects - View project portfolio`,
        `  • skills - List technical skills`,
        `  • contact - Get contact information`
      ]
    };
  }

  try {
    const result = await cmd.execute(args);
    return result;
  } catch (error) {
    return {
      type: 'error',
      content: `Error executing command: ${error}`
    };
  }
};