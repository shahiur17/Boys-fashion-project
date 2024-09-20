import PanjabiProductCadr from "../../components/ProductCards/PanjabiProductCadr";
import data from "../../data/Products.json";

const Panjabi = () => {
  return (
    <div>
      <PanjabiProductCadr data={data} />
    </div>
  );
};

export default Panjabi;
