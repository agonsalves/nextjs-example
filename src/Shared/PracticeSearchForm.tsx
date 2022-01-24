import {useFormik}      from 'formik'
import React from 'react'
import {useRouter} from 'next/router'
import Icon             from './Icon'
import ButtonLarge      from './ButtonLarge'
import {singular}       from '../utils/helpers'
import {search}         from '../styles/variables/iconLibrary'
import FieldSwitch      from './FieldSwitch'
import Form             from './Form'

interface PracticeSearchFormProps {
    hasButton?: boolean;
    theme?: any;
    listingPage?: any;
    query?: any;
}

export const PracticeSearchForm = ({ hasButton, theme, listingPage, query }: PracticeSearchFormProps) => {
    const {push} = useRouter()

    const formik = useFormik({
        initialValues: {keyword: query && query.search && query.search.post_type === 'practice-area' && query.search.keyword},
        onSubmit: values => {
            let query = values['keyword'] ? `&search[keyword]=${encodeURIComponent(values['keyword'])}` : ''
            push(`${listingPage}?search[post_type]=practice-area${query}`)
        }
    })

    return (
        <Form themes={theme.form} onSubmit={formik.handleSubmit}>
            <FieldSwitch
                name="keyword"
                placeholder={`${singular('practice-area')} or keyword`}
                predictive={['practice-area']}
                themes={theme.field}
                {...formik}
            />
            {hasButton && (
                <ButtonLarge
                    as="button"
                    themes={theme.button}
                    type="submit"
                    url=""
                    icon={null}
                >
                    <Icon icon={search} themes={theme.icon}/>
                    Search
                </ButtonLarge>
            )}
        </Form>
    )
}