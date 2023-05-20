import { Link } from "react-router-dom";

const AllToyTable = ({ toy }) => {
  const { picture, seller, name, sub_category, price, quantity } = toy;
  return (
    <tr>
      <th>
        <button className="btn btn-square bg-red-600 border-none btn-sm">
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
          <button className="btn bg-gray-900 btn-sm">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToyTable;
