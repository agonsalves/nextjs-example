import React, {useImperativeHandle} from 'react'
import InputLabel                   from 'Shared/InputLabel'
import Field                        from './Field'
import Fieldset                     from './Fieldset'
import InputIconToggle              from './InputIconToggle'
import Legend                       from './Legend'
import {focusedInputLabelStyle}     from './styles'

interface SmartInputProps {
    themes?: any;
    handleChange?: any;
    handleFocus?: any;
    handleBlur?: any;
    label?: any;
    legendWidth?: any;
    name?: string | any;
    id?: any;
    placeholder?: any;
    labelRef?: any;
    fieldRef?: any;
    isFocusedInputLabel?: any;
    isIconFade?: any;
    isIconToggle?: any;
    inputIcon?: any;
    handleClear?: any;
    value?: any;
    ref?: any;
    isOpen?: any;
}

const SmartInput = (({name, ref, ...props}: SmartInputProps) => {
    const {
        themes,
        handleChange,
        handleFocus,
        handleBlur,
        label,
        legendWidth,
        id = `input-${name}`,
        placeholder,
        labelRef,
        fieldRef,
        isFocusedInputLabel,
        isIconFade,
        isIconToggle,
        inputIcon,
        handleClear,
        value,
    } = props


    /// prevents Autosuggest from throwing error
    useImperativeHandle(ref, () => ({
        focus: () => {
            labelRef.current.focus()
        }
    }))


    return (
        <Fieldset theme={themes?.fieldset}>
            <Field
                theme={themes}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={label}
                name={name}
                className="exempt"
                id={id}
                ref={fieldRef}
                {...props}
            />
            <InputLabel
                children={placeholder}
                theme={isFocusedInputLabel
                    ? {...focusedInputLabelStyle, ...themes?.focusedInputLabelStyle}
                    : {...themes?.inputLabel}}
                ref={labelRef}
                htmlFor={id}
            />
            <Legend theme={{
                width:
                    !isFocusedInputLabel
                        ? legendWidth + 'px'
                        : legendWidth + 10 + 'px',
                ...themes?.legend
            }}/>
            <InputIconToggle
                isIconFade={isIconFade}
                isIconToggle={isIconToggle}
                isFocusedInputLabel={isFocusedInputLabel}
                inputIcon={inputIcon}
                value={value}
                handleClear={handleClear}
                theme={themes}
            />
        </Fieldset>
    )
})

export default SmartInput
