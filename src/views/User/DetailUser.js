import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailReact() {

    const params = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${params.id}`)
            .then(res => {
                setUser(res.data.data)
            })
    }, [params.id])

    return (
        <div>
            {user ?
                <div>
                    <span>{user.id} - {user.first_name} - {user.last_name} {user.email}</span>
                    <img src={user.avatar} alt='' />
                </div>

                : <span>Not Found User</span>}

        </div>
    )

}

export default DetailReact