import React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom';
import TextField from '../../components/formFields/TextField'
import FormButtons from '../../components/formFields/FormButtons'
import CustomerService from '../../services/CustomerService'
import { NotificationManager } from 'react-notifications'
import RoutingUtils from '../../utils/RoutingUtils'

const CustomerForm = (props) => {
    let isUpdate = props.isUpdate
    let initialValues = props.initialValues    
    const history = useHistory()   

    const onSubmit = values => {  
        if(isUpdate) {
            CustomerService.update(initialValues._id, values)
            .then(response => {
                NotificationManager.success("Customer Update Success");
            })
            .catch(e => {
                NotificationManager.error("Customer Update Failed");
             });
        }
        else{
            CustomerService.create(values)
            .then(response => {
                NotificationManager.success("Customer Create Success");
                history.push(RoutingUtils.Customer.Edit(response.data._id))
            })
            .catch(e => {
                NotificationManager.error("Customer Create Failed");
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

                    <FormButtons form={form} submitting={submitting} pristine={pristine} isUpdate={isUpdate} />
                </form>
        )}
        />
    )
}

export default CustomerForm