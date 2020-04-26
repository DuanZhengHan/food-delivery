import React from 'react'
import './RestaurantBanner.css';

const RestaurantBanner=()=> {
    return (
        <div className='RestaurantBanner f jc-c ai-c'>
            <div className='txt-c'>
                <h5 className='m-0'>Restaurant Name</h5>
                <h6 className='my-3'>00:00 AM - 00:00 PM</h6>
                <p className='m-0'>Restaurant Address</p>
            </div>
        </div>
    )
}

export default RestaurantBanner
