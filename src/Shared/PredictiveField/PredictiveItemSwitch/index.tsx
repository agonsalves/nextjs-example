import React                    from 'react'
import Div                      from 'Shared/Div'
import Icon                     from 'Shared/Icon'
import {search}                 from 'styles/variables/iconLibrary'
import {colorPalette, globals}                from 'styles/globalStyles'
import PredictivePersonItem     from '../PredictivePersonItem'
import PredictivePracticeItem   from '../PredictivePracticeItem'
import {predictiveHeadingStyle} from '../PredictiveSectionHeading/styles'
import {predictiveViewAllStyle} from './styles'

const PredictiveItemSwitch = ({item, ...props}) => {
    if (item.postType === 'person')
        return (
            <PredictivePersonItem
                name={item.title}
                photo={item.photo}
                position={item.position}
                {...props}
            />
        )

    if (item.postType === 'practice-area' || item.postType === 'industry')
        return (
            <PredictivePracticeItem
                name={item.title}
                {...props}            />
        )

    if (item.postType === undefined)
        return (
            <>
                <PredictivePracticeItem
                    name={item.title}
                    theme={{...predictiveViewAllStyle}}
                    {...props}
                />
                <Icon
                    icon={search}
                    themes={{...predictiveViewAllStyle.icon}}
                />
            </>
        )

    if (item.heading)
        return (
            <Div
                {...props}
                themes={predictiveHeadingStyle}
                children={item.title}
            />
        )

    return (
        <Div
            style={props.isHighlighted ? {backgroundColor: colorPalette.blue} : {}}
            children={item.title}
        />
    )
}

export default PredictiveItemSwitch