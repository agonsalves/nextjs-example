import {blockQuoteStyle} from 'Shared/Blockquote/styles'
import styled            from 'styled-components'
import {themer}          from '../../utils/themer'

const Blockquote = styled.blockquote`${props => themer({...blockQuoteStyle, ...props.theme})}`

export default Blockquote