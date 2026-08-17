export const galleryImages = [
    { src: '/images/gallery_1.jpeg', alt: 'Lancelot photo gallery image 1' },
    { src: '/images/gallery_2.jpg', alt: 'Lancelot photo gallery image 2' },
    { src: '/images/gallery_3.jpg', alt: 'Lancelot photo gallery image 3' },
    { src: '/images/gallery_4.jpg', alt: 'Lancelot photo gallery image 4' },
    { src: '/images/gallery_5.jpg', alt: 'Lancelot photo gallery image 5' },
    { src: '/images/gallery_6.jpeg', alt: 'Lancelot photo gallery image 6' },
]

export const techStack = {
    languages: ['C', 'C++', 'C#', 'Java', 'Python'],
    frameworks: ['OpenGL', 'SDL3', 'Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI', 'React', 'Vue 3', 'Node.js', 'Unity', 'Unreal Engine'],
    tools: ['Git', 'GitHub', 'CMake', 'Visual Studio', 'Linux', 'AWS'],
    interests: ['MongoDB', 'MySQL', 'Firebase', 'Firestore', 'MQTT', 'Node-RED'],
}

export const careerDetails = {
    en: [
        {
            role: 'IT Support & Junior Developer Intern', company: 'Current Internship', period: 'Aug 2026 - Present',
            bullets: ['Supporting day-to-day IT operations while contributing to junior software development tasks and internal technical solutions.'],
        },
        {
            role: 'Junior Developer', company: 'Hardhat Enterprises', period: 'Jul 2025 - Jun 2026',
            bullets: [
                'Migrated approximately 80% of a legacy Android Java/XML application to Kotlin Multiplatform, enabling parallel Android and iOS development while reducing duplicated code.',
                'Designed and documented a front-end migration guide covering shared modules, platform-specific structure, and the native UI strategy for Jetpack Compose and SwiftUI.',
                'Established reproducible iOS build and run pipelines and helped deliver the first functional iOS prototype ahead of schedule.',
            ],
        },
    ],
    zh: [
        {
            role: 'IT 支持与初级开发实习生', company: '当前实习', period: '2026 年 8 月 - 至今',
            bullets: ['参与日常 IT 运维支持，同时承担初级软件开发任务并协助建设内部技术解决方案。'],
        },
        {
            role: '初级开发工程师', company: 'Hardhat Enterprises', period: '2025 年 7 月 - 2026 年 6 月',
            bullets: [
                '将约 80% 的旧版 Android Java/XML 应用迁移到 Kotlin Multiplatform，使 Android 与 iOS 能够并行开发，并减少重复代码。',
                '设计并编写前端迁移指南，统一共享模块、平台结构，以及 Jetpack Compose 与 SwiftUI 的原生 UI 策略。',
                '建立可复现的 iOS 构建与运行流程，并协助团队提前完成首个可运行的 iOS 原型。',
            ],
        },
    ],
}

export const educationDetails = {
    en: [
        { school: 'Deakin University', degree: 'Bachelor of Information Technology', period: '2025 - Present', detail: 'STEM Scholarship recipient (20% tuition) · Distinction average' },
        { school: 'Southwest University', degree: 'Bachelor of Information Technology', period: '2023 - Present' },
    ],
    zh: [
        { school: '迪肯大学', degree: '信息技术学士', period: '2025 年 - 至今', detail: 'STEM 奖学金（20% 学费减免）· Distinction 平均成绩' },
        { school: '西南大学', degree: '信息技术学士', period: '2023 年 - 至今' },
    ],
}

export const portfolioProjects = {
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

export const portfolioHighlights = {
    en: [
        'Led a four-person team to a Provincial Second Prize in the National Computer Design Competition as lead programmer.',
        'Reached the pre-finals of the 8th Global Competition on Design for Future Education as technical lead.',
    ],
    zh: [
        '担任主程序并带领四人团队获得全国大学生计算机设计大赛省级二等奖。',
        '担任技术负责人，晋级第八届全球未来教育设计大赛高等教育赛道预决赛。',
    ],
}

export const portfolioContent = {
    galleryImages,
    techStack,
    careerDetails,
    educationDetails,
    portfolioProjects,
    portfolioHighlights,
}
