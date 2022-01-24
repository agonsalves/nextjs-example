import styled    from 'styled-components'
import {themer}  from '../../utils/themer'

interface SpanProps {
    themes?: any;
    type?: string;
    isActive?: boolean;
}

const Span = styled.span<SpanProps>`${props => themer(props.themes)}`

export default Span