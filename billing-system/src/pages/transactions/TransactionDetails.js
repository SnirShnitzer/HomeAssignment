import React from 'react'

const TransactionDetails = (props) => {    
    let data = props.location ? props.location.state : null

    return(
        <div className="container details-page">
            <div className="row">
                <h2>Transaction Details</h2>                                    
                {
                    data && 
                    Object.entries(data).map(([key, val]) => 
                        <div className="row col-sm-12">
                            <span className="data-key">{key}:</span>
                            <span className="data-value">{val}</span>
                        </div>
                    )
                }          
            </div>
        </div>
    )
}

export default TransactionDetails