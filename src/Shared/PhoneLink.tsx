import React      from 'react'
import LinkSwitch from 'Shared/LinkSwitch'

interface PhoneLinkProps {
    themes?: any;
    children?: any;
    phone?: string;
}

const PhoneLink = ({phone, children, themes}: PhoneLinkProps) =>
    <LinkSwitch url={`tel:${phone}`} children={children || phone} themes={themes}/>


export default PhoneLink