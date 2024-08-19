import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FormProduct = () => {
    // javascript
    const wrt = 'wrtzen'
    const [data, setData] = useState([])

    useEffect(() => {
        // code run app
        loadData()

    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:5000/api/product')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    console.log(data)


    return (
        <div>
            {/* HTML */}
            FormProduct
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item,index) =>
                            <tr key={index}>
                                <th scope="row">{item.name}</th>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
                                <td>@mdo</td>
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