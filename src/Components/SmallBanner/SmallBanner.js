import React from 'react'
import PropTypes from 'prop-types';
import './SmallBanner.css';

function SmallBanner(props) {
    return (
        <div style={props.style} className={`SmallBanner ${props.customClass}`}>
            {props.children}
        </div>
    )
}

SmallBanner.propTypes={
    customClass: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element
}

export default SmallBanner
