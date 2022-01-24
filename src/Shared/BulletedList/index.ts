import styled              from 'styled-components'
import {themer}            from '../../utils/themer'
import {bulletedListStyle} from './styles'

const BulletedList = styled.ul`${props => themer({...bulletedListStyle, ...props.theme})}`

export default BulletedList