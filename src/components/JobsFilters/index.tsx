import { useEffect, useState } from 'react';
import * as S from './styles';
import { JobOportunitiesData } from './types';
import Filter from './Filter'

interface JobsFiltersData {
    job_oportunities: JobOportunitiesData;
}

function JobsFilters({job_openings}) {
    const [offices, setOffices] = useState<string[]>([]);
    const [positions, setPositions] = useState<string[]>([]);

    function getLocations() {
        const officeLocations = []
        job_openings.forEach((oportunity: JobOportunitiesData) => {
            if(!officeLocations.includes(oportunity.office_locations[0].post_title)){
                officeLocations.push(oportunity.office_locations[0].post_title)
            }
        })
        setOffices(officeLocations);
    }

    function getPositions() {
        const positionsAvailable = []
        job_openings.forEach((oportunity: JobOportunitiesData) => {
            if(!positionsAvailable.includes(oportunity.current_openings_position_category[0].term)){
                positionsAvailable.push(oportunity.current_openings_position_category[0].term)
            }
        })
        setPositions(positionsAvailable)
    }

    useEffect(() => {
        getLocations()
        getPositions()
    }, [])

    return(
        <S.Container>
            Filters:
            <Filter type="offices" filterItems={offices} placeholder="Filter By Offices"/>
            <Filter type="positions" filterItems={positions} placeholder="Filter By Positions"/>
        </S.Container>
    )
}

export default JobsFilters;