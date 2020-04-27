import React from 'react'
import './RestaurantBanner.css';
import SmallBanner from '../SmallBanner/SmallBanner';

const RestaurantBanner=()=> {
    return (
        <SmallBanner customClass='f jc-c ai-c'>
            <div className='txt-c'>
                <h5 className='m-0'>Restaurant Name</h5>
                <h6 className='my-3'>00:00 AM - 00:00 PM</h6>
                <p className='m-0'>Restaurant Address</p>
            </div>
        </SmallBanner>
    )
}

export default RestaurantBanner
