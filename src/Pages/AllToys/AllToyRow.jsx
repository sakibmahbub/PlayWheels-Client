import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToyRow = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { picture, seller, name, sub_category, price, quantity } = toy;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={picture} alt="toy" />
          </div>
        </div>
      </td>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${toy._id}`}>
          <button
            className="btn btn-sm bg-gray-900 mt-2"
            onClick={() => {
              if (!user) {
                Swal.fire({
                  icon: "error",
                  text: "You have to log in first to view details",
                });
              }
            }}
          >
            View Details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToyRow;
