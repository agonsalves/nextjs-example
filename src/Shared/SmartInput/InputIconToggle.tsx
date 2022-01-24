import Div           from 'Shared/Div'
import {
    datalistClearIconStyle,
    datalistFieldIconStyle,
    datalistIconWrapperStyle,
    datalistPersonFieldIconStyle
}                    from 'Shared/FieldSwitch/DatalistField/styles'
import Icon          from 'Shared/Icon'
import MotionDiv     from 'Shared/MotionDiv'

const InputIconToggle = ({isIconFade,
    isIconToggle,
    isFocusedInputLabel,
    inputIcon,
    value,
    handleClear,
    theme,
    ...props
}) => {
    
    return ((!!isIconFade && (
        <MotionDiv
            initial="blur"
            animate={isFocusedInputLabel ? 'focus' : 'blur'}
            variants={{
                blur: {width: 'auto', opacity: 1},
                focus: {opacity: 0, width: 0}
            }}
            transition={{ease: 'easeOut', duration: .25}}
        >
            <Div themes={{...datalistIconWrapperStyle, ...theme?.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    themes={{...datalistFieldIconStyle, ...theme?.icon}}
                />
            </Div>
        </MotionDiv>
    )) ||
    (!!isIconToggle && (
        (value.length > 0 && (
            <Div themes={{...datalistIconWrapperStyle, ...theme?.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    onClick={handleClear}
                    themes={{...datalistClearIconStyle, ...theme?.clearIcon}}
                />
            </Div>
        )) || (
            <Div themes={{...datalistIconWrapperStyle, ...theme?.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    themes={{...datalistPersonFieldIconStyle, ...theme?.icon}}
                    style={{transform: props['aria-expanded'] ? 'rotate(180deg)' : null}}
                />
            </Div>
        )
    )) || (
        <Div themes={{...datalistIconWrapperStyle, ...theme?.iconWrapperStyle}}>
            <Icon icon={inputIcon} themes={theme?.icon}/>
        </Div>
    ))
}
    

export default InputIconToggle