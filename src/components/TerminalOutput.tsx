import React from 'react';
import { CommandOutput, ProjectDetails } from '../types';
import { useTypewriter } from '../hooks/useTypewriter';
import { ExternalLink, Github } from 'lucide-react';

interface TerminalOutputProps {
  output: CommandOutput;
  delay?: number;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ output, delay = 0 }) => {
  const getTextContent = () => {
    if (output.type === 'project' && typeof output.content === 'object') {
      const project = output.content as ProjectDetails;
      return [
        `${project.name}`,
        `${'='.repeat(project.name.length)}`,
        '',
        project.description,
        '',
        'Tech Stack:',
        ...project.stack.map(tech => `  • ${tech}`),
        '',
        'Key Features:',
        ...project.features.map(feature => `  • ${feature}`),
        '',
        project.github ? `GitHub: ${project.github}` : '',
        project.live ? `Live Demo: ${project.live}` : ''
      ].filter(Boolean);
    }
    
    if (Array.isArray(output.content)) {
      return output.content;
    }
    
    return [output.content as string];
  };

  const { displayText, isComplete } = useTypewriter(getTextContent(), 30, delay);

  const renderContent = () => {
    if (output.type === 'error') {
      return (
        <div className="text-red-400 text-xs sm:text-sm space-y-1">
          {displayText.split('\n').map((line, index) => {
            if (line.startsWith('[ERROR]')) {
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-red-400 font-semibold">{line}</span>
                </div>
              );
            }
            if (line.startsWith('[INFO]')) {
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-blue-400">ℹ️</span>
                  <span className="text-blue-300">{line}</span>
                </div>
              );
            }
            if (line.startsWith('[HINT]')) {
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-yellow-400">💡</span>
                  <span className="text-yellow-300">{line}</span>
                </div>
              );
            }
            if (line.startsWith('bash:')) {
              return (
                <div key={index} className="text-red-300 font-mono">
                  {line}
                </div>
              );
            }
            if (line.startsWith('  •')) {
              return (
                <div key={index} className="text-gray-300 ml-4">
                  {line}
                </div>
              );
            }
            return (
              <div key={index} className="break-words">
                {line}
              </div>
            );
          })}
        </div>
      );
    }

    if (output.type === 'project' && typeof output.content === 'object') {
      const project = output.content as ProjectDetails;
      const lines = displayText.split('\n');
      
      return (
        <div className="text-green-400 space-y-1 text-xs sm:text-sm">
          {lines.map((line, index) => {
            if (line.includes('GitHub:') && project.github) {
              return (
                <div key={index} className="flex items-center gap-1 sm:gap-2 flex-wrap">
                  <span>{line.split(':')[0]}:</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1 transition-colors text-xs sm:text-sm"
                  >
                    <Github size={12} className="sm:w-4 sm:h-4" />
                    View Repository
                    <ExternalLink size={10} className="sm:w-3 sm:h-3" />
                  </a>
                </div>
              );
            }
            
            if (line.includes('Live Demo:') && project.live) {
              return (
                <div key={index} className="flex items-center gap-1 sm:gap-2 flex-wrap">
                  <span>{line.split(':')[0]}:</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1 transition-colors text-xs sm:text-sm"
                  >
                    View Live Demo
                    <ExternalLink size={10} className="sm:w-3 sm:h-3" />
                  </a>
                </div>
              );
            }
            
            return <div key={index} className="break-words">{line}</div>;
          })}
        </div>
      );
    }

    return (
      <div className="text-green-400 text-xs sm:text-sm">
        <pre className="whitespace-pre-wrap font-mono break-words">{displayText}</pre>
      </div>
    );
  };

  return (
    <div className="mb-4">
      {renderContent()}
      {!isComplete && (
        <span className="animate-pulse text-green-400">▍</span>
      )}
    </div>
  );
};

export default TerminalOutput;