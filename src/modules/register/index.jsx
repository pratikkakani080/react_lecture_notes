import React, { useState } from 'react'
import { localHandler } from '../../utils/storage'

function Signup() {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

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
            localHandler('SET', 'users', JSON.stringify([user]))
            setUser({ uname: '', email: '', password: '', confirmPassword: '' })
        }
    }

    return (
        <div>
            <label htmlFor="uname"><strong>Username</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.uname}</span></label>
            <input type="text" placeholder="Enter Username" name="uname" value={user?.uname} required onChange={changeHandler} />
            <br />
            <label htmlFor="email"><strong>Email</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span></label>
            <input type="email" placeholder="Enter Email" name="email" value={user?.email} required onChange={changeHandler} />
            <br />
            <label htmlFor="password"><strong>Password</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span></label>
            <input type="password" placeholder="Enter Password" name="password" value={user?.password} required onChange={changeHandler} />
            <br />
            <label htmlFor="confirmPassword"><strong>Confirm Password</strong><span style={{ color: 'red', fontSize: '10px' }}>{errors.confirmPassword}</span></label>
            <input type="password" placeholder="Confirm password" name="confirmPassword" value={user?.confirmPassword} required onChange={changeHandler} />
            <br />
            <button onClick={clickHandler}>Register</button>
        </div>
    )
}

export default Signup
