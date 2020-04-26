import React from 'react';
import Avatar from '../Avatar/Avatar';
import { PropTypes } from 'prop-types';
import Button from '../Button/Button';
import NewIcon from '../Svg/NewIcon';
import './MenuThumb.css';

const MenuThumb = (props) => {
    return (
        <div>
            <Avatar>
                {
                    props.menu.type === "New" ?
                        <div className='menu-status'>
                            <NewIcon />
                        </div> : null
                }
            </Avatar>
            <h6 className='my-2'>{props.menu.name}</h6>
            <h6 className='my-2 mb-3'>
                <small className='dot dot-blue mr-3'>Small</small>
                <small className='dot dot-blue'>Pork</small>
            </h6>
            <div className='f ai-c f-w'>
                <Button type='secondary mr-3' style={{ fontSize: '0.75rem', padding: '0.8rem 1.5rem' }}>
                    <span>Add to cart</span>
                </Button>
                <div className='d-i_b my-2'>
                    <span>{props.menu.price}</span>
                </div>
            </div>
        </div>
    )
}

MenuThumb.propTypes = {
    menu: PropTypes.object
}
export default MenuThumb
