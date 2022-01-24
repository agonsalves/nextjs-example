import { useState, useContext, useCallback} from 'react';
import * as S from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md'
import useComponentVisible from '@/hooks/useComponentVisible';
import FiltersContext from '@/hooks/useFilters';

function Filter ({filterItems, placeholder, type}) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
    const { filters, setFilters } = useContext(FiltersContext)

    const handleSelectFilter = useCallback((e) => {
        setFilters({
            ...filters,
            [type]: e.currentTarget.innerText,
        })
        setIsComponentVisible(!isComponentVisible)
    }, [filters])

    const handleClearFilter = useCallback((e) => {
        setFilters({
            ...filters,
            [type]: '',
        })
        setIsComponentVisible(!isComponentVisible)
    }, [filters])

    return(
        <S.DropdownContainer ref={ref}>
            <div className="form-group">
                <S.Dropdown 
                    onClick={() => setIsComponentVisible(!isComponentVisible)}
                    value={filters?.[type]}
                    placeholder={placeholder}
                    type="text"
                    name="option"
                />
                <S.Label >{placeholder}</S.Label>
                <S.IconContainer >
                    <MdKeyboardArrowDown size={30}/>
                </S.IconContainer>
            </div>
            {isComponentVisible &&
                <S.DropdownList>
                    {type === "offices" && <S.DropdownListItem onClick={(e) => handleClearFilter(e)}>All Office Locations</S.DropdownListItem>}
                    {type === "positions" && <S.DropdownListItem onClick={(e) => handleClearFilter(e)}>All Positions Open</S.DropdownListItem>}
                    {filterItems.map(item => {
                        return(
                            <S.DropdownListItem key={item} onClick={(e) => handleSelectFilter(e)}>{item}</S.DropdownListItem>
                        )
                    })}
                </S.DropdownList>
            }
        </S.DropdownContainer>
    )
}

export default Filter;