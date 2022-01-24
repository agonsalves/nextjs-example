import styled        from 'styled-components'
import {themer}      from '../../utils/themer'

interface StyledFormProps {
    themes?: any;
    children?: any;
    onSubmit?: any;
}

const StyledForm = styled.form<StyledFormProps>`${props => themer(props.themes)}`

const Form = ({themes, ...props}: StyledFormProps) => {
    return (
        <StyledForm themes={themes} {...props} autoComplete="off"/>
    )
}
    
export default Form