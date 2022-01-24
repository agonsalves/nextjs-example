import {Formik}      from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import Div           from 'Shared/Div'
import FieldSwitch   from 'Shared/FieldSwitch'
import Form          from 'Shared/Form'
import Icon          from 'Shared/Icon'
import MotionDiv     from 'Shared/MotionDiv'
import {search}      from 'styles/variables/iconLibrary'
import {
    mobileSearchButtonStyle,
    mobileSearchFieldStyle,
    mobileSearchInnerStyle
}                    from './styles'

interface MobileSearchProps {
    query?: any;
    isOpen?: boolean;
}

export const MobileSearch = ({query, isOpen}: MobileSearchProps) => {
    const { push } = useRouter();
    
    return (
        <MotionDiv
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {height: 'auto', overflow: 'visible'},
                closed: {height: 0, overflow: 'hidden'}
            }}
            transition={{ease: 'easeOut'}}
        >
            <Formik
                initialValues={{
                    s: query?.split('?s=')[1] ? decodeURIComponent(query.split('?s=')[1]) : ''
                }}
                onSubmit={values => push(`/?s=${encodeURIComponent(values['s'])}`)}
            >
                {(props) => (
                    <Form
                        themes={mobileSearchInnerStyle}
                        onSubmit={props.handleSubmit}
                    >
                        <FieldSwitch
                            id="mobile-search"
                            name="s"
                            placeholder="Type a name or keyword"
                            themes={mobileSearchFieldStyle}
                            isClearable={false}
                            {...props}
                        />
                        <Div
                            as="button"
                            type="submit"
                            themes={mobileSearchButtonStyle}
                        >
                            <Icon icon={search} themes={mobileSearchButtonStyle.icon}/>
                            <span>Search</span>
                        </Div>
                    </Form>
                )}
            </Formik>
        </MotionDiv>
    )
}