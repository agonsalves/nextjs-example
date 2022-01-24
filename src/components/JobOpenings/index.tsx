import {useContext, useState, useEffect} from 'react'
import FiltersContext, { useFiltersToFilter } from '@/hooks/useFilters';
import Opening from './Opening';

import * as S from './styles';

function JobOpenings({ job_openings }) {
  const [jobOportunities, setJobOportunities] = useState([])
  const { filters } = useContext(FiltersContext)

  useEffect(() => {
    setJobOportunities(useFiltersToFilter(filters, job_openings))
  }, [filters])

  return (
    <S.Container>
      {jobOportunities && jobOportunities.map(opening => (
        <Opening item={opening} />
      ))}
    </S.Container>
  );
}

export default JobOpenings;
