import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { _id, picture, name, description, price, quantity } = toy;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={picture} alt="toy" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <th>
        <Link to={``}>
          <button className="btn btn-sm bg-gray-900 mt-2">Update Toy</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default MyToyRow;
