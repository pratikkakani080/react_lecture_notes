import React, { useContext } from 'react'
import './header.css'
import { Link } from 'react-router'
import MyContext from '../../contexts/myContext'

function Header() {
    const { likedPosts } = useContext(MyContext)

    return (
        <div>
            <div>
                Logo
            </div>
            <div>
                Liked Posts ({likedPosts.length})
            </div>
            <div>
                <a href='/dashboard'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                <a href='/blog'>Blog</a>
                <a href='/privacy-policy'>Privacy Policy</a>
            </div>
        </div>
    )
}

export default Header
