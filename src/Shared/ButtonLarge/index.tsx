import {angleRight}       from 'styles/variables/iconLibrary'
import Icon               from '../Icon'
import LinkSwitch         from '../LinkSwitch'
import {largeButtonStyle} from './styles'

interface ButtonLargeProps {
    children?: any;
    label?: any;
    url?: any;
    title?: any;
    icon?: any;
    themes?: any;
    className?: string;
    as?: string;
    type?: string;
    onClick?: any;
} 

const ButtonLarge = ({
    children,
    label,
    url,
    title,
    icon,
    themes,
    ...props}: ButtonLargeProps) => {
        return (
        <LinkSwitch
            url={url}
            title={title}
            className={props.className}
            themes={{...largeButtonStyle, ...themes}}
            {...props}
        >
            {label || children}
            {icon && (
                <Icon icon={icon} themes={{...largeButtonStyle.icon, ...themes.icon}}/>
            )}
        </LinkSwitch>
        )
    }



export default ButtonLarge