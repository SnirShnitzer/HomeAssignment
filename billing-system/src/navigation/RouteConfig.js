
import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import TransactionList from '../pages/transactions/TransactionList'
import TransactionDetails from '../pages/transactions/TransactionDetails'
import TransactionCreate from '../pages/transactions/TransactionCreate'
import TransactionEdit from '../pages/transactions/TransactionEdit'
import CustomerList from '../pages/customers/CustomerList'
import CustomerDetails from '../pages/customers/CustomerDetails'
import CustomerEdit from '../pages/customers/CustomerEdit'
import CustomerCreate from '../pages/customers/CustomerCreate'
import RoutingUtils from '../utils/RoutingUtils.js'

const RouteConfig = () => {
  
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
    
export default RouteConfig;