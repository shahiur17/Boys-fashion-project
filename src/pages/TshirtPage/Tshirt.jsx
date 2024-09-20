import TshirtProductCard from "../../components/ProductCards/TshirtProductCard";
import data from "../../data/Products.json";
import TshirtSalide from "./TshirtSalide";

const Tshirt = () => {
  return (
    <div>
      <TshirtSalide />
      <TshirtProductCard data={data}></TshirtProductCard>
    </div>
  );
};

export default Tshirt;

<div></div>;
