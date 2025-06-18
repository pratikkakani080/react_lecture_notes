import React from 'react'
import { useParams, useSearchParams } from 'react-router'
import { blogs } from '../../utils/static/blog';

function BlogDetails() {
    const [searchParams] = useSearchParams()
    const slug = searchParams.get('slug')
    const size = searchParams.get('size')
    const color = searchParams.get('color')
    const test = searchParams.get('test')
    
    const params = useParams();
    console.log(params);

    return (
        <div>
            <p>
                this is blog details
            </p>
            {blogs.find(blog => blog.slug === params.slug)?.title}
        </div>
    )
}

export default BlogDetails
