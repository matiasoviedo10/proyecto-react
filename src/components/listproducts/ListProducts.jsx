import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../../data/ProductsData'
import { useCartContext } from '../../context/CartContex'
import './ListProducts.css'

const ListProducts = (/*{addToCart}*/) => {
    const {addToCart} = useCartContext();
    const [selectedSize, setSelectedSize] = useState(39);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = (productId, selectedSize) => {
        addToCart(productId, 1, selectedSize);
    };

    
    return (
        <div className='products-list'>
            {productsData.map((product) => (
                <div className='products' key={product.id}>
                    <Link className='product-link' to={`/products/${product.id}`} >
                        <img className='image-products' src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </Link>

                    <div className="sizes-select">
                            <label className='label-select'>
                                <p>Sizes:</p>
                                <select value={selectedSize} onChange={handleSizeChange}>
                                    <option value="" disabled>
                                        Select Size
                                    </option>
                                    {product.sizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </label>
                    </div>

                    <div className="price-addCart">
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product.id, selectedSize)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListProducts
