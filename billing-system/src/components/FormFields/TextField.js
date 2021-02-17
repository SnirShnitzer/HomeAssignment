import React from 'react'
import { Field } from 'react-final-form'
import './formFields.css'

const TextField = ({name, placeholder}) => {
    return (
        <div className="row form-row">
            <label className="form-label">{placeholder}:</label>
            <Field
                name={name}
                component="input"
                type="text"
                placeholder={placeholder}
                className="form-input"
            />
        </div>
    )
}

export default TextField