import React, { useEffect, useState } from 'react'
import { localHandler } from '../../utils/storage'
import { useNavigate, useSearchParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

function Signup() {
    const [params] = useSearchParams()
    const editedUserId = params.get('id')
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const storedUsers = JSON.parse(localHandler('GET', 'users')) || []

    useEffect(() => {
        if (editedUserId) {
            // console.log(editedUserId);
            // console.log(storedUsers.find(el => el.id === editedUserId))
            setUser(storedUsers.find(el => el.id === editedUserId))
        }
    }, [editedUserId])

    const changeHandler = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        errors[name] = ''
        setErrors(errors)
    }

    const validate = () => {
        let formIsValid = true
        let error = {}
        if (!user.uname) {
            formIsValid = false
            error.uname = '* please enter user name'
        }
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!user.email) {
            formIsValid = false
            error.email = '* please enter email'
        } else if (!regex.test(user.email)) {
            formIsValid = false
            error.email = '* please enter proper formated email'
        }
        if (!user.password) {
            formIsValid = false
            error.password = '* please enter password'
        }
        if (!user.confirmPassword) {
            formIsValid = false
            error.confirmPassword = '* please enter confirm password'
        } else if (user.password !== user.confirmPassword) {
            formIsValid = false
            error.confirmPassword = '* please provide correct password'
        }
        setErrors(error)
        return formIsValid
    }

    const clickHandler = () => {
        if (validate()) {
            let data = storedUsers || []
            if (editedUserId) {
                // edit flow
                data = data.map(el => el.id === user.id ? user : el)
                toast('User updated successfully!')
            } else {
                // add user flow
                data.push({ ...user, id: uuidv4() })
                toast('User created successfully!')
            }
            localHandler('SET', 'users', JSON.stringify(data))
            // setUser({ uname: '', email: '', password: '', confirmPassword: '' })
            navigate('/users')
        }
    }

    return (
        <div>
            <label htmlFor="uname"><strong>Username</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.uname}</span></label>
            <input type="text" placeholder="Enter Username" name="uname" value={user?.uname} required onChange={changeHandler} autoComplete />
            <br />
            <label htmlFor="email"><strong>Email</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span></label>
            <input type="email" placeholder="Enter Email" name="email" value={user?.email} required onChange={changeHandler} autoComplete />
            <br />
            <label htmlFor="password"><strong>Password</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span></label>
            <input type="password" placeholder="Enter Password" name="password" value={user?.password} required onChange={changeHandler} autoComplete />
            <br />
            <label htmlFor="confirmPassword"><strong>Confirm Password</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.confirmPassword}</span></label>
            <input type="password" placeholder="Confirm password" name="confirmPassword" value={user?.confirmPassword} required onChange={changeHandler} autoComplete />
            <br />
            <button onClick={clickHandler}>{editedUserId ? 'Edit User' : 'Register'}</button>
        </div>
    )
}

export default Signup
