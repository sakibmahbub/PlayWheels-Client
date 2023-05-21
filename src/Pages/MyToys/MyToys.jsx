import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/toys?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.error("Error retrieving toys:", error));
    }
  }, [user]);

  return (
    <div>
      <h2>My Toys: {myToys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-10 px-20">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
