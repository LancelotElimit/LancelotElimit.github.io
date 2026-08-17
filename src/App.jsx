import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Blog from './Blog'
import './App.css'

const galleryImages = [
    { src: '/images/gallery_1.jpeg', alt: 'Lancelot photo gallery image 1' },
    { src: '/images/gallery_2.jpg', alt: 'Lancelot photo gallery image 2' },
    { src: '/images/gallery_3.jpg', alt: 'Lancelot photo gallery image 3' },
    { src: '/images/gallery_4.jpg', alt: 'Lancelot photo gallery image 4' },
    { src: '/images/gallery_5.jpg', alt: 'Lancelot photo gallery image 5' },
    { src: '/images/gallery_6.jpeg', alt: 'Lancelot photo gallery image 6' },
]

const techStack = {
    languages: ['C', 'C++', 'C#', 'Java', 'Python'],
    frameworks: ['OpenGL', 'SDL3', 'Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI', 'React', 'Vue 3', 'Node.js', 'Unity', 'Unreal Engine'],
    tools: ['Git', 'GitHub', 'CMake', 'Visual Studio', 'Linux', 'AWS'],
    interests: ['MongoDB', 'MySQL', 'Firebase', 'Firestore', 'MQTT', 'Node-RED'],
}

const careerDetails = {
    en: [
        {
            role: 'IT Support & Junior Developer Intern',
            company: 'Current Internship',
            period: 'Aug 2026 - Present',
            bullets: [
                'Supporting day-to-day IT operations while contributing to junior software development tasks and internal technical solutions.',
            ],
        },
        {
            role: 'Junior Developer',
            company: 'Hardhat Enterprises',
            period: 'Jul 2025 - Jun 2026',
            bullets: [
                'Migrated approximately 80% of a legacy Android Java/XML application to Kotlin Multiplatform, enabling parallel Android and iOS development while reducing duplicated code.',
                'Designed and documented a front-end migration guide covering shared modules, platform-specific structure, and the native UI strategy for Jetpack Compose and SwiftUI.',
                'Established reproducible iOS build and run pipelines and helped deliver the first functional iOS prototype ahead of schedule.',
            ],
        },
    ],
    zh: [
        {
            role: 'IT 支持与初级开发实习生',
            company: '当前实习',
            period: '2026 年 8 月 - 至今',
            bullets: [
                '参与日常 IT 运维支持，同时承担初级软件开发任务并协助建设内部技术解决方案。',
            ],
        },
        {
            role: '初级开发工程师',
            company: 'Hardhat Enterprises',
            period: '2025 年 7 月 - 2026 年 6 月',
            bullets: [
                '将约 80% 的旧版 Android Java/XML 应用迁移到 Kotlin Multiplatform，使 Android 与 iOS 能够并行开发，并减少重复代码。',
                '设计并编写前端迁移指南，统一共享模块、平台结构，以及 Jetpack Compose 与 SwiftUI 的原生 UI 策略。',
                '建立可复现的 iOS 构建与运行流程，并协助团队提前完成首个可运行的 iOS 原型。',
            ],
        },
    ],
}

const educationDetails = {
    en: [
        { school: 'Deakin University', degree: 'Bachelor of Information Technology', period: '2025 - Present', detail: 'STEM Scholarship recipient (20% tuition) · Distinction average' },
        { school: 'Southwest University', degree: 'Bachelor of Information Technology', period: '2023 - Present' },
    ],
    zh: [
        { school: '迪肯大学', degree: '信息技术学士', period: '2025 年 - 至今', detail: 'STEM 奖学金（20% 学费减免）· Distinction 平均成绩' },
        { school: '西南大学', degree: '信息技术学士', period: '2023 年 - 至今' },
    ],
}

