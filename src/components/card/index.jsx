export default function Card({ product, addToCart }) {

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}