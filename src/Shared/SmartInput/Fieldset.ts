import styled                 from 'styled-components'
import {
    relative,
    themer
}                             from 'utils/themer'
import {globals}              from 'styles/globalStyles'
import {theme}              from 'styles/themes/main'

const defaultFieldsetStyle = {
    position: relative,
    padding: 0,
    margin: 0,
    height: [globals.style.fieldSetHeight, .7, globals.style.fieldSetHeight],
    width: 'calc(100% - 2px)',
    border: `1px solid rgba(255,255,255,0)`,
    font: theme.fonts.body,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border-width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms'
}

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme})}`


export default Fieldset