const portfolioProjects = {
    en: [
        { title: '2D Game Engine', period: 'Ongoing personal project', description: 'Building a 2D engine in C++ with OpenGL to explore rendering architecture, input, resource management, scene and object systems, and extensible editor tooling. Previous engine experiments also used SDL3.', tags: ['C++', 'OpenGL', 'Engine Architecture'], url: 'https://github.com/LancelotElimit/2D-Engine' },
        { title: 'Dev@Deakin App', period: 'Jul 2025 - Sep 2025', description: 'Built a React SPA with Firebase authentication and 2FA, real-time chat, posts, comments, and likes. Integrated Mailgun subscriptions and Stripe payments through serverless functions.', tags: ['React', 'Firebase', 'Stripe', 'Mailgun'], result: 'Distinction', url: 'https://github.com/LancelotElimit/Task-6.1HD' },
        { title: 'Smart Home Lighting System', period: 'Jul 2025 - Sep 2025', description: 'Created a presence-driven lighting pipeline using camera occupancy detection, MQTT telemetry, Node-RED automation, MongoDB Atlas, and AWS ingestion, with dashboard analytics for system performance.', tags: ['Python', 'MQTT', 'Node-RED', 'MongoDB', 'AWS'], result: 'High Distinction', url: 'https://github.com/LancelotElimit/Task-6.3D-sit314-' },
        { title: 'SpendGuard', period: 'Jul 2025 - Sep 2025', description: 'Designed a high-fidelity FinTech prototype with savings automation, impulse-spending guardrails, user journeys, market analysis, and a KPI model for validating product viability.', tags: ['FinTech', 'UI/UX', 'Product Strategy'], result: 'High Distinction', url: 'https://github.com/LancelotElimit/Hifi-document' },
    ],
    zh: [
        { title: '2D 游戏引擎', period: '持续开发中的个人项目', description: '使用 C++ 和 OpenGL 开发 2D 引擎，探索渲染架构、输入、资源管理、场景与对象系统，以及可扩展的编辑器工具；此前也使用 SDL3 进行过引擎相关实践。', tags: ['C++', 'OpenGL', '引擎架构'], url: 'https://github.com/LancelotElimit/2D-Engine' },
        { title: 'Dev@Deakin 应用', period: '2025 年 7 月 - 9 月', description: '开发 React 单页应用，实现 Firebase 身份验证与双重验证、实时聊天、帖子、评论和点赞，并通过无服务器函数集成 Mailgun 订阅与 Stripe 支付。', tags: ['React', 'Firebase', 'Stripe', 'Mailgun'], result: 'Distinction', url: 'https://github.com/LancelotElimit/Task-6.1HD' },
        { title: '智能家居照明系统', period: '2025 年 7 月 - 9 月', description: '结合摄像头占用检测、MQTT 遥测、Node-RED 自动化、MongoDB Atlas 与 AWS 数据接入，完成基于人员存在状态的照明控制和性能仪表盘。', tags: ['Python', 'MQTT', 'Node-RED', 'MongoDB', 'AWS'], result: 'High Distinction', url: 'https://github.com/LancelotElimit/Task-6.3D-sit314-' },
        { title: 'SpendGuard', period: '2025 年 7 月 - 9 月', description: '设计高保真金融科技原型，涵盖自动储蓄、冲动消费保护机制、用户旅程、市场分析和用于验证产品可行性的 KPI 模型。', tags: ['金融科技', 'UI/UX', '产品策略'], result: 'High Distinction', url: 'https://github.com/LancelotElimit/Hifi-document' },
    ],
}

const portfolioHighlights = {
    en: [
        'Led a four-person team to a Provincial Second Prize in the National Computer Design Competition as lead programmer.',
        'Reached the pre-finals of the 8th Global Competition on Design for Future Education as technical lead.',
    ],
    zh: [
        '担任主程序并带领四人团队获得全国大学生计算机设计大赛省级二等奖。',
        '担任技术负责人，晋级第八届全球未来教育设计大赛高等教育赛道预决赛。',
    ],
}

