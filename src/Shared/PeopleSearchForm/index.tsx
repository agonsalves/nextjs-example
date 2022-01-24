import {useFormik}          from 'formik'
import {AnimatePresence}    from 'framer-motion'
import idx                  from 'idx'
import React                from 'react'
import ButtonLarge          from 'Shared/ButtonLarge'
import Div                  from 'Shared/Div'
import FieldSwitch          from 'Shared/FieldSwitch'
import Form                 from 'Shared/Form'
import Icon                 from 'Shared/Icon'
import MotionDiv            from 'Shared/MotionDiv'
import {composeResetObject} from 'utils/composeFormikResetObject'
import {searchForms}        from 'variables/fields'
import {search}             from 'styles/variables/iconLibrary'
import {globals}            from 'styles/globalStyles'
import {peopleSearchForm}   from './styles'

interface PeopleSearchFormProps {
    isAdvanced?: boolean;
    themes?: any;
    query?: any;
    datalist?: any;
}

interface ItemProps {
    name?: string;
    placeholder?: string;
    predictive?: any;
}

const PeopleSearchForm = ({isAdvanced, themes, query, datalist}: PeopleSearchFormProps) => {
    const formik = useFormik({
        initialValues: ((idx(query, _ => _.search.post_type) && query.search.post_type === 'person') && query.search) || {},
        onSubmit: values => {
            let query = ''
            for (let i in searchForms.person.fields) {
                if (values.hasOwnProperty(searchForms.person.fields[i].name) && values[searchForms.person.fields[i].name])
                    query += `&search[${searchForms.person.fields[i].name}]=${encodeURIComponent(values[searchForms.person.fields[i].name])}`
            }

        }
    })
    const resetObject = composeResetObject(searchForms)

    return (
        <Form
            themes={{...peopleSearchForm.form, ...themes.form}}
            onSubmit={formik.handleSubmit}
        >
            <Div themes={{...peopleSearchForm.formInner, ...themes.formInner}}>
                <AnimatePresence>
                    {searchForms.person.fields.map((item: ItemProps) => (item.name === 'keyword' || isAdvanced) &&
                        <MotionDiv
                            key={item.name}
                            initial={{
                                height: isAdvanced ? 0 : globals.style.inputHeight,
                                overflow: 'hidden',
                                marginBottom: 0
                            }}
                            animate={{
                                height: 'auto',
                                marginBottom: 0,
                                transition: {
                                    duration: .5,
                                    ease: 'easeOut'
                                },
                                transitionEnd: {
                                    overflow: 'visible'
                                }
                            }}
                            exit={{
                                height: 0,
                                marginBottom: 0,
                                overflow: 'hidden',
                                transition: {
                                    ease: 'easeOut'
                                }
                            }}
                            themes={{height: 'inherit'}}
                        >
                            <FieldSwitch
                                name={item.name}
                                placeholder={item.placeholder}
                                themes={item.name === 'keyword'
                                    ? {...peopleSearchForm.field, ...peopleSearchForm.firstField, ...themes.firstField}
                                    : {...peopleSearchForm.field, ...themes.field, ...themes.triangle}
                                }
                                dataList={datalist['person'][item.name]}
                                predictive={item?.predictive}
                                {...formik}
                            />
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </Div>
            <Div
                themes={{
                    ...peopleSearchForm.buttonWrapper,
                    ...themes.buttonWrapper
                }}
            >
                <ButtonLarge
                    as="button"
                    onClick={formik.handleSubmit}
                    themes={{...themes.button}}
                    type="submit"
                    url=""
                    icon={null}
                >
                    <Icon icon={search} themes={{...themes.buttonIcon}}/>
                    Search
                </ButtonLarge>
                {Object.keys(formik.values).some(
                    v => ['letter', 'post_type'].includes(v) ? false : !!formik.values[v]
                ) && isAdvanced && (
                    <ButtonLarge
                        url=""
                        as="button"
                        type="reset"
                        label="Reset Form"
                        className="reset"
                        icon={null}
                        onClick={() => formik.resetForm({
                            values: {
                                ...resetObject
                            }
                        })}
                        themes={{
                            ...peopleSearchForm.reset,
                            ...themes.reset
                        }}
                    />
                )}
            </Div>
        </Form>
    )
}

export default PeopleSearchForm