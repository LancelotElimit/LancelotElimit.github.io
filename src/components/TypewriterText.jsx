import { useEffect, useState } from 'react'

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

export default TypewriterText
