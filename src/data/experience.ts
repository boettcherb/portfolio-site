// data/experience.ts

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    company: "Handshake AI",
    title: "AI Trainer — Coding",
    startDate: "Nov 2025",
    endDate: "Present",
    description:
      "Train and evaluate AI models on tasks involving tool use, research, and problem solving. Current projects include teaching models to work with terminal commands, navigate command-line environments, and find and evaluate reliable sources on the web.",
    technologies: ["Python", "React", "C++", "Git"],
  },
  {
    company: "DataAnnotation Tech",
    title: "AI Trainer — Coding",
    startDate: "Feb 2025",
    endDate: "Nov 2025",
    description:
      "Train and evaluate large language models on software development tasks involving Python, React, C++, Git, and GitHub. Write reference solutions, evaluation rubrics, and detailed analyses of model reasoning and code correctness.",
    technologies: ["Python", "React", "C++", "Git"],
  },
  {
    company: "Reef Technologies",
    title: "IT Security Intern",
    startDate: "Jun 2022",
    endDate: "Aug 2022",
    description:
      "Helped configure DMARC across more than 100 company domains, monitored security alerts and logs using Palo Alto Cortex, and assisted with inventory and documentation of thousands of company devices.",
    technologies: ["Cybersecurity", "DMARC", "Palo Alto Cortex"],
  },
];
