export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => Promise<CommandOutput> | CommandOutput;
}

export interface CommandOutput {
  type: 'text' | 'list' | 'project' | 'link' | 'error';
  content: string | string[] | ProjectDetails;
  delay?: number;
}

export interface ProjectDetails {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  features: string[];
}

export interface HistoryEntry {
  command: string;
  output: CommandOutput;
  timestamp: Date;
}