import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormEditProduct from './FormEditProduct'
import {
    remove,
    create,
    getdata

} from '../functions/product'

const FormProduct = () => {
    // javascript
    const wrt = 'wrtzen'
    const [data, setData] = useState([])
    const [form, setForm] = useState({})

    useEffect(() => {
        // code run app
        loadData()

    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        create(form)
            .then((res) => {
                loadData()
            })
            .catch((err) => console.log(err))
    }
    const handleRemove = async (id) => {
        console.log(id)
        remove(id)
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            {/* HTML */}
            FormProduct
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={e => handleChange(e)} /> <br />
                <input type='text' name='detail' placeholder='detail' onChange={e => handleChange(e)} /><br />
                <input type='text' name='price' placeholder='price' onChange={e => handleChange(e)} /><br />
                <button>Add product</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">detail</th>
                        <th scope="col">price</th>
                        <th scope="col">Action</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
                                <td onClick={() => handleRemove(item._id)}>
                                    delete
                                </td>
                                <td>
                                    <Link to={'/edit/'+item._id}>
                                    edit
                                    </Link>
                                </td>
                            </tr>
                        )
                            : null

                    }

                </tbody>
            </table>

        </div>
    )
}

export default FormProduct