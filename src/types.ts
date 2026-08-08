export type PageSection = 'home' | 'projects' | 'about' | 'contact';

export interface Project {
  id: number;
  groupName: string;
  projectName: string;
  members: string[];
  description: string;
  link: string;
}