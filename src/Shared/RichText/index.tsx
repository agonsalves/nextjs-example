import React from 'react'
import Div           from 'Shared/Div'
import {
    defaultFirstParagraphLargeStyle,
    defaultRichTextStyle
}                    from './styles'

interface RichTextProps {
    isFirstParagraphLarge?: boolean;
    themes?: any;
    children?: any;
}

const RichText = ({isFirstParagraphLarge, themes, children, ...props}: RichTextProps) => {
    const createMarkup = () => ({ __html: children });
    
    return children && (
    <Div
        themes={{
            ...defaultRichTextStyle,
            ...isFirstParagraphLarge ? defaultFirstParagraphLargeStyle : {},
            ...themes
        }}
        dangerouslySetInnerHTML={createMarkup()}
        {...props}
    >
    </Div>)
}


export default RichText