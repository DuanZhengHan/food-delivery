import React from 'react'
import PropTypes from 'prop-types';
import './Voucher.css';
import Button from '../Button/Button';

function Voucher(props) {
    const {restaurant, menus}=props.voucher;
    return (
        <div className='Voucher b-1'>
            <div className='VoucherHeader px-3'>
                <h5 className='my-3'>{restaurant}</h5>
            </div>
            <div className='px-3 bt-1 VoucherBody'>
                {
                    menus.map((menu, index)=>{
                        return(
                            <div className='f jc-s_b f-w my-2' key={index}>
                                <p>{menu.name}</p>
                                <p>{menu.price}</p>
                                <p>{menu.total}</p>
                                <p>{menu.totalPrice}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className='f jc-f_e bt-1 bb-1 py-2 px-3 TotalPrice'>
                    <div className='txt-c'>
                        <h6 className='mb-2 mt-0'>00,000 MMK</h6>
                        <small className='txt-m'>Total Price</small>
                    </div>
                </div>
                <div className='f ai-c jc-c my-2'>
                    <Button type='transparent secondary px-3 py-3' style={{
                        fontSize: '0.9rem'
                    }}>
                        <span>CheckOut</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

Voucher.propTypes={
    voucher: PropTypes.object
}
export default Voucher
