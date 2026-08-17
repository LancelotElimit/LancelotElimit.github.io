import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import GallerySection from '../components/sections/GallerySection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ResumeSection from '../components/sections/ResumeSection'

function HomePage({ language, t, content }) {
    const location = useLocation()

    useEffect(() => {
        const section = new URLSearchParams(location.search).get('section')
        if (section) {
            requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView())
        }
    }, [location.search])

    return (
        <>
            <header className="hero">
                <div className="hero-overlay" />
                <div className="hero-text">
                    <span className="typing-text" key={language}>
                        {t.greeting} <strong>Lancelot</strong>
                    </span>
                </div>
            </header>

            <AboutSection language={language} t={t} techStack={content.techStack} />
            <ResumeSection
                t={t}
                careers={content.careerDetails[language]}
                education={content.educationDetails[language]}
            />
            <ProjectsSection
                t={t}
                projects={content.portfolioProjects[language]}
                highlights={content.portfolioHighlights[language]}
            />
            <GallerySection t={t} images={content.galleryImages} />
            <ContactSection t={t} />
        </>
    )
}

export default HomePage
