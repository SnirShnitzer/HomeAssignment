import React from 'react'
import { Link } from "react-router-dom"
import RoutingUtils from "../Utils/RoutingUtils.js"

const Home = () => {

    return(
        <div className="container">
            <h2>Welcome to the Billing System</h2>
            <p>Here you can Create, Update and Delete {" "}
                <Link to={RoutingUtils.Transaction.List}>
                    Transactions
                </Link>
                {" and "}
                <Link to={RoutingUtils.Customer.List}>
                    Customers
                </Link>
            </p>
        </div>
    )
}

export default Home