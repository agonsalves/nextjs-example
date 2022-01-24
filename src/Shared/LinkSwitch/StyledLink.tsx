import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {defaultLinkStyle} from './styles'

interface StyledLinkProps {
    themes: any;
}

const StyledLink = styled.a<StyledLinkProps>`${props => themer({...defaultLinkStyle, ...props.themes})}`

export default StyledLink