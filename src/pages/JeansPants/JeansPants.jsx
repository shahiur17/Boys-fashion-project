import React from "react";
import JeansProductCards from "../../components/ProductCards/JeansProductCards";
import data from "../../data/Products.json";

const JeansPants = () => {
  return (
    <div>
      <JeansProductCards data={data} />
    </div>
  );
};

export default JeansPants;
