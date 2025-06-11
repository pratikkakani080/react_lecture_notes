import { useState } from 'react';
import Card from '../card';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    const categories = ['all', ...new Set(products.map(product => product.category))];

    const filteredProducts = products
        .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    return (
        <div className="product-list-container">
            <div className="filters">
                <div className="category-filter">
                    <label>Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="sort-filter">
                    <label>Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </div>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        test={'test'}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList; 