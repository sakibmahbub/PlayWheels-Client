import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";

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
      <h2 className="text-4xl font-bold mb-10 text-center">All Toys</h2>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Here"
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-10 px-20">
          <thead>
            <tr>
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
              <AllToyRow key={toy._id} toy={toy}></AllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
