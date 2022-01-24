import styled    from 'styled-components'
import {themer}  from '../../utils/themer'

interface UlProps {
    themes?: any;
}

const Ul = styled.ul<UlProps>`${props => themer(props.themes)}`

export default Ul