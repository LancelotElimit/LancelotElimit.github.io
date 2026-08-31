import { Link, NavLink } from 'react-router-dom'

function Sidebar({ theme, t, onThemeToggle, onLanguageToggle }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand" aria-hidden="true">
                <span>03</span>
                <div>
                    <strong>LANCELOT</strong>
                    <small>INTERFACE</small>
                </div>
            </div>

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
                <NavLink to="/" end><span className="nav-label" data-text={t.home}>{t.home}</span></NavLink>
                <Link to="/?section=about"><span className="nav-label" data-text={t.about}>{t.about}</span></Link>
                <Link to="/?section=experience"><span className="nav-label" data-text={t.experience}>{t.experience}</span></Link>
                <Link to="/?section=work"><span className="nav-label" data-text={t.work}>{t.work}</span></Link>
                <Link to="/?section=gallery"><span className="nav-label" data-text={t.gallery}>{t.gallery}</span></Link>
                <Link to="/?section=contact"><span className="nav-label" data-text={t.contact}>{t.contact}</span></Link>
                <NavLink to="/blog"><span className="nav-label" data-text={t.blog}>{t.blog}</span></NavLink>
                <NavLink to="/blue-hour"><span className="nav-label" data-text={t.blueHour}>{t.blueHour}</span></NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar
