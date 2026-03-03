import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()
    const navigationType = useNavigationType()

    useEffect(() => {
        const hasOpenOverlay = () => {
            const mobileMenuOpen = document.querySelector('.mobile-menu.open')
            const founderModalOpen = document.querySelector('.founder-detail[style*="display: flex"]')
            return Boolean(mobileMenuOpen || founderModalOpen)
        }

        const unlockBodyScroll = () => {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.overflow = ''
        }

        const recoverIfStuck = () => {
            const isBodyLocked =
                document.body.style.position === 'fixed' ||
                document.body.style.overflow === 'hidden'

            if (isBodyLocked && !hasOpenOverlay()) {
                unlockBodyScroll()
            }
        }

        const onWheel = () => {
            recoverIfStuck()
        }

        const onPageShow = () => {
            recoverIfStuck()
        }

        const onVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                recoverIfStuck()
            }
        }

        window.addEventListener('wheel', onWheel, { passive: true })
        window.addEventListener('pageshow', onPageShow)
        document.addEventListener('visibilitychange', onVisibilityChange)

        recoverIfStuck()

        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('pageshow', onPageShow)
            document.removeEventListener('visibilitychange', onVisibilityChange)
        }
    }, [])

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
