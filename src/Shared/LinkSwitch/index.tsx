import Span            from 'Shared/Span'
import StyledLink      from 'Shared/LinkSwitch/StyledLink'
import {isString}      from 'utils/helpers'
import Anchor          from '../Anchor'

interface LinkSwitchProps {
    as?: string;
    children?: any;
    className?: string;
    data?: any;
    onClick?: any;
    onFocus?: any;
    themes?: any;
    title?: string;
    type?: any;
    url?: string;
    target?: any;
    download?: any;
    blogsConfig?: any;
    isActive?: boolean;
    disabled?: boolean;
    initial?: any;
    dangerouslySetInnerHTML?: any;
}

const LinkSwitch = ({
    children,
    className,
    data,
    onClick,
    onFocus,
    themes,
    title,
    type,
    url,
    target,
    download,
    blogsConfig,
    disabled,
    initial,
    dangerouslySetInnerHTML,
    ...props
}: LinkSwitchProps) => {
    if (!url || !isString(url) || url.trim() === '#'){
        return(
            <Span
            children={children}
            className={`${className} ${props.isActive ? 'active' : ''}`}
            onClick={onClick ? e => onClick(data, e) : null}
            themes={themes}
            title={title}
            type={type}
            {...props}
            />
        )
    }

    if (/mailto:.*/.test(url) || /tel:.*/.test(url))
    return <Anchor
        children={children}
        href={url}
        themes={themes}
        title={title}
    />

    return <StyledLink
        children={children}
        themes={themes}
        title={title}
        href={url}
    />
         
}

export default LinkSwitch