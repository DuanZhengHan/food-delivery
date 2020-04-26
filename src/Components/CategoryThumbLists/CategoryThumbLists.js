import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryThumbLists.css";
import { foodCategory } from "../../DummyData/foodCategory";
import Avatar from "../Avatar/Avatar";
import { settings } from "./SlideSetting";
import SlideArrow from "../SlideArrow/SlideArrow";
import NextArrowIcon from "../Svg/NextArrowIcon";
import PreviousArrowIcon from "../Svg/PreviousArrowIcon";

const CategoryThumbLists = () => {
  return (
    <div className="py-5 CategoryLists">
      <h4 className="mb-5 mt-0 txt-c">Category Lists</h4>
      <div className="max-w-xl px-4 px-xl-0">
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
          {foodCategory.map((foodCtg, index) => {
            return (
              <div key={index}>
                <Avatar type="circle"/>
                <h6 className="txt-c my-2">{foodCtg.name}</h6>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryThumbLists;