const translations = {
    en: {
        greeting: "Hey, I'm",
        introduction: 'Software developer and IT student building systems across platforms',
        aboutDescription: 'I am an IT Support and Junior Developer intern and an Information Technology student at Deakin University, where I received a STEM Scholarship and maintain a Distinction average.',
        currentFocus: 'My experience spans Kotlin Multiplatform mobile development, React and Node.js applications, AWS-connected systems, and game projects. I am also building a 2D engine with C++ and OpenGL while exploring computer graphics and real-time rendering.',
        techStack: 'Tech Stack',
        languagesLabel: 'Languages',
        frameworksLabel: 'Frameworks & Libraries',
        toolsLabel: 'Tools',
        interestsLabel: 'Cloud & Data',
        workTitle: 'Selected Projects',
        achievementsTitle: 'Competition Highlights',
        viewSource: 'View source',
        experienceTitle: 'Professional Experience',
        educationTitle: 'Education',
        volcano: 'A visual environment project featuring volcanic terrain and cinematic atmosphere. This project focuses on scene composition, lighting, and dramatic environmental storytelling.',
        mangrove: 'A nature-inspired world scene with water and vegetation. This work explores environment building, large-scale composition, and calm visual mood design.',
        photos: 'My Photos',
        contact: 'Contact',
        phone: 'Phone',
        australiaPhone: 'Australia',
        chinaPhone: 'China',
        githubProfile: 'GitHub',
        closePreview: 'Close image preview',
        imagePreview: 'Image preview',
        enlargedPreview: 'Enlarged preview',
        portraitAlt: 'Portrait of Lancelot',
        portraitBackAlt: 'Gallery portrait on the back of the profile image',
        flipPortrait: 'Flip profile image',
        volcanoAlt: 'Volcanic terrain environment project',
        mangroveAlt: 'Mangrove environment project',
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        work: 'Work',
        gallery: 'Gallery',
        blog: 'Blog',
        darkMode: 'Demon King',
        lightMode: 'Priest',
        switchToDark: 'Switch to Demon King theme',
        switchToLight: 'Switch to Priest theme',
        switchLanguage: '切换到中文',
        navigation: 'Main navigation',
        backToTop: 'Back to top',
    },
    zh: {
        greeting: '你好，我是',
        introduction: '一名构建跨平台系统的软件开发者与 IT 学生',
        aboutDescription: '我目前担任 IT 支持与初级开发实习生，并就读于迪肯大学信息技术专业，获得了 STEM 奖学金并保持 Distinction 平均成绩。',
        currentFocus: '我的实践涵盖 Kotlin Multiplatform 移动开发、React 与 Node.js 应用、AWS 互联系统和游戏项目；同时也在使用 C++ 与 OpenGL 开发 2D 引擎，并持续探索计算机图形学和实时渲染。',
        techStack: '技术栈',
        languagesLabel: '编程语言',
        frameworksLabel: '框架与库',
        toolsLabel: '开发工具',
        interestsLabel: '云服务与数据',
        workTitle: '精选项目',
        achievementsTitle: '竞赛经历',
        viewSource: '查看源码',
        experienceTitle: '工作经历',
        educationTitle: '教育背景',
        volcano: '一个以火山地形和电影感氛围为特色的视觉环境项目，重点探索场景构图、灯光和富有张力的环境叙事。',
        mangrove: '一个以水域和植被为主题的自然世界场景，探索环境搭建、大型构图和宁静氛围的视觉设计。',
        photos: '我的照片',
        contact: '邮箱',
        phone: '电话',
        australiaPhone: '澳大利亚',
        chinaPhone: '中国',
        githubProfile: 'GitHub',
        closePreview: '关闭图片预览',
        imagePreview: '图片预览',
        enlargedPreview: '放大的图片',
        portraitAlt: 'Lancelot 的个人照片',
        portraitBackAlt: '头像背面的相册照片',
        flipPortrait: '翻转头像',
        volcanoAlt: '火山地形环境项目',
        mangroveAlt: '红树林环境项目',
        home: '主页',
        about: '关于我',
        experience: '经历',
        work: '作品',
        gallery: '相册',
        blog: '博客',
        darkMode: '魔王',
        lightMode: '祭司',
        switchToDark: '切换到魔王主题',
        switchToLight: '切换到祭司主题',
        switchLanguage: 'Switch to English',
        navigation: '主导航',
        backToTop: '回到顶部',
    },
}

