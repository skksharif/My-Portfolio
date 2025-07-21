import React, { useState, useEffect, useRef } from 'react';
import { HistoryEntry } from '../types';
import { executeCommand } from '../utils/commandParser';
import TerminalOutput from './TerminalOutput';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    const welcomeMessage = {
      command: 'welcome',
      output: {
        type: 'text' as const,
        content: [
          '╔═══════════════════════════════════════════════════════════════╗',
          '║                     TERMINAL PORTFOLIO v2.1                  ║',
          '║                   Shaik Khasim Sharif                        ║',
          '║                   Full Stack Developer                       ║',
          '╚═══════════════════════════════════════════════════════════════╝',
          '',
          '🚀 System initialized successfully...',
          '💻 Welcome to my interactive portfolio terminal!',
          '',
          'Type "help" to see available commands or explore my work:',
          '  • about       - Learn about me',
          '  • projects    - View my projects', 
          '  • skills      - Check my tech stack',
          '  • contact     - Get in touch',
          '',
          'Ready for input...'
        ]
      },
      timestamp: new Date()
    };
    
    setHistory([welcomeMessage]);
  }, []);

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus();
    }
  }, [isProcessing]);

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (command: string) => {
    if (command.trim() === '') return;

    setIsProcessing(true);
    
    // Add command to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    if (command.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setIsProcessing(false);
      setCurrentInput('');
      return;
    }

    // Execute command
    const output = await executeCommand(command);
    
    const newEntry: HistoryEntry = {
      command,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
    setCurrentInput('');
    setIsProcessing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-7xl">
        <div 
          ref={terminalRef}
          className="bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden w-full"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-2 sm:px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 truncate">
              terminal@portfolio:~$ Active Session
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-2 sm:p-4 min-h-[75vh] sm:min-h-[70vh] max-h-[75vh] sm:max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 text-xs sm:text-sm">
            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                {entry.command !== 'welcome' && (
                  <div className="flex items-center mb-2 flex-wrap">
                    <span className="text-blue-400">guest@portfolio</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-gray-500">$ </span>
                    <span className="text-white break-all">{entry.command}</span>
                  </div>
                )}
                <TerminalOutput 
                  output={entry.output} 
                  delay={entry.command === 'welcome' ? 500 : 0}
                />
              </div>
            ))}

            {/* Current Input Line */}
            {!isProcessing && (
              <div className="flex items-center flex-wrap">
                <span className="text-blue-400">guest@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent outline-none text-white flex-1 ml-1 min-w-0"
                  placeholder="Type a command..."
                  disabled={isProcessing}
                />
                <span className="animate-pulse text-green-400 ml-1">▍</span>
              </div>
            )}

            {isProcessing && (
              <div className="flex items-center flex-wrap">
                <span className="text-blue-400">guest@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white break-all">{currentInput}</span>
                <span className="animate-pulse text-green-400 ml-2">Processing...</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm px-2">
          <p>
            Built with ❤️ using React & TypeScript | 
            <a href="https://github.com/skksharif" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
              @skksharif
            </a>
          </p>
          <p className="mt-1 hidden sm:block">
            Press ↑/↓ for command history | Type "help" for available commands
          </p>
          <p className="mt-1 sm:hidden text-xs">
            Type "help" for commands
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;