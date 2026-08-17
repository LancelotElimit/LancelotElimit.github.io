function BackToTop({ label }) {
    return (
        <button
            className="back-to-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            aria-label={label}
            title={label}
        >
            <span aria-hidden="true">↑</span>
        </button>
    )
}

export default BackToTop