function TypewriterText({ text, delay = 0 }) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const [visibleText, setVisibleText] = useState(() => reduceMotion ? text : '')
    const [isTyping, setIsTyping] = useState(() => !reduceMotion)

    useEffect(() => {
        if (reduceMotion) return undefined

        let intervalId
        const timeoutId = window.setTimeout(() => {
            let characterIndex = 0
            intervalId = window.setInterval(() => {
                characterIndex += 1
                setVisibleText(text.slice(0, characterIndex))
                if (characterIndex >= text.length) {
                    window.clearInterval(intervalId)
                    setIsTyping(false)
                }
            }, 18)
        }, delay)

        return () => {
            window.clearTimeout(timeoutId)
            window.clearInterval(intervalId)
        }
    }, [delay, reduceMotion, text])

    return (
        <p className={`about-typewriter${isTyping ? ' is-typing' : ''}`} aria-label={text}>
            <span aria-hidden="true">{visibleText}</span>
        </p>
    )
}

function WelcomeScreen({ onFinish }) {
    useEffect(() => {
        const previousScrollRestoration = window.history.scrollRestoration
        window.history.scrollRestoration = 'manual'
        document.body.classList.add('welcome-active')
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const timeoutId = window.setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            onFinish()
        }, reduceMotion ? 1200 : 5900)

        return () => {
            window.clearTimeout(timeoutId)
            document.body.classList.remove('welcome-active')
            window.history.scrollRestoration = previousScrollRestoration
            requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
        }
    }, [onFinish])

    return (
        <div className="welcome-screen" role="status" aria-label="Welcome Lancelot">
            <div className="welcome-auth" aria-hidden="true">
                <div className="auth-line auth-account">ACCOUNT: Lancelot</div>
                <div className="auth-line auth-password">
                    <span>PASSWORD: </span><span className="password-stars">******</span>
                </div>
                <div className="auth-line auth-access">
                    ACCESS: APPROVAL <strong>√</strong>
                </div>
            </div>
            <div className="welcome-content">
                <div className="welcome-message">
                    WELCOME <strong>LANCELOT</strong>
                </div>
                <div className="welcome-progress" aria-hidden="true" />
            </div>
        </div>
    )
}

