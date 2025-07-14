import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../contexts/myContext'

function Home() {
    const [posts, setPosts] = useState([])
    const { likedPosts, setLikedPosts } = useContext(MyContext)

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

    const handleClick = (likedData) => {
        if (likedPosts.find(post => post.id === likedData.id)) {
            let filteredData = likedPosts.filter(post => post.id !== likedData.id)
            setLikedPosts(filteredData)
            localStorage.setItem('likedPosts', JSON.stringify(filteredData))
        }
        else {
            // let arr = likedPosts || []
            // arr.push(likedData)
            // setLikedPosts(arr)
            // OR
            setLikedPosts(prev => [...prev, likedData])
            localStorage.setItem('likedPosts', JSON.stringify([...likedPosts, likedData]))
        }
    }

    return (
        <div>
            {
                posts.map((post, i) => {
                    return (
                        <div key={i} style={{ border: '1px solid' }}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <button onClick={() => handleClick(post)}>
                                {likedPosts.find(_post => _post.id === post.id) ? 'Unlike' : 'Like'}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
