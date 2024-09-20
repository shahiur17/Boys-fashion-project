const TshirtProductCard = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);

  const topTshart = getSafeData(data?.["T-shirt"]).slice(0, 10);
  return (
    <div>
      <section className="bg-gray-100 text-black py-6">
        <h2 className="text-2xl text-center font-bold my-4">
          Top T-Shirt Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topTshart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-48 w-full mb-4 transform transition duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-lg font-bold mb-4">${item.price}</p>
              <div className="flex justify-between">
                <button className="btn btn-outline btn-accent">
                  Add Card!
                </button>
                <button className="btn btn-outline btn-warning">
                  Buy it now!
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 text-center"></div>
      </section>
    </div>
  );
};

export default TshirtProductCard;
