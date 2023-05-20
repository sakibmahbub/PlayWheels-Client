import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Total Toys : {toys.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
            {toys.map((toy) => (
              <AllToyTable key={toy._id} toy={toy}></AllToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
