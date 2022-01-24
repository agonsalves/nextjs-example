import {
    center,
    flex,
    inlineFlex,
    pointer,
    white
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'styles/globalStyles'

export const genericMenuItemStyle = isActive => {
    const baseStyle = {
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        display: inlineFlex,
        alignItems: center,
        color: globals.colors.headingColor,
        font: globals.fonts.body,
        hover: {
            color: globals.colors.linkHoverColor,
            cursor: pointer,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            }
        },
        focus: {
            color: globals.colors.linkHoverColor,
            cursor: pointer,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            }
        }
    }

    if (isActive)
        return {
            ...baseStyle,
            color: globals.colors.linkActiveColor,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            },
            hover: {
                ...baseStyle.hover,
                color: globals.colors.linkActiveColor
            }
        }

    return {
        ...baseStyle
    }

}

export const genericMenuItemParentStyle = {
    display: flex,
    alignItems: center,
    color: globals.colors.linkColor,
    hover: {
        color: globals.colors.linkColor,
        child: {
            selector: 'svg',
            color: globals.colors.linkColor,
        }
    }
}

export const genericMenuItemStyleIcon = {
    color: colorPalette.yellow,
    size: 18,
    marginLeft: 15,
    marginTop: 2,
    mobile: {
        size: 18,
    },
    child: [
        {
            selector: '.fa-primary',
            color: colorPalette.blue
        },
        {
            selector: '.fa-secondary',
            color: colorPalette.gray,
            opacity: 1,
        }
    ]
}