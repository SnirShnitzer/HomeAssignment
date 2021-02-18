import React from 'react'
import './formFields.css'

const FormButtons = ({form, submitting, pristine, isUpdate}) => {
    return (
        <div className="form-buttons">
            <button type="submit" disabled={submitting || pristine}>
                {isUpdate ? 'Submit' : 'Create'}
            </button>
            <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                >
                Reset
            </button>
        </div>
    )
}

export default FormButtons