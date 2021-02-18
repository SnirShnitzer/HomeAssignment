import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import CustomerService from "../../services/CustomerService";
import CustomerForm from './CustomerForm'

const CustomerEdit = () => {
    const [data, setData] = useState(null)
    let { id } = useParams();

    useEffect (() => {
        CustomerService.get(id)
        .then(response => {
            setData(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    return(
        <div className="edit-page">
            <h2>Customer Edit</h2>
            {
                data &&
                <CustomerForm isUpdate={true} initialValues={data} />
            }
        </div>
    )
}

export default CustomerEdit