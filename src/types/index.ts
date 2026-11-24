export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category?: 'fullstack' | 'backend' | 'frontend' | 'mobile';
  sourceCode?: string;
  hosted?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface SkillFramework {
  title: string;
  icon: string | string[];
  color: string;
}

export interface Skill {
  technology: string;
  percent: number;
  color: string;
  icon: string | string[];
  frameworks?: SkillFramework[];
}

