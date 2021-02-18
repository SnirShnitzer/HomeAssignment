import React from 'react'
import { Field } from 'react-final-form'
import './formFields.css'

const NumberField = ({name, placeholder, validate}) => {
    return (
        <div className="row form-row">
            <Field name={name} validate={validate}>
                {({ input, meta }) => (
                <div>
                    <label className="form-label">{placeholder}</label>
                    <input {...input} type="number" placeholder={placeholder} className="form-input" />
                    {meta.error && meta.touched && <span className="form-error">{meta.error}</span>}
                </div>
                )}
            </Field>
        </div>
    )
}

export default NumberField