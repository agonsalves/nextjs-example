import styled        from 'styled-components'
import {themer}      from '../../utils/themer'

interface Image {
    src?: string;
    themes?: any;
    image?: any;
}

const Image = styled.img<Image>`${props => themer(props.themes)}`

export default Image