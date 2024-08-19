import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FormProduct = () => {
    // javascript
    const wrt = 'wrtzen'
    const [data, setData] = useState([])
    const [form,setForm]= useState({})

    useEffect(() => {
        // code run app
        loadData()

    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:5000/api/product')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange =(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }


    return (
        <div>
            {/* HTML */}
            FormProduct
            <form>
                <input type='text' name='name' onChange={e=>handleChange(e)} placeholder='name'/> <br/>
                <input type='text' name='detail' placeholder='detail'/><br/>
                <input type='text' name='price' placeholder='price'/><br/>
                <button>Add product</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">detail</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item,index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
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