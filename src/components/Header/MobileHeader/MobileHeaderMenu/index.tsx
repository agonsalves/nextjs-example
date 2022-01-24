import React, {useState}           from 'react'
import Div                     from 'Shared/Div'
import {mobileHeaderMenuStyle} from './styles'
import { MobileHeaderMenuToggle } from '../Toggle'
import MobileMenu from '../Menu'

export const MobileHeaderMenu =({data, post}) => {
    const [isOpen, setIsOpen] = useState(false)    
    return (
        <Div themes={mobileHeaderMenuStyle}>
            <MobileHeaderMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu data={data} post={post} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Div>
    )
}
    


