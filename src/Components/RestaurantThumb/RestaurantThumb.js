import React from 'react';
import Avatar from '../Avatar/Avatar';
import './RestaurantThumb.css';
import { PropTypes } from 'prop-types';
import StarIcon from '../Svg/StarIcon';

const RestaurantThumb = (props) => {
    const setStar = (count) => {
        let starList = [];
        for (let i = 0; i < count; i++) {
            starList.push(<StarIcon  key={i}/>)
        }
        return starList;
    }
    return (
        <div>
            <Avatar />
            <h5 className='mt-3 mb-2'>{props.name}</h5>
            <div className='ratings'>
                {setStar(5)}
            </div>
        </div>
    )
}

RestaurantThumb.propTypes = {
    name: PropTypes.string
}
export default RestaurantThumb
