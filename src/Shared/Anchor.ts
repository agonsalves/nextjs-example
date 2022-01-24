import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {defaultLinkStyle} from './LinkSwitch/styles'

interface AnchorProps {
    themes: any;
}

const Anchor = styled.a<AnchorProps>`${props => themer({...defaultLinkStyle, ...props.themes})}`

export default Anchor