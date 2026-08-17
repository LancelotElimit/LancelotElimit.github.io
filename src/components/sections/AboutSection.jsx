import { useState } from 'react'
import TypewriterText from '../TypewriterText'

function TechGroup({ title, items }) {
    return (
        <div className="tech-group">
            <h3>{title}</h3>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
    )
}

function AboutSection({ language, t, techStack }) {
    const [profileFlipped, setProfileFlipped] = useState(false)

    return (
        <section className="intro" id="about">
            <div className="profile-lockup">
                <span className="profile-word" aria-hidden="true">LANC</span>
                <button
                    className="profile-flip-button"
                    type="button"
                    onClick={() => setProfileFlipped((flipped) => !flipped)}
                    aria-label={t.flipPortrait}
                    aria-pressed={profileFlipped}
                >
                    <span className={`profile-flip-card${profileFlipped ? ' is-flipped' : ''}`}>
                        <img src="/images/gallery_2.jpg" alt={t.portraitBackAlt} className="profile-pic profile-front" />
                        <img src="/images/profile.jpg" alt={t.portraitAlt} className="profile-pic profile-back" />
                    </span>
                </button>
                <span className="profile-word" aria-hidden="true">ELOT</span>
            </div>

            <div className="about-copy">
                <h1>{t.introduction}</h1>
                <TypewriterText key={`description-${language}`} text={t.aboutDescription} delay={250} />
                <TypewriterText
                    key={`focus-${language}`}
                    text={t.currentFocus}
                    delay={t.aboutDescription.length * 18 + 500}
                />
            </div>

            <div className="tech-stack" aria-labelledby="tech-stack-title">
                <h2 id="tech-stack-title">{t.techStack}</h2>
                <div className="tech-groups">
                    <TechGroup title={t.languagesLabel} items={techStack.languages} />
                    <TechGroup title={t.frameworksLabel} items={techStack.frameworks} />
                    <TechGroup title={t.toolsLabel} items={techStack.tools} />
                    <TechGroup title={t.interestsLabel} items={techStack.interests} />
                </div>
            </div>
            <hr className="section-divider" />
        </section>
    )
}

export default AboutSection
