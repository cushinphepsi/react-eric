import React, { useEffect, useState } from "react"
import axios from "axios"
import './User.scss'
import { useNavigate } from 'react-router-dom'

function User() {
    const [listUser, setListUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users'
        }).then(res => {
            setListUser(res.data.data)
        })
    }, [])

    const handleClick = (id) => {
        navigate(`/user/${id}`)
    }


    return (
        <div className="user-container">
            {listUser && listUser.map((item, index) => (
                <div className="user-item" key={index} onClick={() => handleClick(item.id)} >
                    {index + 1} - {item.first_name} - {item.last_name}
                </div>
            ))
            }

        </div>
    )
}

export default User