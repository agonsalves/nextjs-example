import React, {useState}              from 'react'
import MotionDiv                      from 'Shared/MotionDiv'
import LinkSwitch                     from 'Shared/LinkSwitch'
import {isNavItemActive}              from 'utils/isNavItemActive'

import {absoluteToRelativeUrl}        from 'utils/url'
import MenuPanelGenericParentMenuItem from '../GenericParentMenuItem'
import { genericMenuItemStyle } from '../GenericParentMenuItem/styles'
import { genericMenuItemWrapperStyle } from './styles'

const MenuPanelGenericMenuItem = ({item, post}) => {
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false)
    const additionalProps = {
        target: item.target,
        url: absoluteToRelativeUrl(item.url),
        isActive: isNavItemActive(item, post)
    }

    return (
        <MotionDiv themes={genericMenuItemWrapperStyle}>
            {(item.children && (
                <MenuPanelGenericParentMenuItem
                    isSubMenuExpanded={isSubMenuExpanded}
                    item={item}
                    additionalProps={additionalProps}
                    post={post}
                    setIsSubMenuExpanded={setIsSubMenuExpanded}
                />
            )) || (
                <LinkSwitch
                    title={item.title}
                    data={item.classes[0]}
                    children={item.title }
                    themes={genericMenuItemStyle(additionalProps.isActive)}
                    {...additionalProps}
                />
            )}
        </MotionDiv>
    )
}

export default MenuPanelGenericMenuItem
