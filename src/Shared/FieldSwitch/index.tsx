import React from 'react'
import Div               from 'Shared/Div'
import PredictiveField   from '../PredictiveField'
import DatalistField     from './DatalistField'
import SearchField       from './SearchField'
import {fieldOuterStyle} from './styles'

interface FieldSwitchProps {
    id?: string;
    dataList?: any;
    name: string;
    predictive?: any;
    placeholder?: string;
    themes?: any;
    values?: any;
    isClearable?: boolean;
}

const FieldSwitch = ({dataList, name, predictive, placeholder, themes, values, ...props}: FieldSwitchProps) => {
    return(
        <Div themes={{...fieldOuterStyle, ...themes?.fieldOuter}}>
        {dataList && (
            <DatalistField
                dataList={dataList}
                name={name}
                placeholder={placeholder}
                themes={themes}
                value={values[name]}
                {...props}
            />
        )}
        {predictive && (
            <PredictiveField
                predictive={predictive}
                name={name}
                placeholder={placeholder}
                theme={themes}
                value={values[name]}
                {...props}
            />
        )}
        {!dataList && !predictive && (
            <SearchField
                name={name}
                placeholder={placeholder}
                themes={themes}
                value={values[name]}
                {...props}
            />
        )}
    </Div>
    )
}

export default FieldSwitch