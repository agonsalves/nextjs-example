import styled    from 'styled-components'
import {themer}  from '../../utils/themer'

const H1 = styled.h1`${props => themer(props.theme)}`

export default H1