function Home({ language }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [profileFlipped, setProfileFlipped] = useState(false)
    const location = useLocation()
    const t = translations[language]

    useEffect(() => {
        const section = new URLSearchParams(location.search).get('section')
        if (section) {
            requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView())
        }
    }, [location.search])

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
            <header className="hero">
                <div className="hero-overlay" />
                <div className="hero-text">
                    <span className="typing-text" key={language}>
                        {t.greeting} <strong>Lancelot</strong>
                    </span>
                </div>
            </header>

            <section className="intro" id="about">
                <div className="profile-lockup">
                    <span className="profile-word" aria-hidden="true">LANC</span>
                    <button
                        className="profile-flip-button"
                        type="button"
                        onClick={() => setProfileFlipped((flipped) => !flipped)}
                        aria-label={t.flipPortrait}
                        aria-pressed={profileFlipped}
                    >
                        <span className={`profile-flip-card${profileFlipped ? ' is-flipped' : ''}`}>
                            <img
                                src="/images/gallery_2.jpg"
                                alt={t.portraitBackAlt}
                                className="profile-pic profile-front"
                            />
                            <img
                                src="/images/profile.jpg"
                                alt={t.portraitAlt}
                                className="profile-pic profile-back"
                            />
                        </span>
                    </button>
                    <span className="profile-word" aria-hidden="true">ELOT</span>
                </div>
                <div className="about-copy">
                    <h1>{t.introduction}</h1>
                    <TypewriterText key={`description-${language}`} text={t.aboutDescription} delay={250} />
                    <TypewriterText
                        key={`focus-${language}`}
                        text={t.currentFocus}
                        delay={t.aboutDescription.length * 18 + 500}
                    />
                </div>

                <div className="tech-stack" aria-labelledby="tech-stack-title">
                    <h2 id="tech-stack-title">{t.techStack}</h2>
                    <div className="tech-groups">
                        <div className="tech-group">
                            <h3>{t.languagesLabel}</h3>
                            <ul>{techStack.languages.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div className="tech-group">
                            <h3>{t.frameworksLabel}</h3>
                            <ul>{techStack.frameworks.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div className="tech-group">
                            <h3>{t.toolsLabel}</h3>
                            <ul>{techStack.tools.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div className="tech-group">
                            <h3>{t.interestsLabel}</h3>
                            <ul>{techStack.interests.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                    </div>
                </div>
                <hr className="section-divider" />
            </section>

            <section id="experience" className="resume-overview">
                <div className="resume-column">
                    <h2>{t.experienceTitle}</h2>
                    <div className="career-list">
                        {careerDetails[language].map((career) => (
                            <article className="timeline-card" key={`${career.role}-${career.period}`}>
                                <div className="timeline-card-header">
                                    <div>
                                        <h3>{career.role}</h3>
                                        <p>{career.company}</p>
                                    </div>
                                    <span>{career.period}</span>
                                </div>
                                <ul>
                                    {career.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="resume-column">
                    <h2>{t.educationTitle}</h2>
                    <div className="education-list">
                        {educationDetails[language].map((education) => (
                            <article className="education-card" key={education.school}>
                                <div>
                                    <h3>{education.school}</h3>
                                    <p>{education.degree}</p>
                                </div>
                                <span>{education.period}</span>
                                {education.detail && <strong>{education.detail}</strong>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="work" className="projects">
                <h2>{t.workTitle}</h2>

                <div className="project-grid">
                    {portfolioProjects[language].map((project) => (
                        <article className="resume-project-card" key={project.title}>
                            <div className="project-card-header">
                                <h3>{project.title}</h3>
                                <span>{project.period}</span>
                            </div>
                            <p>{project.description}</p>
                            <ul className="project-tags" aria-label={`${project.title} technologies`}>
                                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                            </ul>
                            <div className="project-card-footer">
                                {project.result && <strong>{project.result}</strong>}
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noreferrer">
                                        {t.viewSource} ↗
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="competition-highlights">
                    <h3>{t.achievementsTitle}</h3>
                    <ul>
                        {portfolioHighlights[language].map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="gallery" className="photos">
                <hr className="section-divider" />
                <h2>{t.photos}</h2>

                <div className="gallery-container">
                    {galleryImages.map((image) => (
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

            <footer className="footer" id="contact">
                <div className="contact-links">
                    <span>
                        {t.contact}: <a href="mailto:s225204972@deakin.edu.au">s225204972@deakin.edu.au</a>
                    </span>
                    <span>
                        {t.phone} ({t.australiaPhone}): <a href="tel:+61402201872">+61 402 201 872</a>
                    </span>
                    <span>
                        {t.phone} ({t.chinaPhone}): <a href="tel:+8619562179360">+86 195 6217 9360</a>
                    </span>
                    <span>
                        {t.githubProfile}: <a href="https://github.com/LancelotElimit" target="_blank" rel="noreferrer">LancelotElimit ↗</a>
                    </span>
                </div>
            </footer>

            {selectedImage && (
                <div
                    className="modal-backdrop"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.imagePreview}
                >
                    <div
                        className="modal-content-custom"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setSelectedImage(null)}
                            aria-label={t.closePreview}
                        >
                            &times;
                        </button>
                        <img src={selectedImage} alt={t.enlargedPreview} className="modal-image" />
                    </div>
                </div>
            )}
        </>
    )
}

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
            <aside className="sidebar">
                <div className="sidebar-controls">
                    <button
                        className="theme-toggle"
                        type="button"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        aria-label={theme === 'light' ? t.switchToDark : t.switchToLight}
                        aria-pressed={theme === 'dark'}
                    >
                        <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
                        <span>{theme === 'light' ? t.darkMode : t.lightMode}</span>
                    </button>

                    <button
                        className="language-toggle"
                        type="button"
                        onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
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

            <main className="site-content">
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/blog" element={<Blog language={language} />} />
                    <Route path="/blog/:slug" element={<Blog language={language} />} />
                    <Route path="*" element={<Home language={language} />} />
                </Routes>
            </main>

            <button
                className="back-to-top"
                type="button"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                aria-label={t.backToTop}
                title={t.backToTop}
            >
                <span aria-hidden="true">↑</span>
            </button>
        </>
    )
}

export default App
