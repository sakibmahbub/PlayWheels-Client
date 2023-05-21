import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="object-cover rounded-lg w-96
        h-80"
          src="https://i.ibb.co/KjSFFF9/5203299.jpg"
          alt="error"
        />
        <div className="max-w-md text-center mt-10">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn bg-gray-900">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
