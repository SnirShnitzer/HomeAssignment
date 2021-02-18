import React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom';
import TextField from '../../components/formFields/TextField'
import NumberField from '../../components/formFields/NumberField'
import FormButtons from '../../components/formFields/FormButtons'
import TransactionService from '../../services/TransactionService'
import { NotificationManager } from 'react-notifications'
import RoutingUtils from '../../utils/RoutingUtils'
import { composeValidators, required, minChars } from '../../validations/GeneralValidations'

const TransactionForm = (props) => {
    let isUpdate = props.isUpdate
    let initialValues = props.initialValues 
    const history = useHistory()   

    const onSubmit = values => {  
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
                history.push(RoutingUtils.Transaction.Edit(response.data._id))
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
                    <TextField name="customer_id" placeholder ="Customer ID" validate={composeValidators(required, minChars(3))} />
                    <TextField name="first_name" placeholder ="First Name" validate={required} />
                    <TextField name="last_name" placeholder ="Last Name" validate={required} />
                    <TextField name="email" placeholder ="Email" validate={required} />
                    <TextField name="gender" placeholder ="Gender" />
                    <TextField name="country" placeholder ="Country" />
                    <TextField name="city" placeholder ="City" />
                    <TextField name="street" placeholder ="Street" />
                    <TextField name="phone" placeholder ="Phone" validate={required} />
                    <NumberField name="total_price" placeholder ="Total Price" validate={required} />
                    <TextField name="currency" placeholder ="Currency" validate={required} />
                    <TextField name="cerdit_card_type" placeholder ="Credit Card Type" validate={required} />
                    <TextField name="cerdit_card_number" placeholder ="Credit Card Number" validate={required} />          

                    <FormButtons form={form} submitting={submitting} pristine={pristine} isUpdate={isUpdate} />
                </form>
        )}
        />
    )
}

export default TransactionForm