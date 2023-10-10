import React from 'react'
import { bannerStoreData } from '../../data/Data'
import './BannerStore.css'

const BannerStore = () => {
    return (
        <div className='banner-store'>
            <h2 className="tittle-store">{bannerStoreData.tittle}</h2>
            <img src={bannerStoreData.imageStore} alt={bannerStoreData.altStore} className="image-store" />
        </div>
    )
}

export default BannerStore
