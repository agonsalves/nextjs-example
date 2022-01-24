import Li                 from 'Shared/Li'
import MotionDiv          from 'Shared/MotionDiv'
import Ul                 from 'Shared/Ul'
import React, {useEffect} from 'react'
import {
    mobileMenuSubMenuItemStyle,
    mobileMenuSubMenuLinkStyle,
    mobileMenuSubMenuStyle,
    mobileMenuSubMenuWrapperStyle
}                         from './styles'
import { MobileMenuLink } from '../../MobileMenuLink'

const MobileMenuItemSubMenu = ({subMenuToggle, setSubMenuToggle, resetSubMenuToggle, post, item}) => {
    const isActive = item.children.map((item) => {
        return item.url
    }).includes('/' + (post.slug.split('/')[1] === 'experience' ? 'case-studies' : post.slug.split('/')[1]))

    const subMenuVariants = {
        open: {
            height: 'auto',
            marginTop: -13,
            marginBottom: 10,
            transition: {
                duration: .15
            }
        },
        closed: {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            transition: {
                duration: .15
            }
        }
    }

    useEffect(() => {
        if (isActive)
            setSubMenuToggle(resetSubMenuToggle)
        else
            setSubMenuToggle(!resetSubMenuToggle)

    }, [resetSubMenuToggle, setSubMenuToggle, post, isActive])


    return (
        <MotionDiv
            initial="closed"
            animate={subMenuToggle ? 'open' : 'closed'}
            variants={subMenuVariants}
            transition={{ease: 'easeOut'}}
            themes={mobileMenuSubMenuWrapperStyle}
        >
            <Ul themes={mobileMenuSubMenuStyle}>
                {item.children?.map((c, k) =>
                    <Li key={k} themes={mobileMenuSubMenuItemStyle}>
                        <MobileMenuLink
                      item={c}
                      post={post}
                      themes={mobileMenuSubMenuLinkStyle}/>
                    </Li>
                )}
            </Ul>
        </MotionDiv>
    )
}

export default MobileMenuItemSubMenu