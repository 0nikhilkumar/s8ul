import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()
    const navigationType = useNavigationType()

    useEffect(() => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.overflow = ''

        // Only scroll to top on PUSH (new navigation), not on POP (back/forward)
        if (navigationType !== 'POP') {
            window.scrollTo(0, 0)
        }
    }, [pathname, navigationType])

    return null
}

export default ScrollToTop
