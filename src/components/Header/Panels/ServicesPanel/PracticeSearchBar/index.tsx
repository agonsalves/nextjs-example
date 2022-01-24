import { PracticeSearchForm } from '@/Shared/PracticeSearchForm'
import React                    from 'react'
import {practiceSearchBarStyle} from './styles'

const PracticeSearchBar = ({theme}) => {
    return (
        <PracticeSearchForm hasButton={true} theme={{...practiceSearchBarStyle, ...theme}}/>
    )
}
    

export default PracticeSearchBar