import { Link, NavLink } from 'react-router-dom'

function Sidebar({ theme, t, onThemeToggle, onLanguageToggle }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-controls">
                <button
                    className="theme-toggle"
                    type="button"
                    onClick={onThemeToggle}
                    aria-label={theme === 'light' ? t.switchToDark : t.switchToLight}
                    aria-pressed={theme === 'dark'}
                >
                    <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
                    <span>{theme === 'light' ? t.darkMode : t.lightMode}</span>
                </button>

                <button
                    className="language-toggle"
                    type="button"
                    onClick={onLanguageToggle}
                    aria-label={t.switchLanguage}
                >
                    Language / 语言
                </button>
            </div>

            <nav className="side-nav" aria-label={t.navigation}>
                <NavLink to="/" end>{t.home}</NavLink>
                <Link to="/?section=about">{t.about}</Link>
                <Link to="/?section=experience">{t.experience}</Link>
                <Link to="/?section=work">{t.work}</Link>
                <Link to="/?section=gallery">{t.gallery}</Link>
                <Link to="/?section=contact">{t.contact}</Link>
                <NavLink to="/blog">{t.blog}</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar
