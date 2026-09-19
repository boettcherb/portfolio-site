export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl?: string;
  gitHubUrl?: string;
}

export const projectsData: Project[] = [
    {
        title: "BrainSync Calendar App",
        description: "Full-stack web app allowing users to create and share calendars.",
        image: "images/brainsync.png",
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
        gitHubUrl: "placeholder",
        projectUrl: undefined
    },
    {
        title: "Task Manager App",
        description: "Simple Full-Stack Task Management Application",
        image: "images/task-app.png",
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        gitHubUrl: "https://github.com/boettcherb/TaskManager",
        projectUrl: "https://taskapp.brandonboettcher.dev"
    },
    {
        title: "Chess Engine",
        description: "UCI-compatible chess engine written in C++ and integrated with Lichess for online play",
        image: "images/deepblunder.png",
        technologies: ['C++', 'Algorithms', 'Data Structures'],
        gitHubUrl: "https://github.com/boettcherb/DeepBlunder-Chess-Engine",
        projectUrl: undefined
    },
    {
        title: "Asteroids",
        description: "Classic arcade-style Asteroids game implemented in Java.",
        image: "images/asteroids.png",
        technologies: ['Java', 'Game Development', 'Graphics'],
        gitHubUrl: "https://github.com/boettcherb/Asteroids",
        projectUrl: undefined
    }
];
