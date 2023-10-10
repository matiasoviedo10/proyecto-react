import React from 'react'
import BannerStore from '../../components/bannerstore/BannerStore'
import ListProducts from '../../components/listproducts/ListProducts'

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <BannerStore/>
            <ListProducts />
        </div>
    )
}

export default Products
