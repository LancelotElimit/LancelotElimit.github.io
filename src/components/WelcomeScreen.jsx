import { useEffect } from 'react'

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

export default WelcomeScreen
