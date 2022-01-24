import {searchButton}       from 'Shared/ButtonLarge/styles'
import {defaultLegendStyle} from 'Shared/SmartInput/Legend'
import {
    absolute,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    none,
    relative,
    spaceBetween,
    transparent
}                           from 'utils/themer'
import {globals}            from 'styles/globalStyles'

export const industriesMenuPanelStyle = {
    display: flex,
    flexDirection: 'row',
    wrap: 'nowrap',
    font: globals.fonts.body,
    column: {
        display: flex,
        flexDirection: column,
        width: '50%',
        boxSizing: borderBox,
        firstChild: {
            paddingRight: 40
        }
    },
    industry: isActive => {
        const baseStyle = {
            display: flex,
            marginTop: 42,
            paddingRight: 25,
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
            borderColor: '#E5E5E5',
            color: globals.colors.headingColor,
            firstChild: {
                marginTop: 0
            },
            hover: {
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'img',
                    opacity: globals.style.imageHoverOpacity
                }
            }
        }

        if (isActive)
            return {
                ...baseStyle,
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'img',
                    opacity: globals.style.imageHoverOpacity
                }
            }

        return {
            ...baseStyle
        }

    },
    industryThumb: {
        marginRight: 23,
        width: [160, globals.style.layoutScalingValue],
        minWidth: [160, globals.style.layoutScalingValue],
        maxWidth: [160, globals.style.layoutScalingValue],
        height: [98, globals.style.layoutScalingValue]
    },
    industryTitle: {
        size: 18,
        lineHeight: 24,
        letterSpacing: 0.5,
        paddingBottom: 15,
        textTransform: 'capitalize'
    }
}

export const practiceSearchBarStyle = {
    padding: '38px 0',
    display: flex,
    alignItems: center,
    justifyContent: center,
    boxSizing: borderBox,
    print: {
        display: none
    },
    form: {
        display: flex,
        flexDirection: 'row',
        justifyContent: flexStart,
        mobile: {
            display: none
        },
        print: {
            display: none
        },
        child: [
            {
                selector: '.react-autosuggest__container',
                display: flex,
                flexDirection: column
            },
            {
                selector: '.react-autosuggest__suggestions-container',
                position: absolute,
                marginTop: 78
            },
            {
                selector: 'ul',
                maxHeight: 500
            }
        ]
    },
    field: {
        height: [globals.style.inputHeight, .7, globals.style.inputHeight],
        weight: 300,
        minWidth: [578, .5, '100%'],
        borderRadius: [60, .7, 60],
        fieldset: {
            height: [globals.style.fieldSetHeight, .7, globals.style.fieldSetHeight],
            width: 'calc(100% - 2px)',
            border: `1px solid rgba(255,255,255,0)`,
            font: globals.fonts.body
        },
        placeholder: {
            color: transparent
        },
        icon: {
            display: none
        },
        inputLabel: {
            transform: 'translate(0,100%) scale(1)',
        },
        legend: {
            display: none,
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: transparent
            }
        },
        fieldOuter: {
            flexGrow: 1
        },
    },
    button: {
        ...searchButton,
    },
    titleWrapper: {
        display: flex,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        justifyContent: spaceBetween,
        marginBottom: [55, .7, '0'],
        mobile: {
            position: relative,
            bottom: 0
        },
        child: [
            {
                selector: 'h1',
                position: relative,
                bottom: 0
            }
        ],
        print: {
            position: relative,
            bottom: 0
        }
    }
}