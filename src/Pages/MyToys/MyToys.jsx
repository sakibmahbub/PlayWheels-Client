import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (user) {
      const url = `https://play-wheels-server.vercel.app/toys?email=${user.email}&sort=${sortOrder}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.error("Error retrieving toys:", error));
    }
  }, [user, sortOrder]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://play-wheels-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The toy has been deleted successfully.",
                "success"
              );
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
              setSortOrder("asc");
            }
          });
      }
    });
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center mb-10">My Toys</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-10 px-20">
          <thead>
            <tr>
              <th>Toy Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Update Toy</th>
              <th>Delete Toy</th>
              <th>
                <button onClick={toggleSortOrder}>
                  Sort by Price ({sortOrder === "asc" ? "Asc" : "Desc"})
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToyRow key={toy._id} toy={toy} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
