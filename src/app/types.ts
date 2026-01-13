export type Link = { label: string; href: string };

export type WorkItem = {
  company: string;
  role: string;
  location?: string;
  start: string; // e.g. "Nov 2023"
  end: string;   // e.g. "Present"
  highlights: string[];
  links?: Link[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  links?: Link[];
};

export type EducationItem = {
  school: string;
  program: string;
  start: string; // e.g. "2015"
  end: string;   // e.g. "2018"
};

export type SiteContent = {
  meta: { title: string; description: string };
  brand: { name: string; taglineRotating: string[]};
  person: {
    name: string;
    headline: string;
    location: { name:string; continent?:string ; timezone?: string; }
    summary: string;
    email: string;
    links: Link[];
  };
  workFeatured: WorkItem[];
  workEarlier: WorkItem[];
  projects: ProjectItem[];
  skills: { group: string; items: string[] }[];
  education?: EducationItem[];
  about: string[];
};

