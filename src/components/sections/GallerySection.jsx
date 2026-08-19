import { useEffect, useState } from 'react'

const wrapIndex = (index, length) => (index + length) % length

function GallerySection({ t, images }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(() => {
        const defaultIndex = images.findIndex((image) => image.src === '/images/gallery_3.jpg')
        return defaultIndex === -1 ? 0 : defaultIndex
    })
    const currentImage = images[currentIndex]

    const showPrevious = () => setCurrentIndex((index) => wrapIndex(index - 1, images.length))
    const showNext = () => setCurrentIndex((index) => wrapIndex(index + 1, images.length))

    useEffect(() => {
        if (!selectedImage) return undefined

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setSelectedImage(null)
        }

        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [selectedImage])

    const handleCarouselKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            showPrevious()
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault()
            showNext()
        }
    }

    return (
        <>
            <section id="gallery" className="photos">
                <hr className="section-divider" />
                <h2>{t.photos}</h2>

                <div
                    className="gallery-carousel"
                    aria-roledescription="carousel"
                    aria-label={t.galleryCarousel}
                    onKeyDown={handleCarouselKeyDown}
                >
                    <button
                        className="carousel-slide"
                        type="button"
                        onClick={() => setSelectedImage(currentImage.src)}
                        aria-label={t.openImagePreview}
                    >
                        <img
                            key={currentImage.src}
                            className="carousel-image"
                            src={currentImage.src}
                            alt={currentImage.alt}
                        />
                    </button>

                    <button type="button" className="carousel-arrow carousel-arrow-left" onClick={showPrevious} aria-label={t.previousPhoto}>
                        <span aria-hidden="true">←</span>
                    </button>

                    <button type="button" className="carousel-arrow carousel-arrow-right" onClick={showNext} aria-label={t.nextPhoto}>
                        <span aria-hidden="true">→</span>
                    </button>

                    <span className="carousel-counter" aria-live="polite">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                    </span>
                </div>
            </section>

            {selectedImage && (
                <div
                    className="modal-backdrop"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.imagePreview}
                >
                    <div className="modal-content-custom" onClick={(event) => event.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedImage(null)} aria-label={t.closePreview}>
                            &times;
                        </button>
                        <img src={selectedImage} alt={t.enlargedPreview} className="modal-image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default GallerySection
