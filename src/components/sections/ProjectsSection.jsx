function ProjectsSection({ t, projects, highlights }) {
    return (
        <section id="work" className="projects">
            <h2>{t.workTitle}</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <article className="resume-project-card" key={project.title}>
                        <div className="project-card-header">
                            <h3>{project.title}</h3>
                            <span>{project.period}</span>
                        </div>
                        <p>{project.description}</p>
                        <ul className="project-tags" aria-label={`${project.title} technologies`}>
                            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                        <div className="project-card-footer">
                            {project.result && <strong>{project.result}</strong>}
                            {project.url && (
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    {t.viewSource} ↗
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            <div className="competition-highlights">
                <h3>{t.achievementsTitle}</h3>
                <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
        </section>
    )
}

export default ProjectsSection
