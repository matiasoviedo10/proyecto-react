import React from 'react'
import SiteConfig from '../../../config/SiteConfig'
import './SiteTitle.css'

const SiteTitle = () => {
    return (
            <h2 className='title'>{SiteConfig.siteName}</h2>
    )
}

export default SiteTitle

