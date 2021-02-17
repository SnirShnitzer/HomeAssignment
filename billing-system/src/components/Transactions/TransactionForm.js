import React from 'react'
import { Form } from 'react-final-form'
import TextField from '../FormFields/TextField'
import FormButtons from '../FormFields/FormButtons'
import TransactionService from '../../services/TransactionService'
import { NotificationManager } from 'react-notifications'

const TransactionForm = (props) => {
    let isUpdate = props.isUpdate
    let initialValues = props.initialValues    

    const onSubmit = async values => {  
        if(isUpdate) {
            TransactionService.update(initialValues._id, values)
            .then(response => {
                NotificationManager.success("Transaction Update Success");
            })
            .catch(e => {
                NotificationManager.error("Transaction Update Failed");
             });
        }
        else{
            TransactionService.create(values)
            .then(response => {
                NotificationManager.success("Transaction Create Success");
            })
            .catch(e => {
                NotificationManager.error("Transaction Create Failed");
             });
        }
    }

    return(
        <Form
            onSubmit={onSubmit}
            initialValues={{ ...initialValues }}
            render={({ handleSubmit, form, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>            
                    <TextField name="customer_id" placeholder ="Customer ID" />
                    <TextField name="first_name" placeholder ="First Name" />
                    <TextField name="last_name" placeholder ="Last Name" />
                    <TextField name="email" placeholder ="Email" />
                    <TextField name="gender" placeholder ="Gender" />
                    <TextField name="country" placeholder ="Country" />
                    <TextField name="city" placeholder ="City" />
                    <TextField name="street" placeholder ="Street" />
                    <TextField name="phone" placeholder ="Phone" />
                    <TextField name="total_price" placeholder ="Total Price" />
                    <TextField name="currency" placeholder ="Currency" />
                    <TextField name="cerdit_card_type" placeholder ="Credit Card Type" />
                    <TextField name="cerdit_card_number" placeholder ="Credit Card Number" />          

                    <FormButtons form={form} submitting={submitting} pristine={pristine} />
                </form>
        )}
        />
    )
}

export default TransactionForm