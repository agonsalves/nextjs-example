import React, {useEffect}      from 'react'
import Div                     from 'Shared/Div'
import Icon                    from 'Shared/Icon'
import {
    chevronCircleDown,
    chevronCircleUp
}                              from 'styles/variables/iconLibrary'
import {
    genericMenuItemParentStyle,
    genericMenuItemStyle,
    genericMenuItemStyleIcon
}                              from './styles'
import MenuPanelGenericSubMenu from '../GenericSubMenu'

const MenuPanelGenericParentMenuItem = ({item, additionalProps, post, setIsSubMenuExpanded, isSubMenuExpanded}) => {
    useEffect(() => {
        if (additionalProps.isActive)
            setIsSubMenuExpanded(true)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <>
            <Div
                themes={genericMenuItemParentStyle}
                onClick={(e) => {
                    setIsSubMenuExpanded(flag => !flag)
                    e.stopPropagation()
                }}
            >
                <Div
                    title={item.title}
                    data={item.classes[0]}
                    themes={genericMenuItemStyle(additionalProps.isActive || isSubMenuExpanded)}
                    {...additionalProps}
                >
                    {item.title}
                    <Icon
                        icon={isSubMenuExpanded ? chevronCircleUp : chevronCircleDown}
                        themes={genericMenuItemStyleIcon}
                    />
                </Div>
            </Div>
            <MenuPanelGenericSubMenu
                isSubMenuExpanded={isSubMenuExpanded}
                setIsSubMenuExpanded={setIsSubMenuExpanded}
                item={item}
                post={post}
            />
        </>
    )
}


export default MenuPanelGenericParentMenuItem
