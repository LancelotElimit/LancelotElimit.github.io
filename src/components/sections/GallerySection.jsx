import { useEffect, useState } from 'react'

function GallerySection({ t, images }) {
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        if (!selectedImage) return undefined

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setSelectedImage(null)
        }

        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [selectedImage])

    const openImageFromKeyboard = (event, imageSrc) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setSelectedImage(imageSrc)
        }
    }

    return (
        <>
            <section id="gallery" className="photos">
                <hr className="section-divider" />
                <h2>{t.photos}</h2>
                <div className="gallery-container">
                    {images.map((image) => (
                        <img
                            key={image.src}
                            className="pic1 gallery-img"
                            src={image.src}
                            alt={image.alt}
                            onClick={() => setSelectedImage(image.src)}
                            onKeyDown={(event) => openImageFromKeyboard(event, image.src)}
                            role="button"
                            tabIndex="0"
                        />
                    ))}
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
