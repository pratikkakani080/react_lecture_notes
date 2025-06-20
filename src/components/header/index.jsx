import React from 'react'
import './header.css'
import { Link } from 'react-router'

function Header() {
    return (
        <div>
            <div>
                Logo
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
