import styled             from 'styled-components'
import {themer}           from '../../utils/themer'
import {defaultLinkStyle} from './styles'

const Anchor = styled.a`${props => themer({...defaultLinkStyle, ...props.theme})}`

export default Anchor