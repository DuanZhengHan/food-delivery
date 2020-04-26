import React from 'react'
import { recommendedRestaurant } from '../../DummyData/recommended';
import RestaurantThumb from '../RestaurantThumb/RestaurantThumb';
import Slider from 'react-slick';
import SlideArrow from '../SlideArrow/SlideArrow';
import NextArrowIcon from '../Svg/NextArrowIcon';
import PreviousArrowIcon from '../Svg/PreviousArrowIcon';
import {settings} from './SlideSetting';
import './RecommendedRestaurant.css';

const RecommendedRestaurant = () => {
    return (
        <div className="py-5 bt-1 max-w-xl px-4 px-xl-0 Recommended">
            <h4 className="mb-4 mt-0">Recommended Restaurant for you</h4>
            <Slider
                {...settings}
                prevArrow={
                <SlideArrow>
                    <PreviousArrowIcon />
                </SlideArrow>
                }
                nextArrow={
                <SlideArrow>
                    <NextArrowIcon />
                </SlideArrow>
                }
            >
                {
                    recommendedRestaurant.map((res, index) => {
                        return(
                            <RestaurantThumb name={res.name} key={index}/>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default RecommendedRestaurant
