export type ProjectTagKey = 'technologies' | 'features';

export interface ProjectTag {
  id: number;
  key: ProjectTagKey;
  tag: string;
}

export interface ProjectDetail {
  title: string;
  items: string[];
}

export interface Project {
  id: number;
  projectType: string;
  title: string;
  description: string;
  url?: string;
  previewUrl?: string;
  previewImage?: string;
  button: string;
  isPrivate?: boolean;
  tags: ProjectTag[];
  details: {
    technologies: ProjectDetail;
    features: ProjectDetail;
  };
}

export type ProjectsContent = {
  fa: {
    title: string;
    projects: Project[];
  };
  en: {
    title: string;
    projects: Project[];
  };
};