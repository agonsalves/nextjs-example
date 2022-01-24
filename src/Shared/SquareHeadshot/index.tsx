import React               from 'react'
import Img                 from 'Shared/Img'

interface SquareHeadshotProps {
    name: string;
    size?: number;
    image?: any;
    themes?: any;
}

const SquareHeadshot = ({name, size, ...props}: SquareHeadshotProps) =>
    <Img
        alt={`Photo of ${name}.`}
        height={size}
        width={size}
        src={props.image || props.image?.url}
        {...props}
    />

export default SquareHeadshot