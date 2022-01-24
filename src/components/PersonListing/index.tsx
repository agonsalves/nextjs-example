import React                from 'react'
import Div                  from 'Shared/Div'
import EmailLink            from 'Shared/EmailLink'
import LinkSwitch           from 'Shared/LinkSwitch'
import PhoneLink            from 'Shared/PhoneLink'
import Span                 from 'Shared/Span'
import SquareHeadshot       from 'Shared/SquareHeadshot'
import {personListingStyle} from './styles'

interface PersonListingProps {
    name: string;
    headshotUrl: string;
    url: string;
    position: any;
    phone?: any;
    email: string;
    themes?: any;
    phoneNumber?: string;
}

const PersonListing = ({name, headshotUrl, url, position, phone, email, themes}: PersonListingProps) =>
    <Div themes={{...personListingStyle, ...themes}}>
        <LinkSwitch url={url}>
            <SquareHeadshot
                name={name}
                image={headshotUrl}
                size={80}
                themes={{...personListingStyle.headshot, ...themes?.headshot}}
            />
        </LinkSwitch>
        <Div themes={{...personListingStyle.info, ...themes?.info}}>
            <LinkSwitch url={url} themes={{...personListingStyle.name}}>{name}</LinkSwitch>
            {position && (
                <Div themes={{...personListingStyle.title, ...themes?.title}}>{position}</Div>
            )}
            {phone && (
                <Span themes={{...personListingStyle.phone, ...themes?.phone}}>
                    <PhoneLink phone={phone} themes={{...personListingStyle.phoneLink, ...themes?.phoneLink}}/>
                </Span>
            )}
            {email && (
                <EmailLink
                    email={email}
                    children={email}
                    theme={{...personListingStyle.email, ...themes?.email}}
                />
            )}
        </Div>
    </Div>

export default PersonListing