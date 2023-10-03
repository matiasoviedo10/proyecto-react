import React from 'react'
import './BannerStore.css'
import { bannerStoreData } from '../../data/Data'

const BannerStore = () => {
    return (
        <div className='banner-store'>
            <h2 className="tittle-store">{bannerStoreData.tittle}</h2>
            <img src={bannerStoreData.imageStore} alt={bannerStoreData.altStore} className="image-store" />
        </div>
    )
}

export default BannerStore
