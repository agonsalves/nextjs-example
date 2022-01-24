import React                   from 'react'
import LinkSwitch              from 'Shared/LinkSwitch'
import { serviceMenuPanelStyle } from './styles'

interface MenuPanelServiceSubItemProps {
    child?: any;
    pathname?: any;
}

const MenuPanelServiceSubItem = ({child, pathname}: MenuPanelServiceSubItemProps) =>
    <LinkSwitch
        url={child.slug}
        themes={serviceMenuPanelStyle.subItemTitle(child.slug === pathname)}
    >
        {child.display_as_main_practice ? `${child.title} Overview` : child.title}
    </LinkSwitch>

export default MenuPanelServiceSubItem