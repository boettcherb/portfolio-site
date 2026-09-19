import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';

import { projectsData } from './data/projects';
import { experienceData, type Experience } from './data/experience';

import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container-sm mx-auto">
        {/* About Section */}
        <section id="about" className="container my-4">
          <h1 className="text-center">Brandon Boettcher</h1>
          <h3 className="text-center">
            Full-Stack Software Developer | Tech Enthusiast
          </h3>
          <div className="about-text mx-auto">
            <p>
              I'm a software developer with a B.S. in Computer Science from The
              University of Texas at Austin. My primary focus is full-stack
              development, and I enjoy building complete applications from the
              user interface and API layer through authentication, databases,
              and deployment.
            </p>
            <p>
              I'm also curious about how computers work at lower levels. That
              curiosity has led me to work on everything from Arduino projects
              and a breadboard CPU to systems programming, game development, and
              competitive programming. I enjoy projects that push me to learn a
              new technology or solve a problem I haven't encountered before.
            </p>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="my-5">
          <h2 className="mb-4">Projects</h2>
          <div className="container">
            <div className="row">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="my-5">
          <h2 className="mb-4">Experience</h2>
          <div className="container">
            {experienceData.map((experience: Experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.title}`}
                {...experience}
              />
            ))}
          </div>
        </section>
        {/* Awards Section */}
        <section id="awards" className="my-5">
          <h2 className="mb-4">Awards & Certifications</h2>
          <div className="mb-3">
            <h5 className="mb-1">
              <a
                href="https://verify.w3schools.com/6368G53NM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certified SQL Developer
              </a>
            </h5>
            <p className="text-body-secondary mb-0">
              W3Schools
            </p>
          </div>
          <div className="mb-3">
            <h5 className="mb-1">
              <a
                href="https://usaco.org/current/data/open19_silver_results.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                USA Computing Olympiad — Gold Division
              </a>
            </h5>
            <p className="text-body-secondary mb-0">
              Advanced to the Gold Division through competitive programming contests.
            </p>
          </div>
          <div className="mb-3">
            <h5 className="mb-1">
              <a
                href="https://www.lockheedmartin.com/en-us/who-we-are/communities/codequest/code-quest-past-quests/codequest-2019.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lockheed Martin CodeQuest 2019 — 1st Place
              </a>
            </h5>
            <p className="text-body-secondary mb-0">
              Advanced Division, Fort Worth
            </p>
          </div>
          <div className="mb-3">
            <h5 className="mb-1">
              <a
                href="https://cs.utdallas.edu/8751/battle-of-the-brains-high-school-programming-competition-hosts-largest-contest-in-its-history/"
                target="_blank"
                rel="noopener noreferrer"
              >
              Battle of the Brains 2018 — 1st Place
              </a>
            </h5>
            <p className="text-body-secondary mb-0">
              Advanced Division, UT Dallas
            </p>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="my-5 text-center">
          <h2 className="mb-3">Contact</h2>
          <p className="mx-auto contact-text">
            I'm always interested in opportunities to work on interesting
            software, learn new technologies, and grow as a developer.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
            <a
              href="mailto:brandonboettcher19@gmail.com"
              className="btn btn-primary"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-boettcher-8a8344313/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/boettcherb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
