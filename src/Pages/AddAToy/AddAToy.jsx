import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toy = {
      picture,
      name,
      price,
      rating,
      sub_category: subCategory,
      seller,
      email: sellerEmail,
      quantity,
      description,
    };

    console.log(toy);

    fetch("https://play-wheels-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertId) {
          Swal.fire({
            icon: "success",
            text: "Toy added successfully!",
          });
        }
      });
  };
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="text-2xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl mb-10 lg:text-3xl ">
          Add Your Desired Toy
        </h1>
        <div className="w-full rounded-lg bg-yellow-50 p-5 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleAddToy} className="space-y-4 md:space-y-6 ">
              <div className="flex justify-center gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Toy Url
                  </label>
                  <input
                    type="text"
                    name="picture"
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Toy Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Seller Name
                  </label>
                  <input
                    type="text"
                    name="seller"
                    defaultValue={user ? user.displayName : ""}
                    className="border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Seller Email
                  </label>
                  <input
                    type="email"
                    name="sellerEmail"
                    defaultValue={user ? user.email : ""}
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Sub-Category
                  </label>
                  <select
                    name="subCategory"
                    className="border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  >
                    <option value="Sports Cars">Sports Cars</option>
                    <option value="Construction Vehicles">
                      Construction Vehicles
                    </option>
                    <option value="Race Tracks">Race Tracks</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Available quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Description
                </label>
                <textarea
                  className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                  rows="4"
                  cols="40"
                  name="description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add Toy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
