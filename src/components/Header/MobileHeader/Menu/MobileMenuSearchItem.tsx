import React                     from 'react'
import Icon                      from '../../../../Shared/Icon'
import Li                        from '../../../../Shared/Li'
import Span                      from '../../../../Shared/Span'
import {
    minus,
    plus
}                                from 'styles/variables/iconLibrary'
import {
    mobileMenuLinkStyle
}                                from './styles'
import {mobileMenuItemStyle}     from './MobileMenuItem/styles'
import {mobileMenuItemIconStyle} from './MobileMenuLink/styles'
import { MobileSearch } from './MobileSearch'

export const MobileMenuSearchItem = ({setSearchToggle, searchToggle}) => {
    return (
        <Li themes={mobileMenuItemStyle}>
            <Span
                themes={mobileMenuLinkStyle}
                onClick={(e) => {
                    setSearchToggle(flag => !flag)
                    e.stopPropagation()
                }}
            >
                Search
                <Icon
                    themes={mobileMenuItemIconStyle}
                    icon={!searchToggle ? plus : minus}
                />
            </Span>
            <MobileSearch isOpen={searchToggle}/>
        </Li>
    )
}
