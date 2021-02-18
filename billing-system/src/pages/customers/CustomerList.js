import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NotificationManager } from 'react-notifications'
import CustomerService from '../../services/CustomerService'
import RoutingUtils from '../../utils/RoutingUtils'

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect (() => {
        CustomerService.getAll()
        .then(response => {
          setCustomers(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    const DeleteCustomer = (id) =>{
        if(window.confirm('Are you sure you want to delete the customer?')){
            CustomerService.remove(id)
            .then(response => {
                NotificationManager.success('Customer Delete Success');       
              })
              .catch(e => {
                 NotificationManager.error("Customer Delete Failed");
              });
        }
    }    

    const CustomerRow = (customer) => {

        return(
              <tr key={customer._id}>
                  <td>{customer._id}</td>
                  <td>{customer.customer_id}</td>
                  <td>{`${customer.first_name} ${customer.last_name}`}</td>
                  <td>{customer.email}</td>
                  <td>
                    <Link to={{
                    pathname: RoutingUtils.Customer.Details(customer._id), 
                    state: {...customer} }}>
                        Details
                    </Link>
                </td>
                <td>
                    <Link to={RoutingUtils.Customer.Edit(customer._id)}>
                        Edit
                    </Link>
                </td>  
                <td>
                    <Link to={{
                    pathname: RoutingUtils.Transaction.Create, 
                    state: {...customer} }}>
                        Create Transaction
                    </Link>
                </td>                     
                <td>
                    <Button variant="danger" onClick={() => DeleteCustomer(customer._id)}>Delete</Button>
                </td>                   
              </tr>
          )
    }

    return(
        <div className="container">
            <h2>Customers</h2>
            <Link to={RoutingUtils.Customer.Create} className="create-link">
                Create new customer
            </Link>            
            {
                (customers && customers.length > 0) ?
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Identifier</th>
                        <th>Customer Id</th>
                        <th>Full name</th>                    
                        <th>Email</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((tran) => CustomerRow(tran))
                        }
                    </tbody>
                </table>
                : 
                <p>There are no Customers</p>
            }
        </div>
    )
}

export default CustomerList