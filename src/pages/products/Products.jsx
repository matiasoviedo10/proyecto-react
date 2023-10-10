import React from 'react'
import BannerStore from '../../components/bannerstore/BannerStore'
import ListProducts from '../../components/listproducts/ListProducts'

const Products = (/*{addToCart}*/) => {
    return (
        <div>
            <h1>Products</h1>
            <BannerStore/>
            <ListProducts /*addToCart={addToCart}*//>
        </div>
    )
}

export default Products
