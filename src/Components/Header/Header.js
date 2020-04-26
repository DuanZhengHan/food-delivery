import React from "react";
import './Header.css';
import Button from "../Button/Button";
import CartIcon from "../Svg/CartIcon";
import DropdownIcon from "../Svg/DropdownIcon";
import BarIcon from "../Svg/BarIcon";

const Header = () => {
    return (
        <header className='f jc-s_b ai-c px-3'>
            <div>
                <div>
                    <Button type="transparent">
                        <BarIcon/>
                    </Button>
                </div>
            </div>
            <div>
                <img src='https://res.cloudinary.com/psacloud/image/upload/v1587720676/New_Project_paifse.png' alt='' className='logo' />
            </div>
            <div className='f jc-f_s'>
                <div>
                    <Button type='transparent'>
                        <CartIcon/>
                        <DropdownIcon/>
                    </Button>
                </div>
                <Button type="transparent px-4">
                    <span>En</span>
                    <DropdownIcon/>
                </Button>
                <Button type="transparent">
                    <span>login</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
