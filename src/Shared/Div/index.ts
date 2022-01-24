import styled    from 'styled-components'
import {themer}  from 'utils/themer'

interface DivProps {
    themes?: any;
}

const Div = styled.div<DivProps>`${props => themer(props.themes)}`

export default Div