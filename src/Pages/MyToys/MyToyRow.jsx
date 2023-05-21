import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ toy }) => {
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
          <button className="btn btn-sm bg-gray-900 mt-2">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToyRow;
