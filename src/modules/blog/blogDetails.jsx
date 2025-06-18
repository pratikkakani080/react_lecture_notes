import React from 'react'
import { useSearchParams } from 'react-router'
import { blogs } from '../../utils/static/blog';

function BlogDetails() {
    const [searchParams] = useSearchParams()
    const slug = searchParams.get('slug')
    const size = searchParams.get('size')
    const color = searchParams.get('color')
    const test = searchParams.get('test')
    console.log(size, color, test);

    return (
        <div>
            <p>
                this is blog details
            </p>
            {blogs.find(blog => blog.slug === slug)?.title}
        </div>
    )
}

export default BlogDetails
