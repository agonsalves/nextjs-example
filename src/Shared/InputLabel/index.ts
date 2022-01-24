import styled                   from 'styled-components'
import {themer}                 from '../../utils/themer'
import {defaultInputLabelStyle} from './styles'

const InputLabel = styled.label`${props => themer({...defaultInputLabelStyle, ...props.theme})}`

export default InputLabel