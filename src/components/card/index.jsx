import Button from "../button";

export default function Card({ product, addToCart }) {
    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <Button
                handleOnClick={() => addToCart(product)}
                buttonText='Add to cart'
            />
        </div>
    )
}