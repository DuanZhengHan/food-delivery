import React from 'react'
import './CustomerService.css';
import CustomerServiceIcon from '../Svg/CustomerServiceIcon';

const CustomerService = () => {
    return (
        <div className='CustomerService txt-c'>
            <div className='px-3 pt-2'>  
                <CustomerServiceIcon/>
            </div>
            <h6 className='m-0 mb-1'><small>24 / 7</small></h6>
        </div>
    )
}

export default CustomerService
