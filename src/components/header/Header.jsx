import { useState } from 'react';
import './Header.css';
import Input from '../input';

const Header = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo">
                    <h1>ShopEase</h1>
                </div>
                <Input
                    type={'email'}
                    placeholder={'please enter email'}
                    handleOnChange={(ev) => console.log('email', ev.target.value)}
                />
                <Input
                    type={'password'}
                    placeholder={'please enter password'}
                    handleOnChange={(ev) => console.log('password', ev.target.value)}
                />
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="cart-icon">
                    🛒 <span className="cart-count">{cartCount}</span>
                </div>
            </nav>
        </header>
    );
};

export default Header; 