import {useFormik}              from 'formik'
import React, {

    useEffect,
    useRef
}                               from 'react'
import MotionDiv                from 'Shared/MotionDiv'
import LinkSwitch               from 'Shared/LinkSwitch'
import Form                     from 'Shared/Form'
import PredictiveField          from 'Shared/PredictiveField'
import {globalSearchFieldStyle} from './styles'
import { useRouter } from 'next/router'

interface GlobalSearchFieldProps {
  query?: any;
  isOpen?: boolean;
  values?: any;
  post?: any;
}

const globalSearchVariants = {
    initial: {
        overflow: 'hidden',
    },
    expanded: {
        overflow: 'visible',
        transition: {
            delay: 1
        }
    }
}

const globalSearchButtonVariants = {
    initial: {
        opacity: 0,
        height: 'auto',
        pointerEvents: 'none',
        transition: {
            delay: .5,
            duration: .5
        }
    },
    expanded: {
        opacity: 1,
        height: 'auto',
        pointerEvents: 'auto',
        transition: {
            delay: .5,
            duration: .25
        },
        transitionEnd: {
            pointerEvents: 'auto'
        }
    }
}

const GlobalSearchField = ({query, isOpen, values, post, ...props}: GlobalSearchFieldProps) => {
  const {push} = useRouter()  
  const formik = useFormik({
        initialValues: {
            s: post?.search ? post.search.query.s : ''
        },
        onSubmit: values => push(`/?s=${encodeURIComponent(values['s'])}`),

    })

    const globalFieldRef = useRef(null)


    useEffect(() => {
        if (isOpen)
            globalFieldRef.current.focus()

        formik.setFieldValue('s', '')

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isOpen])

    return (
        <MotionDiv
            variants={globalSearchVariants}
            initial="initial"
            animate={isOpen ? 'expanded' : 'initial'}
        >
            <Form themes={globalSearchFieldStyle} onSubmit={formik.handleSubmit}>
                <PredictiveField
                    id="global-search"
                    name="s"
                    placeholder="Search Website"
                    predictive={['person', 'practice-area', 'industry']}
                    theme={globalSearchFieldStyle.field}
                    isOpen={isOpen}
                    value={formik.values['s']}
                    fieldRef={globalFieldRef}
                    {...formik}
                />
                <MotionDiv
                    variants={globalSearchButtonVariants}
                    initial="initial"
                    animate={isOpen ? 'expanded' : 'initial'}
                    themes={globalSearchFieldStyle.buttonWrapper}
                >
                    <LinkSwitch
                        as="button"
                        type="submit"
                        url=""
                        children="Search"
                        themes={globalSearchFieldStyle.button}
                    />
                </MotionDiv>
            </Form>
        </MotionDiv>
    )
}

export default GlobalSearchField