import React from 'react'
import { useField } from 'formik'
import { FormField,Label } from 'semantic-ui-react'

export default function HrmsTextInput({...props}) {

    const [field,meta] = useField(props)

    return (
        <FormField width={6} >
            <input {...props} {...field} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
        </FormField>
    )
}
