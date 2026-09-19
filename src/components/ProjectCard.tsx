import type { Project } from '../data/projects';

function ProjectCard({title, description, image, technologies, projectUrl, gitHubUrl}: Project) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 border-2 border-dark">
        <img
          src={image}
          className="card-img-top project-card-img"
          alt={`${title} Project Preview`}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-inline">
            {technologies.map((tech) => (
              <li key={tech} className="list-inline-item badge bg-secondary me-1">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-auto d-grid gap-2">
            {gitHubUrl && (
              <a href={gitHubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            )}
            {projectUrl && (
              <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Project Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
