import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const toys = useLoaderData();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Total Toys: {filteredToys.length}
      </h2>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by toy name"
          className="border border-gray-300 rounded-md px-4 py-2"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-10">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Image</th>
              <th>Seller</th>
              <th>Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <AllToyTable key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
