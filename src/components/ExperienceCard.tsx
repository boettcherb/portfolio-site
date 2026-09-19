interface ExperienceCardProps {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

function ExperienceCard({
  company,
  title,
  startDate,
  endDate,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="mb-4">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div>
          <h4 className="mb-1">{title}</h4>
          <h5 className="text-body-secondary mb-2">{company}</h5>
        </div>

        <span className="text-body-secondary">
          {startDate} — {endDate}
        </span>
      </div>

      <p>{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="d-flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="badge text-bg-secondary"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceCard;
