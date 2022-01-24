import React                    from 'react'
import Div                      from 'Shared/Div'
import {predictiveHeadingStyle} from './styles'

interface PredictiveSectionHeadingProps {
    section?: any;
    theme?: any;
}

const PredictiveSectionHeading = ({section, theme}: PredictiveSectionHeadingProps) =>
    <Div
        themes={{...predictiveHeadingStyle, ...theme}}
        children={section.title}
    />

export default PredictiveSectionHeading