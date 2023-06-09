import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";
const Register = () => {
  useTitle("Register");
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [createdUser, setCreatedUser] = useState(null);

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        setCreatedUser(createdUser);
        return updateUserProfile(name, photo);
      })
      .then(() => {
        console.log(createdUser);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("Invalid email address");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters");
        } else if (error.code === "auth/empty-fields") {
          setError("Email and password fields cannot be empty");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-yellow-50 p-5 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
              Please Register
            </h1>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6 ">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 "
                  placeholder="your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 "
                  placeholder="your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photo"
                  className=" border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 "
                  placeholder="photo"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-700 ">
                Already have an account?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline "
                >
                  <span> Login now</span>
                </Link>
              </p>
              <p className="text-sm font-light text-red-800 ">{error}</p>
            </form>

            <div className="flex justify-start gap-2 mt-10">
              <button
                onClick={handleGoogle}
                className="btn bg-white text-gray-500 hover:bg-white btn-sm"
              >
                <FaGoogle />
                <span
                  className="ml-1
          "
                >
                  google login
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
