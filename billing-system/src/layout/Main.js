
import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../components/Home'
import TransactionList from '../components/Transactions/TransactionList'
import TransactionDetails from '../components/Transactions/TransactionDetails'
import TransactionCreate from '../components/Transactions/TransactionCreate'
import TransactionEdit from '../components/Transactions/TransactionEdit'
import CustomerList from '../components/Customers/CustomerList'
import CustomerDetails from '../components/Customers/CustomerDetails'
import CustomerEdit from '../components/Customers/CustomerEdit'
import CustomerCreate from '../components/Customers/CustomerCreate'
import RoutingUtils from '../Utils/RoutingUtils.js'

const Main = () => {
  
    return (
            <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />            
                <Route exact path={RoutingUtils.Transaction.List} component={TransactionList} />
                <Route exact path={RoutingUtils.Transaction.Create} component={TransactionCreate} />  
                <Route exact path={RoutingUtils.Transaction.Routing_Edit} component={TransactionEdit} />   
                <Route exact path={RoutingUtils.Transaction.Routing_Details} component={TransactionDetails} />       
                <Route exact path={RoutingUtils.Customer.List} component={CustomerList} />
                <Route exact path={RoutingUtils.Customer.Create} component={CustomerCreate} />  
                <Route exact path={RoutingUtils.Customer.Routing_Edit} component={CustomerEdit} />   
                <Route exact path={RoutingUtils.Customer.Routing_Details} component={CustomerDetails} />                                                             
            </Switch>
        </div>
    );
    }
    
    export default Main;