import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import { blogs } from '../../utils/static/blog'

function Blog() {
    const navigate = useNavigate()
    return (
        <div>
            this is blog page
            {
                blogs.map(blog => {
                    return (
                        <p onClick={() => navigate('/blog/blog-details?slug=' + blog.slug + '&color=' + blog.color)}>{blog.title}</p>
                    )
                })
            }

        </div>
    )
}

export default Blog
