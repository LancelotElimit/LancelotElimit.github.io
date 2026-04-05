import { useState } from 'react'
import './App.css'

const galleryImages = [
    { src: '/images/gallery_1.jpeg', alt: 'description_1' },
    { src: '/images/gallery_2.jpg', alt: 'description_2' },
    { src: '/images/gallery_3.jpg', alt: 'description_3' },
    { src: '/images/gallery_4.jpg', alt: 'description_4' },
    { src: '/images/gallery_5.jpg', alt: 'description_5' },
    { src: '/images/gallery_6.jpeg', alt: 'description_6' },
]

function App() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <>
            <nav className="navbar">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>

            <header className="hero">
                <div className="hero-overlay" />
                <div className="hero-text">
                    Hey, I'm <span>Lancelot</span>
                </div>
            </header>

            <section className="intro" id="about">
                <img
                    src="/images/profile.jpg"
                    alt="myself"
                    className="profile-pic gallery-img"
                    onClick={() => setSelectedImage('/images/profile.jpg')}
                />
                <h1>I am a full-stack web developer based in Melbourne Australia</h1>
                <p>——————————————</p>
            </section>

            <section id="work" className="projects">
                <h2>Here&apos;s what I&apos;ve done so far</h2>

                <div className="project">
                    <img
                        className="pic gallery-img"
                        src="/images/project_1.png"
                        alt="project-1_volcano"
                        onClick={() => setSelectedImage('/images/project_1.png')}
                    />
                    <p>
                        A visual environment project featuring volcanic terrain and cinematic
                        atmosphere. This project focuses on scene composition, lighting, and
                        dramatic environmental storytelling.
                    </p>
                </div>

                <div className="project">
                    <img
                        className="pic gallery-img"
                        src="/images/project_3.png"
                        alt="project-2_mangrove"
                        onClick={() => setSelectedImage('/images/project_3.png')}
                    />
                    <p>
                        A nature-inspired world scene with water and vegetation. This work
                        explores environment building, large-scale composition, and calm
                        visual mood design.
                    </p>
                </div>
            </section>

            <section id="gallery" className="photos">
                <p>——————————————</p>
                <h2>My Photos</h2>

                <div className="gallery-container">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            className="pic1 gallery-img"
                            src={image.src}
                            alt={image.alt}
                            onClick={() => setSelectedImage(image.src)}
                        />
                    ))}
                </div>
            </section>

            <footer className="footer" id="contact">
                <p>Contact: s225204972@deakin.edu.au | Phone: +61 402201872</p>
            </footer>

            {selectedImage && (
                <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
                    <div
                        className="modal-content-custom"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image preview"
                        >
                            ×
                        </button>
                        <img src={selectedImage} alt="Enlarged preview" className="modal-image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default App