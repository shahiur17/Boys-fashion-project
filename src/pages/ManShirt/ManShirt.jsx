import ManShirtProductCard from "../../components/ProductCards/ManShirtProductCard";
import data from "../../data/Products.json";
const ManShirt = () => {
  return (
    <div>
      <ManShirtProductCard data={data}></ManShirtProductCard>
    </div>
  );
};

export default ManShirt;
