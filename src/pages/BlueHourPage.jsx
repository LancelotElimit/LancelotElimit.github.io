import { useEffect, useState } from 'react'
import './BlueHourPage.css'

const pageCopy = {
    en: {
        eyebrow: 'INTERFACE STUDY // 03',
        title: 'BLUE HOUR',
        subtitle: 'Between today and tomorrow',
        panels: [
            { label: 'Still', word: 'PAUSE', line: 'Make space for the next idea.' },
            { label: 'Create', word: 'BUILD', line: 'Turn thought into form.' },
            { label: 'Forward', word: 'MOVE', line: 'The next hour begins now.' },
        ],
        hint: 'Select a state',
    },
    zh: {
        eyebrow: '界面风格实验 // 03',
        title: 'BLUE HOUR',
        subtitle: '今天与明天之间',
        panels: [
            { label: '静止', word: '暂停', line: '为下一个想法留出空间。' },
            { label: '创造', word: '构建', line: '让想法拥有形状。' },
            { label: '前进', word: '行动', line: '下一个小时，从现在开始。' },
        ],
        hint: '选择一种状态',
    },
}

function BlueHourPage({ language }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [now, setNow] = useState(() => new Date())
    const t = pageCopy[language]
    const activePanel = t.panels[activeIndex]

    useEffect(() => {
        const timer = window.setInterval(() => setNow(new Date()), 1000)
        return () => window.clearInterval(timer)
    }, [])

    const time = now.toLocaleTimeString(language === 'zh' ? 'zh-CN' : 'en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
    const date = now.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-AU', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })

    return (
        <div className="blue-hour-page">
            <header className="blue-hour-header">
                <p>{t.eyebrow}</p>
                <div className="blue-hour-time">
                    <span>{date}</span>
                    <strong>{time}</strong>
                </div>
            </header>

            <main className="blue-hour-main">
                <div className="blue-hour-heading">
                    <span className="blue-hour-number" aria-hidden="true">03</span>
                    <h1>{t.title}</h1>
                    <p>{t.subtitle}</p>
                </div>

                <section className="blue-hour-selector">
                    <nav aria-label={t.hint}>
                        <small>{t.hint}</small>
                        {t.panels.map((panel, index) => (
                            <button
                                key={panel.label}
                                type="button"
                                className={activeIndex === index ? 'is-active' : ''}
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={activeIndex === index}
                            >
                                <span>0{index + 1}</span>
                                {panel.label}
                            </button>
                        ))}
                    </nav>

                    <div className="blue-hour-state" key={`${language}-${activeIndex}`}>
                        <span>0{activeIndex + 1}</span>
                        <h2>{activePanel.word}</h2>
                        <p>{activePanel.line}</p>
                    </div>
                </section>
            </main>

            <footer className="blue-hour-footer" aria-hidden="true">
                <span />
                <span />
                <span />
            </footer>
        </div>
    )
}

export default BlueHourPage
