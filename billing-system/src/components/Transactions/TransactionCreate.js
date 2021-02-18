import React from 'react'
import TransactionForm from './TransactionForm'

const TransactionCreate = (props) => {
    let data = props.location ? props.location.state : null

    return(
        <div className="create-page">     
            <h2>Transaction Create</h2>   
            <TransactionForm isUpdate={false} initialValues={data} />            
        </div>
    )
}

export default TransactionCreate