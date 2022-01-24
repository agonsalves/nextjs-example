import styled           from 'styled-components'
import {themer}         from '../../utils/themer'
import {defaultH3Style} from './styles'

const H3 = styled.h3`${props => themer({...defaultH3Style, ...props.theme})}`

export default H3