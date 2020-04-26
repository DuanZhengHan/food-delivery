import React from 'react'
import PropTypes from 'prop-types';
import MenuThumb from '../MenuThumb/MenuThumb';
import Slider from 'react-slick';
import SlideArrow from '../SlideArrow/SlideArrow';
import PreviousArrowIcon from '../Svg/PreviousArrowIcon';
import NextArrowIcon from '../Svg/NextArrowIcon';
import { settings } from './SlideSetting';
import './MenuLists.css';
import Button from '../Button/Button';

const MenuLists = (props) => {
    return (
        <div className="max-w-xl px-4 px-xl-0 MenuLists">
            {
                props.menuLists.map((list, index) => {
                    const { menu_type, menu_lists } = list
                    return (
                        <div key={index} className='my-5'>
                            <h4 className="mb-3 mt-2">{menu_type}</h4>
                            <div className='slide-container'>
                                <Slider
                                    {...settings}
                                    prevArrow={
                                        <SlideArrow>
                                            <Button type='default py-2 px-3'>
                                                <PreviousArrowIcon />
                                            </Button>
                                        </SlideArrow>
                                    }
                                    nextArrow={
                                        <SlideArrow>
                                            <Button type='default py-2 px-3'>
                                                <NextArrowIcon />
                                            </Button>
                                        </SlideArrow>
                                    }
                                >
                                    {
                                        menu_lists.map((menu, index) => {
                                            return (
                                                <MenuThumb menu={menu} key={index} />
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

MenuLists.propTypes = {
    menuLists: PropTypes.array
}

export default MenuLists
