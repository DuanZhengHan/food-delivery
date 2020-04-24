import React from "react";
import './Header.css';
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className='f jc-s_b ai-c px-3'>
            <div>
                <div>
                    <Button type="transparent">
                        <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333">
                            <rect y="277.333" width="341.333" height="42.667" />
                            <rect y="149.333" width="341.333" height="42.667" />
                            <rect y="21.333" width="341.333" height="42.667" />
                        </svg>
                    </Button>
                </div>
            </div>
            <div>
                <img src='https://res.cloudinary.com/psacloud/image/upload/v1587720676/New_Project_paifse.png' alt='' className='logo'/>
            </div>
            <div>
                <Button type="transparent">
                    <span>login</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
