import React, { useEffect, useState, createContext } from "react";

type FiltersData = {
    offices: string;
    positions: string;
}

type PropsFiltersContext = {
    filters: FiltersData;
    setFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
}

const DEFAULT_VALUE = {
    filters: { 
        offices: '',
        positions: '',
    },
    setFilters: () => {},
}

const FiltersContext = createContext<PropsFiltersContext>(DEFAULT_VALUE)

const FiltersContextProvider: React.FC = ({ children }) => {
    const [filters, setFilters] = useState(DEFAULT_VALUE.filters)

    return(
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}
export { FiltersContextProvider }
export default FiltersContext;

const getTermFromItem = (item: any) => item.current_openings_position_category[0].term
const getTitleFromItem = (item: any) => item.office_locations[0].post_title

const checkUsingFilter = (filters: any) => (item: any) => {
    if (filters.offices && filters.offices !== getTitleFromItem(item)) return false;
    if (filters.positions && filters.positions !== getTermFromItem(item)) return false;
    return true;
};

export const useFiltersToFilter = (filters: any, toFilter: any) => {
    const checkPost = checkUsingFilter(filters);
    return toFilter.filter(checkPost);
}