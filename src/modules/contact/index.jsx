import React, { useEffect, useState } from 'react'
import { localHandler } from '../../utils/storage';

function Contact() {
    const [uName, setUName] = useState('')
    const [email, setEmail] = useState('')
    console.log(uName, email);

    useEffect(() => {
        const data = JSON.parse(localHandler('GET', 'contact'))
        setEmail(data.email)
        setUName(data.uName)
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label for="uname"><strong>Username</strong></label>
            <input type="text" placeholder="Enter Username" name="uname" value={uName} required onChange={(e) => setUName(e.target.value)} />
            <label for="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => localHandler('SET', 'contact', JSON.stringify({ uName, email }))}>Contact</button>
        </div>
    )
}

export default Contact
