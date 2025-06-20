import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { blogs } from '../../utils/static/blog'

function Blog() {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [text, setText] = useState('test')

    useEffect(() => {
        console.log('this log is running on load');

        // clean up function
        return () => {
            console.log('this log will run at time of unmounting');
        }
    }, [])

    useEffect(() => {
        console.log('this log is running on load while count changes');
    }, [count])

    useEffect(() => {
        console.log('this log is running on load while text changes');
    }, [text])

    return (
        <div>
            this is blog page
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <p>{text}</p>
            <input type='text' placeholder='please enter' value={text} onChange={(w) => setText(w.target.value)} />
            {
                blogs.map(blog => {
                    return (
                        <p onClick={() => navigate('/blog/blog-details/' + blog.slug + '/' + blog.color)}>{blog.title}</p>
                    )
                })
            }

        </div>
    )
}

export default Blog
