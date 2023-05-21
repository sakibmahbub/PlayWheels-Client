const NewsLetter = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center p-4 lg:p-20 rounded-lg bg-yellow-50">
        <h2 className="text-4xl font-bold text-center mb-10">Our Newsletter</h2>
        <form className="w-full mx-auto">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full sm:w-1/2 p-2.5 mx-auto"
              placeholder="Enter your email"
              required
            />
          </div>
        </form>
        <div>
          <p className="text-center text-gray-500 mt-5">
            Sign up to our newsletter. We care about the protection of your
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
