import styled    from 'styled-components'
import {themer}  from '../../utils/themer'

interface LiProps {
    themes?: any;
}

const Li = styled.li<LiProps>`${props => themer(props.themes)}`

export default Li