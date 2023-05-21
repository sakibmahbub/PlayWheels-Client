import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ toy, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, picture, name, description, price, quantity } = toy;

  const [showModal, setShowModal] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdate = () => {
    fetch(`https://play-wheels-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: updatedPrice,
        quantity: updatedQuantity,
        description: updatedDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            "The toy information has been updated successfully.",
            "success"
          );
          setShowModal(false);
        }
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        Swal.fire(
          "Error",
          "An error occurred while updating the toy information.",
          "error"
        );
      });
  };

  return (
    <>
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
        <td>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-sm bg-gray-900 mt-2 ml-2"
          >
            Update Toy
          </button>
        </td>
        <td>
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
        </td>
      </tr>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modal-title">Update Toy</h3>
            <label>
              Price:
              <input
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
              />
            </label>
            <label>
              Available Quantity:
              <input
                type="number"
                value={updatedQuantity}
                onChange={(e) => setUpdatedQuantity(e.target.value)}
              />
            </label>
            <label>
              Detail Description:
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </label>
            <div className="modal-buttons">
              <button onClick={handleUpdate} className="btn btn-primary">
                Update
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyToyRow;
