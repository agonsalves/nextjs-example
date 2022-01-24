import { useAnimation }       from 'framer-motion'
import React                  from 'react'
import { useEffect }          from 'react'
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

export const PageTransition = ({slug}) => {
    const overlayAnimation = useAnimation()
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