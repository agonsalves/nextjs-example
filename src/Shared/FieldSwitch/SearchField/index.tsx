import React, {
    useEffect,
    useRef,
    useState
}                 from 'react'
import useMeasure from 'utils/useMeasure'
import {globals}           from 'styles/globalStyles'
import SmartInput from 'Shared/SmartInput'

interface SearchFieldProps {
    name?: string;
    placeholder?:string;
    themes?:any;
    value?:any;
    handleChange?:any;
}

const SearchField = ({
        name,
        placeholder,
        themes,
        value,
        handleChange,
        ...props
    }: SearchFieldProps) => {
        const [label, setLabel] = useState('')
        const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
        const [legendWidth, setLegendWidth] = useState(0)
        const labelRef = useRef(null)
        const fieldRef = useRef(null)
        const inputLabelWidth = useMeasure(labelRef).width * globals.style.inputLabelShrinkRatio

        const handleFocus = () => {

        }

        const handleBlur = () => {
            if (!value) {
                setIsFocusedInputLabel(false)
                setLegendWidth(0)
            }
        }

        useEffect(() => {

            if (!!value) {
                setIsFocusedInputLabel(true)
                setLegendWidth(inputLabelWidth)
                setLabel(value || '')
                fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.add('focused')
            } else {
                setIsFocusedInputLabel(false)
                setLegendWidth(0)
                setLabel('')
                fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.remove('focused')
            }
        }, [value, inputLabelWidth, isFocusedInputLabel])


        return (
            <SmartInput
                name={name}
                placeholder={placeholder}
                themes={themes}
                label={label}
                handleChange={handleChange}
                handleFocus={() => handleFocus()}
                handleBlur={() => handleBlur}
                isFocusedInputLabel={isFocusedInputLabel}
                legendWidth={legendWidth}
                labelRef={labelRef}
                fieldRef={fieldRef}
                {...props}
            />
        )
    }


export default SearchField