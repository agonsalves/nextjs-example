import React      from 'react'
import LinkSwitch from './LinkSwitch'

const EmailLink = ({email, children, ...props}) =>
    <LinkSwitch url={`mailto:${email}`} {...props} children={children || email}/>


export default EmailLink
