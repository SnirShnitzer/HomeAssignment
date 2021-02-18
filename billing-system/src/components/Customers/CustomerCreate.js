import React from 'react'
import CustomerForm from './CustomerForm'

const CustomerCreate = () => {

    return(
        <div className="create-page">        
            <h2>Customer Create</h2>
            <CustomerForm isUpdate={false} />            
        </div>
    )
}

export default CustomerCreate