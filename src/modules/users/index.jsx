import React, { useState } from 'react'
import { localHandler } from '../../utils/storage'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function Users() {
    const [users, setUsers] = useState(JSON.parse(localHandler('GET', 'users')) || [])
    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate('/register?id=' + id)
    }

    const handleDelete = (id) => {
        const confirmation = confirm('Are you sure you want to delete this user?')
        if (confirmation) {
            const updatedUsersList = users.filter(el => el.id !== id)
            localHandler('SET', 'users', JSON.stringify(updatedUsersList))
            setUsers(updatedUsersList)
            toast('User deleted successdully!')
        }
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
                            <th></th>
                            <th></th>
                        </tr>
                        {users.map(el => {
                            return (
                                <tr>
                                    <td>{el.uname}</td>
                                    <td>{el.email}</td>
                                    <td>{el.password}</td>
                                    <td><button onClick={() => handleEdit(el.id)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(el.id)}>Delete</button></td>
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
