import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={`Button ${props.type}`} style={props.style}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;
