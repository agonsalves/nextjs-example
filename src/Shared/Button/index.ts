import styled    from 'styled-components'
import {themer}  from 'utils/themer'

const Button = styled.button`${props => themer(props.theme)}`

export default Button