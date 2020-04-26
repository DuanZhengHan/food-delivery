import React from "react";
import "./Home.css";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import CategoryThumbLists from "../../Components/CategoryThumbLists/CategoryThumbLists";
import Offer from "../../Components/Offer/Offer";
import AvailableLocation from "../../Components/AvailableLocation/AvailableLocation";
import RecommendedRestaurant from "../../Components/RecommendedRestaurant/RecommendedRestaurant";

const Home = () => {
  return (
    <main className='Home'>
      <HomeBanner />
      <CategoryThumbLists/>
      <RecommendedRestaurant/>
      <Offer/>
      <AvailableLocation/>
    </main>
  );
};

export default Home;
