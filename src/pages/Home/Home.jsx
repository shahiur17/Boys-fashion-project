import React from "react";
import HomeCards from "../../components/HomeProduct/HomeCards";
import data from "../../data/Products.json";
import HomeSalide from "./HomeSalide";

const Home = () => {
  return (
    <div className="space-y-6">
      <HomeSalide />
      <HomeCards data={data} />
    </div>
  );
};

export default Home;
