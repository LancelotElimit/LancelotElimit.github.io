# Lancelot's Portfolio

[English](#english) · [中文](#中文)

**Live site / 在线访问：** [lancelotelimit.github.io](https://lancelotelimit.github.io)

A bilingual portfolio where pixel-terminal aesthetics meet bold, Persona-inspired interface design.

一个融合像素终端美学、Persona 式动态排版与个人技术经历的中英文个人主页。

---

## English

### Overview

This is the personal portfolio of Junjie "Lancelot" He, an IT and software engineering student interested in front-end development, cross-platform systems, computer graphics, game engines, and interactive experiences.

The site began as a small React portfolio and evolved into a visual playground with its own identity. It combines resume content, projects, internship notes, Markdown articles, and photography with a custom interface built entirely with React and native CSS.

The project is fully static, hosted on GitHub Pages, and requires no paid backend or database.

### Design Identity

- Pixel-inspired typography, headings, cards, and decorative details
- Persona-inspired oversized sidebar typography and asymmetric selection blocks
- Navigation text that grows beyond the sidebar during hover and selection
- Split-colour labels with theme-aware overflow text
- **Priest Mode:** white and green light theme
- **Demon King Mode:** pure black and blue dark theme
- Full-screen terminal login and `WELCOME LANCELOT` opening sequence
- A minimal experimental **Blue Hour** page focused on pure interface style
- Theme-aware animation colours and persistent visitor preferences

The interface is inspired by games and terminal systems, but its components, layouts, animations, and visual rules are implemented specifically for this portfolio.

### Features

- English and Chinese interface switching
- Theme and language preferences remembered through `localStorage`
- Responsive fixed sidebar navigation
- Height-aware navigation scaling without sidebar scrollbars
- Animated terminal-style welcome screen and progress sequence
- Typewriter introductions and pixel-text effects
- Interactive 180-degree profile-image flip
- Expandable professional experience entries
- Technical skills, education, projects, competitions, and contact details
- Markdown-powered Blog with individual article routes
- Repository-based post creation, reading, updating, and deletion
- Minimal manual image carousel with hover-revealed controls
- Floating back-to-top button
- Keyboard-friendly controls and reduced-motion support

### Main Routes

| Route | Purpose |
| --- | --- |
| `/#/` | Main portfolio and all profile sections |
| `/#/blog` | Blog index |
| `/#/blog/:slug` | Individual Markdown article |
| `/#/blue-hour` | Experimental Persona-inspired style page |

The project uses `HashRouter`, allowing every route to work reliably on GitHub Pages without server rewrite configuration.

### Technology

#### Application

- React 19
- React DOM
- React Router
- React Markdown
- Native CSS animations, responsive layouts, themes, and visual effects

#### Tooling and Deployment

- Vite 8
- ESLint 9
- npm
- Git and GitHub
- GitHub Actions
- GitHub Pages

No UI framework or third-party animation library is used. The distinctive interface is composed with React components and CSS.

### Project Structure

```text
.
├── .github/workflows/
│   └── deploy.yml                 # GitHub Pages deployment
├── public/
│   ├── images/                    # Profile, header, project, and gallery assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/              # About, resume, projects, gallery, and contact
│   │   ├── BackToTop.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TypewriterText.jsx
│   │   └── WelcomeScreen.jsx
│   ├── data/
│   │   ├── portfolioData.js       # Experience, projects, skills, and profile data
│   │   └── translations.js        # English and Chinese interface text
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BlueHourPage.jsx
│   │   └── BlueHourPage.css
│   ├── posts/                     # Markdown Blog articles
│   ├── App.jsx                    # Global state and route composition
│   ├── App.css                    # Shared themes, layout, and effects
│   ├── Blog.jsx                   # Blog index and article renderer
│   └── main.jsx                   # React entry point and HashRouter
├── index.html
├── package.json
└── vite.config.js
```

### Run Locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173` or `http://127.0.0.1:5173`.

```bash
npm run dev      # Start the development server
npm run lint     # Check JavaScript and JSX
npm run build    # Create the production build in dist/
npm run preview  # Preview the production build locally
```

### Writing Blog Posts

Posts are stored as Markdown files in `src/posts`. This keeps hosting free, gives every revision a Git history, and makes the same articles available on every device.

```markdown
---
title: My Post Title
date: 2026-08-31
summary: A short description displayed on the Blog index.
---

Write the article here with Markdown.
```

The filename becomes the route slug:

```text
src/posts/my-new-post.md → /#/blog/my-new-post
```

- Create: add a `.md` file
- Read: open its Blog route
- Update: edit the file
- Delete: remove the file
- Publish: commit and push to `main`

### Deployment

Every push to `main` triggers the GitHub Actions workflow. It installs locked dependencies, builds the Vite application, uploads `dist`, and deploys the result to GitHub Pages.

---

## 中文

### 项目介绍

这是 Junjie “Lancelot” He 的个人主页，用于展示软件开发经历、技术栈、教育背景、项目、竞赛、实习记录、博客文章和个人摄影。

项目最初只是一个简单的 React 主页，后来逐渐发展成具有独立视觉风格的 UI 实验场：以像素终端为基础，加入游戏界面的非对称排版、夸张导航文字、动态色块和主题化交互。

整个网站采用纯静态架构，通过 GitHub Pages 免费托管，不需要付费服务器、云数据库或后端服务。

### 视觉风格

- 像素风标题、文字、卡片和装饰元素
- 借鉴 Persona 设计语言的大字号侧边导航与不规则斜切色块
- 悬停和选中时突破导航栏边界的文字排版
- 色块内部白字、边界外主题色文字的分层效果
- **祭司模式：**白色与绿色组成的日间主题
- **魔王模式：**纯黑与蓝色组成的夜间主题
- 终端登录验证与 `WELCOME LANCELOT` 全屏开场动画
- 强调纯粹 UI 表现的极简实验页面 **Blue Hour**
- 跟随主题变化的动画颜色与自动保存的访问偏好

页面借鉴了游戏 UI 与终端界面的设计思路，但组件、布局、动画和交互规则均针对本项目自行实现。

### 主要功能

- 中英文界面切换
- 使用 `localStorage` 保存主题与语言偏好
- 响应式固定侧边导航栏
- 根据窗口高度自动缩放导航，避免产生侧栏滚动条
- 终端风格欢迎页面、密码打印和进度动画
- 打字机自我介绍与像素文字效果
- 点击头像后沿中轴线翻转 180 度并切换图片
- 可展开和收起的工作经历
- 技术栈、教育、项目、竞赛与联系方式展示
- 基于 Markdown 文件的博客与独立文章路由
- 通过仓库文件完成文章的增、删、改、查
- 简约手动轮播相册，悬停时显示左右切换按钮
- 回到顶部悬浮按钮
- 键盘操作、焦点样式和减少动画支持

### 主要路由

| 路由 | 功能 |
| --- | --- |
| `/#/` | 主页及全部个人信息区域 |
| `/#/blog` | 博客文章列表 |
| `/#/blog/:slug` | 单篇 Markdown 博客 |
| `/#/blue-hour` | Persona 风格 UI 实验页面 |

项目使用 `HashRouter`，因此不需要配置服务器重写规则，也能在 GitHub Pages 上稳定访问不同页面。

### 技术栈

#### 应用开发

- React 19
- React DOM
- React Router
- React Markdown
- 原生 CSS 动画、响应式布局、主题系统与视觉特效

#### 开发与部署

- Vite 8
- ESLint 9
- npm
- Git 与 GitHub
- GitHub Actions
- GitHub Pages

项目没有使用 UI 框架或第三方动画库，主要视觉效果均由 React 组件和原生 CSS 构成。

### 项目结构

```text
.
├── .github/workflows/
│   └── deploy.yml                 # GitHub Pages 自动部署
├── public/
│   ├── images/                    # 头像、主页头图、项目和相册资源
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/              # About、经历、项目、相册与联系区域
│   │   ├── BackToTop.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TypewriterText.jsx
│   │   └── WelcomeScreen.jsx
│   ├── data/
│   │   ├── portfolioData.js       # 经历、项目、技术栈与个人信息
│   │   └── translations.js        # 中英文界面文案
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BlueHourPage.jsx
│   │   └── BlueHourPage.css
│   ├── posts/                     # Markdown 博客文章
│   ├── App.jsx                    # 全局状态与路由组合
│   ├── App.css                    # 公共主题、布局和视觉效果
│   ├── Blog.jsx                   # 博客列表与文章渲染
│   └── main.jsx                   # React 入口与 HashRouter
├── index.html
├── package.json
└── vite.config.js
```

### 本地运行

需要提前安装 Node.js 和 npm。

```bash
npm install
npm run dev
```

Vite 会在终端显示本地地址，一般是 `http://localhost:5173` 或 `http://127.0.0.1:5173`。

```bash
npm run dev      # 启动本地开发环境
npm run lint     # 检查 JavaScript 与 JSX
npm run build    # 在 dist/ 中生成生产版本
npm run preview  # 本地预览生产版本
```

### 更新博客

博客文章保存在 `src/posts` 中。使用仓库内的 Markdown 文件可以保持免费托管，让文章拥有完整的 Git 修改历史，并确保不同设备访问时看到相同内容。

```markdown
---
title: 文章标题
date: 2026-08-31
summary: 显示在博客列表中的简短介绍。
---

在这里使用 Markdown 编写正文。
```

文件名会成为文章地址：

```text
src/posts/my-new-post.md → /#/blog/my-new-post
```

- 新增：添加 `.md` 文件
- 查看：访问对应博客路由
- 修改：编辑 Markdown 文件
- 删除：移除对应文件
- 发布：提交并推送到 `main`

### 自动部署

每次向 `main` 分支推送代码都会触发 GitHub Actions。工作流会安装锁定版本的依赖、构建 Vite 项目、上传 `dist`，并将最新版本发布到 GitHub Pages。

## Accessibility / 无障碍支持

- Semantic navigation and page structure / 语义化导航与页面结构
- Keyboard-operable interactive controls / 支持键盘操作的交互控件
- Visible focus indicators / 清晰的焦点提示
- Descriptive image alternative text / 图片替代文字
- Reduced-motion support / 减少动画偏好支持
- Theme-aware contrast / 跟随主题调整的文字对比度

## License / 许可证

This project is available under the terms in [LICENSE](LICENSE).

本项目按照 [LICENSE](LICENSE) 中的条款开放使用。
