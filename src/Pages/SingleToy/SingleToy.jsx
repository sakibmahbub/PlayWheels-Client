import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
  useTitle("Toy Details");
  const toy = useLoaderData();
  const { name, picture, price, rating, seller, email, quantity, description } =
    toy;
  return (
    <div className="card w-2/3 mx-auto lg:card-side my-20 shadow-lg bg-white text-gray-800 rounded-lg p-6">
      <figure className="flex justify-center">
        <img className="w-96 h-auto rounded-lg" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mb-4">Toy Name: {name}</h2>
        <p className="text-lg font-medium mb-2">Seller Name: {seller}</p>
        <p className="text-lg font-medium mb-2">Seller Email: {email}</p>
        <p className="text-lg font-medium mb-2">
          Available Quantity: {quantity}
        </p>
        <p className="text-lg font-medium mb-2">Price: ${price}</p>
        <p className="text-lg mb-2">Rating: {rating} </p>
        <p className="text-lg mb-4">Description:{description}</p>
      </div>
    </div>
  );
};

export default SingleToy;
