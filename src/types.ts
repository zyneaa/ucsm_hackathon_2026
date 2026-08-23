export type PageSection = 'home' | 'teams' | 'projects' | 'about' | 'contact' | 'partner';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  link: string;
  description: string;
  fullDescription: string;
}

export interface Track {
  id: string;
  name: string;
  label: string;
  image: string;
  description: string;
  prizes: string[];
  mentors: string[];
}

export interface Project {
  id: number;
  groupName: string;
  projectName: string;
  members: string[];
  description: string;
  shortIntro: string;
  track: string;
  link: string;
}

export interface Team {
  id: number;
  teamNumber: string;
  teamName: string;
  members: string[];
}