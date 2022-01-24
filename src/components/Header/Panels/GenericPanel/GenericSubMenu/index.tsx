import React                                          from 'react'
import MotionDiv                                      from 'Shared/MotionDiv'
import LinkSwitch                                     from 'Shared/LinkSwitch'
import {isNavItemActive}                              from 'utils/isNavItemActive'
import {absoluteToRelativeUrl}                        from 'utils/url'
import {
    genericMenuSubItemStyle,
    genericSubMenuStyle
}                                                   from './styles'


export const genericSubMenuVariants = {
    initial: {
        height: 0,
        overflow: 'hidden',
        marginTop: 0,
        transition: {
            duration: .4,
            ease: 'easeOut'
        },
    },
    expanded: {
        height: 'auto',
        marginTop: '2.3%', // 18px
        transition: {
            duration: .4,
            ease: 'easeOut'
        }
    }
}

const MenuPanelGenericSubMenu = ({isSubMenuExpanded, item, setIsSubMenuExpanded, post}) =>
    <MotionDiv
        variants={genericSubMenuVariants}
        initial="initial"
        animate={isSubMenuExpanded ? 'expanded' : 'initial'}
        themes={genericSubMenuStyle}
    >
        {item.children && item.children.map((subItem, key) => {
            let additionalProps = {
                type: 'nav',
                target: subItem.target,
                url: absoluteToRelativeUrl(subItem.url),
                isActive: isNavItemActive(subItem, post)
            }

            return (
                <LinkSwitch
                    title={subItem.title}
                    data={subItem.classes[0]}
                    children={subItem.title}
                    key={key}
                    themes={genericMenuSubItemStyle}
                    onFocus={() => setIsSubMenuExpanded(true)}
                    {...additionalProps}
                />
            )
        })}
    </MotionDiv>

export default MenuPanelGenericSubMenu

