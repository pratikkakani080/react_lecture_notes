import React, { useState } from 'react'
import { localHandler } from '../../utils/storage'
import { useNavigate } from 'react-router';

function Users() {
    const [users] = useState(JSON.parse(localHandler('GET', 'users')) || [])
    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate('/register?id=' + id)
    }

    return (
        <div>
            {users?.length > 0 ?
                <table>
                    <tbody>
                        <tr>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Edit</th>
                        </tr>
                        {users.map(el => {
                            return (
                                <tr>
                                    <td>{el.uname}</td>
                                    <td>{el.email}</td>
                                    <td>{el.password}</td>
                                    <td><button onClick={() => handleEdit(el.id)}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                : 'No users available'}
        </div>
    )
}

export default Users
