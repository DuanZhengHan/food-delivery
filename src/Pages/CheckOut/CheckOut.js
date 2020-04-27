import React from 'react'
import SmallBanner from '../../Components/SmallBanner/SmallBanner'
import Voucher from '../../Components/Voucher/Voucher'
import {checkoutData} from '../../DummyData/checkoutData';

const CheckOut = () => {
    return (
        <main>
            <SmallBanner/>
            <div className='py-5 max-w-lg px-4 px-lg-0'>
                {
                    checkoutData.map( (data, index)=>{
                        return(
                            <Voucher key={index} voucher={data}/>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default CheckOut
