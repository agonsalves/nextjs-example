import styled    from 'styled-components'
import {
    borderBox,
    inlineBlock,
    none,
    relative,
    themer,
    transparent,
    white
}                from 'utils/themer'
import {globals} from 'styles/globalStyles'
import {theme}              from 'styles/themes/main'

const defaultFieldStyle = {
    display: inlineBlock,
    position: relative,
    width: '100%',
    height: [64, .7, 64],
    backgroundColor: white,
    paddingTop: [13, .7, 13],
    paddingBottom: 0,
    paddingRight: [35, .6, 35],
    paddingLeft: [globals.style.inputPaddingLeft, .5, globals.style.inputPaddingLeft],
    margin: 0,
    border: `2px solid ${globals.colors.borderColor}`,
    borderRadius: 60,
    font: theme.fonts.body,
    fontSize: [18, .7, 18],
    weight: 300,
    textOverflow: 'ellipsis',
    color: globals.colors.textColor,
    boxSizing: borderBox,
    webkitAppearance: none,
    letterSpacing: none,
    zIndex: 1,
    placeholder: {
        color: transparent,
        textTransform: none,
    }
}

const Field = styled.input`${props => themer({...defaultFieldStyle, ...props.theme})}`

export default Field