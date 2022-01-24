import React                   from 'react'
import Div                     from 'Shared/Div'
import Img                     from 'Shared/Img'
import {predictivePersonStyle} from './styles'

interface PredictivePersonItemProps {
    isHighlighted?: boolean;
    photo?: any;
    name?: string;
    position?: any;
    theme?: any;
}

const PredictivePersonItem = ({isHighlighted, photo, name, position, theme}: PredictivePersonItemProps) =>
    <Div
        themes={{...predictivePersonStyle, ...theme}}
        className={isHighlighted ? 'active' : ''}
    >
        <Img
            image={photo}
            placeholder="hi"
            themes={{...predictivePersonStyle.image, ...theme.image}}
        />
        <Div themes={{...predictivePersonStyle.content, ...theme.content}}>
            <Div themes={{...predictivePersonStyle.name, ...theme.name}}>
                {name}
            </Div>
            <Div themes={{...predictivePersonStyle.title, ...theme.title}}>
                {position}
            </Div>
        </Div>
    </Div>

export default PredictivePersonItem