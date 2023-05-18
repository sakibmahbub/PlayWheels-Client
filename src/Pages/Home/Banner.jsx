const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg"
      style={{
        backgroundImage: `url("https://i.ibb.co/zGVBgsF/pexels-albin-berlin-919073.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <img
            src="https://i.ibb.co/1dKFr4F/img1-removebg-preview.png"
            alt="big sale"
            className="mx-auto mb-2"
          />
          <h1 className="mb-6 text-6xl font-bold">
            Where Fun Takes the Wheel!
          </h1>
          <p className="mb-6">
            Welcome to the ultimate destination for car toy enthusiasts! Explore
            a thrilling world where your imagination takes the driver's seat.
            Discover an impressive collection of meticulously crafted car toys
            that will ignite your passion for speed and adventure. Whether
            you're a fan of classic cars, sleek supercars, or rugged
            off-roaders, our curated selection will transport you to a world of
            excitement and endless play possibilities
          </p>
          <button className="btn btn-outline text-white hover:bg-[#BC1823]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
