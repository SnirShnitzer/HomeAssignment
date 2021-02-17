import React from 'react'
import { Link } from "react-router-dom";
import RoutingUtils from '../Utils/RoutingUtils.js';

const Navbar = () => {
  
return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={RoutingUtils.Custom.Home} className="navbar-brand">
                Billing System
            </Link>  
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={RoutingUtils.Transaction.List} className="nav-link">
                        Transactions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={RoutingUtils.Customer.List} className="nav-link">
                        Customers
                    </Link>
                </li>
            </div>
        </nav>
    </div>
);
}

export default Navbar;