import {
    auto,
    center,
    flex,
    flexStart,
    none,
    pointer,
    sv,
    white
}                from 'utils/themer'
import {theme} from 'styles/themes/main'
import {globals} from 'styles/globalStyles'

export const searchButton = {
    font: theme.fonts.body,
    display: flex,
    justifyContent: 'space-around',
    alignItems: center,
    alignSelf: flexStart,
    color: white,
    backgroundColor: globals.colors.buttonColor,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    height: [64, .7, 64],
    letterSpacing: [0.2, .7, 0.2],
    weight: 500,
    padding: `${sv(26)} ${sv(24)}`,
    minWidth: [167, .7, 167],
    maxWidth: '167px',
    marginLeft: 'auto',
    border: `2px solid ${globals.colors.buttonColor}`,
    borderRadius: [60, 0.7, 60],
    mobile: {
        padding: '0px 24px'
    },
    hover: {
        backgroundColor: globals.colors.buttonHoverColor,
        borderColor: globals.colors.buttonHoverColor,
        color: white,
        cursor: pointer
    },
    print: {
        display: none
    },
    icon: {
        size: [21, .7, 21],
    }
}

export const largeButtonStyle = {
    ...searchButton,
    minWidth: auto,
    maxWidth: none,
    icon: {
        ...searchButton.icon,
        marginLeft: [26, .7, 26],
        size: [18, .7, 18],
    }
}