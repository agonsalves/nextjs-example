import {
    searchPortalCloseVariants,
    searchPortalVariants
}                           from 'animations/modal'

import {useFormik}          from 'formik'
import ButtonLarge          from 'Shared/ButtonLarge'
import Div                  from 'Shared/Div'
import Form                 from 'Shared/Form'
import H2                   from 'Shared/H2'
import Icon                 from 'Shared/Icon'
import MotionDiv            from 'Shared/MotionDiv'
import Span                 from 'Shared/Span'
import Overlay                 from 'Shared/Overlay'
import FieldSwitch                 from 'Shared/FieldSwitch'

import {archiveSearchStyle} from './styles'

import {composeResetObject} from 'utils/composeFormikResetObject'

import {searchForms}        from 'variables/fields'

import {
    search,
    timesLight
}                           from 'styles/variables/iconLibrary'
import { useRouter } from 'next/router'

interface ArchiveSearchModalProps {
    Portal: any;
    isOpen: boolean;
    closePortal: any;
    pageType: string;
    postTitle: string;
    slug: string;
    theme?: any;
    archivePostType: any;
    dataList?: any;
    query?: any;
}

export const ArchiveSearchModal = ({
    Portal,
    isOpen,
    closePortal,
    postTitle,
    archivePostType,
    dataList,
    slug
}: ArchiveSearchModalProps) => {

    const router = useRouter();
    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            let query = ''
            for (let i in searchForms[archivePostType].fields) {
                if (values.hasOwnProperty(searchForms[archivePostType].fields[i].name) && values[searchForms[archivePostType].fields[i].name])
                    query += `&search[${searchForms[archivePostType].fields[i].name}]=${encodeURIComponent(values[searchForms[archivePostType].fields[i].name])}`
            }

            router.push(`${slug}?search[post_type]=${archivePostType}${query}`)
            
            closePortal()
        }
    })

    const resetObject = composeResetObject(searchForms)
    
    return (
        <>  
            <Portal>
                <MotionDiv
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={searchPortalVariants}
                    transition={{ease: 'easeOut'}}
                    themes={archiveSearchStyle.panel}
                >
                    <Div themes={archiveSearchStyle.panelInner}>
                        <MotionDiv
                            animate={isOpen ? 'open' : 'closed'}
                            variants={searchPortalCloseVariants}
                            themes={{position: 'absolute', opacity: 0, right: 0}}
                        >
                            <Span themes={archiveSearchStyle.panelClose} onClick={() => closePortal()}>
                                <Icon icon={timesLight} themes={archiveSearchStyle.panelCloseIcon}/>
                            </Span>
                        </MotionDiv>

                        <H2 themes={archiveSearchStyle.portalHeading}>Search {postTitle}</H2>
                        <Form
                            onSubmit={formik.handleSubmit}
                            themes={archiveSearchStyle.container}
                        >   
                            {searchForms[archivePostType].fields.map((item, index) =>
                                <>
                                <FieldSwitch
                                    key={item.name}
                                    themes={archiveSearchStyle.field}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    dataList={dataList && dataList[archivePostType][item.name]}
                                    {...formik}
                                />
                                </>
                            )}
                            <Div themes={archiveSearchStyle.buttonWrapper}>
                                <ButtonLarge
                                    as="button"
                                    type="submit"
                                    themes={archiveSearchStyle.button}
                                    url=""
                                    onClick={formik.handleSubmit}
                                    className="exempt"
                                    icon={search}
                                >
                                    Search
                                </ButtonLarge>
                                {!Object.values(formik.values).every(v => !v) && (
                                    <ButtonLarge
                                        url=""
                                        as="button"
                                        type="reset"
                                        label="Reset Form"
                                        className="reset"
                                        onClick={() => formik.resetForm({
                                            values: {
                                                ...resetObject
                                            }
                                        })}
                                        themes={archiveSearchStyle.reset}
                                        icon={null}
                                    />
                                )}
                            </Div>
                        </Form>
                    </Div>
                </MotionDiv>
            </Portal>
            <Overlay
                isOpen={isOpen}
                closePortal={closePortal}
                theme={{backgroundColor: 'rgba(0,0,0,.5)}}'}}
            />
        </>
    );
}