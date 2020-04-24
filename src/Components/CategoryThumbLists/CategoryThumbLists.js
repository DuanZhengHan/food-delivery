import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryThumbLists.css";
import { foodCategory } from "../../DummyData/foodCategory";
import Avatar from "../Avatar/Avatar";
import { settings } from "./SlideSetting";

const CategoryThumbLists = () => {
  return (
    <div className="py-5 CategoryLists">
      <h4 className="mb-5 mt-0 txt-c">Category Lists</h4>
      <div className="max-w-xl px-4 px-xl-0">
        <Slider {...settings}>
          {foodCategory.map((foodCtg, index) => {
            return (
              <div key={index}>
                <Avatar
                  type="circle"
                  style={{
                    backgroundImage: `url(${foodCtg.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
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
