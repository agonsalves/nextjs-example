import Div                    from 'Shared/Div'
import Icon                   from 'Shared/Icon'
import {
    hamburgerThin,
    timesLight
}                             from 'styles/variables/iconLibrary'
import { mobileMenuToggleIconStyle, mobileMenuToggleStyle } from './styles'

export const MobileHeaderMenuToggle = ({isOpen, setIsOpen}) => {
    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false)
            // mobileMenuAnimation.start({
            //     height: 0,
            //     transition: {
            //         duration: .5,
            //         ease: 'easeOut'
            //     }
            // })

        } else {
            setIsOpen(true)
            // mobileMenuAnimation.start({
            //     height: '100vh',
            //     transition: {
            //         duration: .5,
            //         ease: 'easeOut'
            //     }
            // })
        }
    }

    // //reset menu to closed on path change
    // useEffect(() => {
    //     setIsOpen(false)

    // }, [pathname, search])

    return (
        <Div themes={mobileMenuToggleStyle} onClick={() => toggleMenu()}>
            <Icon themes={mobileMenuToggleIconStyle} icon={isOpen ? timesLight : hamburgerThin}/>
        </Div>
    )
}
