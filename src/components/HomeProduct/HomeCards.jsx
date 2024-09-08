import React from "react";

// Assuming the data is coming from a parent component or external source
const HomeCards = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);

  // Adjusted data slices based on the IDs provided in the JSON
  const topTshart = getSafeData(data?.["T-shirt"]).slice(0, 5); // IDs 1-5 from the T-shirt category
  const topMansShirt = getSafeData(data?.["Mans Shirt"]).slice(0, 5); // IDs 1-5 from the T-shirt category
  const topTPanjabi = getSafeData(data?.["panjabi"]).slice(0, 5); // IDs 1-5 from the T-shirt category
  const topTjeansPants = getSafeData(data?.["Jeans Pants"]).slice(0, 5); // IDs 1-5 from the T-shirt category

  return (
    <div>
      <section>
        <h2 className="text-2xl text-center font-bold my-4">
          Top T-Shirt Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topTshart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-48 w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-lg font-bold mb-4">${item.price}</p>
              <button className="btn btn-primary">Buy it now!</button>
            </div>
          ))}
        </div>
        <div className="py-2 text-center">
          <button className="btn btn-outline">See More!</button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold my-4">
          Top T-Shirt Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topMansShirt.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-48 w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-lg font-bold mb-4">${item.price}</p>
              <button className="btn btn-primary">Buy it now!</button>
            </div>
          ))}
        </div>
        <div className="py-2 text-center">
          <button className="btn btn-outline">See More!</button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold my-4">
          Top T-Shirt Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topTPanjabi.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-48 w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-lg font-bold mb-4">${item.price}</p>
              <button className="btn btn-primary">Buy it now!</button>
            </div>
          ))}
        </div>
        <div className="py-2 text-center">
          <button className="btn btn-outline">See More!</button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold my-4">
          Top T-Shirt Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topTjeansPants.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-48 w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-lg font-bold mb-4">${item.price}</p>
              <button className="btn btn-primary">Buy it now!</button>
            </div>
          ))}
        </div>
        <div className="py-2 text-center">
          <button className="btn btn-outline">See More!</button>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
