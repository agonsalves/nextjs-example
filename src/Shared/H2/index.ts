import styled    from 'styled-components'
import {themer}  from 'utils/themer'

interface H2Props {
    themes: any;
}

const H2 = styled.h2<H2Props>`${props => themer(props.themes)}`

export default H2