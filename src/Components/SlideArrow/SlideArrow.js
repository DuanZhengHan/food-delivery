import React from 'react';
import './SlideArrow.css';

const SlideArrow=(props) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        {props.children}
      </div>
    );
  }

export default SlideArrow