import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import TransactionService from "../../services/TransactionService";
import TransactionForm from './TransactionForm'

const TransactionEdit = () => {
    const [data, setData] = useState(null)
    let { id } = useParams();

    useEffect (() => {
        TransactionService.get(id)
        .then(response => {
            setData(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    return(
        <div className="edit-page">
            <h2>Transaction Edit</h2>   
            {
                data &&
                <TransactionForm isUpdate={true} initialValues={data} />
            }
        </div>
    )
}

export default TransactionEdit