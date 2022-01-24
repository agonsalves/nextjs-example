import { headerMenuPanelContext } from '@/controllers/HeaderMenuPanelController'
import {AnimatePresence}        from 'framer-motion'
import React, { useContext } from 'react'
import MotionDiv                from 'Shared/MotionDiv'
import {overlayStyle}           from 'Shared/Overlay/styles'
import LinkSwitch from '../LinkSwitch'

interface OverlayProps {
    isOpen?: boolean;
    theme?: any;
    closePortal?: any;
    url?: any;
}

const Overlay = ({isOpen, theme, closePortal, url, ...props}: OverlayProps) => {
    const {setGlobalSearchOpen} = useContext(headerMenuPanelContext)
    const overlay = () => {
        return (
            <MotionDiv
                themes={{...overlayStyle, ...theme}}
                {...props}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={() => {
                    closePortal && closePortal()
                    setGlobalSearchOpen(false)
                }}
            />
        )
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {(url && (
                        <LinkSwitch url={url}>
                            {overlay()}
                        </LinkSwitch>
                    )) || (
                        <>{overlay()}</>
                    )}
                </>
            )}
        </AnimatePresence>
    )
}

export default Overlay