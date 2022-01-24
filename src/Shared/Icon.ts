import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled            from 'styled-components'
import {themer}          from 'utils/themer'

interface IconProps {
    themes?: any;
    icon?: {
        iconName: string | any;
    }
}

const Icon = styled(FontAwesomeIcon)<IconProps>`
    ${props => themer(props.themes)}
    ${props => props.themes[props.icon?.iconName] ? themer(props.themes[props.icon.iconName]) : ''}
`

export default Icon