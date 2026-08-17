import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Sidebar from './components/Sidebar'
import WelcomeScreen from './components/WelcomeScreen'
import { portfolioContent } from './data/portfolioData'
import { translations } from './data/translations'
import HomePage from './pages/HomePage'
import Blog from './Blog'
import './App.css'

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
    const [showWelcome, setShowWelcome] = useState(true)
    const t = translations[language]

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
        localStorage.setItem('language', language)
    }, [language])

    if (showWelcome) {
        return <WelcomeScreen onFinish={() => setShowWelcome(false)} />
    }

    return (
        <>
            <Sidebar
                theme={theme}
                t={t}
                onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                onLanguageToggle={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            />

            <main className="site-content">
                <Routes>
                    <Route path="/" element={<HomePage language={language} t={t} content={portfolioContent} />} />
                    <Route path="/blog" element={<Blog language={language} />} />
                    <Route path="/blog/:slug" element={<Blog language={language} />} />
                    <Route path="*" element={<HomePage language={language} t={t} content={portfolioContent} />} />
                </Routes>
            </main>

            <BackToTop label={t.backToTop} />
        </>
    )
}

export default App
