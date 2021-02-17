import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NotificationManager } from 'react-notifications'
import TransactionService from '../../services/TransactionService'
import { getDateTimeString } from '../../Utils/FunctionsUtils'
import RoutingUtils from '../../Utils/RoutingUtils.js'

const TransactionList = () => {
    const [transactions, setTransactions] = useState([])

    useEffect (() => {
        TransactionService.getAll()
        .then(response => {
          setTransactions(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    const DeleteTransacion = (id) =>{
        if(window.confirm('Are you sure you want to delete the transaction?')){
            TransactionService.remove(id)
            .then(response => {
                NotificationManager.success('Transaction Delete Success');       
              })
              .catch(e => {
                 NotificationManager.error("Transaction Delete Failed");
              });
        }
    }

    const TranRow = (tran) => {

        return(
              <tr key={tran._id}>
                <td>{tran._id}</td>
                <td>{tran.customer_id}</td>
                <td>{`${tran.first_name} ${tran.last_name}`}</td>
                <td>{tran.email}</td>
                <td>{tran.total_price}</td>
                <td>{getDateTimeString(tran.createdAt, true)}</td>
                <td>
                    <Link to={{
                    pathname: RoutingUtils.Transaction.Details(tran._id), 
                    state: {...tran} }}>
                        Details
                    </Link>
                </td>
                <td>
                    <Link to={RoutingUtils.Transaction.Edit(tran._id)}>
                        Edit
                    </Link>
                </td>       
                <td>
                    <Button variant="danger" onClick={() => DeleteTransacion(tran._id)}>Delete</Button>
                </td>         
              </tr>
          )
    }

    return(
        <div className="container">
            <h2>Transactions</h2>
            <Link to={RoutingUtils.Transaction.Create} className="create-link">
                Create new transaction
            </Link>
            {
                (transactions && transactions.length > 0) ?
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Customer Id</th>
                        <th>Full name</th>                    
                        <th>Email</th>
                        <th>Total Price</th>
                        <th>Transaction Date</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((tran) => TranRow(tran))
                        }
                    </tbody>
                </table>
                : 
                <p>There are no Transactions</p>
            }
        </div>
    )
}

export default TransactionList