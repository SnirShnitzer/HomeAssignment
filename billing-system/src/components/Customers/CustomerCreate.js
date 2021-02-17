import React from 'react'
import CustomerForm from './CustomerForm'

const CustomerCreate = () => {

    return(
        <div className="create-page">        
            <CustomerForm isUpdate={false} />            
        </div>
    )
}

export default CustomerCreate