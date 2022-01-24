import { breakpointUpperLimit } from '@/styles/globalStyles'
import { useAnimation }       from 'framer-motion'
import React                  from 'react'
import { useEffect }          from 'react'
import useMedia from 'use-media'
import MotionDiv              from '../../Shared/MotionDiv'

const pageTransitionTheme = {
    backgroundColor: 'white',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 0,
    zIndex: 12,
    display: 'static'
}

export const HeaderMobileAnimation = {
    
}

export const PageTransition = ({slug}) => {
    const isMobile = useMedia({ maxWidth: breakpointUpperLimit.mobile });
    const overlayAnimation = useAnimation()
    const mobileMenuAnimation = useAnimation()

    const overlayFadeout = {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: .7,
            delay: .3
        },

        transitionEnd: {
            height: 0,
            opacity: 1
        }
    }

    const pageInit = async () => {
        await overlayAnimation.start(overlayFadeout)
    }

    const pageOut = async () => {
        if (!isMobile) {
            await overlayAnimation.set({height: 0, opacity: 0})
            await overlayAnimation.start({
                opacity: 1,
                height: '100vh',
                transition: {
                    duration: .7,
                    ease: 'easeOut',
                }
            })
            pageInit()
        } else {
            pageInit()
            await mobileMenuAnimation.start({height: '0', transition: {duration: .5}})
        }
    }

    useEffect(() => {
        if(slug) {
            pageOut()
        } else {
            pageInit()
        }
    }, [slug])

    return (
        <MotionDiv
            themes={pageTransitionTheme}
            initial={{height: '100vh', opacity: 1}}
            animate={overlayAnimation}
        />
    )
}