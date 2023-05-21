const NewsLetter = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center p-4 lg:p-20 rounded-lg bg-yellow-50">
        <h2 className="text-4xl font-bold text-center mb-10">Our Newsletter</h2>
        <form className="w-full mx-auto">
          <div className="flex justify-items-center">
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-100 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-200 focus:border-primary-200 block w-full"
              placeholder="Enter your email"
              required
            />
            <button className="btn bg-gray-900">Submit</button>
          </div>
        </form>
        <div>
          <p className="text-center text-gray-500 mt-5">
            Subscribe to our newsletter. We care about the protection of your
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
