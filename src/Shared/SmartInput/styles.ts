import {globals}              from 'styles/globalStyles'

export const focusedInputLabelStyle = {
    transform: `translate(0, 8px) scale(${globals.style.inputLabelShrinkRatio})`,
    color: globals.colors.textColor,
    whiteSpace: 'nowrap',
    weight: 500
}