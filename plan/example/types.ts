export interface Track {
  id: string;
  name: string;
  label: string;
  image: string;
  description: string;
  prizes: string[];
  mentors: string[];
}

export interface ProjectGroup {
  id: number;
  groupNumber: string;
  title: string;
  members: string[];
  description: string;
  link: string;
  track: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
