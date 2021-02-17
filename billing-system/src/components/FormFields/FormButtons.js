import React from 'react'
import './formFields.css'

const FormButtons = ({form, submitting, pristine}) => {
    return (
        <div className="form-buttons">
            <button type="submit" disabled={submitting || pristine}>
                Submit
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