import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import ProductList from './components/productList/ProductList'
import { products } from './utils/static/products'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: 'home'
    },
    {
      path: '/products',
      element: <ProductList products={products} addToCart={addToCart} />
    },
    
    {
      path: '/about',
      element: 'about'
    },
    
  ])

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      {/* <Routes>
        <Route path='/' element={<div>test</div>} />
        <Route path='/about' element={<div>about route</div>} />
      </Routes> */}
      <RouterProvider router={router} />

      {/* <main>
        <section className="hero">
          <h2>Welcome to ShopEase</h2>
          <p>Discover amazing products at great prices</p>
        </section>

        <ProductList products={products} addToCart={addToCart} />
      </main>

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      /> */}

      <Footer />
    </div>
  )
}

export default App
