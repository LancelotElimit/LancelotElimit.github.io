function ContactSection({ t }) {
    return (
        <footer className="footer" id="contact">
            <div className="contact-links">
                <span>{t.contact}: <a href="mailto:s225204972@deakin.edu.au">s225204972@deakin.edu.au</a></span>
                <span>{t.phone} ({t.australiaPhone}): <a href="tel:+61402201872">+61 402 201 872</a></span>
                <span>{t.phone} ({t.chinaPhone}): <a href="tel:+8619562179360">+86 195 6217 9360</a></span>
                <span>
                    {t.githubProfile}: <a href="https://github.com/LancelotElimit" target="_blank" rel="noreferrer">LancelotElimit ↗</a>
                </span>
            </div>
        </footer>
    )
}

export default ContactSection
