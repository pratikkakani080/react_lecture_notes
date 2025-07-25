/**
 * milestone to create search functionality
 * 1. product listing from where you can show products filtered or unfiltered
 * 2. create a search box / input text
 * 3. get the search input on change of search box
 * 4. write logic to filter data on click of submit
 * 5. show filtered products on viewport
 */

import React, { useEffect, useState } from 'react'
import './searchFunc.css';

function SearchFunctionality() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState()
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        // to fetch products on load
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        // product API call
        const res = await fetch('https://dummyjson.com/products?limit=194')
        const data = await res.json()
        setProducts(data.products) // setting out initial data to state

        // new set method is used to generate new data set and de-duplicate the original values
        setCategories([...(new Set(data.products.map(product => product.tags.shift())))]) // filtering out categories for filer
        
        setFilteredProducts(data.products)
    }

    const clickHandler = () => {
        // filter logic on submit
        setFilteredProducts(products.filter((el) => el.title.toLowerCase().includes(searchString.toLowerCase())))
    }

    const clickResetHandler = () => {
        // clear out filter and search query
        setSearchString('')
        setFilteredProducts(products)
    }

    return (
        <>
            <div>
                <input
                    type='text'
                    placeholder='please search for title...'
                    value={searchString}
                    onChange={(event) => setSearchString(event.target.value)}
                />
                <button onClick={() => clickHandler()}>Filter</button>
                <button onClick={() => clickResetHandler()}>Reset</button>
            </div>
            <div className='product-listing-wrapper'>
                {filteredProducts.map(product => {
                    return (
                        <div class="product-card">
                            <img src={product.thumbnail} alt="Product Image" />
                            <div class="details">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <div class="price">${product.price}</div>
                                <a href="#" class="btn">Add to Cart</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SearchFunctionality
