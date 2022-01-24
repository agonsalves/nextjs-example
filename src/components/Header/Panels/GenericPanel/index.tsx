import Div from '@/Shared/Div'
import React                    from 'react'
import H2                       from 'Shared/H2'
import { headerMenuPanelStyle } from '../../Menu/styles'
import MenuPanelGenericMenuItem from './GenericMenuItem'

interface MenuPanelGenericProps {
    headerMenu?: any;
    post?: any;
    id?: any;
}

const MenuPanelGeneric = ({headerMenu, post, id}: MenuPanelGenericProps) => {
    const menuItem = headerMenu.find(menu => menu.ID === id)

    return (
        <Div themes={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
            <H2 themes={headerMenuPanelStyle.heading}>Firm Info</H2>
            {menuItem?.children.map((item, key) =>
                <MenuPanelGenericMenuItem
                    item={item}
                    post={post}
                    key={key}
                />
            )}
        </Div>
    )
}

export default MenuPanelGeneric
