import { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className={`cart-container ${isOpen ? 'open' : ''}`}>
            <div className="cart-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="cart-title">
                    🛒 Shopping Cart ({cart.length})
                </div>
                <button className="cart-toggle">
                    {isOpen ? '▼' : '▲'}
                </button>
            </div>

            <div className="cart-content">
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>${item.price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button
                                        className="remove-item"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <div className="total">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart; 