import React from 'react'
import { Outlet, useNavigate } from 'react-router'

function Blog() {
    const navigate = useNavigate()
    return (
        <div>
            this is blog page
            <p onClick={() => navigate('/blog/blog-details')}>this is one</p>
            <p onClick={() => navigate('/blog/blog-details')}>this is two</p>
            <p onClick={() => navigate('/blog/blog-details')}>this is three</p>
            <Outlet />

        </div>
    )
}

export default Blog
