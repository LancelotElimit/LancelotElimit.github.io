import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const markdownFiles = import.meta.glob('./posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
})

const parsePost = (path, source) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

    if (!frontmatterMatch) {
        return { slug, title: slug, date: '', summary: '', content: source }
    }

    const metadata = Object.fromEntries(
        frontmatterMatch[1]
            .split(/\r?\n/)
            .map((line) => {
                const separator = line.indexOf(':')
                if (separator === -1) return null
                return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()]
            })
            .filter(Boolean),
    )

    return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || '',
        summary: metadata.summary || '',
        content: frontmatterMatch[2].trim(),
    }
}

const posts = Object.entries(markdownFiles)
    .map(([path, source]) => parsePost(path, source))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))

const blogTranslations = {
    en: {
        notes: 'Personal notes',
        introduction: 'Thoughts, projects, and things I have learned along the way.',
        posts: 'Posts',
        post: 'post',
        postsCount: 'posts',
        noPosts: 'No posts yet',
        noPostsHint: 'Add a Markdown file to src/posts to publish your first article.',
        readArticle: 'Read article →',
        back: '← Back to Blog',
        notFound: 'Post not found',
        notFoundHint: 'This article may have been moved or deleted.',
        backToBlog: 'Back to Blog',
    },
    zh: {
        notes: '个人随笔',
        introduction: '记录想法、项目，以及一路上学到的内容。',
        posts: '文章',
        post: '篇文章',
        postsCount: '篇文章',
        noPosts: '还没有文章',
        noPostsHint: '在 src/posts 中添加 Markdown 文件，即可发布第一篇文章。',
        readArticle: '阅读全文 →',
        back: '← 返回博客',
        notFound: '未找到文章',
        notFoundHint: '这篇文章可能已被移动或删除。',
        backToBlog: '返回博客',
    },
}

const formatDate = (date, language) => {
    if (!date) return ''
    return new Date(`${date}T00:00:00`).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function Blog({ language }) {
    const { slug } = useParams()
    const selectedPost = posts.find((post) => post.slug === slug)
    const t = blogTranslations[language]

    if (slug && !selectedPost) {
        return (
            <div className="blog-page">
                <div className="empty-posts">
                    <h1>{t.notFound}</h1>
                    <p>{t.notFoundHint}</p>
                    <Link className="text-link" to="/blog">{t.backToBlog}</Link>
                </div>
            </div>
        )
    }

    if (selectedPost) {
        return (
            <article className="blog-page article-page">
                <Link className="back-link" to="/blog">{t.back}</Link>
                <header className="article-header">
                    {selectedPost.date && <time dateTime={selectedPost.date}>{formatDate(selectedPost.date, language)}</time>}
                    <h1>{selectedPost.title}</h1>
                    {selectedPost.summary && <p>{selectedPost.summary}</p>}
                </header>
                <div className="markdown-content">
                    <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                </div>
            </article>
        )
    }

    return (
        <div className="blog-page">
            <header className="blog-header">
                <p className="eyebrow">{t.notes}</p>
                <h1>Blog</h1>
                <p>{t.introduction}</p>
            </header>

            <section className="post-list" aria-labelledby="posts-title">
                <div className="post-list-heading">
                    <h2 id="posts-title">{t.posts}</h2>
                    <span>{posts.length} {posts.length === 1 ? t.post : t.postsCount}</span>
                </div>

                {posts.length === 0 ? (
                    <div className="empty-posts">
                        <h3>{t.noPosts}</h3>
                        <p>{t.noPostsHint}</p>
                    </div>
                ) : posts.map((post) => (
                    <article className="post-card" key={post.slug}>
                        {post.date && <time className="post-meta" dateTime={post.date}>{formatDate(post.date, language)}</time>}
                        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                        {post.summary && <p>{post.summary}</p>}
                        <Link className="text-link" to={`/blog/${post.slug}`}>{t.readArticle}</Link>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Blog
