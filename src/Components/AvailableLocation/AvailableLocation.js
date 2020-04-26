import React from 'react';
import './AvailableLocation.css';
import { availableLocation } from '../../DummyData/availableLocation';
import Button from '../Button/Button';
import RightArrowIcon from '../Svg/RightArrowIcon';

const AvailableLocation = () => {
    return (
        <div className='py-5 px-4 px-xl-0 max-w-xl AvailableLocation'>
            <h4 className="mb-4 mt-0">Available Location</h4>
            <ul className='g gtc-2 gtc-sm-3 gtc-lg-4 gtc-xl-5 gg-10'>
                {
                    availableLocation.map((location, index) => {
                        return (
                            <li className='f ai-c jc-f_s' key={index}>
                                <RightArrowIcon/>
                            <h6 className='my-2'>{location.name}</h6>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='txt-c mt-5'>
                <Button type='default' style={{
                    fontSize: '0.9rem',
                    padding: "13px 20px"
                }}>
                    <span>View More Location</span>
                </Button>
            </div>
        </div>
    )
}

export default AvailableLocation
