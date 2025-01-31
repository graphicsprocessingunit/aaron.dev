export interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

export type ProjectName = "My-Website";

//Not Sure What This Error Is But It Works With No Fix So Don't Touch It
export const projects: Record<ProjectName, Project> = {
  "My-Website": {
    title: "My-Website",
    description: "This is the website you are currently on!",
    technologies: ["html", "css", "typescript"],
    demoLink: "https://aaron-dev-tau.vercel.app/",
    codeLink: "https://github.com/graphicsprocessingunit/aaron.dev/"
  }

} as const;
