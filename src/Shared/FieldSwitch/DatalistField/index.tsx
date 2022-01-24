import {
    useEffect,
    useMemo,
    useRef,
    useState
}                          from 'react'
import Autosuggest         from 'react-autosuggest'
import Div                 from 'Shared/Div'
import SmartInput          from 'Shared/SmartInput'
import {decodeEntities}    from 'utils/helpers'
import useMeasure          from 'utils/useMeasure'
import {
    angleUp,
    closeOut,
}                          from 'styles/variables/iconLibrary'
import {globals}           from 'styles/globalStyles'
import {datalistItemStyle, ClassContainer} from './styles'

interface DatalistFieldProps {
    name: string;
    placeholder: string;
    themes: any;
    value: any;
    dataList: any;
    setFieldValue?: any;
}

const DatalistField = ({name, placeholder, themes, value, dataList, setFieldValue}: DatalistFieldProps) => {
    const [hasSections, setHasSections] = useState(false)
    const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const labelRef = useRef(null)
    const fieldRef = useRef(null)
    const inputLabelWidth = useMeasure(labelRef).width * globals.style.inputLabelShrinkRatio
    
    const customIcon = () => {
        if ((!themes.prefix || !themes.iconName)) {
            return angleUp
        } else {
            return {
                prefix: themes.prefix,
                iconName: themes.iconName,
                icon: themes.icon
            }
        }
    }

    const options = useMemo(() => {
        /**
         * we're going to build the options array from the datalist source. In most cases, it is straightforward
         * because the list is flat. However, practice often have a taxonomy structure, so need to be treated
         * differently.
         */

        let newArray = []

        dataList.forEach(item => {
            if (item.children) {
                /* Item has children, so we trigger the multiSection flag on Autosuggest. */
                setHasSections(true)

                /**
                 * If the section has a child that is flagged as a main practice, then we add a flag to the section
                 * parent that will prevent the section title component from being rendered. Instead, we give the
                 * main practice a class that will make it look like it is the section title. It will be clickable,
                 * unlike an actual section title.
                 *
                 * If the section does not have a child flagged as main practice, then it will behave normally,
                 * with the section title component being rendered.
                 */
                if (item.children[0].title === item.title) {
                    newArray.push({
                        ...item,
                        hideParent: true,
                        children: item.children.map(child => ({
                            ...child,
                            className: 'parent'
                        }))
                    })
                } 
                else {
                    newArray.push({...item, className: 'parent disabled'})
                }
            } else
                newArray.push({...item, className: 'parent', children: [item]})
        })

        return newArray
    }, [dataList])

    const getInitialLabel = useMemo(() => {
        let label = ''

        if (value) {
            let realValue = dataList.find(item => {
                if (item.children?.find(child =>
                    child.id === parseInt(value)
                ))
                    return true

                return item.id === parseInt(value)
            })

            if (realValue.children && realValue.id !== value)
                realValue = realValue.children.find(item => item.id === parseInt(value))

            label = realValue ? realValue.title : ''
        }

        return decodeEntities(label)
    }, [dataList, value])

    const [label, setLabel] = useState(getInitialLabel)
    const [suggestions, setSuggestions] = useState(options)

    useEffect(() => {
        if (!value)
            setLabel('')
    }, [value])

    const handleChange = useMemo(() => e => setLabel(e.target.value), [])

    const handleClear = useMemo(
        () => () => {
            setFieldValue(name, null)
            setLabel('')
            setLegendWidth(0)
            fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.remove('focused')
            setIsFocusedInputLabel(false)
        },
        [setFieldValue, name]
    )

    const handleSelection = useMemo(() => (e, {suggestion}) => {
        e && e.preventDefault()
        if (suggestion) {
            setFieldValue(name, suggestion.id || null)
            setLabel(decodeEntities(suggestion.title))
        }
    }, [setFieldValue, name])

    const handleFocus = () => {
        setIsFocusedInputLabel(true)
        setLegendWidth(inputLabelWidth)
        fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.add('focused')
    }

    const handleBlur = () => {
        if (!value)
            handleClear()
    }

    useEffect(() => {
        if (!!value || !!isFocusedInputLabel) {
            setIsFocusedInputLabel(true)
            setLegendWidth(inputLabelWidth)
            fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.add('focused')
        } else {
            handleClear()
        }
    }, [value, inputLabelWidth, handleClear, isFocusedInputLabel])

    const getSuggestions = useMemo(() => value => {
        const inputValue = value.trim().toLowerCase()
        const inputLength = inputValue.length
        return inputLength === 0
            ? options
            : options.filter(item => {
                return (item.children && item.children?.find(child => {
                    child.title.toLowerCase().includes(value.toLowerCase())
                }
                    ))
                    || item.title.toLowerCase().includes(inputValue)
            })
    }, [options])

    const onSuggestionsFetchRequested = useMemo(
        () => ({value}) => setSuggestions(getSuggestions(value)),
        [getSuggestions]
    )

    const onSuggestionsClearRequested = useMemo(
        () => () => setSuggestions(options),
        [options]
    )
    
    return (
        <ClassContainer>
            <Autosuggest
            id={name}
            inputProps={{
                value: label,
                name,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
            }}
            suggestions={suggestions}
            getSuggestionValue={item => item.title}
            getSectionSuggestions={section => section.children}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={handleSelection}
            onSuggestionHighlighted={() => null}
            shouldRenderSuggestions={() => true}
            multiSection={hasSections}
            renderInputComponent={props =>
                <SmartInput
                    name={name}
                    placeholder={placeholder}
                    themes={themes}
                    label={label}
                    handleChange={handleChange}
                    handleFocus={() => handleFocus()}
                    handleBlur={() => handleBlur()}
                    handleClear={() => handleClear()}
                    isFocusedInputLabel={isFocusedInputLabel}
                    legendWidth={legendWidth}
                    labelRef={labelRef}
                    fieldRef={fieldRef}
                    ref={labelRef}
                    inputIcon={props.value.length > 0 ? closeOut : customIcon()}
                    isIconToggle={true}
                    {...props}
                />
            }
            renderSuggestion={(item, {isHighlighted}) =>
                <Div
                    className={`${item.className} ${isHighlighted ? 'active' : ''} datalist-item`}
                    children={decodeEntities(item.title)}
                    themes={datalistItemStyle}
                />
            }
            renderSectionTitle={section => !section.hideParent && (
                <Div
                    children={decodeEntities(section.title)}
                    themes={datalistItemStyle}
                    className={section.className || 'parent'}
                />
            )}
        />
        </ClassContainer>
    )
}

export default DatalistField