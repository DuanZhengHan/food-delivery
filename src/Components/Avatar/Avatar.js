import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar(props) {
  const avatarRef = useRef();
  useEffect(() => {
    const responsive = () => {
      let eleWidth = getComputedStyle(avatarRef.current).width.split("px")[0];
      let height = props.type === "circle" ? eleWidth : eleWidth * (9 / 16);
      avatarRef.current.style.height = `${height}px`;
    };
    responsive();
    window.addEventListener("resize", responsive);
    let time = setInterval(responsive, 10);

    return () => {
      window.removeEventListener("resize", responsive);
      clearInterval(time);
    };
  }, [props]);

  return (
    <div
      style={props.style}
      className={`Avatar${props.type === "circle" ? " Circle" : ""}`}
      ref={avatarRef}
    >
      {props.children}
    </div>
  );
}

Avatar.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
export default Avatar;
