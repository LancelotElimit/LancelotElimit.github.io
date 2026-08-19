function ResumeSection({ t, careers, education }) {
    return (
        <section id="experience" className="resume-overview">
            <div className="resume-column">
                <h2>{t.experienceTitle}</h2>
                <div className="career-list">
                    {careers.map((career) => (
                        <details className="timeline-card" key={`${career.role}-${career.period}`}>
                            <summary className="timeline-summary">
                                <div className="timeline-card-header">
                                    <div>
                                        <h3>{career.role}</h3>
                                        <p>{career.company}</p>
                                    </div>
                                    <span>{career.period}</span>
                                </div>
                                <span className="timeline-toggle" aria-hidden="true">
                                    <span className="timeline-expand-label">{t.expandExperience}</span>
                                    <span className="timeline-collapse-label">{t.collapseExperience}</span>
                                    <span className="timeline-chevron">⌄</span>
                                </span>
                            </summary>
                            <div className="timeline-details">
                                <ul>{career.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            <div className="resume-column">
                <h2>{t.educationTitle}</h2>
                <div className="education-list">
                    {education.map((item) => (
                        <article className="education-card" key={item.school}>
                            <div>
                                <h3>{item.school}</h3>
                                <p>{item.degree}</p>
                            </div>
                            <span>{item.period}</span>
                            {item.detail && <strong>{item.detail}</strong>}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResumeSection
