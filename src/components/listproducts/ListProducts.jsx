import React from 'react'
import { useState } from 'react'
import './ListProducts.css'
import { productsData } from '../../data/ProductsData'
import { Link } from 'react-router-dom'

const ListProducts = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        
    };

    
    return (
        <div className='products-list'>
            {productsData.map((product) => (
                <Link to={`/poducts/${product.id}`} className='products' key={product.id}>
                <img className='image-products' src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <div className="price-addCart">
                    <p>${product.price}</p>
                    <button onClick={""}>Add to Cart</button>
                    </div>

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

                </Link>
            ))}
        </div>
    )
}

export default ListProducts
