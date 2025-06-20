import React, { useEffect, useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            alert('something went wrong')
        }
    }

    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Home
