import React                 from 'react'
import Li                    from 'Shared/Li'
import { MobileMenuLink } from '../MobileMenuLink'
import {mobileMenuItemStyle} from './styles'

export const MobileMenuItem = ({post, item, resetSubMenuToggle}) => {
  return (
    <Li themes={mobileMenuItemStyle}>
        <MobileMenuLink
        item={item}
        post={post}
        children={item.hasOwnProperty('children')}
        resetSubMenuToggle={resetSubMenuToggle}/>
    </Li>
  )
}
    

