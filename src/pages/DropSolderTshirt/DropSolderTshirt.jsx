import React from "react";
import DropSolderProductCard from "../../components/ProductCards/DropSolderProductCard";
import data from "../../data/Products.json"; // Make sure this JSON file contains the correct data structure

const DropSolderTshirt = () => {
  return (
    <div>
      <DropSolderProductCard data={data} />
    </div>
  );
};

export default DropSolderTshirt;
