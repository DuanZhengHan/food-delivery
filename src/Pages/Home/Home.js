import React from "react";
import "./Home.css";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import CategoryThumbLists from "../../Components/CategoryThumbLists/CategoryThumbLists";
import Offer from "../../Components/Offer/Offer";

const Home = () => {
  return (
    <main className='Home'>
      <HomeBanner />
      <CategoryThumbLists/>
      <Offer/>
    </main>
  );
};

export default Home;
