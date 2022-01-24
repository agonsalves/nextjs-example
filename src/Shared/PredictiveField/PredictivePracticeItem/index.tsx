import React                     from 'react'
import Div                       from 'Shared/Div'
import { predictivePracticeStyle } from './styles'

interface PredictivePracticeItemProps {
    isHighlighted?: boolean;
    name?: string;
    theme?: any;
}

const PredictivePracticeItem = ({isHighlighted, name, theme}: PredictivePracticeItemProps) =>
    <Div
        themes={{...predictivePracticeStyle, ...theme}}
        className={isHighlighted ? 'active' : ''}
        children={name}
    />

export default PredictivePracticeItem