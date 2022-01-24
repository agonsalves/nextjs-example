
import React, {useState}         from 'react'
import Icon                      from 'Shared/Icon'
import LinkSwitch                from 'Shared/LinkSwitch'
import {isNavItemActive}         from 'utils/isNavItemActive'
import {absoluteToRelativeUrl}   from 'utils/url'
import {
    minus,
    plus
}                                from 'styles/variables/iconLibrary'

import {mobileMenuLinkStyle}     from '../styles'
import {mobileMenuItemIconStyle} from './styles'
import MobileMenuItemSubMenu from '../MobileMenuItem/MobileItemSubMenu'

interface MobileMenuLinkProps {
    item?: any;
    post?: any;
    children?: any;
    resetSubMenuToggle?: any;
    themes?: any;
}

export const MobileMenuLink = ({item, post, children, resetSubMenuToggle, themes}: MobileMenuLinkProps) => {
    const [subMenuToggle, setSubMenuToggle] = useState(false)

    return (
        <>
            <LinkSwitch
                type="nav"
                initial={isNavItemActive(item, post)}
                url={absoluteToRelativeUrl(item.url)}
                isActive={isNavItemActive(item, post)}
                themes={{...mobileMenuLinkStyle, ...themes}}
                data={true}
                onClick={() => setSubMenuToggle(flag => !flag)}
            >
                {item.title}
                {children && (
                    <Icon
                        themes={mobileMenuItemIconStyle}
                        icon={!subMenuToggle ? plus : minus}
                    />
                )}
            </LinkSwitch>
            {children && (
                <MobileMenuItemSubMenu
                    post={post}
                    subMenuToggle={subMenuToggle}
                    setSubMenuToggle={setSubMenuToggle}
                    resetSubMenuToggle={resetSubMenuToggle}
                    item={item}
                />
            )}
        </>
    )
}

